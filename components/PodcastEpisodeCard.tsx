
import React from 'react';
import { Link } from 'react-router-dom';
import type { PodcastItem } from '../types';

interface PodcastEpisodeCardProps {
    episode: PodcastItem;
}

const PodcastEpisodeCard: React.FC<PodcastEpisodeCardProps> = ({ episode }) => {
    return (
        <Link to={`/detail/podcast/${episode.id}`} className="block group">
            <div className="aspect-square w-full bg-slate-200 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg">
                <img src={episode.imageUrl} alt={episode.title} className="w-full h-full object-cover"/>
            </div>
            <div className="mt-2">
                <h3 className="font-semibold text-slate-800 leading-tight text-sm group-hover:text-indigo-600 transition-colors line-clamp-2">{episode.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-1">{episode.creator}</p>
            </div>
        </Link>
    );
};

export default PodcastEpisodeCard;
