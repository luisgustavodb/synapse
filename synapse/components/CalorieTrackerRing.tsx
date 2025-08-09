import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import type { DailyNutrition } from '../types';

interface CalorieTrackerRingProps {
    nutrition: DailyNutrition;
}

const CalorieTrackerRing: React.FC<CalorieTrackerRingProps> = ({ nutrition }) => {
    const remaining = Math.max(0, nutrition.goal - nutrition.consumed);
    const data = [
        { name: 'Consumed', value: nutrition.consumed },
        { name: 'Remaining', value: remaining > 0 ? remaining : 0 }
    ];
    const COLORS = ['#22c55e', '#f3f4f6']; // green-500, gray-100

    return (
        <div className="grid grid-cols-3 items-center gap-2 py-4">
            <div className="text-center">
                <p className="text-lg md:text-xl font-bold text-slate-800">{nutrition.consumed.toLocaleString()}</p>
                <p className="text-xs md:text-sm text-slate-500">Consumidas</p>
            </div>
            <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius="78%"
                            outerRadius="100%"
                            dataKey="value"
                            startAngle={90}
                            endAngle={450}
                            stroke="none"
                        >
                            {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-slate-800">{remaining}</span>
                    <span className="text-xs font-medium text-slate-500">Restantes</span>
                </div>
            </div>
            <div className="text-center">
                <p className="text-lg md:text-xl font-bold text-slate-800">{nutrition.burned.toLocaleString()}</p>
                <p className="text-xs md:text-sm text-slate-500">Gastas</p>
            </div>
        </div>
    );
};

export default CalorieTrackerRing;