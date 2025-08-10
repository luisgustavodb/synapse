
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { podcastItems, podcastComments } from '../constants';
import type { PodcastItem, Comment } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ThumbsUpIcon } from './icons/ThumbsUpIcon';
import { ThumbsDownIcon } from './icons/ThumbsDownIcon';
import { ShareIcon } from './icons/ShareIcon';
import { DownloadIcon } from './icons/DownloadIcon';

interface PodcastDetailViewProps {
    podcast: PodcastItem;
    goBack: () => void;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
} as const;

const PodcastDetailView: React.FC<PodcastDetailViewProps> = ({ podcast, goBack }) => {
    const [isLiked, setIsLiked] = useState<boolean | null>(null);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const handleLike = () => setIsLiked(isLiked === true ? null : true);
    const handleDislike = () => setIsLiked(isLiked === false ? null : false);

    const recommendedPodcasts = podcastItems
        .filter(p => p.podcastCategoryId === podcast.podcastCategoryId && p.id !== podcast.id)
        .slice(0, 5);
    
    const formatNumber = (num: number) => {
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${Math.floor(num / 1000)}K`;
        return num.toString();
    };
    
    const motionProps = {
        initial:"initial",
        animate:"in",
        exit:"out",
        variants:pageVariants,
        transition:pageTransition
    };

    return (
        <motion.div {...motionProps} className="h-full flex flex-col bg-slate-50">
            <header className="flex items-center p-2 border-b border-slate-200 flex-shrink-0 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
                <button onClick={goBack} className="p-2 rounded-full hover:bg-slate-200" aria-label="Voltar">
                    <ArrowLeftIcon className="h-6 w-6 text-slate-500" />
                </button>
            </header>
            <main className="flex-grow overflow-y-auto pb-6">
                {/* Player */}
                <div className="bg-slate-800 p-4">
                    <div className="aspect-square w-full bg-slate-200 rounded-lg overflow-hidden shadow-lg mb-4 max-w-sm mx-auto">
                        <img src={podcast.imageUrl} alt={podcast.title} className="w-full h-full object-cover"/>
                    </div>
                    <audio controls className="w-full">
                        <source src={podcast.audioUrl} type="audio/mpeg" />
                        Seu navegador não suporta o elemento de áudio.
                    </audio>
                </div>

                <div className="p-4 space-y-5">
                    {/* Title */}
                    <h1 className="text-2xl font-bold text-slate-900">{podcast.title}</h1>
                    
                    {/* Creator Info */}
                    <div className="flex items-center space-x-3">
                        <img src={podcast.creatorAvatarUrl} alt={podcast.creator} className="w-10 h-10 rounded-full" />
                        <div className="flex-1">
                            <p className="font-semibold text-slate-800">{podcast.creator}</p>
                            <p className="text-sm text-slate-500">1.2M inscritos</p>
                        </div>
                        <button className="bg-slate-900 text-white font-semibold text-sm px-4 py-2 rounded-full hover:bg-slate-700 transition-colors">Inscrever-se</button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1">
                        <div className="flex items-center bg-slate-200/70 rounded-full">
                            <button
                                onClick={handleLike}
                                className={`flex items-center space-x-1.5 pl-4 pr-3 py-2 rounded-l-full hover:bg-slate-300/70 transition-colors ${isLiked === true ? 'bg-slate-300' : ''}`}
                            >
                                <ThumbsUpIcon className="w-5 h-5" />
                                <span className="text-sm font-semibold">{formatNumber(podcast.views)}</span>
                            </button>
                            <div className="w-px h-6 bg-slate-300"></div>
                            <button
                                onClick={handleDislike}
                                className={`p-2 rounded-r-full hover:bg-slate-300/70 transition-colors ${isLiked === false ? 'bg-slate-300' : ''}`}
                            >
                                <ThumbsDownIcon className="w-5 h-5" />
                            </button>
                        </div>
                        <button className="flex items-center space-x-2 bg-slate-200/70 rounded-full px-4 py-2 hover:bg-slate-300/70 transition-colors">
                            <ShareIcon className="w-5 h-5" />
                            <span className="text-sm font-semibold">Compartilhar</span>
                        </button>
                        <button className="flex items-center space-x-2 bg-slate-200/70 rounded-full px-4 py-2 hover:bg-slate-300/70 transition-colors">
                            <DownloadIcon className="w-5 h-5" />
                            <span className="text-sm font-semibold">Download</span>
                        </button>
                    </div>

                    {/* Description */}
                    <div 
                        onClick={() => !isDescriptionExpanded && setIsDescriptionExpanded(true)}
                        className="bg-slate-200/70 p-3 rounded-xl hover:bg-slate-300/70 cursor-pointer transition-colors"
                    >
                        <div className="flex items-center space-x-2 font-semibold text-sm text-slate-800">
                            <span>{formatNumber(podcast.views)} visualizações</span>
                            <span>{podcast.publishedAt}</span>
                        </div>
                        <p className={`text-sm text-slate-600 mt-1 whitespace-pre-line ${!isDescriptionExpanded && 'line-clamp-2'}`}>
                            {podcast.content}
                        </p>
                        {isDescriptionExpanded ? (
                            <button onClick={(e) => { e.stopPropagation(); setIsDescriptionExpanded(false); }} className="text-sm font-bold text-slate-800 mt-2">
                                Mostrar menos
                            </button>
                        ) : (
                            <button className="text-sm font-bold text-slate-800 mt-2">
                                ...mais
                            </button>
                        )}
                    </div>

                    {/* Comments */}
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 mb-3">Comentários ({podcastComments.length})</h2>
                        <div className="space-y-4">
                        {podcastComments.map(comment => (
                            <div key={comment.id} className="flex items-start space-x-3">
                                <img src={comment.user.avatarUrl} alt={comment.user.name} className="w-8 h-8 rounded-full" />
                                <div className="flex-1">
                                    <p className="text-xs text-slate-500">
                                        <span className="font-semibold text-slate-700">{comment.user.name}</span>
                                        <span className="ml-2">{comment.timestamp}</span>
                                    </p>
                                    <p className="text-sm text-slate-800">{comment.text}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </section>
                    
                    {/* Up Next */}
                    {recommendedPodcasts.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold text-slate-800 mb-3 mt-6">Próximos</h2>
                            <div className="space-y-1">
                                {recommendedPodcasts.map(p => (
                                    <Link to={`/detail/podcast/${p.id}`} key={p.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                                        <div className="w-20 h-20 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover"/>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-slate-800 line-clamp-2">{p.title}</p>
                                            <p className="text-sm text-slate-500">{p.creator}</p>
                                            <p className="text-xs text-slate-400">{formatNumber(p.views)} visualizações · {p.publishedAt}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>
        </motion.div>
    );
};

export default PodcastDetailView;
