
import React, { useState } from 'react';
import type { FeedPost } from '../types';
import { HeartIcon } from './icons/HeartIcon';
import { CommentIcon } from './icons/CommentIcon';
import { ShareIcon } from './icons/ShareIcon';
import { BookmarkIcon } from './icons/BookmarkIcon';
import { FilledHeartIcon } from './icons/FilledHeartIcon';
import { FilledBookmarkIcon } from './icons/FilledBookmarkIcon';

const FeedPostCard: React.FC<{ post: FeedPost }> = ({ post }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes);
    const [isSaved, setIsSaved] = useState(false);

    const handleLikeClick = () => {
        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setIsLiked(!isLiked);
    };

    const handleSaveClick = () => {
        setIsSaved(!isSaved);
    };

    const isAvatarUrl = post.author.avatar.startsWith('http');

    return (
        <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col">
            {/* Post Header */}
            <div className="flex items-center p-4 space-x-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xl overflow-hidden">
                   {isAvatarUrl ? (
                        <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                    ) : (
                        post.author.avatar
                    )}
                </div>
                <div>
                    <p className="font-bold text-slate-800 text-sm">{post.author.name}</p>
                    <p className="text-xs text-slate-500">{post.author.handle}</p>
                </div>
            </div>

            {/* Post Image */}
            <div onDoubleClick={handleLikeClick} className="cursor-pointer">
                <img src={post.imageUrl} alt={post.caption.substring(0, 50)} className="w-full h-auto max-h-[500px] object-cover" />
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-4">
                    <button 
                        onClick={handleLikeClick} 
                        className="transition-transform duration-200 ease-in-out transform active:scale-90" 
                        aria-label="Curtir"
                    >
                        {isLiked ? (
                            <FilledHeartIcon className="w-7 h-7 text-pink-500" />
                        ) : (
                            <HeartIcon className="w-7 h-7 text-slate-500 hover:text-pink-500" />
                        )}
                    </button>
                    <button className="text-slate-500 hover:text-blue-500 transition-colors" aria-label="Comentar">
                        <CommentIcon className="w-7 h-7" />
                    </button>
                    <button className="text-slate-500 hover:text-emerald-500 transition-colors" aria-label="Compartilhar">
                        <ShareIcon className="w-7 h-7" />
                    </button>
                </div>
                <button 
                    onClick={handleSaveClick}
                    className="transition-transform duration-200 ease-in-out transform active:scale-90" 
                    aria-label={isSaved ? "Remover dos salvos" : "Salvar"}
                >
                    {isSaved ? (
                        <FilledBookmarkIcon className="w-7 h-7 text-indigo-500" />
                    ) : (
                        <BookmarkIcon className="w-7 h-7 text-slate-500 hover:text-indigo-500" />
                    )}
                </button>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-4">
                <p className="font-bold text-sm text-slate-800">{likeCount.toLocaleString('pt-BR')} curtidas</p>
                 <p className="text-sm text-slate-600 mt-1 break-words">
                    <span className="font-bold text-slate-800 mr-1">{post.author.handle}</span>
                    {post.caption}
                </p>
                 <p className="text-xs text-slate-400 mt-2 hover:underline cursor-pointer">
                    Ver todos os {post.comments.toLocaleString('pt-BR')} comentários
                 </p>
            </div>
        </div>
    );
};

export default FeedPostCard;