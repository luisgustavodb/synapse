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
  title: string;
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

export interface Psychologist {
    id: string;
    name: string;
    specialty: string;
    bio: string;
    avatarUrl: string;
}

export interface User {
    name:string;
    avatarUrl: string;
}