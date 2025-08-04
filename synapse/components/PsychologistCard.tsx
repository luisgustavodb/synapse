import React from 'react';
import type { Psychologist } from '../types';
import { ChatBubbleIcon } from './icons/ChatBubbleIcon';

interface PsychologistCardProps {
    psychologist: Psychologist;
    onStartChat: () => void;
}

const PsychologistCard: React.FC<PsychologistCardProps> = ({ psychologist, onStartChat }) => {
    return (
        <div className="bg-white rounded-3xl p-5 shadow-md flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
                <img src={psychologist.avatarUrl} alt={psychologist.name} className="w-20 h-20 rounded-2xl object-cover" />
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800">{psychologist.name}</h3>
                    <p className="text-sm font-semibold text-blue-500">{psychologist.specialty}</p>
                </div>
            </div>
            <div>
                <p className="text-sm text-slate-500 leading-relaxed">{psychologist.bio}</p>
            </div>
            <div className="pt-2">
                 <button
                    onClick={onStartChat}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors"
                >
                    <ChatBubbleIcon className="h-5 w-5" />
                    <span>Iniciar Conversa</span>
                </button>
            </div>
        </div>
    );
};

export default PsychologistCard;