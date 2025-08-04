import type { MoodData, Feeling, Insight, Article, Psychologist, User, PodcastItem, ResourceItem, ActivityItem } from './types';
import { ArticleIcon } from './components/icons/ArticleIcon';
import { TipIcon } from './components/icons/TipIcon';
import { PlayIcon } from './components/icons/PlayIcon';
import { BookOpenIcon } from './components/icons/BookOpenIcon';
import { FireIcon } from './components/icons/FireIcon';
import { SparklesIcon } from './components/icons/SparklesIcon';
import { HeartIcon } from './components/icons/HeartIcon';


export const weeklyMoodData: MoodData[] = [
  { day: 'Seg', value: 60 },
  { day: 'Ter', value: 55 },
  { day: 'Qua', value: 65 },
  { day: 'Qui', value: 60 },
  { day: 'Sex', value: 50 },
  { day: 'Sáb', value: 80 },
  { day: 'Dom', value: 75 },
];

export const feelings: Feeling[] = [
  { name: 'Feliz', emoji: '😄' },
  { name: 'Calmo', emoji: '😌' },
  { name: 'Triste', emoji: '😞' },
  { name: 'Irritado', emoji: '😠' },
  { name: 'Ansioso', emoji: '😟' },
];

export const insightsData: Insight[] = [
  {
    title: 'Distorções Cognitivas',
    value: 80,
    label: 'Catastrofização',
    color: '#f472b6', // pink-400
  },
  {
    title: 'Estilos de Apego',
    value: 45,
    label: 'Ansioso-Preocupado',
    color: '#60a5fa', // blue-400
  },
];

export const articles: Article[] = [
    {
        id: 'entendendo-a-ansiedade',
        type: 'ARTICLE',
        title: 'Entendendo a Ansiedade',
        description: 'Causas, sintomas e estratégias eficazes.',
        Icon: ArticleIcon,
        imageUrl: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDEzfHxzdHJlc3MlMjByZWxpZWZ8ZW58MHx8fHwxNzE5OTM5NTkyfDA&ixlib=rb-4.0.3&q=80&w=400',
        content: `A ansiedade é uma resposta natural do corpo ao estresse. É um sentimento de medo ou apreensão sobre o que está por vir. O primeiro dia de aula, uma entrevista de emprego ou um discurso podem causar ansiedade em muitas pessoas. Mas se os seus sentimentos de ansiedade são extremos, duram mais de seis meses e estão interferindo na sua vida, você pode ter um transtorno de ansiedade.\n\nSintomas Comuns:\n- Sentimento de nervosismo, agitação ou tensão.\n- Ter uma sensação de perigo iminente, pânico ou desgraça.\n- Ter um aumento da frequência cardíaca.\n- Respirar rapidamente (hiperventilação).\n\nEstratégias de Gerenciamento:\n1. Técnicas de Relaxamento: Práticas como meditação, mindfulness e respiração profunda podem ajudar a acalmar a mente.\n2. Exercício Físico: A atividade física regular é uma ótima maneira de aliviar o estresse e melhorar o humor.\n3. Terapia: A Terapia Cognitivo-Comportamental (TCC) é particularmente eficaz para transtornos de ansiedade.`,
    },
    {
        id: 'meditacao-mindfulness',
        type: 'TIP',
        title: 'Meditação Mindfulness de 5 Minutos',
        description: 'Reduza o estresse e melhore o foco com 5 min.',
        Icon: TipIcon,
        imageUrl: 'https://images.unsplash.com/photo-1506126613408-4e63a5f4bd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDR8fG1lZGl0YXRpb258ZW58MHx8fHwxNzE5OTM5NjM4fDA&ixlib=rb-4.0.3&q=80&w=400',
        content: `A meditação mindfulness é uma prática que pode ser feita em qualquer lugar. Esta técnica rápida de 5 minutos pode ajudar a recentralizar sua mente e reduzir o estresse.\n\nPasso 1: Encontre um lugar tranquilo.\nSente-se em uma posição confortável, com a coluna ereta, mas não rígida. Você pode sentar em uma cadeira com os pés no chão ou de pernas cruzadas no chão.\n\nPasso 2: Feche os olhos e respire.\nComece prestando atenção à sua respiração. Sinta o ar entrando e saindo do seu corpo. Não tente mudar a forma como você respira; apenas observe.\n\nPasso 3: Observe seus pensamentos.\nSua mente irá divagar. Isso é normal. Quando perceber que seus pensamentos se desviaram, reconheça-os gentilmente, sem julgamento, e traga seu foco de volta à sua respiração.\n\nPasso 4: Sinta seu corpo.\nPercorra mentalmente seu corpo, dos pés à cabeça. Note quaisquer sensações — calor, frio, formigamento, tensão — sem julgá-las.\n\nPasso 5: Termine com gentileza.\nQuando os 5 minutos terminarem, traga lentamente sua atenção de volta ao ambiente ao seu redor. Abra os olhos. Observe como você se sente agora.`,
    },
];

export const activityItems: ActivityItem[] = [
    {
        id: 'energia-matinal',
        category: 'workout',
        title: 'Energia Matinal',
        description: 'Comece o dia com um treino leve de cardio.',
        duration: '20 min',
        Icon: FireIcon,
        bgColor: 'bg-orange-100',
        textColor: 'text-orange-500',
        videoUrl: 'https://www.youtube.com/embed/g_tea8ZN-ZE',
        content: `Este treino de 20 minutos foi projetado para aumentar sua frequência cardíaca e energizar seu corpo para o dia que se inicia.\n\nEstrutura:\n- Aquecimento (3 minutos): Comece com polichinelos, corrida no lugar e alongamentos dinâmicos.\n- Circuito 1 (2x): 45 segundos de cada exercício, com 15 segundos de descanso entre eles. Burpees, agachamentos com salto, flexões.\n- Circuito 2 (2x): 45 segundos de cada exercício, com 15 segundos de descanso. Alpinistas, prancha, afundos alternados.\n- Desaquecimento (3 minutos): Alongamentos estáticos, focando nos principais grupos musculares trabalhados.`
    },
    {
        id: 'foco-e-clareza',
        category: 'meditation',
        title: 'Foco e Clareza',
        description: 'Meditação para melhorar a concentração.',
        duration: '10 min',
        Icon: SparklesIcon,
        bgColor: 'bg-purple-100',
        textColor: 'text-purple-500',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        content: `Esta meditação guiada de 10 minutos ajuda a treinar sua atenção e a cultivar um estado de clareza mental.\n\nInstruções:\n1. Encontre uma posição sentada confortável.\n2. Feche os olhos suavemente e comece a seguir o som da minha voz.\n3. Traga sua atenção para a sua respiração, o ponto de âncora para sua mente.\n4. Sempre que um pensamento surgir, simplesmente reconheça-o e retorne suavemente sua atenção à respiração.\n5. Permaneça neste estado de observação calma pelo tempo da meditação.`
    },
     {
        id: 'alimentacao-consciente',
        category: 'nutrition',
        title: 'Alimentação Consciente',
        description: 'Aprenda a ouvir os sinais do seu corpo.',
        duration: '5 min',
        Icon: HeartIcon,
        bgColor: 'bg-red-100',
        textColor: 'text-red-500',
        imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDF8fGhlYWx0aHklMjBmb29kfGVufDB8fHx8MTcxOTkzOTc2M3ww&ixlib=rb-4.0.3&q=80&w=400',
        content: `A alimentação consciente é a prática de estar totalmente presente durante as refeições, prestando atenção aos sinais de fome e saciedade do seu corpo e aos sabores, texturas e cheiros da comida.\n\nDicas para começar:\n- Coma devagar e sem distrações: Desligue a TV e guarde o celular.\n- Aprecie sua comida: Observe as cores, cheiros e texturas.\n- Ouça seu corpo: Coma quando estiver com fome e pare quando estiver satisfeito, não estufado.`
    },
];


export const podcastItems: PodcastItem[] = [
    {
        id: 'mente-calma-ep1',
        category: 'podcast',
        title: 'Podcast: Mente Calma',
        description: 'Episódio sobre como lidar com a sobrecarga digital.',
        Icon: PlayIcon,
        imageUrl: 'https://images.unsplash.com/photo-1554371053-43c223c4a4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDEwfHxwYXN0ZWwlMjBtaWNyb3Bob25lfGVufDB8fHx8MTcxOTkzOTgzMHww&ixlib=rb-4.0.3&q=80&w=400',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        content: `Episódio 1: Sobrevivendo à Sobrecarga Digital\nNeste episódio, conversamos com a especialista em bem-estar digital, Dra. Anya Sharma, sobre estratégias práticas para estabelecer limites saudáveis com a tecnologia, evitar o burnout e redescobrir a alegria da desconexão. \n\nTópicos abordados:\n- O que é fadiga digital?\n- A técnica do "detox digital".\n- Como criar um ambiente de trabalho mais focado.\n- Dicas para melhorar a qualidade do sono.`
    },
];

export const resourceItems: ResourceItem[] = [
    {
        id: 'guia-burnout',
        type: 'guide',
        title: 'Guia para Lidar com Burnout',
        description: 'Um guia prático com passos para identificar e combater o burnout.',
        Icon: BookOpenIcon,
        imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3ac4abd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDV8fGJvb2slMjBndWlkZXxlbnwwfHx8fDE3MTk5Mzk4OTN8MA&ixlib=rb-4.0.3&q=80&w=400',
        content: `Guia Prático: Identificando e Combatendo o Burnout\nO burnout é um estado de exaustão emocional, física e mental causado por estresse excessivo e prolongado. Ele pode fazer você se sentir sobrecarregado, emocionalmente esgotado e incapaz de atender às demandas constantes.\n\nEtapa 1: Reconheça os Sinais\n- Exaustão crônica\n- Sentimentos de cinismo e distanciamento do trabalho\n- Sensação de ineficácia e falta de realização\n\nEtapa 2: Busque Apoio\n- Converse com seu supervisor, amigos ou familiares.\n- Procure um profissional de saúde mental.\n\nEtapa 3: Reavalie suas Prioridades\n- Defina limites claros entre trabalho e vida pessoal.\n- Aprenda a dizer "não".\n- Reserve tempo para relaxamento e hobbies.`
    },
    {
        id: 'ebook-mindfulness',
        type: 'ebook',
        title: 'E-book: A Arte do Mindfulness',
        description: 'Um e-book completo sobre como integrar o mindfulness no seu dia a dia.',
        Icon: BookOpenIcon,
        imageUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDR8fGVib29rfGVufDB8fHx8fDE3MTk5Mzk5NDR8MA&ixlib=rb-4.0.3&q=80&w=400',
        content: `Introdução à Arte do Mindfulness\nEste e-book é seu companheiro para iniciar uma jornada transformadora de mindfulness. Mindfulness, ou atenção plena, é a prática de intencionalmente focar sua atenção no momento presente, sem julgamento. É uma habilidade que pode ser cultivada através da meditação e de outras práticas.\n\nCapítulo 1: O Que é Mindfulness?\nExploramos as origens e os benefícios cientificamente comprovados da atenção plena, incluindo a redução do estresse, a melhoria do foco e o aumento da inteligência emocional.\n\nCapítulo 2: Primeiros Passos\nUm guia prático com exercícios simples para iniciantes, como a meditação da respiração e a varredura corporal.`
    },
];


export const psychologists: Psychologist[] = [
    {
        id: '1',
        name: 'Dra. Evelyn Reed',
        specialty: 'Terapia Cognitivo-Comportamental (TCC)',
        bio: 'Especializada em ajudar jovens adultos a navegar pela ansiedade, estresse e transições de vida com uma abordagem compassiva e baseada em evidências.',
        avatarUrl: 'https://i.pravatar.cc/150?img=25',
    },
    {
        id: '2',
        name: 'Dr. Marcus Thorne',
        specialty: 'Mindfulness e Redução de Estresse',
        bio: 'Especialista em técnicas de mindfulness para gerenciar o burnout e a fadiga digital. Ajuda os clientes a construir resiliência e encontrar equilíbrio.',
        avatarUrl: 'https://i.pravatar.cc/150?img=60',
    },
    {
        id: '3',
        name: 'Dra. Chloe Davis',
        specialty: 'Relacionamento e Teoria do Apego',
        bio: 'Focada em ajudar indivíduos a entenderem seus estilos de apego para construir relacionamentos mais saudáveis e seguros.',
        avatarUrl: 'https://i.pravatar.cc/150?img=47',
    },
];

export const currentUser: User = {
    name: 'Alex Rivera',
    avatarUrl: 'https://i.pravatar.cc/150?img=32',
};