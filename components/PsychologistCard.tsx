
import React from 'react';
import type { Professional } from '../types';
import { ClockIcon } from './icons/ClockIcon';
import { StarIcon } from './icons/StarIcon';

interface ProfessionalCardProps {
    professional: Professional;
    onStartChat: () => void;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ professional, onStartChat }) => {
    return (
        <button
            onClick={onStartChat}
            className="w-full text-left bg-white rounded-2xl shadow-md p-4 flex items-center space-x-4 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.99]"
        >
            <img 
                src={professional.avatarUrl} 
                alt={professional.name} 
                className="w-24 h-24 rounded-lg object-cover flex-shrink-0 bg-slate-100" 
            />
            
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-slate-800 truncate pr-2">{professional.name}</h3>
                    <div className={`flex items-center space-x-1.5 text-xs font-semibold ${professional.status === 'Online' ? 'text-green-600' : 'text-slate-500'}`}>
                        <span className={`h-2 w-2 rounded-full ${professional.status === 'Online' ? 'bg-green-500' : 'bg-slate-400'}`}></span>
                        <span>{professional.status}</span>
                    </div>
                </div>
                
                <p className="text-sm text-slate-500 mt-0.5">{professional.specialty}</p>

                <div className="flex items-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className={`w-4 h-4 ${i < Math.round(professional.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-300 fill-slate-300'}`} />
                    ))}
                    <span className="text-sm font-bold text-slate-700 ml-1">{professional.rating.toFixed(1)}</span>
                </div>
                
                <div className="flex items-center mt-3">
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <ClockIcon className="w-4 h-4" />
                        <span>{professional.availability}</span>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default ProfessionalCard;