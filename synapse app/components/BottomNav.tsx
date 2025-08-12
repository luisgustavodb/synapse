
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import type { NavItem } from '../types';
import { HomeIcon } from './icons/HomeIcon';
import { ChatIcon } from './icons/ChatIcon';
import { PsychologistsIcon } from './icons/PsychologistsIcon';
import { AccountIcon } from './icons/AccountIcon';
import { LeafIcon } from './icons/LeafIcon';

const navItems: NavItem[] = [
  { path: '/', label: 'Início', Icon: HomeIcon },
  { path: '/academy', label: 'Explorar', Icon: LeafIcon },
  { path: '/chat', label: 'Chat IA', Icon: ChatIcon },
  { path: '/psychologists', label: 'Especialistas', Icon: PsychologistsIcon },
  { path: '/account', label: 'Conta', Icon: AccountIcon },
];

const BottomNav: React.FC = () => {
  
  const activeLink = 'text-indigo-600 dark:text-indigo-400 scale-110';
  const inactiveLink = 'text-slate-500 dark:text-slate-400';

  return (
    <nav className="flex-shrink-0 w-full h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 mx-auto max-w-md">
      <div className="flex justify-around items-center h-full">
        {navItems.map(({ path, label, Icon }) => (
          <ReactRouterDOM.NavLink
            key={path}
            to={path}
            end={path === '/'}
            aria-label={label}
            className={({ isActive }) => 
              `flex items-center justify-center transition-all duration-200 transform ${isActive ? activeLink : inactiveLink} hover:text-indigo-500 dark:hover:text-indigo-400`
            }
          >
            <Icon className="h-7 w-7" />
          </ReactRouterDOM.NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;