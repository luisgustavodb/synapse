import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookmarkIcon } from '../components/icons/BookmarkIcon';
import { activityItems, podcastItems, resourceItems, dailyNutrition, macros, meals, articles, workoutFrequencyData, goals, achievements } from '../constants';
import type { ActivityItem as ActivityItemType, PodcastItem as PodcastItemType, ResourceItem as ResourceItemType, Goal, Achievement } from '../types';
import { PlayIcon } from '../components/icons/PlayIcon';

// New components and icons
import { ForkKnifeIcon } from '../components/icons/ForkKnifeIcon';
import CalorieTrackerRing from '../components/CalorieTrackerRing';
import MacroProgressBar from '../components/MacroProgressBar';
import MealCard from '../components/MealCard';
import { HeartIcon } from '../components/icons/HeartIcon';
import { ChartBarIcon } from '../components/icons/ChartBarIcon';
import WeeklyMoodCard from '../components/WeeklyMoodCard';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { TrophyIcon } from '../components/icons/TrophyIcon';
import { FireIcon } from '../components/icons/FireIcon';


// --- View Components ---

const GoalCard: React.FC<{ goal: Goal }> = ({ goal }) => {
    const progressPercentage = (goal.currentProgress / goal.target) * 100;
    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h4 className="font-bold text-slate-800">{goal.title}</h4>
            <p className="text-sm text-slate-500 mb-3">{goal.description}</p>
            <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div 
                    className="bg-green-500 h-2.5 rounded-full" 
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <p className="text-right text-xs text-slate-500 mt-1 font-medium">{goal.currentProgress.toLocaleString()} / {goal.target.toLocaleString()} {goal.unit}</p>
        </div>
    );
};

const AchievementBadge: React.FC<{ achievement: Achievement }> = ({ achievement }) => (
    <div className={`flex flex-col items-center justify-center space-y-2 p-2 rounded-xl text-center transition-opacity ${achievement.unlocked ? 'opacity-100' : 'opacity-40'}`}>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${achievement.unlocked ? 'bg-amber-400' : 'bg-slate-200'}`}>
            <TrophyIcon className={`w-9 h-9 ${achievement.unlocked ? 'text-white' : 'text-slate-400'}`} />
        </div>
        <p className="text-xs font-semibold text-slate-600 w-20 truncate">{achievement.title}</p>
    </div>
);

const ProgressView: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-full p-6 space-y-8 pb-24 overflow-y-auto">
            <header>
                <h1 className="text-3xl font-bold text-slate-800">Meu Progresso</h1>
                <p className="text-slate-500">Sua jornada de evolução contínua.</p>
            </header>
            
            <section>
                <h2 className="text-xl font-bold text-slate-800 mb-4">Saúde Mental</h2>
                <WeeklyMoodCard />
            </section>
            
            <section>
                <h2 className="text-xl font-bold text-slate-800 mb-4">Saúde Física</h2>
                <div className="bg-white rounded-3xl p-4 shadow-md h-56">
                    <h3 className="font-semibold text-slate-600 mb-2">Frequência de Treinos</h3>
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={workoutFrequencyData} margin={{ top: 5, right: 5, left: -25, bottom: -5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="week" tick={{ fontSize: 10, fill: '#64748b' }} tickLine={false} axisLine={false} />
                            <YAxis tick={{ fontSize: 10, fill: '#64748b' }} tickLine={false} axisLine={false} allowDecimals={false} />
                            <Tooltip
                                cursor={{fill: 'rgba(238, 242, 255, 0.6)'}}
                                contentStyle={{
                                    backgroundColor: '#ffffff',
                                    border: "1px solid #e2e8f0",
                                    borderRadius: '0.75rem',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                                }}
                                labelStyle={{ fontWeight: 'bold' }}
                            />
                            <Bar dataKey="workouts" name="Treinos" barSize={20} radius={[8, 8, 0, 0]}>
                               {
                                 workoutFrequencyData.map((entry, index) => (
                                    <Cell cursor="pointer" fill={entry.week === 'Atual' ? '#4f46e5' : '#a5b4fc'} key={`cell-${index}`} />
                                ))
                               }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>
            
            <section>
                 <h2 className="text-xl font-bold text-slate-800 mb-4">Metas e Objetivos</h2>
                 <div className="space-y-4">
                     {goals.map(goal => <GoalCard key={goal.id} goal={goal} />)}
                 </div>
            </section>

             <section>
                 <h2 className="text-xl font-bold text-slate-800 mb-4">Conquistas</h2>
                 <div className="bg-white p-4 rounded-3xl shadow-md">
                    <div className="grid grid-cols-4 gap-2">
                        {achievements.map(ach => <AchievementBadge key={ach.id} achievement={ach} />)}
                    </div>
                 </div>
            </section>
        </div>
    );
};

const AcademyView: React.FC = () => {
  const mainWorkout = activityItems.find(i => i.id === 'energia-matinal');
  const groupClasses = [
      { id: 'zumba', title: 'Zumba', time: 'HOJE, 17H', imageUrl: 'https://images.unsplash.com/photo-1549476464-373921717541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      { id: 'alongamento', title: 'Alongamento', time: 'AMANHÃ, 08H', imageUrl: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      { id: 'power-hiit', title: 'Power HIIT', time: 'AMANHÃ, 19H', imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      { id: 'yoga', title: 'Yoga Flow', time: 'SEX, 09H', imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  ];
  const newVideos = [
      { id: 'total-workout', title: 'Queima total - Treino completo', description: 'Intensivo - 30 min', imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'},
      { id: 'strong-training', title: 'Strong - Treino de força', description: 'Iniciante - 15 min', imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'},
  ];
  
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.classList.add('cursor-grabbing');
    };

    const onMouseLeave = () => {
        if (!scrollContainerRef.current) return;
        setIsDragging(false);
        scrollContainerRef.current.classList.remove('cursor-grabbing');

    };

    const onMouseUp = () => {
        if (!scrollContainerRef.current) return;
        setIsDragging(false);
        scrollContainerRef.current.classList.remove('cursor-grabbing');
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

  return (
    <div className="bg-slate-50 min-h-full pb-16 overflow-y-auto">
        <div className="pt-6 space-y-8">
            <div className="px-6">
                <header>
                    <p className="text-sm text-slate-500">BOM DIA,</p>
                    <h1 className="text-2xl font-bold text-slate-800">Marina</h1>
                </header>
            </div>

            {mainWorkout && (
                <div className="px-6">
                    <section>
                    <h2 className="text-lg font-semibold text-slate-800 mb-3">Meu treino</h2>
                    <Link to={`/detail/activity/${mainWorkout.id}`} className="block relative rounded-xl overflow-hidden h-44 group shadow-lg">
                        <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Treino com battle ropes" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                            <div className="absolute top-4 left-4 bg-yellow-400 p-2 rounded-full">
                                <PlayIcon className="w-4 h-4 text-black" />
                            </div>
                            <div>
                                <p className="font-bold text-sm uppercase text-white tracking-wider">TREINO DE</p>
                                <p className="font-bold text-2xl uppercase text-white">PERNAS E LOMBAR</p>
                            </div>
                        </div>
                    </Link>
                    </section>
                </div>
            )}

            <section className="space-y-3 w-full">
                <div className="flex justify-between items-center mb-1 px-6">
                <h2 className="text-lg font-semibold text-slate-800">Aulas coletivas</h2>
                <Link to="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">PAULISTA</Link>
                </div>
                <div
                    ref={scrollContainerRef}
                    className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                >
                    <div className="flex space-x-4 px-6 pb-2 snap-x snap-mandatory select-none">
                        {groupClasses.map(c => (
                        <Link to="#" key={c.id} draggable="false" className="flex-shrink-0 w-36 h-48 relative rounded-xl overflow-hidden group shadow-md snap-start">
                            <img src={c.imageUrl} alt={c.title} draggable="false" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3">
                            <p className="text-xs font-bold text-white uppercase">{c.time}</p>
                            <p className="font-bold text-lg leading-tight text-white">{c.title}</p>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="px-6 pt-2 space-y-4">
                <h2 className="text-lg font-semibold text-slate-800">Novos vídeos</h2>
                <div className="space-y-4">
                {newVideos.map(v => (
                    <Link to="#" key={v.id} className="flex items-center space-x-4 group">
                    <div className="w-28 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={v.imageUrl} alt={v.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div>
                        <p className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{v.title}</p>
                        <p className="text-sm text-slate-500">{v.description}</p>
                    </div>
                    </Link>
                ))}
                </div>
            </section>
        </div>
    </div>
  );
};

const ExploreNutritionView: React.FC = () => {
    const featuredItem = activityItems.find(i => i.id === 'receita-smoothie-verde');
    const otherItems = activityItems.filter(i => i.category === 'nutrition' && i.id !== 'receita-smoothie-verde');
    
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.classList.add('cursor-grabbing');
    };

    const onMouseLeave = () => {
        if (!scrollContainerRef.current) return;
        setIsDragging(false);
        scrollContainerRef.current.classList.remove('cursor-grabbing');
    };

    const onMouseUp = () => {
        if (!scrollContainerRef.current) return;
        setIsDragging(false);
        scrollContainerRef.current.classList.remove('cursor-grabbing');
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="bg-slate-50 min-h-full pb-24 overflow-y-auto">
            <div className="pt-6 space-y-8">
                {featuredItem && (
                    <div className="px-6">
                        <section>
                            <h2 className="text-lg font-semibold text-slate-800 mb-3">Receita em Destaque</h2>
                            <Link to={`/detail/activity/${featuredItem.id}`} className="block relative rounded-xl overflow-hidden h-44 group shadow-lg">
                                <img src={featuredItem.imageUrl as string} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt={featuredItem.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                                    <div className="absolute top-4 left-4 bg-green-400 p-2 rounded-full">
                                        <HeartIcon className="w-4 h-4 text-black" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm uppercase text-white tracking-wider">FÁCIL E SAUDÁVEL</p>
                                        <p className="font-bold text-2xl uppercase text-white">{featuredItem.title}</p>
                                    </div>
                                </div>
                            </Link>
                        </section>
                    </div>
                )}
                <section className="space-y-3 w-full">
                    <div className="flex justify-between items-center mb-1 px-6">
                        <h2 className="text-lg font-semibold text-slate-800">Dicas de Alimentação</h2>
                    </div>
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
                        onMouseDown={onMouseDown}
                        onMouseLeave={onMouseLeave}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMove}
                    >
                        <div className="flex space-x-4 px-6 pb-2 snap-x snap-mandatory select-none">
                            {otherItems.map(item => (
                                <Link to={`/detail/activity/${item.id}`} key={item.id} draggable="false" className="flex-shrink-0 w-40 h-52 relative rounded-xl group shadow-md snap-start bg-white p-3 flex flex-col justify-between transition-all hover:shadow-lg hover:-translate-y-1">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.bgColor}`}>
                                        <item.Icon className={`w-6 h-6 ${item.textColor}`} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-md leading-tight text-slate-800">{item.title}</p>
                                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="px-6 pt-2 space-y-4">
                    <h2 className="text-lg font-semibold text-slate-800">Para Ler</h2>
                     <div className="space-y-4">
                        {articles.map(article => (
                            <Link to={`/detail/article/${article.id}`} key={article.id} className="flex items-center space-x-4 group bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover"/>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{article.title}</p>
                                    <p className="text-sm text-slate-500 line-clamp-2">{article.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

const TrackerView: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-full p-6 space-y-6 pt-0 pb-24">
           <header>
              <h1 className="text-3xl font-bold text-slate-800">Hoje</h1>
           </header>
           <section className="bg-white rounded-3xl p-4 shadow-sm">
              <CalorieTrackerRing nutrition={dailyNutrition} />
              <div className="grid grid-cols-3 gap-4 mt-6">
                {macros.map(macro => (
                  <MacroProgressBar key={macro.name} macro={macro} />
                ))}
              </div>
           </section>
           <section className="space-y-3">
             {meals.map(meal => (
               <MealCard key={meal.id} meal={meal} />
             ))}
           </section>
        </div>
    );
};


const NutritionView: React.FC<{
    activeTab: 'hoje' | 'explorar';
    setActiveTab: (tab: 'hoje' | 'explorar') => void;
}> = ({ activeTab, setActiveTab }) => {
    
    const renderNutritionContent = () => {
        switch (activeTab) {
            case 'hoje': return <TrackerView />;
            case 'explorar': return <ExploreNutritionView />;
            default: return null;
        }
    }

    const motionProps = {
        key: activeTab,
        initial: { opacity: 0, x: activeTab === 'hoje' ? -10 : 10 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: activeTab === 'hoje' ? 10 : -10 },
        transition: { duration: 0.2 },
    };

    return (
        <div className="h-full flex flex-col bg-slate-50">
            <div className="flex-shrink-0 p-4 sticky top-0 bg-slate-50 z-10">
                <div className="flex items-center justify-center p-1 bg-slate-200 rounded-xl max-w-sm mx-auto">
                    <button
                        onClick={() => setActiveTab('hoje')}
                        className={`w-full py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'hoje' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'}`}
                    >
                        Minha Dieta
                    </button>
                    <button
                        onClick={() => setActiveTab('explorar')}
                        className={`w-full py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'explorar' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'}`}
                    >
                        Explorar Nutrição
                    </button>
                </div>
            </div>
            <div className="flex-grow">
                <AnimatePresence mode="wait">
                  <motion.div
                    {...motionProps}
                    className="h-full"
                  >
                    {renderNutritionContent()}
                  </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};


const ResourcePosterCard: React.FC<{ item: PodcastItemType | ResourceItemType }> = ({ item }) => {
    const { id, title, imageUrl } = item;
    const type = 'audioUrl' in item ? 'podcast' : 'resource';
    const link = `/detail/${type}/${id}`;

    return (
        <Link to={link} draggable="false" className="flex-shrink-0 w-36 snap-start group">
            <div className="w-36 h-52 relative rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                <img src={imageUrl} alt={title} draggable="false" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <h4 className="mt-2 font-semibold text-sm text-slate-700 group-hover:text-indigo-600 transition-colors truncate">{title}</h4>
        </Link>
    );
};

const ResourceRow: React.FC<{ title: string; items: (PodcastItemType | ResourceItemType)[] }> = ({ title, items }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.classList.add('cursor-grabbing');
    };

    const onMouseLeave = () => {
        if (!scrollContainerRef.current || !isDragging) return;
        setIsDragging(false);
        scrollContainerRef.current.classList.remove('cursor-grabbing');
        scrollContainerRef.current.classList.add('cursor-grab');
    };

    const onMouseUp = () => {
        if (!scrollContainerRef.current) return;
        setIsDragging(false);
        scrollContainerRef.current.classList.remove('cursor-grabbing');
        scrollContainerRef.current.classList.add('cursor-grab');
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3 px-6">{title}</h2>
            <div
                ref={scrollContainerRef}
                className="overflow-x-auto no-scrollbar cursor-grab"
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                <div className="flex space-x-4 px-6 pb-4 snap-x snap-mandatory select-none">
                    {items.map((item) => <ResourcePosterCard key={item.id} item={item} />)}
                </div>
            </div>
        </section>
    );
};


const ResourcesView: React.FC = () => (
    <div className="bg-slate-50 min-h-full pb-24 overflow-y-auto pt-6 space-y-8">
       <ResourceRow title="Podcasts em Destaque" items={podcastItems} />
       <ResourceRow title="Guias e E-books" items={resourceItems} />
       <ResourceRow title="Artigos Essenciais" items={articles.map(a => ({...a, type: a.type === 'ARTICLE' ? 'guide' : 'ebook'}))} />
    </div>
);

const AcademyPage: React.FC = () => {
  const [activeView, setActiveView] = useState<'progress' |'academy' | 'nutrition' | 'resources'>('progress');
  const [activeNutritionTab, setActiveNutritionTab] = useState<'hoje' | 'explorar'>('hoje');


  const renderContent = () => {
    switch (activeView) {
      case 'progress': return <ProgressView />;
      case 'academy': return <AcademyView />;
      case 'nutrition': return <NutritionView activeTab={activeNutritionTab} setActiveTab={setActiveNutritionTab} />;
      case 'resources': return <ResourcesView />;
      default: return null;
    }
  };
  
  const motionContainerProps = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
  };
  
  const motionContentProps = {
      key:activeView,
      initial:{ opacity: 0, y: 10 },
      animate:{ opacity: 1, y: 0 },
      exit:{ opacity: 0, y: -10 },
      transition:{ duration: 0.2 },
  };

  return (
    <motion.div
      {...motionContainerProps}
      className="flex flex-col h-full bg-slate-50 overflow-hidden"
    >
      <header className="flex-shrink-0 grid grid-cols-4 items-center justify-around p-2 bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
        <HeaderButton icon={ChartBarIcon} label="Progresso" active={activeView === 'progress'} onClick={() => setActiveView('progress')} />
        <HeaderButton icon={FireIcon} label="Academia" active={activeView === 'academy'} onClick={() => setActiveView('academy')} />
        <HeaderButton icon={ForkKnifeIcon} label="Nutrição" active={activeView === 'nutrition'} onClick={() => setActiveView('nutrition')} />
        <HeaderButton icon={BookmarkIcon} label="Recursos" active={activeView === 'resources'} onClick={() => setActiveView('resources')} />
      </header>
      
      <main className="flex-grow overflow-y-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            {...motionContentProps}
            className="absolute top-0 left-0 w-full h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </motion.div>
  );
};

const HeaderButton: React.FC<{icon: React.FC<any>, label: string, active: boolean, onClick: () => void}> = ({ icon: Icon, label, active, onClick }) => (
    <button onClick={onClick} className={`flex-grow flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${active ? 'bg-indigo-100 text-indigo-600' : 'text-slate-500 hover:bg-slate-100'}`} aria-label={label} aria-pressed={active}>
        <Icon className="h-6 w-6" />
    </button>
);


export default AcademyPage;