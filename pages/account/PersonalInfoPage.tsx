
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../../context/UserContext';
import { ArrowLeftIcon } from '../../components/icons/ArrowLeftIcon';
import { useGoBack } from '../../hooks/useGoBack';

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

const PersonalInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const goBack = useGoBack('/account');
  const { user, updateUser } = useUser();

  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatarUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setAvatar(reader.result as string);
          };
          reader.readAsDataURL(file);
      }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ name, avatarUrl: avatar });
    navigate('/account');
  };
  
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
        <button onClick={goBack} className="p-2 rounded-full hover:bg-slate-200" aria-label="Voltar">
          <ArrowLeftIcon className="h-6 w-6 text-slate-500" />
        </button>
        <h1 className="text-xl font-bold text-slate-800 mx-auto pr-8">Informações Pessoais</h1>
      </header>
      <main className="flex-grow overflow-y-auto p-6 space-y-6">
        <div className="flex flex-col items-center space-y-4">
            <div className="relative">
                <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full object-cover shadow-md" />
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleAvatarChange}
                    accept="image/*"
                    hidden
                />
                <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute -bottom-1 -right-1 bg-slate-800 text-white rounded-full h-7 w-7 flex items-center justify-center hover:opacity-80 transition-opacity" 
                    aria-label="Alterar foto do perfil"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 3.732z" />
                    </svg>
                </button>
            </div>
        </div>
        
        <form className="space-y-4" onSubmit={handleSave}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-500 mb-1">Nome</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white border border-slate-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-800 text-sm" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-500 mb-1">Email</label>
                <input type="email" id="email" defaultValue="alex.rivera@email.com" readOnly className="w-full bg-slate-200 border border-slate-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-800 text-sm" />
            </div>
             <div>
                <label htmlFor="dob" className="block text-sm font-medium text-slate-500 mb-1">Data de Nascimento</label>
                <input type="text" id="dob" defaultValue="15 de Maio, 1998" readOnly className="w-full bg-slate-200 border border-slate-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-800 text-sm" />
            </div>
            <div className="pt-4">
                 <button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-colors">
                    Salvar Alterações
                </button>
            </div>
        </form>
      </main>
    </motion.div>
  );
};

export default PersonalInfoPage;
