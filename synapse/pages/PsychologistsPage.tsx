
import React from 'react';
import { psychologists } from '../constants';
import PaymentStatusBanner from '../components/PaymentStatusBanner';
import PsychologistCard from '../components/PsychologistCard';

const PsychologistsPage: React.FC = () => {
  return (
    <div className="overflow-y-auto space-y-6 p-6 bg-slate-50 pb-24">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-slate-800">Find a Specialist</h1>
        <p className="text-sm text-slate-500">Connect with licensed professionals</p>
      </header>
      
      <PaymentStatusBanner />
      
      <div className="space-y-4">
        {psychologists.map((psychologist) => (
          <PsychologistCard key={psychologist.id} psychologist={psychologist} />
        ))}
      </div>
    </div>
  );
};

export default PsychologistsPage;
