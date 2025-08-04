import React from 'react';
import { NavLink } from 'react-router-dom';
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
  { path: '/psychologists', label: 'Psicólogos', Icon: PsychologistsIcon },
  { path: '/account', label: 'Conta', Icon: AccountIcon },
];

const BottomNav: React.FC = () => {
  
  const activeLink = 'text-indigo-600';
  const inactiveLink = 'text-slate-500';

  return (
    <nav className="flex-shrink-0 w-full h-20 bg-white/80 backdrop-blur-sm border-t border-slate-200 mx-auto max-w-md">
      <div className="flex justify-around items-center h-full">
        {navItems.map(({ path, label, Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) => 
              `flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${isActive ? activeLink : inactiveLink}`
            }
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;