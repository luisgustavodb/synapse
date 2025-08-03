
import React from 'react';
import { LeafIcon } from '../components/icons/LeafIcon';

const AcademyPage: React.FC = () => {
  return (
    <div className="overflow-y-auto space-y-6 p-6 bg-slate-50 pb-24">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-slate-800">Integrated Academy</h1>
        <p className="text-sm text-slate-500">Body & Mind in Motion</p>
      </header>
      
      <div className="bg-white rounded-3xl p-8 shadow-md text-center mt-8">
        <div className="flex justify-center mb-4">
          <div className="bg-emerald-100 p-4 rounded-full">
            <LeafIcon className="h-10 w-10 text-emerald-600" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Coming Soon!</h2>
        <p className="text-slate-600">
          This is where you'll find personalized workout plans, guided meditations, nutrition tips, and more to support your holistic well-being.
        </p>
      </div>
    </div>
  );
};

export default AcademyPage;