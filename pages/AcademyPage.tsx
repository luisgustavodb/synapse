
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// New separated view components
import ProgressView from './academy/ProgressView';
import AcademyView from './academy/AcademyView';
import NutritionPage from './academy/NutritionPage';
import PodcastsView from './academy/PodcastsView';

// Icons
import { ForkKnifeIcon } from '../components/icons/ForkKnifeIcon';
import { ChartBarIcon } from '../components/icons/ChartBarIcon';
import { FireIcon } from '../components/icons/FireIcon';
import { MicrophoneIcon } from '../components/icons/MicrophoneIcon';


const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
} as const;

type AcademyTab = 'progress' | 'academy' | 'nutrition' | 'podcasts';

const AcademyPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<AcademyTab>('progress');
    
    const motionProps = {
        initial: "initial",
        animate: "in",
        exit: "out",
        variants: pageVariants,
        transition: pageTransition,
    };

    const renderContent = () => {
        switch(activeTab) {
            case 'academy': return <AcademyView />;
            case 'nutrition': return <NutritionPage />;
            case 'podcasts': return <PodcastsView />;
            case 'progress': return <ProgressView />;
            default: return <ProgressView />;
        }
    };
    
    const TabButton: React.FC<{
        tabName: AcademyTab;
        label: string;
        Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    }> = ({ tabName, label, Icon }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            aria-label={label}
            className={`flex-1 py-3 flex justify-center items-center transition-colors focus:outline-none ${
                activeTab === tabName 
                    ? 'text-indigo-600 border-b-2 border-indigo-600' 
                    : 'text-slate-500 border-b-2 border-transparent hover:bg-slate-100'
            }`}
        >
            <Icon className="h-6 w-6" />
        </button>
    );

    return (
        <motion.div {...motionProps} className="h-full flex flex-col bg-slate-50">
            <header className="flex-shrink-0 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
                <nav className="flex justify-around">
                    <TabButton tabName="progress" label="Meu Progresso" Icon={ChartBarIcon} />
                    <TabButton tabName="academy" label="Academia" Icon={FireIcon} />
                    <TabButton tabName="nutrition" label="Nutrição" Icon={ForkKnifeIcon} />
                    <TabButton tabName="podcasts" label="Podcasts" Icon={MicrophoneIcon} />
                </nav>
            </header>
            <main className="flex-grow overflow-y-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="h-full"
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </main>
        </motion.div>
    );
};

export default AcademyPage;
