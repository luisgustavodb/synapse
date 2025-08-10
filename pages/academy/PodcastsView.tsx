
import React from 'react';
import { motion } from 'framer-motion';
import { podcastCategories } from '../../constants';
import PodcastCategoryCard from '../../components/PodcastCategoryCard';

const PodcastsView: React.FC = () => {
    return (
        <div className="p-4 sm:p-6 pb-24">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800">Podcasts</h1>
                <p className="text-slate-500">Explore categorias e descubra novos episódios.</p>
            </header>
            <motion.div 
                layout
                className="grid grid-cols-2 gap-4"
            >
                {podcastCategories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                        <PodcastCategoryCard category={category} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default PodcastsView;
