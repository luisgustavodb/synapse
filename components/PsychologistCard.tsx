
import React from 'react';
import { Link } from 'react-router-dom';
import type { Psychologist } from '../types';
import { ChatBubbleIcon } from './icons/ChatBubbleIcon';

interface PsychologistCardProps {
    psychologist: Psychologist;
}

const PsychologistCard: React.FC<PsychologistCardProps> = ({ psychologist }) => {
    return (
        <div className="bg-white rounded-3xl p-5 shadow-md flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
                <img src={psychologist.avatarUrl} alt={psychologist.name} className="w-20 h-20 rounded-2xl object-cover" />
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800">{psychologist.name}</h3>
                    <p className="text-sm font-semibold text-pink-500">{psychologist.specialty}</p>
                </div>
            </div>
            <div>
                <p className="text-sm text-slate-600 leading-relaxed">{psychologist.bio}</p>
            </div>
            <div className="pt-2">
                 <Link
                    to="/chat"
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors"
                >
                    <ChatBubbleIcon className="h-5 w-5" />
                    <span>Start Chat</span>
                </Link>
            </div>
        </div>
    );
};

export default PsychologistCard;
