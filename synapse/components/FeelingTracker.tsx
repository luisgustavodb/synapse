
import React, { useState } from 'react';
import { feelings } from '../constants';

const FeelingTracker: React.FC = () => {
  const [selected, setSelected] = useState<string | null>('Happy');

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md">
      <h2 className="text-xl font-bold text-center text-slate-800 mb-4">How are you feeling today?</h2>
      <div className="flex justify-around">
        {feelings.map((feeling) => (
          <button
            key={feeling.name}
            onClick={() => setSelected(feeling.name)}
            className={`flex flex-col items-center space-y-2 rounded-xl p-2 transition-all duration-200 ${selected === feeling.name ? 'transform scale-110' : 'opacity-70 hover:opacity-100'}`}
          >
            <span className={`text-4xl transition-all duration-200 p-2 rounded-full ${selected === feeling.name ? 'bg-amber-100' : 'bg-slate-100'}`}>
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
