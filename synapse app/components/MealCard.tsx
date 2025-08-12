import React from 'react';
import type { Meal } from '../types';
import { PlusCircleIcon } from './icons/PlusCircleIcon';

interface MealCardProps {
    meal: Meal;
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
    return (
        <div className="bg-white rounded-2xl p-3 flex items-center shadow-sm">
            <div className="text-3xl w-12 h-12 flex items-center justify-center bg-slate-100 rounded-full">
                {meal.icon}
            </div>
            <div className="flex-grow ml-4">
                <p className="font-bold text-slate-800">{meal.name}</p>
                <p className="text-sm text-slate-500">{`${meal.calories} / ${meal.goal} kcal`}</p>
            </div>
            <button className="text-blue-500 hover:text-blue-600 transition-colors" aria-label={`Adicionar item em ${meal.name}`}>
                <PlusCircleIcon className="h-9 w-9" />
            </button>
        </div>
    );
};

export default MealCard;