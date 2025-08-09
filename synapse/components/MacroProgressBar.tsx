import React from 'react';
import type { Macro } from '../types';

interface MacroProgressBarProps {
    macro: Macro;
}

const MacroProgressBar: React.FC<MacroProgressBarProps> = ({ macro }) => {
    const percentage = Math.min(100, (macro.consumed / macro.goal) * 100);

    return (
        <div className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold text-slate-700">{macro.name}</p>
            <div className="w-full bg-slate-200 rounded-full h-1.5 my-1.5">
                <div
                    className={`${macro.color} h-1.5 rounded-full`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <p className="text-xs text-slate-500">{`${macro.consumed}/${macro.goal} g`}</p>
        </div>
    );
};

export default MacroProgressBar;