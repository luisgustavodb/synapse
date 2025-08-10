import React from 'react';
import { Link } from 'react-router-dom';
import type { GroupClass } from '../types';
import { MapPinIcon } from './icons/MapPinIcon';

interface GroupClassCardProps {
    groupClass: GroupClass;
}

const GroupClassCard: React.FC<GroupClassCardProps> = ({ groupClass }) => {
    return (
        <Link to={`/group-class/${groupClass.id}`} className="block group bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-40 relative">
                <img src={groupClass.imageUrl} alt={groupClass.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">{groupClass.time}</div>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 group-hover:text-indigo-600 transition-colors">{groupClass.title}</h3>
                        <div className="flex items-center space-x-1.5 text-sm text-slate-500 mt-1">
                            <MapPinIcon className="h-4 w-4" />
                            <span>{groupClass.location.name}</span>
                        </div>
                    </div>
                     <div className="text-right flex-shrink-0 ml-2">
                        <p className="text-xs font-semibold text-blue-500">{groupClass.period}</p>
                        <p className="text-xs font-semibold text-emerald-500">{groupClass.ageRange} anos</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GroupClassCard;
