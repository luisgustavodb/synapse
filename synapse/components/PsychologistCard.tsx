import React from 'react';
import type { Professional } from '../types';
import { ChatBubbleIcon } from './icons/ChatBubbleIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { ExclamationTriangleIcon } from './icons/ExclamationTriangleIcon';

interface ProfessionalCardProps {
    professional: Professional;
    onStartChat: () => void;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ professional, onStartChat }) => {
    return (
        <div className="bg-white rounded-3xl p-5 shadow-md flex flex-col space-y-4">
            <div className="flex items-start space-x-4">
                <img src={professional.avatarUrl} alt={professional.name} className="w-20 h-20 rounded-2xl object-cover" />
                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-bold text-slate-800">{professional.name}</h3>
                         {professional.paymentStatus === 'paid' ? (
                            <div className="flex items-center text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                                <CheckCircleIcon className="h-3 w-3 mr-1"/>
                                Em dia
                            </div>
                        ) : (
                            <div className="flex items-center text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                                <ExclamationTriangleIcon className="h-3 w-3 mr-1"/>
                                Pendente
                            </div>
                        )}
                    </div>
                    <p className="text-sm font-semibold text-blue-500">{professional.specialty}</p>
                </div>
            </div>
            <div>
                <p className="text-sm text-slate-500 leading-relaxed">{professional.bio}</p>
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

export default ProfessionalCard;