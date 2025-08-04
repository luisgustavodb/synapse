import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, Transition } from 'framer-motion';
import { LeafIcon } from '../components/icons/LeafIcon';
import { BookmarkIcon } from '../components/icons/BookmarkIcon';
import { activityItems, podcastItems, resourceItems } from '../constants';
import type { ActivityItem as ActivityItemType, PodcastItem as PodcastItemType, ResourceItem as ResourceItemType } from '../types';
import { FireIcon } from '../components/icons/FireIcon';
import { SparklesIcon } from '../components/icons/SparklesIcon';
import { HeartIcon } from '../components/icons/HeartIcon';

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

interface AcademyItemProps {
    item: ActivityItemType;
}

const AcademyItem: React.FC<AcademyItemProps> = ({ item }) => {
    const { Icon, title, description, duration, bgColor, textColor } = item;
    return (
        <div className="rounded-3xl p-4 shadow-md flex items-center space-x-4 bg-white">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${bgColor}`}>
                <Icon className={`w-8 h-8 ${textColor}`} />
            </div>
            <div className="flex-1">
                <h4 className="font-bold text-slate-800">{title}</h4>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{duration}</span>
        </div>
    );
};

interface ContentCardProps {
    item: PodcastItemType | ResourceItemType;
    type: 'podcast' | 'resource';
}

const ContentCard: React.FC<ContentCardProps> = ({ item, type }) => {
    const { Icon, title, description } = item;
    const label = type === 'podcast' ? 'Podcast' : (item as ResourceItemType).type === 'guide' ? 'Guia' : 'E-book';

    return (
        <div className="rounded-3xl p-4 shadow-md flex items-center space-x-4 transition-transform transform hover:scale-105 cursor-pointer bg-white">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-emerald-100">
                <Icon className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="flex-1">
                <p className="text-xs font-bold uppercase text-emerald-600">{label}</p>
                <h4 className="text-md font-bold text-slate-800">{title}</h4>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
        </div>
    );
};

const AcademyPage: React.FC = () => {
    const [activeView, setActiveView] = useState<'academy' | 'resources'>('academy');

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="flex flex-col h-full"
        >
            <header className="flex flex-col items-center space-y-4 p-6">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setActiveView('academy')}
                        aria-pressed={activeView === 'academy'}
                        className={`p-4 rounded-full transition-all duration-300 ease-in-out ${
                            activeView === 'academy' 
                            ? "bg-emerald-100 text-emerald-600 scale-110 shadow-lg"
                            : "bg-slate-100 text-slate-500 scale-90"
                        }`}
                        aria-label="Ver Academia"
                    >
                        <LeafIcon className="h-8 w-8" />
                    </button>
                    <button
                        onClick={() => setActiveView('resources')}
                        aria-pressed={activeView === 'resources'}
                        className={`p-4 rounded-full transition-all duration-300 ease-in-out ${
                            activeView === 'resources' 
                            ? "bg-emerald-100 text-emerald-600 scale-110 shadow-lg"
                            : "bg-slate-100 text-slate-500 scale-90"
                        }`}
                        aria-label="Ver Recursos"
                    >
                        <BookmarkIcon className="h-8 w-8" />
                    </button>
                </div>
                
                <div className="relative h-16 w-full overflow-hidden text-center flex items-center justify-center">
                    <div className={`absolute inset-0 transition-all duration-300 ease-in-out flex flex-col justify-center ${activeView === 'academy' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                        <h1 className="text-3xl font-bold text-slate-800">Academia Integrada</h1>
                        <p className="text-sm text-slate-500">Corpo e Mente em Movimento</p>
                    </div>
                    <div className={`absolute inset-0 transition-all duration-300 ease-in-out flex flex-col justify-center ${activeView === 'resources' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
                        <h1 className="text-3xl font-bold text-slate-800">Recursos Exclusivos</h1>
                        <p className="text-sm text-slate-500">Podcasts, guias e mais</p>
                    </div>
                </div>
            </header>

            <main className="flex-grow overflow-y-auto space-y-8 p-6 pt-0">
                {activeView === 'academy' ? (
                    <>
                        {activityItems.filter(i=> i.category === 'workout').length > 0 && <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
                                <FireIcon className="w-6 h-6 text-orange-500" />
                                <span>Planos de Treino</span>
                            </h2>
                            <div className="space-y-4">
                                {activityItems.filter(i => i.category === 'workout').map(item => (
                                    <Link key={item.id} to={`/detail/activity/${item.id}`}><AcademyItem item={item} /></Link>
                                ))}
                            </div>
                        </section>}

                        {activityItems.filter(i=> i.category === 'meditation').length > 0 && <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
                                <SparklesIcon className="w-6 h-6 text-purple-500" />
                                <span>Meditação Guiada</span>
                            </h2>
                            <div className="space-y-4">
                                {activityItems.filter(i => i.category === 'meditation').map(item => (
                                    <Link key={item.id} to={`/detail/activity/${item.id}`}><AcademyItem item={item} /></Link>
                                ))}
                            </div>
                        </section>}

                        {activityItems.filter(i=> i.category === 'nutrition').length > 0 && <section>
                             <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
                                <HeartIcon className="w-6 h-6 text-red-500" />
                                <span>Dicas de Nutrição</span>
                            </h2>
                            <div className="space-y-4">
                                {activityItems.filter(i => i.category === 'nutrition').map(item => (
                                    <Link key={item.id} to={`/detail/activity/${item.id}`}><AcademyItem item={item} /></Link>
                                ))}
                            </div>
                        </section>}
                    </>
                ) : (
                    <section className="space-y-8">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">
                                Podcasts
                            </h2>
                            <div className="space-y-4">
                                {podcastItems.map((item) => (
                                    <Link key={item.id} to={`/detail/podcast/${item.id}`}>
                                        <ContentCard item={item} type="podcast" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">
                                Biblioteca de Recursos
                            </h2>
                            <div className="space-y-4">
                                {resourceItems.map((item) => (
                                     <Link key={item.id} to={`/detail/resource/${item.id}`}>
                                        <ContentCard item={item} type="resource" />
                                     </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </motion.div>
    );
};

export default AcademyPage;