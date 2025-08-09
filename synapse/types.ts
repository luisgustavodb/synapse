import React from 'react';

export interface MoodData {
  day: string;
  value: number;
}

export interface Feeling {
  name: string;
  emoji: string;
}

export interface Insight {
  title: string;
  value: number;
  label: string;
  color: string;
}

export interface Article {
  id: string;
  type: 'ARTICLE' | 'TIP';
  title:string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  imageUrl: string;
  content: string;
}

export interface ActivityItem {
    id: string;
    category: 'workout' | 'meditation' | 'nutrition';
    title: string;
    description: string;
    duration: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    bgColor: string;
    textColor: string;
    imageUrl?: string;
    videoUrl?: string;
    audioUrl?: string;
    content: string;
}

export interface PodcastItem {
    id: string;
    category: 'podcast';
    title: string;
    description: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    imageUrl: string;
    audioUrl: string;
    content: string; // Show notes
}

export interface ResourceItem {
    id: string;
    type: 'guide' | 'ebook';
    title: string;
    description: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    imageUrl: string;
    content: string;
}


export interface NavItem {
  path: string;
  label: string;
  Icon: React.FC<{ className?: string }>;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export interface Professional {
    id: string;
    name: string;
    specialty: string;
    bio: string;
    avatarUrl: string;
    paymentStatus: 'paid' | 'overdue';
}

export interface User {
    name: string;
    avatarUrl: string;
    handle: string;
    bio: string;
    followers: number;
    following: number;
}

export interface FeedPost {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string; // emoji or image url
  };
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

export interface Notification {
  id: string;
  user: {
    name: string;
    avatar: string; // emoji or image url
  };
  type: 'like' | 'comment' | 'follow' | 'system';
  content: string;
  timestamp: string;
  isRead: boolean;
  postThumbnail?: string; // Optional image URL for the post related to the notification
}

export interface ChatConversation {
  id: string;
  user: {
    name: string;
    avatar: string; // emoji or image url
  };
  lastMessage: string;
  timestamp: string;
  isRead: boolean;
}


// Nutrition Types
export interface DailyNutrition {
    consumed: number;
    goal: number;
    burned: number;
}

export interface Macro {
    name: 'Carboidratos' | 'Proteína' | 'Gordura';
    consumed: number;
    goal: number;
    color: string;
}

export interface Meal {
    id: string;
    name: string;
    calories: number;
    goal: number;
    icon: string; // Emoji
}

// Progress Types
export interface ProgressChartData {
  week: string;
  workouts: number;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  currentProgress: number;
  target: number;
  unit: string;
}

export interface Achievement {
  id: string;
  title: string;
  unlocked: boolean;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}