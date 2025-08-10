
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { feedPosts, storyHighlights, userStories, achievements, achievementCategoryStyles } from '../constants';
import StoryView from '../components/StoryView';
import type { StoryHighlight, AchievementCategory } from '../types';
import FollowList from '../components/FollowList';
import AchievementCard from '../components/AchievementCard';
import UserInfoCard from '../components/UserInfoCard';
import HighlightCard from '../components/HighlightCard';


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


const FilterButton: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
            isActive ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
        }`}
    >
        {label}
    </button>
);


const AccountPage: React.FC = () => {
    const { user } = useUser();
    const [activeTab, setActiveTab] = useState<'posts' | 'progress'>('posts');
    const [viewingHighlight, setViewingHighlight] = useState<StoryHighlight | null>(null);
    const [isFollowListOpen, setIsFollowListOpen] = useState(false);
    const [initialFollowTab, setInitialFollowTab] = useState<'followers' | 'following'>('followers');
    const [activeCategoryFilter, setActiveCategoryFilter] = useState<AchievementCategory | null>(null);

    const userPosts = useMemo(() => feedPosts.filter(post => post.author.handle === user.handle), [user.handle]);

    const filteredAchievements = useMemo(() => {
        if (!activeCategoryFilter) {
            return achievements;
        }
        return achievements.filter(a => a.category === activeCategoryFilter);
    }, [activeCategoryFilter]);

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
        <motion.div
            {...motionProps}
            className="flex flex-col h-full bg-slate-100"
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
                        <h2 className="text-sm font-bold text-slate-500 mb-2 px-1">Coleções</h2>
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
                <div className="bg-white sticky top-0 z-10 border-y border-slate-200">
                    <div className="grid grid-cols-2">
                        <TabButton label="Publicações" isActive={activeTab === 'posts'} onClick={() => setActiveTab('posts')} />
                        <TabButton label="Jornada" isActive={activeTab === 'progress'} onClick={() => setActiveTab('progress')} />
                    </div>
                </div>

                {/* Content based on active tab */}
                <div className="p-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                             key={activeTab}
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             transition={{ duration: 0.2 }}
                        >
                            {activeTab === 'posts' && (
                                <div className="grid grid-cols-2 gap-3">
                                    {userPosts.map(post => (
                                        <Link to={`/detail/post/${post.id}`} key={post.id} className="aspect-square bg-slate-200 rounded-lg overflow-hidden transition-transform duration-200 active:scale-95">
                                            <img src={post.imageUrl} alt={post.caption} className="w-full h-full object-cover" />
                                        </Link>
                                    ))}
                                </div>
                            )}
                            
                            {activeTab === 'progress' && (
                                <div className="space-y-4">
                                    <h2 className="text-xl font-bold text-slate-800">Conquistas</h2>
                                    
                                    <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-2">
                                        <FilterButton 
                                            label="Todas" 
                                            isActive={!activeCategoryFilter} 
                                            onClick={() => setActiveCategoryFilter(null)} 
                                        />
                                        {Object.keys(achievementCategoryStyles).map(cat => (
                                            <FilterButton 
                                                key={cat} 
                                                label={achievementCategoryStyles[cat as AchievementCategory].label} 
                                                isActive={activeCategoryFilter === cat} 
                                                onClick={() => setActiveCategoryFilter(cat as AchievementCategory)} 
                                            />
                                        ))}
                                    </div>

                                    <motion.div layout className="space-y-3">
                                        <AnimatePresence>
                                        {filteredAchievements.map(achievement => (
                                        <motion.div
                                                key={achievement.id}
                                                layout
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <AchievementCard achievement={achievement} />
                                            </motion.div>
                                        ))}
                                        </AnimatePresence>
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
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
        </motion.div>
    );
};


const TabButton: React.FC<{label: string, isActive: boolean, onClick: () => void}> = ({label, isActive, onClick}) => {
    return (
        <button 
            onClick={onClick} 
            className={`flex justify-center items-center py-3 transition-colors relative focus:outline-none focus-visible:bg-slate-100 ${isActive ? 'text-slate-800' : 'text-slate-500 hover:text-slate-800'}`}
            aria-selected={isActive}
        >
            <span className="font-semibold text-sm">{label}</span>
            {isActive && <motion.div className="absolute bottom-0 h-0.5 w-full bg-slate-800" layoutId="profile-tab-underline" />}
        </button>
    )
}


export default AccountPage;
