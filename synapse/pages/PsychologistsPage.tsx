
import React, { useState } from 'react';
import { motion, AnimatePresence, Transition } from 'framer-motion';
import { psychologists } from '../constants';
import PaymentStatusBanner from '../components/PaymentStatusBanner';
import PsychologistCard from '../components/PsychologistCard';
import PsychologistChatView from '../components/PsychologistChatView';
import type { Psychologist } from '../types';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
} as const;

const PsychologistsPage: React.FC = () => {
  const [activeChat, setActiveChat] = useState<Psychologist | null>(null);

  if (activeChat) {
    return (
        <PsychologistChatView 
            psychologist={activeChat} 
            onClose={() => setActiveChat(null)} 
        />
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="overflow-y-auto space-y-6 p-6"
    >
      <header className="text-center">
        <h1 className="text-3xl font-bold text-slate-800">Encontre um Especialista</h1>
        <p className="text-sm text-blue-500">Conecte-se com profissionais licenciados</p>
      </header>
      
      <PaymentStatusBanner />
      
      <div className="space-y-4">
        {psychologists.map((psychologist) => (
          <PsychologistCard 
            key={psychologist.id} 
            psychologist={psychologist} 
            onStartChat={() => setActiveChat(psychologist)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PsychologistsPage;