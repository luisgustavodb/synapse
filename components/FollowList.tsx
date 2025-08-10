import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { followersList as initialFollowers, followingList as initialFollowing } from '../constants';
import type { RelatedUser } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { LeafIcon } from './icons/LeafIcon';

interface FollowListProps {
    initialTab: 'followers' | 'following';
    onClose: () => void;
}

const UserRow: React.FC<{
    user: RelatedUser;
    onToggleFollow: (userId: string) => void;
}> = ({ user, onToggleFollow }) => {
    const isAvatarUrl = user.avatarUrl.startsWith('http');

    const FollowButton = () => {
        if (user.followingStatus === 'following') {
            return (
                <button
                    onClick={() => onToggleFollow(user.id)}
                    className="text-sm font-semibold bg-white border border-slate-300 text-slate-700 px-5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors flex-shrink-0"
                >
                    Seguindo
                </button>
            );
        }
        return (
            <button
                onClick={() => onToggleFollow(user.id)}
                className="text-sm font-semibold bg-blue-500 text-white px-5 py-1.5 rounded-lg hover:bg-blue-600 transition-colors flex-shrink-0"
            >
                Seguir
            </button>
        );
    };

    return (
        <div className="flex items-center p-3 space-x-3 hover:bg-slate-100 transition-colors">
             <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xl overflow-hidden ${!isAvatarUrl ? 'bg-slate-200' : ''}`}>
                {isAvatarUrl ? (
                    <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                    user.avatarUrl
                )}
            </div>
            <div className="flex-grow overflow-hidden">
                <p className="font-bold text-slate-800 truncate text-sm">{user.name}</p>
                <p className="text-sm text-slate-500 truncate">{user.handle}</p>
            </div>
            <FollowButton />
        </div>
    );
};


const FollowList: React.FC<FollowListProps> = ({ initialTab, onClose }) => {
    const { user: currentUser } = useUser();
    const [activeTab, setActiveTab] = useState(initialTab);
    const [searchQuery, setSearchQuery] = useState('');

    const [followers, setFollowers] = useState(initialFollowers);
    const [following, setFollowing] = useState(initialFollowing);

    const handleToggleFollow = (userId: string) => {
        const updateUserList = (list: RelatedUser[]) => list.map((u): RelatedUser => {
            if (u.id === userId) {
                return { ...u, followingStatus: u.followingStatus === 'following' ? 'not_following' : 'following' };
            }
            return u;
        });

        setFollowers(updateUserList(followers));
        setFollowing(updateUserList(following));
    };

    const motionProps = {
        initial: { x: '100%' },
        animate: { x: 0 },
        exit: { x: '100%' },
        transition: { type: 'tween', ease: 'easeInOut', duration: 0.3 } as const,
    };

    const activeUsers = useMemo(() => {
        const list = activeTab === 'followers' ? followers : following;
        return list.filter(u =>
            u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.handle.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [activeTab, followers, following, searchQuery]);

    const activeTabStyle = "border-b-2 border-slate-800 text-slate-800";
    const inactiveTabStyle = "border-b-2 border-transparent text-slate-500";

    return (
        <motion.div {...motionProps} className="fixed inset-0 bg-slate-50 z-50 flex flex-col">
            <header className="flex-shrink-0 bg-slate-50/80 backdrop-blur-sm sticky top-0 z-10">
                <div className="flex items-center p-4 border-b border-slate-200">
                    <div className="flex-1 flex justify-start">
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200" aria-label="Voltar">
                            <ArrowLeftIcon className="h-6 w-6 text-slate-600" />
                        </button>
                    </div>
                    <h1 className="text-lg font-bold text-slate-800 flex-1 text-center">{currentUser.handle}</h1>
                    <div className="flex-1"></div>
                </div>
                <nav className="grid grid-cols-2">
                     <button
                        onClick={() => setActiveTab('followers')}
                        className={`py-3 text-sm font-semibold transition-colors ${activeTab === 'followers' ? activeTabStyle : inactiveTabStyle}`}
                     >
                         {followers.length} Seguidores
                     </button>
                     <button
                        onClick={() => setActiveTab('following')}
                        className={`py-3 text-sm font-semibold transition-colors ${activeTab === 'following' ? activeTabStyle : inactiveTabStyle}`}
                     >
                         {following.length} Seguindo
                     </button>
                </nav>
            </header>

            <div className="p-4 flex-shrink-0 border-b border-slate-200">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LeafIcon className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="search"
                        placeholder="Pesquisar..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-200/70 border border-transparent rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-slate-800 text-sm"
                        aria-label="Pesquisar seguidores"
                    />
                </div>
            </div>

            <main className="flex-grow overflow-y-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        {activeUsers.length > 0 ? (
                             <div className="divide-y divide-slate-200/70">
                                {activeUsers.map(u => <UserRow key={u.id} user={u} onToggleFollow={handleToggleFollow} />)}
                            </div>
                        ) : (
                            <div className="text-center p-10 text-slate-500">
                                <p className="font-semibold">Nenhum usuário encontrado</p>
                                <p className="text-sm">Tente uma busca diferente.</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>
        </motion.div>
    );
};

export default FollowList;