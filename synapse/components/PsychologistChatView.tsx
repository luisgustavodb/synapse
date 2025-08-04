import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, Transition } from 'framer-motion';
import { createChat } from '../services/gemini';
import type { ChatMessage, Psychologist } from '../types';
import { SendIcon } from './icons/SendIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import type { Chat } from '@google/genai';

const pageVariants = {
  initial: { opacity: 0, x: '100%' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100%' },
};

const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

interface PsychologistChatViewProps {
    psychologist: Psychologist;
    onClose: () => void;
}

const PsychologistChatView: React.FC<PsychologistChatViewProps> = ({ psychologist, onClose }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [chat, setChat] = useState<Chat | null>(null);
    
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        try {
            const initialMessageText = `Olá, eu sou ${psychologist.name}. Como especialista em ${psychologist.specialty}, estou aqui para ajudar. Sobre o que você gostaria de conversar?`;
            
            const chatInstance = createChat(true, psychologist.name, psychologist.specialty, psychologist.bio);
            setChat(chatInstance);
            
            setMessages([
                {
                    id: crypto.randomUUID(),
                    text: initialMessageText,
                    sender: 'ai',
                },
            ]);
            setError(null);
        } catch (e: unknown) {
            const errorMessage = e instanceof Error ? e.message : "Ocorreu um erro desconhecido.";
            console.error("A inicialização do chat falhou:", errorMessage);
            setError("O serviço de chat de IA está indisponível. Isso pode ser devido a uma configuração de chave de API ausente.");
        }
    }, [psychologist]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        if (!chat) {
             const errorResponse: ChatMessage = {
                id: crypto.randomUUID(),
                text: "Não foi possível conectar ao serviço de chat. Por favor, verifique a sua configuração.",
                sender: 'ai',
            };
            setMessages((prev) => [...prev, errorResponse]);
            return;
        }

        const userInput: ChatMessage = {
            id: crypto.randomUUID(),
            text: input.trim(),
            sender: 'user',
        };

        setMessages((prev) => [...prev, userInput]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: userInput.text });
            const aiResponse: ChatMessage = {
                id: crypto.randomUUID(),
                text: response.text,
                sender: 'ai',
            };
            setMessages((prev) => [...prev, aiResponse]);
        } catch (err) {
            console.error("Erro ao enviar mensagem para o Gemini:", err);
            const errorResponse: ChatMessage = {
                id: crypto.randomUUID(),
                text: "Estou com um pouco de dificuldade para me conectar agora. Por favor, tente novamente em um momento.",
                sender: 'ai',
            };
            setMessages((prev) => [...prev, errorResponse]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="h-full flex flex-col absolute top-0 left-0 right-0 bottom-0 bg-slate-100"
        >
            <header className="flex items-center p-4 border-b border-slate-200 flex-shrink-0">
                <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200" aria-label="Voltar">
                    <ArrowLeftIcon className="h-6 w-6 text-slate-500" />
                </button>
                <div className="flex flex-col items-center flex-grow -ml-4">
                    <h1 className="text-xl font-bold text-slate-800">{psychologist.name}</h1>
                    <p className="text-sm text-blue-500">{psychologist.specialty}</p>
                </div>
            </header>
            
            <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs md:max-w-md lg:max-w-lg rounded-2xl px-4 py-3 shadow-sm ${
                                msg.sender === 'user'
                                    ? "bg-blue-500 text-white rounded-br-none"
                                    : "bg-white text-slate-800 rounded-bl-none"
                            }`}
                        >
                            <p className="text-sm break-words">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white text-slate-800 rounded-2xl px-4 py-3 shadow-sm rounded-bl-none">
                           <div className="flex items-center space-x-2">
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce"></span>
                           </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <footer className="p-4 bg-white/80 backdrop-blur-sm border-t border-slate-200 flex-shrink-0">
                <form onSubmit={handleSend} className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={error ? error : "Digite sua mensagem..."}
                        className="flex-grow bg-slate-100 border border-slate-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-slate-800 text-sm"
                        disabled={isLoading || !!error}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim() || !!error}
                        className="bg-blue-500 text-white rounded-full p-3 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Enviar mensagem"
                    >
                        <SendIcon className="h-5 w-5" />
                    </button>
                </form>
            </footer>
        </motion.div>
    );
};

export default PsychologistChatView;