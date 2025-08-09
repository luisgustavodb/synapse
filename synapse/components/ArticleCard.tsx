
import React from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../types';

interface ArticleCardProps {
    article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    const { id, type, title, description, Icon } = article;

    let bgColor = 'bg-gray-100';
    let textColor = 'text-gray-600';
    let typeLabel: string = type;

    switch (type) {
        case 'ARTICLE':
            bgColor = 'bg-orange-100';
            textColor = 'text-orange-600';
            typeLabel = 'Artigo';
            break;
        case 'TIP':
            bgColor = 'bg-emerald-100';
            textColor = 'text-emerald-600';
            typeLabel = 'Dica';
            break;
    }

    return (
        <Link to={`/detail/article/${id}`} className="rounded-3xl p-4 shadow-md flex items-center space-x-4 transition-transform transform hover:scale-105 cursor-pointer bg-white">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${bgColor}`}>
                <Icon className={`w-8 h-8 ${textColor}`} />
            </div>
            <div className="flex-1">
                <p className={`text-xs font-bold uppercase ${textColor}`}>{typeLabel}</p>
                <h4 className="text-md font-bold text-slate-800">{title}</h4>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
        </Link>
    );
};

export default ArticleCard;