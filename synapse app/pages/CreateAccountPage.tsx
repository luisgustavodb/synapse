
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { motion } from 'framer-motion';

const CreateAccountPage: React.FC = () => {
    const navigate = ReactRouterDOM.useNavigate();

    const handleCreateAccount = (e: React.FormEvent) => {
        e.preventDefault();
        // Em um app real, aqui haveria a lógica de criação de conta.
        // Para este protótipo, apenas navegamos para a home.
        navigate('/');
    };

    const motionProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 },
    };

    return (
        <motion.div 
            {...motionProps}
            className="h-full w-full flex flex-col"
        >
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1820')" }}>
                <div className="absolute inset-0 bg-slate-900/70"></div>
            </div>
            <div className="relative z-10 flex flex-col flex-grow justify-end p-8 text-white">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold">Junte-se ao Synapse</h1>
                    <p className="text-slate-300">Comece hoje sua jornada de autocuidado.</p>
                </header>
                <form className="space-y-4" onSubmit={handleCreateAccount}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nome</label>
                        <input type="text" id="name" placeholder="Seu nome completo" className="w-full bg-white/20 border border-white/30 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-slate-300 text-sm" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                        <input type="email" id="email" placeholder="seu.email@exemplo.com" className="w-full bg-white/20 border border-white/30 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-slate-300 text-sm" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">Senha</label>
                        <input type="password" id="password" placeholder="Crie uma senha forte" className="w-full bg-white/20 border border-white/30 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-slate-300 text-sm" />
                    </div>
                    <div className="pt-4">
                         <button type="submit" className="w-full bg-white hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-colors">
                            Criar Conta
                        </button>
                    </div>
                </form>
                 <p className="text-center text-sm mt-6 text-slate-300">
                    Já tem uma conta?{' '}
                    <ReactRouterDOM.Link to="/login" className="font-bold text-white hover:underline">
                        Faça login
                    </ReactRouterDOM.Link>
                </p>
            </div>
        </motion.div>
    );
};

export default CreateAccountPage;