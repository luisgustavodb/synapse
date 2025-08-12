

import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import type { Article } from '../types';

interface ArticleListCardProps {
    article: Article;
}

const ArticleListCard: React.FC<ArticleListCardProps> = ({ article }) => {
    const { id, type, title, description, imageUrl } = article;

    const typeStyles: Record<Article['type'], string> = {
        ARTICLE: 'bg-orange-100 text-orange-600',
        TIP: 'bg-emerald-100 text-emerald-600',
        CURIOSITY: 'bg-yellow-100 text-yellow-600',
    };
    
    const typeLabels: Record<Article['type'], string> = {
        ARTICLE: 'Artigo',
        TIP: 'Dica',
        CURIOSITY: 'Curiosidade',
    };

    return (
        <ReactRouterDOM.Link 
            to={`/detail/article/${id}`} 
            className="block bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
        >
            <div className="h-40 relative">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
                <div 
                    className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${typeStyles[type]}`}
                >
                    {typeLabels[type]}
                </div>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">{title}</h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">{description}</p>
            </div>
        </ReactRouterDOM.Link>
    );
};

export default ArticleListCard;
