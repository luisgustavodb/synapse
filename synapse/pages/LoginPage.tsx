
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Em um app real, aqui haveria a lógica de autenticação.
        // Para este protótipo, apenas navegamos para a home.
        navigate('/');
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full flex flex-col"
        >
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506126613408-4e63a5f4bd40?auto=format&fit=crop&q=80&w=1887')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 flex flex-col flex-grow justify-end p-8 text-white">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold">Bem-vindo de Volta</h1>
                    <p className="text-slate-300">Continue sua jornada de bem-estar.</p>
                </header>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                        <input type="email" id="email" placeholder="seu.email@exemplo.com" className="w-full bg-white/20 border border-white/30 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-slate-300 text-sm" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">Senha</label>
                        <input type="password" id="password" placeholder="********" className="w-full bg-white/20 border border-white/30 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-slate-300 text-sm" />
                    </div>
                    <div className="text-right">
                        <button type="button" className="text-sm font-medium text-slate-300 hover:text-white">Esqueci minha senha</button>
                    </div>
                    <div className="pt-4">
                         <button type="submit" className="w-full bg-white hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-colors">
                            Entrar
                        </button>
                    </div>
                </form>
                 <p className="text-center text-sm mt-6 text-slate-300">
                    Não tem uma conta?{' '}
                    <Link to="/create-account" className="font-bold text-white hover:underline">
                        Crie uma agora
                    </Link>
                </p>
            </div>
        </motion.div>
    );
};

export default LoginPage;
