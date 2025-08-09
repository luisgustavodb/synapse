import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import { articles, activityItems, podcastItems, resourceItems } from '../constants';
import type { Article, ActivityItem, PodcastItem, ResourceItem } from '../types';

type ContentItem = Article | ActivityItem | PodcastItem | ResourceItem;

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

const DetailPage: React.FC = () => {
    const { type, id } = useParams<{ type: string; id: string }>();
    const navigate = useNavigate();
    const [item, setItem] = useState<ContentItem | null>(null);

    useEffect(() => {
        let foundItem: ContentItem | undefined;
        switch (type) {
            case 'article':
                foundItem = articles.find(a => a.id === id);
                break;
            case 'activity':
                foundItem = activityItems.find(a => a.id === id);
                break;
            case 'podcast':
                 foundItem = podcastItems.find(p => p.id === id);
                break;
            case 'resource':
                 foundItem = resourceItems.find(r => r.id === id);
                break;
        }
        setItem(foundItem || null);
    }, [type, id]);

    const renderMedia = () => {
        if (!item) return null;

        if ('videoUrl' in item && item.videoUrl) {
            return (
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
                    <iframe 
                        src={item.videoUrl}
                        title={item.title}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            )
        }
        
        if ('audioUrl' in item && item.audioUrl) {
            return (
                 <div className="relative">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-2xl shadow-lg"/>
                    <div className="bg-white rounded-2xl p-4 mt-[-2rem] mx-4 relative shadow-lg">
                         <audio controls className="w-full">
                            <source src={item.audioUrl} type="audio/mpeg" />
                            Seu navegador não suporta o elemento de áudio.
                        </audio>
                    </div>
                </div>
            )
        }

        if ('imageUrl' in item && item.imageUrl) {
            return <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-2xl shadow-lg" />
        }
        
        return null;
    }

    if (!item) {
        return <div className="p-6 text-center">Conteúdo não encontrado.</div>;
    }
    
    const motionProps = {
        initial:"initial",
        animate:"in",
        exit:"out",
        variants:pageVariants,
        transition:pageTransition
    };

    return (
        <motion.div
            {...motionProps}
            className="h-full flex flex-col"
        >
            <header className="flex items-center p-4 border-b border-slate-200 flex-shrink-0">
                <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-slate-200" aria-label="Voltar">
                    <ArrowLeftIcon className="h-6 w-6 text-slate-500" />
                </button>
                <h1 className="text-lg font-bold text-slate-800 truncate mx-auto px-4">{item.title}</h1>
            </header>
            <main className="flex-grow overflow-y-auto p-6 space-y-6">
                {renderMedia()}
                <div className="prose prose-sm max-w-none">
                    <h1 className="text-slate-800">{item.title}</h1>
                    <p className="text-base whitespace-pre-line text-slate-600">
                        {item.content}
                    </p>
                </div>
            </main>
        </motion.div>
    );
};

export default DetailPage;