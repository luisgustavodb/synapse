
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, Transition } from 'framer-motion';
import { currentUser } from '../constants';
import SettingsListItem from '../components/SettingsListItem';
import { UserCircleIcon } from '../components/icons/UserCircleIcon';
import { BellIcon } from '../components/icons/BellIcon';
import { ShieldCheckIcon } from '../components/icons/ShieldCheckIcon';
import { QuestionMarkCircleIcon } from '../components/icons/QuestionMarkCircleIcon';
import { ArrowRightOnRectangleIcon } from '../components/icons/ArrowRightOnRectangleIcon';
import { StarIcon } from '../components/icons/StarIcon';
import { ChartBarIcon } from '../components/icons/ChartBarIcon';
import { PuzzlePieceIcon } from '../components/icons/PuzzlePieceIcon';
import { GiftIcon } from '../components/icons/GiftIcon';
import { InformationCircleIcon } from '../components/icons/InformationCircleIcon';


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

const AccountPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="overflow-y-auto space-y-6 p-6"
    >
      <header className="flex flex-col items-center space-y-4">
        <div className="relative">
            <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-24 h-24 rounded-full object-cover shadow-md" />
            <div className="absolute -bottom-1 -right-1 bg-slate-100 p-0.5 rounded-full">
                <button className="bg-slate-700 text-white rounded-full h-7 w-7 flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Editar foto do perfil">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 3.732z" />
                    </svg>
                </button>
            </div>
        </div>
        <h1 className="text-2xl font-bold text-slate-800">{currentUser.name}</h1>
      </header>

      <Link to="/account/subscription" className="bg-white rounded-3xl p-5 shadow-md block hover:bg-slate-50 transition-colors">
        <div className="flex items-center space-x-3">
          <div className="bg-amber-100 p-3 rounded-xl">
             <StarIcon className="h-6 w-6 text-amber-500" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800">Membro Synapse+</h3>
            <p className="text-sm text-slate-500">Assinatura ativa até Dez 2024</p>
          </div>
        </div>
      </Link>
      
      <div className="bg-white rounded-3xl shadow-md">
        <div className="divide-y divide-slate-100">
            <SettingsListItem to="/account/personal-info" Icon={UserCircleIcon} label="Informações Pessoais" />
            <SettingsListItem to="/account/progress" Icon={ChartBarIcon} label="Meu Progresso" />
            <SettingsListItem to="/account/notifications" Icon={BellIcon} label="Notificações" />
            <SettingsListItem to="/account/integrations" Icon={PuzzlePieceIcon} label="Integrações" />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-md">
        <div className="divide-y divide-slate-100">
            <SettingsListItem to="/account/privacy" Icon={ShieldCheckIcon} label="Privacidade e Dados" />
            <SettingsListItem to="/account/support" Icon={QuestionMarkCircleIcon} label="Ajuda e Suporte" />
            <SettingsListItem to="/account/invite" Icon={GiftIcon} label="Convidar Amigos" />
            <SettingsListItem to="/account/about" Icon={InformationCircleIcon} label="Sobre o Synapse" />
        </div>
      </div>

      <div className="pt-2">
        <button 
          onClick={() => navigate('/login')}
          className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors">
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span>Sair</span>
        </button>
      </div>
    </motion.div>
  );
};

export default AccountPage;
