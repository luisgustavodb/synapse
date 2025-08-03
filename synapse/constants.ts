
import type { MoodData, Feeling, Insight, Article, Psychologist, User } from './types';
import { ArticleIcon } from './components/icons/ArticleIcon';
import { TipIcon } from './components/icons/TipIcon';

export const weeklyMoodData: MoodData[] = [
  { day: 'Mon', value: 60 },
  { day: 'Tue', value: 55 },
  { day: 'Wed', value: 65 },
  { day: 'Thu', value: 60 },
  { day: 'Fri', value: 50 },
  { day: 'Sat', value: 80 },
  { day: 'Sun', value: 75 },
];

export const feelings: Feeling[] = [
  { name: 'Happy', emoji: '😄' },
  { name: 'Calm', emoji: '😌' },
  { name: 'Sad', emoji: '😞' },
  { name: 'Angry', emoji: '😠' },
  { name: 'Anxious', emoji: '😟' },
];

export const insightsData: Insight[] = [
  {
    title: 'Cognitive Distortions',
    value: 80,
    label: 'Catastrophizing',
    color: '#f472b6', // pink-400
  },
  {
    title: 'Attachment Styles',
    value: 45,
    label: 'Anxious-Preoccupied',
    color: '#60a5fa', // blue-400
  },
];

export const articles: Article[] = [
    {
        type: 'ARTICLE',
        title: 'Understanding Anxiety',
        description: 'Causes, symptoms, and effective coping strategies.',
        Icon: ArticleIcon,
    },
    {
        type: 'TIP',
        title: 'Mindfulness Meditation',
        description: 'Reduce stress and improve focus with guided sessions.',
        Icon: TipIcon,
    }
];

export const psychologists: Psychologist[] = [
    {
        id: '1',
        name: 'Dr. Evelyn Reed',
        specialty: 'Cognitive Behavioral Therapy (CBT)',
        bio: 'Specializes in helping young adults navigate anxiety, stress, and life transitions with a compassionate, evidence-based approach.',
        avatarUrl: 'https://i.pravatar.cc/150?img=25',
    },
    {
        id: '2',
        name: 'Dr. Marcus Thorne',
        specialty: 'Mindfulness & Stress Reduction',
        bio: 'Expert in mindfulness techniques to manage burnout and digital fatigue. Helps clients build resilience and find balance.',
        avatarUrl: 'https://i.pravatar.cc/150?img=60',
    },
    {
        id: '3',
        name: 'Dr. Chloe Davis',
        specialty: 'Relationship & Attachment Theory',
        bio: 'Focuses on helping individuals understand their attachment styles to build healthier, more secure relationships.',
        avatarUrl: 'https://i.pravatar.cc/150?img=47',
    },
];

export const currentUser: User = {
    name: 'Alex Rivera',
    avatarUrl: 'https://i.pravatar.cc/150?img=32',
};
