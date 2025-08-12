

import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import type { ActivityItem } from '../types';

interface RecipeCardProps {
    recipe: ActivityItem;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const goalColorMap = {
        'Emagrecimento': {
            bg: 'bg-rose-100',
            text: 'text-rose-600'
        },
        'Hipertrofia': {
            bg: 'bg-sky-100',
            text: 'text-sky-600'
        },
        'Condicionamento': {
            bg: 'bg-emerald-100',
            text: 'text-emerald-600'
        },
    };

    const goalStyle = (recipe.goal && goalColorMap[recipe.goal]) || goalColorMap['Condicionamento'];

    return (
        <ReactRouterDOM.Link to={`/detail/activity/${recipe.id}`} className="block group bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-32 relative">
                <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-full object-cover" />
                 <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
                    <recipe.Icon className={`h-5 w-5 ${goalStyle.text}`} />
                </div>
            </div>
            <div className="p-4">
                 <h3 className="font-bold text-md text-slate-800 group-hover:text-indigo-600 transition-colors truncate">{recipe.title}</h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">{recipe.description}</p>
                <div className="flex justify-between items-center mt-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${goalStyle.bg} ${goalStyle.text}`}>
                        {recipe.goal}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{recipe.duration}</span>
                </div>
            </div>
        </ReactRouterDOM.Link>
    );
};

export default RecipeCard;
