import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SettingsListItem from '../components/SettingsListItem';
import { UserCircleIcon } from '../components/icons/UserCircleIcon';
import { BellIcon } from '../components/icons/BellIcon';
import { ShieldCheckIcon } from '../components/icons/ShieldCheckIcon';
import { QuestionMarkCircleIcon } from '../components/icons/QuestionMarkCircleIcon';
import { ArrowRightOnRectangleIcon } from '../components/icons/ArrowRightOnRectangleIcon';
import { PuzzlePieceIcon } from '../components/icons/PuzzlePieceIcon';
import { GiftIcon } from '../components/icons/GiftIcon';
import { InformationCircleIcon } from '../components/icons/InformationCircleIcon';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';

const pageVariants = {
  initial: { opacity: 0, x: '100%' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100%' },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
} as const;

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();

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
      className="h-full flex flex-col"
    >
        <header className="flex items-center p-4 border-b border-slate-200 flex-shrink-0">
            <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-slate-200" aria-label="Voltar">
                <ArrowLeftIcon className="h-6 w-6 text-slate-500" />
            </button>
            <h1 className="text-xl font-bold text-slate-800 mx-auto pr-8">Configurações</h1>
        </header>

        <main className="overflow-y-auto space-y-6 p-6">
            <div className="bg-white rounded-3xl shadow-md">
                <div className="divide-y divide-slate-100">
                    <SettingsListItem to="/account/personal-info" Icon={UserCircleIcon} label="Informações Pessoais" />
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
        </main>
    </motion.div>
  );
};

export default SettingsPage;