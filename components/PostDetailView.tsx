
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FeedPost } from '../types';
import { XIcon } from './icons/XIcon';
import { HeartIcon } from './icons/HeartIcon';
import { FilledHeartIcon } from './icons/FilledHeartIcon';
import { CommentIcon } from './icons/CommentIcon';
import { ShareIcon } from './icons/ShareIcon';
import { BookmarkIcon } from './icons/BookmarkIcon';
import { FilledBookmarkIcon } from './icons/FilledBookmarkIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface PostDetailViewProps {
    initialPost: FeedPost;
    allPosts: FeedPost[];
    goBack: () => void;
}

const PostDetailView: React.FC<PostDetailViewProps> = ({ initialPost, allPosts, goBack }) => {
    const [currentIndex, setCurrentIndex] = useState(() => allPosts.findIndex(p => p.id === initialPost.id));
    const [direction, setDirection] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    
    const currentPost = allPosts[currentIndex];
    
    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex(prevIndex => {
            const nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) return allPosts.length - 1;
            if (nextIndex >= allPosts.length) return 0;
            return nextIndex;
        });
    };
    
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };
    
    if (!currentPost) {
        return (
            <div className="h-full flex flex-col bg-black text-white">
                <header className="flex items-center p-4">
                     <button onClick={goBack} className="p-2 -ml-2 rounded-full hover:bg-white/20" aria-label="Voltar">
                        <XIcon className="h-6 w-6" />
                    </button>
                </header>
                <div className="flex-grow flex items-center justify-center">Post não encontrado.</div>
            </div>
        )
    }

    const { author, imageUrl, caption, likes, comments } = currentPost;
    const isAvatarUrl = author.avatar.startsWith('http');

    return (
        <div className="h-full flex flex-col bg-black text-white">
            <header className="flex items-center p-4 justify-between flex-shrink-0">
                 <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-xl overflow-hidden">
                       {isAvatarUrl ? (
                            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                        ) : (
                            author.avatar
                        )}
                    </div>
                    <div>
                        <p className="font-bold text-sm">{author.name}</p>
                        <p className="text-xs text-slate-400">{author.handle}</p>
                    </div>
                </div>
                 <button onClick={goBack} className="p-2 rounded-full hover:bg-white/20" aria-label="Fechar">
                    <XIcon className="h-6 w-6" />
                </button>
            </header>

            <main className="flex-grow flex items-center justify-center relative min-h-0">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={currentIndex}
                        src={imageUrl}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute max-h-full max-w-full object-contain"
                        alt={`Post de ${author.name}`}
                    />
                </AnimatePresence>
                
                 <button 
                    onClick={() => paginate(-1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-1.5 rounded-full text-white hover:bg-black/70 transition-colors"
                    aria-label="Post anterior"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button 
                    onClick={() => paginate(1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-1.5 rounded-full text-white hover:bg-black/70 transition-colors"
                    aria-label="Próximo post"
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>

            </main>
            
            <footer className="flex-shrink-0 p-4 space-y-3">
                <p className="text-sm text-slate-300 break-words">
                    <span className="font-bold text-white mr-1.5">{author.handle}</span>
                    {caption}
                </p>
                
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-5">
                         <button onClick={() => setIsLiked(!isLiked)} aria-label="Curtir">
                            {isLiked ? <FilledHeartIcon className="w-7 h-7 text-pink-500" /> : <HeartIcon className="w-7 h-7 hover:text-pink-500" />}
                        </button>
                         <button aria-label="Comentar">
                            <CommentIcon className="w-7 h-7 hover:text-blue-400" />
                        </button>
                         <button aria-label="Compartilhar">
                            <ShareIcon className="w-7 h-7 hover:text-emerald-400" />
                        </button>
                    </div>
                     <button onClick={() => setIsSaved(!isSaved)} aria-label="Salvar">
                        {isSaved ? <FilledBookmarkIcon className="w-7 h-7 text-indigo-400" /> : <BookmarkIcon className="w-7 h-7 hover:text-indigo-400" />}
                    </button>
                </div>
                 <p className="text-xs text-slate-400">
                    {likes.toLocaleString('pt-BR')} curtidas
                 </p>
            </footer>
        </div>
    );
};

export default PostDetailView;
