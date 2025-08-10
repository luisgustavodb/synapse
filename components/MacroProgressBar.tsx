import React from 'react';
import type { Macro } from '../types';

interface MacroProgressBarProps {
    macro: Macro;
}

const MacroProgressBar: React.FC<MacroProgressBarProps> = ({ macro }) => {
    const percentage = macro.goal > 0 ? Math.min(100, (macro.consumed / macro.goal) * 100) : 0;
    const remaining = Math.max(0, macro.goal - macro.consumed);

    return (
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-2">{macro.name}</h3>
            
            <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                    className={`${macro.color} h-2 rounded-full`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                    <p className="text-slate-500">Consumido</p>
                    <p className="font-bold text-sm text-slate-700">{macro.consumed.toLocaleString()}g</p>
                </div>
                 <div>
                    <p className="text-slate-500">Meta</p>
                    <p className="font-bold text-sm text-slate-700">{macro.goal.toLocaleString()}g</p>
                </div>
                <div>
                    <p className="text-slate-500">Restante</p>
                    <p className="font-bold text-sm text-green-600">{remaining.toLocaleString()}g</p>
                </div>
            </div>
        </div>
    );
};

export default MacroProgressBar;
