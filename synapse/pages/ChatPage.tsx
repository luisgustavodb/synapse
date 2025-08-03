import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { getChatInstance } from '../services/gemini';
import type { ChatMessage } from '../types';
import { SendIcon } from '../components/icons/SendIcon';
import { ExclamationTriangleIcon } from '../components/icons/ExclamationTriangleIcon';

const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const chatRef = useRef<ReturnType<typeof getChatInstance> | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        try {
            chatRef.current = getChatInstance();
            setMessages([
                {
                    id: crypto.randomUUID(),
                    text: "Hello! I'm Synapse, your personal wellness companion. How are you feeling today? Feel free to share what's on your mind.",
                    sender: 'ai',
                },
            ]);
        } catch (e: unknown) {
            const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
            console.error("Chat initialization failed:", errorMessage);
            setError("The AI chat service is currently unavailable. This may be due to a missing API key configuration.");
        }
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chatRef.current) return;

        const userInput: ChatMessage = {
            id: crypto.randomUUID(),
            text: input.trim(),
            sender: 'user',
        };

        setMessages((prev) => [...prev, userInput]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chatRef.current.sendMessage({ message: userInput.text });
            const aiResponse: ChatMessage = {
                id: crypto.randomUUID(),
                text: response.text,
                sender: 'ai',
            };
            setMessages((prev) => [...prev, aiResponse]);
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            const errorResponse: ChatMessage = {
                id: crypto.randomUUID(),
                text: "I'm having a little trouble connecting right now. Please try again in a moment.",
                sender: 'ai',
            };
            setMessages((prev) => [...prev, errorResponse]);
        } finally {
            setIsLoading(false);
        }
    };

    if (error) {
        return (
            <div className="h-full flex flex-col bg-slate-50 pb-20">
                <header className="text-center p-6 border-b border-slate-200">
                    <h1 className="text-3xl font-bold text-slate-800">AI Chat</h1>
                    <p className="text-sm text-slate-500">Your personal wellness companion</p>
                </header>
                <main className="flex-grow flex items-center justify-center p-6">
                    <div className="text-center bg-white p-8 rounded-3xl shadow-md max-w-sm w-full mx-4">
                        <div className="flex justify-center mb-4">
                            <div className="bg-red-100 p-3 rounded-full">
                                <ExclamationTriangleIcon className="h-8 w-8 text-red-500" />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-slate-800">Service Unavailable</h2>
                        <p className="text-slate-500 mt-2">{error}</p>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-slate-50">
            <header className="text-center p-6 border-b border-slate-200">
              <h1 className="text-3xl font-bold text-slate-800">AI Chat</h1>
              <p className="text-sm text-slate-500">Your personal wellness companion</p>
            </header>
            
            <main className="flex-grow p-4 space-y-4 overflow-y-auto">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs md:max-w-md lg:max-w-lg rounded-2xl px-4 py-3 shadow-sm ${
                                msg.sender === 'user'
                                    ? 'bg-pink-500 text-white rounded-br-none'
                                    : 'bg-white text-slate-700 rounded-bl-none'
                            }`}
                        >
                            <p className="text-sm break-words">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white text-slate-700 rounded-2xl px-4 py-3 shadow-sm rounded-bl-none">
                           <div className="flex items-center space-x-2">
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce"></span>
                           </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </main>

            <footer className="p-4 bg-white/80 backdrop-blur-sm border-t border-slate-200">
                <form onSubmit={handleSend} className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-grow bg-slate-100 border-slate-200 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="bg-pink-500 text-white rounded-full p-3 disabled:bg-pink-300 disabled:cursor-not-allowed transition-colors"
                        aria-label="Send message"
                    >
                        <SendIcon className="h-5 w-5" />
                    </button>
                </form>
            </footer>
        </div>
    );
};

export default ChatPage;
