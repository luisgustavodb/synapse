
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { feedPosts } from '../constants';
import FeedPostCard from '../components/FeedPostCard';
import AdFeedCard from '../components/AdFeedCard';
import { MessageIcon } from '../components/icons/MessageIcon';
import { BellIcon } from '../components/icons/BellIcon';
import NotificationsPanel from '../components/NotificationsPanel';
import ChatPanel from '../components/ChatPanel';
import { LeafIcon } from '../components/icons/LeafIcon';

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


const HomePage: React.FC = () => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const motionProps = {
        initial: "initial",
        animate: "in",
        exit: "out",
        variants: pageVariants,
        transition: pageTransition,
    };

    const filteredPosts = feedPosts.filter(post =>
        searchQuery === '' ||
        post.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.handle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <motion.div
            {...motionProps}
        >
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-20 bg-slate-100/80 backdrop-blur-sm border-b border-slate-200 h-[68px]">
                <AnimatePresence mode="wait">
                    {isSearchOpen ? (
                        <motion.div
                            key="search-bar"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center w-full h-full px-4 space-x-2"
                        >
                            <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                   <LeafIcon className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="search"
                                    placeholder="Pesquisar no Synapse..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white border border-slate-300 rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-slate-800 text-sm"
                                    aria-label="Pesquisar"
                                    autoFocus
                                />
                            </div>
                            <button 
                                onClick={() => {
                                    setIsSearchOpen(false);
                                    setSearchQuery('');
                                }}
                                className="text-sm font-semibold text-slate-600 hover:text-indigo-600 p-2 flex-shrink-0"
                            >
                                Cancelar
                            </button>
                        </motion.div>
                    ) : (
                         <motion.header
                            key="header"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-between p-4 w-full h-full"
                        >
                            <h1 className="text-2xl font-bold text-slate-800 tracking-tighter">Synapse</h1>
                            <div className="flex items-center space-x-2 sm:space-x-4">
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="p-1 text-slate-500 hover:text-indigo-600"
                                    aria-label="Pesquisar"
                                >
                                    <LeafIcon className="h-6 w-6" />
                                </button>
                                <button 
                                    onClick={() => setIsNotificationsOpen(prev => !prev)}
                                    className="p-1 relative text-slate-500 hover:text-indigo-600" 
                                    aria-label="Notificações"
                                >
                                    <BellIcon className="h-6 w-6" />
                                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white"></span>
                                </button>
                                <button 
                                    onClick={() => setIsChatOpen(true)}
                                    className="p-1 text-slate-500 hover:text-indigo-600" 
                                    aria-label="Mensagens"
                                >
                                    <MessageIcon className="h-7 w-7" />
                                </button>
                            </div>
                        </motion.header>
                    )}
                </AnimatePresence>
            </div>

            <NotificationsPanel isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
            <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

            <div className="pt-20 space-y-4 pb-24">
                {filteredPosts.map(post => (
                    post.type === 'ad'
                        ? <AdFeedCard key={post.id} post={post} />
                        : <FeedPostCard key={post.id} post={post} />
                ))}
            </div>
        </motion.div>
    );
};

export default HomePage;