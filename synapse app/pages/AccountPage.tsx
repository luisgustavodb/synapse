
import React, { useState, useMemo, ElementType } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { feedPosts, storyHighlights, userStories } from '../constants';
import StoryView from '../components/StoryView';
import type { StoryHighlight } from '../types';
import FollowList from '../components/FollowList';
import UserInfoCard from '../components/UserInfoCard';
import HighlightCard from '../components/HighlightCard';
import MyProgressPage from './account/MyProgressPage';


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

const MotionDiv = motion.div as ElementType;

const AccountPage: React.FC = () => {
    const { user } = useUser();
    const [activeTab, setActiveTab] = useState<'posts' | 'progress'>('posts');
    const [viewingHighlight, setViewingHighlight] = useState<StoryHighlight | null>(null);
    const [isFollowListOpen, setIsFollowListOpen] = useState(false);
    const [initialFollowTab, setInitialFollowTab] = useState<'followers' | 'following'>('followers');

    const userPosts = useMemo(() => feedPosts.filter(post => post.author.handle === user.handle), [user.handle]);

    const userMainStory: StoryHighlight = {
        id: 'user-main-story',
        label: user.name,
        coverUrl: user.avatarUrl,
        stories: userStories,
    };
    
    const motionProps = {
        initial:"initial",
        animate:"in",
        exit:"out",
        variants:pageVariants,
        transition:pageTransition
    };
    
    const openFollowers = () => {
        setInitialFollowTab('followers');
        setIsFollowListOpen(true);
    };

    const openFollowing = () => {
        setInitialFollowTab('following');
        setIsFollowListOpen(true);
    };

    const openAvatarStory = () => {
        if (userStories.length > 0) {
            setViewingHighlight(userMainStory);
        }
    };

    return (
        <MotionDiv
            {...motionProps}
            className="flex flex-col h-full bg-slate-100 dark:bg-slate-950"
        >
            <main className="flex-grow overflow-y-auto">
                <div className="p-4 space-y-4">
                    <UserInfoCard 
                        user={user} 
                        postCount={userPosts.length}
                        hasStories={userStories.length > 0}
                        onAvatarClick={openAvatarStory}
                        onFollowersClick={openFollowers}
                        onFollowingClick={openFollowing}
                    />

                    <section>
                        <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 px-1">Coleções</h2>
                        <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar pb-2">
                             <HighlightCard isAddNew onClick={() => alert('Add new highlight!')} />
                             {storyHighlights.map(highlight => (
                                <HighlightCard 
                                    key={highlight.id} 
                                    highlight={highlight} 
                                    onClick={() => setViewingHighlight(highlight)}
                                />
                            ))}
                        </div>
                    </section>
                </div>
                
                {/* View Tabs */}
                <div className="bg-white dark:bg-slate-900 sticky top-0 z-10 border-y border-slate-200 dark:border-slate-700">
                    <div className="grid grid-cols-2">
                        <TabButton label="Publicações" isActive={activeTab === 'posts'} onClick={() => setActiveTab('posts')} />
                        <TabButton label="Jornada" isActive={activeTab === 'progress'} onClick={() => setActiveTab('progress')} />
                    </div>
                </div>

                {/* Content based on active tab */}
                <div className="p-4">
                    {activeTab === 'posts' && (
                        <div className="grid grid-cols-2 gap-3">
                            {userPosts.map(post => (
                                <ReactRouterDOM.Link to={`/detail/post/${post.id}`} key={post.id} className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden transition-transform duration-200 active:scale-95">
                                    <img src={post.imageUrl} alt={post.caption} className="w-full h-full object-cover" />
                                </ReactRouterDOM.Link>
                            ))}
                        </div>
                    )}
                    
                    {activeTab === 'progress' && (
                        <MyProgressPage />
                    )}
                </div>
            </main>
             <AnimatePresence>
                {viewingHighlight && (
                    <StoryView 
                        highlight={viewingHighlight} 
                        onClose={() => setViewingHighlight(null)} 
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isFollowListOpen && (
                    <FollowList
                        initialTab={initialFollowTab}
                        onClose={() => setIsFollowListOpen(false)}
                    />
                )}
            </AnimatePresence>
        </MotionDiv>
    );
};


const TabButton: React.FC<{label: string, isActive: boolean, onClick: () => void}> = ({label, isActive, onClick}) => {
    return (
        <button 
            onClick={onClick} 
            className={`flex justify-center items-center py-3 transition-colors relative focus:outline-none focus-visible:bg-slate-100 dark:focus-visible:bg-slate-800 ${isActive ? 'text-slate-800 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
            aria-selected={isActive}
        >
            <span className="font-semibold text-sm">{label}</span>
            {isActive && <div className="absolute bottom-0 h-0.5 w-full bg-slate-800 dark:bg-slate-100" />}
        </button>
    )
}


export default AccountPage;