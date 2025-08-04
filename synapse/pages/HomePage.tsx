
import React from 'react';
import { motion, Transition } from 'framer-motion';
import WeeklyMoodCard from '../components/WeeklyMoodCard';
import FeelingTracker from '../components/FeelingTracker';
import InsightDonutChart from '../components/InsightDonutChart';
import ArticleCard from '../components/ArticleCard';
import { insightsData, articles } from '../constants';

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

const HomePage: React.FC = () => {
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
        <h1 className="text-3xl font-bold text-slate-800">Synapse</h1>
        <p className="text-indigo-600 text-sm font-medium">Conectando Mentes, Transformando Vidas</p>
      </header>

      <WeeklyMoodCard />

      <FeelingTracker />

      <div className="grid grid-cols-2 gap-4">
        {insightsData.map((insight) => (
          <InsightDonutChart key={insight.title} insight={insight} />
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">Insights para você</h2>
        <div className="space-y-4">
            {articles.map((item) => (
                <ArticleCard key={item.title} article={item} />
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;