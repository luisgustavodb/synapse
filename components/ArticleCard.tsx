
import React from 'react';
import type { Article } from '../types';

interface ArticleCardProps {
    article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    const { type, title, description, Icon } = article;
    const isArticle = type === 'ARTICLE';
    const bgColor = isArticle ? 'bg-orange-100' : 'bg-emerald-100';
    const textColor = isArticle ? 'text-orange-600' : 'text-emerald-600';

    return (
        <div className="bg-white rounded-3xl p-4 shadow-md flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${bgColor}`}>
                <Icon className={`w-8 h-8 ${textColor}`} />
            </div>
            <div className="flex-1">
                <p className={`text-xs font-bold uppercase ${textColor}`}>{type}</p>
                <h4 className="text-md font-bold text-slate-800">{title}</h4>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
        </div>
    );
};

export default ArticleCard;
