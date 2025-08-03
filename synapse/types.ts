
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
  type: 'ARTICLE' | 'TIP';
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
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
    name: string;
    avatarUrl: string;
}
