
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, Transition } from 'framer-motion';
import WeeklyMoodCard from '../../components/WeeklyMoodCard';
import InsightDonutChart from '../../components/InsightDonutChart';
import { insightsData } from '../../constants';
import { ArrowLeftIcon } from '../../components/icons/ArrowLeftIcon';

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

const MyProgressPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="h-full flex flex-col"
        >
            <header className="flex items-center p-4 border-b border-slate-200 flex-shrink-0">
                <button onClick={() => navigate('/account')} className="p-2 rounded-full hover:bg-slate-200" aria-label="Voltar">
                    <ArrowLeftIcon className="h-6 w-6 text-slate-500" />
                </button>
                <h1 className="text-xl font-bold text-slate-800 mx-auto pr-8">Meu Progresso</h1>
            </header>
            <main className="flex-grow overflow-y-auto p-6 space-y-6">
                <WeeklyMoodCard />

                <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Seus Insights</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {insightsData.map((insight) => (
                        <InsightDonutChart key={insight.title} insight={insight} />
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-md">
                     <h2 className="text-xl font-bold text-slate-800 mb-4">Resumo Mensal</h2>
                     <p className="text-sm text-slate-500">
                        No último mês, você demonstrou um aumento notável na consistência do seu humor, com picos positivos nos fins de semana. Seus insights sobre "Catastrofização" estão mais fortes, indicando um bom progresso na identificação de padrões de pensamento. Continue o ótimo trabalho!
                     </p>
                </div>

            </main>
        </motion.div>
    );
};

export default MyProgressPage;
