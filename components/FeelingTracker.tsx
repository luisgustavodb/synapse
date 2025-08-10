
import React, { useState } from 'react';
import { feelings } from '../constants';

const FeelingTracker: React.FC = () => {
  const [selected, setSelected] = useState<string | null>('Feliz');

  return (
    <div className="p-6 border-y border-slate-200">
      <h2 className="text-xl font-bold text-center text-slate-800 mb-4">Como você está se sentindo hoje?</h2>
      <div className="flex justify-around">
        {feelings.map((feeling) => (
          <button
            key={feeling.name}
            onClick={() => setSelected(feeling.name)}
            className={`flex flex-col items-center space-y-2 rounded-xl py-2 px-1 transition-all duration-200 ${selected === feeling.name ? 'transform scale-110' : 'opacity-70 hover:opacity-100'}`}
          >
            <span className={`text-4xl transition-all duration-200 p-2 rounded-full ${selected === feeling.name ? 'bg-violet-100' : 'bg-opacity-50 bg-gray-500'}`}>
              {feeling.emoji}
            </span>
            <span className={`text-xs font-medium ${selected === feeling.name ? 'text-slate-800' : 'text-slate-500'}`}>{feeling.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeelingTracker;
