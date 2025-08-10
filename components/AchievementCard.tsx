
import React from 'react';
import type { Achievement } from '../types';
import { achievementCategoryStyles } from '../constants';

interface AchievementCardProps {
    achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
    const { title, description, unlocked, Icon, category } = achievement;
    const categoryStyle = achievementCategoryStyles[category];

    return (
        <div 
            className={`flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border-l-4 transition-opacity ${
                unlocked ? categoryStyle.borderColor : 'border-slate-200'
            } ${!unlocked && 'opacity-70'}`}
        >
            <div 
                className={`flex-shrink-0 p-3 rounded-full transition-colors ${
                    unlocked ? categoryStyle.bgColor : 'bg-slate-200'
                }`}
            >
                <Icon 
                    className={`w-6 h-6 transition-colors ${
                        unlocked ? categoryStyle.color : 'text-slate-500'
                    }`} 
                />
            </div>
            <div className="flex-1">
                <h4 className="font-bold text-slate-800">{title}</h4>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
        </div>
    );
};

export default AchievementCard;
