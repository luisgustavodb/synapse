
import React, { useState, useRef } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { groupClasses } from '../../constants';
import { FireIcon } from '../../components/icons/FireIcon';
import { CalendarPlusIcon } from '../../components/icons/CalendarPlusIcon';
import { createIcsFile } from '../../utils/calendar';

const AcademyView: React.FC = () => {
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
    
    const parseClassTime = (timeString: string): Date | null => {
        const now = new Date();
        const parts = timeString.split(', ');
        if (parts.length !== 2) return null;

        const dayPart = parts[0].toUpperCase();
        const hourPart = parseInt(parts[1].replace('H', ''), 10);
        if (isNaN(hourPart)) return null;

        const targetDate = new Date(now);
        targetDate.setHours(hourPart, 0, 0, 0);

        if (dayPart === 'HOJE') {
            // date is already today
        } else if (dayPart === 'AMANHÃ') {
            targetDate.setDate(now.getDate() + 1);
        } else {
            const weekdays: { [key: string]: number } = { 'DOM': 0, 'SEG': 1, 'TER': 2, 'QUA': 3, 'QUI': 4, 'SEX': 5, 'SAB': 6 };
            const targetDay = weekdays[dayPart];
            if (targetDay === undefined) return null;

            const currentDay = now.getDay();
            let dayDifference = targetDay - currentDay;
            if (dayDifference <= 0) { // If it's today or a past day of the week, move to next week
                dayDifference += 7;
            }
            targetDate.setDate(now.getDate() + dayDifference);
        }

        return targetDate;
    };
    
    const handleAddToCalendar = (classInfo: { title: string, time: string }) => {
        const startTime = parseClassTime(classInfo.time);
        if (!startTime) {
            alert('Não foi possível adicionar ao calendário. Formato de data inválido.');
            return;
        }

        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Add 1 hour
        const description = `Participe da aula de ${classInfo.title} no Synapse.`;
        
        createIcsFile(classInfo.title, description, startTime, endTime);
    };

  return (
    <div className="bg-white dark:bg-slate-900 min-h-full pb-16">
        <div className="pt-6 space-y-8">
            <div className="px-6">
                <header>
                    <p className="text-sm text-slate-500 dark:text-slate-400">BOM DIA,</p>
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Marina</h1>
                </header>
            </div>
            
            <div className="px-6">
                <section>
                    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Academia</h2>
                    <ReactRouterDOM.Link to="/workouts" className="block relative rounded-xl overflow-hidden h-44 group">
                        <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Pessoa se preparando para treinar com pesos" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent flex flex-col justify-end p-4">
                            <div className="absolute top-4 left-4 bg-yellow-400 p-2 rounded-full">
                                <FireIcon className="w-4 h-4 text-black" />
                            </div>
                            <div>
                                <p className="font-bold text-sm uppercase text-white tracking-wider">ENTRE EM AÇÃO</p>
                                <p className="font-bold text-2xl uppercase text-white">EXPLORE OS TREINOS</p>
                            </div>
                        </div>
                    </ReactRouterDOM.Link>
                </section>
            </div>

            <section className="space-y-3 w-full">
                <div className="flex justify-between items-center mb-1 px-6">
                    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Aulas coletivas</h2>
                    <ReactRouterDOM.Link to="/group-classes" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">Ver todas</ReactRouterDOM.Link>
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
                        {groupClasses.slice(0, 5).map(c => (
                        <ReactRouterDOM.Link to={`/group-class/${c.id}`} key={c.id} draggable="false" className="flex-shrink-0 w-36 h-48 relative rounded-xl overflow-hidden group snap-start">
                            <img src={c.imageUrl} alt={c.title} draggable="false" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex flex-col justify-end p-3">
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleAddToCalendar(c);
                                    }}
                                    className="absolute top-2 right-2 z-10 p-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                                    aria-label="Adicionar ao calendário"
                                >
                                    <CalendarPlusIcon className="w-4 h-4" />
                                </button>
                                <p className="text-xs font-bold text-white uppercase">{c.time}</p>
                                <p className="font-bold text-lg leading-tight text-white">{c.title}</p>
                            </div>
                        </ReactRouterDOM.Link>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="px-6 pt-2 space-y-4">
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Novos vídeos</h2>
                <div className="space-y-4">
                {newVideos.map(v => (
                    <ReactRouterDOM.Link to="#" key={v.id} className="flex items-center space-x-4 group">
                    <div className="w-28 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={v.imageUrl} alt={v.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div>
                        <p className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{v.title}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{v.description}</p>
                    </div>
                    </ReactRouterDOM.Link>
                ))}
                </div>
            </section>
        </div>
    </div>
  );
};

export default AcademyView;