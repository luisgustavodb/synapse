import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { feedPosts, insightsData } from '../constants';
import { SettingsIcon } from '../components/icons/SettingsIcon';
import { GridIcon } from '../components/icons/GridIcon';
import { ChartBarIcon } from '../components/icons/ChartBarIcon';
import WeeklyMoodCard from '../components/WeeklyMoodCard';
import InsightDonutChart from '../components/InsightDonutChart';


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

const Stat: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-lg font-bold text-slate-800">{value}</p>
        <p className="text-sm text-slate-500">{label}</p>
    </div>
);

const AccountPage: React.FC = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'posts' | 'progress'>('posts');

    const userPosts = feedPosts.filter(post => post.author.handle === user.handle);

    const activeClass = "text-indigo-600 border-b-2 border-indigo-600";
    const inactiveClass = "text-slate-500 hover:bg-slate-100";
    
    const motionProps = {
        initial:"initial",
        animate:"in",
        exit:"out",
        variants:pageVariants,
        transition:pageTransition
    };

    return (
        <motion.div
            {...motionProps}
            className="flex flex-col h-full bg-slate-50"
        >
            <header className="flex-shrink-0 flex items-center justify-between p-4 bg-slate-100/80 backdrop-blur-sm border-b border-slate-200">
                <h1 className="text-xl font-bold text-slate-800 tracking-tight">{user.handle}</h1>
                <Link to="/settings" className="text-slate-600 hover:text-slate-900">
                    <SettingsIcon className="h-6 w-6"/>
                </Link>
            </header>

            <main className="flex-grow overflow-y-auto">
                {/* Profile Info */}
                <div className="p-4 space-y-4">
                    <section className="flex items-center space-x-4">
                        <img 
                            src={user.avatarUrl} 
                            alt={user.name} 
                            className="w-20 h-20 rounded-full object-cover shadow-sm" 
                        />
                        <div className="flex-1 grid grid-cols-3 gap-2">
                           <Stat value={userPosts.length} label="Posts" />
                           <Stat value={user.followers} label="Seguidores" />
                           <Stat value={user.following} label="Seguindo" />
                        </div>
                    </section>

                    {/* Bio */}
                    <section>
                        <p className="font-semibold text-sm text-slate-800">{user.name}</p>
                        <p className="text-sm text-slate-600 whitespace-pre-line">{user.bio}</p>
                    </section>

                    {/* Action Buttons */}
                    <section className="flex items-center space-x-2">
                        <button 
                            onClick={() => navigate('/account/personal-info')}
                            className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
                        >
                            Editar Perfil
                        </button>
                        <button className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-semibold py-2 px-4 rounded-lg transition-colors">
                            Compartilhar Perfil
                        </button>
                    </section>
                </div>
                
                {/* View Tabs */}
                <div className="border-b border-t border-slate-200">
                    <div className="grid grid-cols-2">
                        <button onClick={() => setActiveTab('posts')} className={`flex justify-center items-center py-2 transition-colors ${activeTab === 'posts' ? activeClass : inactiveClass}`} aria-label="Ver postagens" aria-selected={activeTab === 'posts'}>
                            <GridIcon className="h-6 w-6" />
                        </button>
                        <button onClick={() => setActiveTab('progress')} className={`flex justify-center items-center py-2 transition-colors ${activeTab === 'progress' ? activeClass : inactiveClass}`} aria-label="Ver progresso" aria-selected={activeTab === 'progress'}>
                            <ChartBarIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Content based on active tab */}
                {activeTab === 'posts' && (
                     <div className="grid grid-cols-3 gap-1">
                        {userPosts.map(post => (
                            <div key={post.id} className="aspect-square bg-slate-200">
                                <img src={post.imageUrl} alt={post.caption} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                )}
                
                {activeTab === 'progress' && (
                    <div className="p-6 space-y-6 bg-white">
                        <WeeklyMoodCard />

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Seus Insights</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {insightsData.map((insight) => (
                                <InsightDonutChart key={insight.title} insight={insight} />
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl p-6 shadow-md bg-slate-50">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Resumo Mensal</h2>
                            <p className="text-sm text-slate-500">
                                No último mês, você demonstrou um aumento notável na consistência do seu humor, com picos positivos nos fins de semana. Seus insights sobre "Catastrofização" estão mais fortes, indicando um bom progresso na identificação de padrões de pensamento. Continue o ótimo trabalho!
                            </p>
                        </div>
                    </div>
                )}
            </main>
        </motion.div>
    );
};

export default AccountPage;