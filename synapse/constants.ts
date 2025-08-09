
import type { MoodData, Feeling, Insight, Article, Professional, User, PodcastItem, ResourceItem, ActivityItem, FeedPost, DailyNutrition, Macro, Meal, Notification, ChatConversation, ProgressChartData, Goal, Achievement } from './types';
import { ArticleIcon } from './components/icons/ArticleIcon';
import { TipIcon } from './components/icons/TipIcon';
import { PlayIcon } from './components/icons/PlayIcon';
import { BookOpenIcon } from './components/icons/BookOpenIcon';
import { FireIcon } from './components/icons/FireIcon';
import { SparklesIcon } from './components/icons/SparklesIcon';
import { ForkKnifeIcon } from './components/icons/ForkKnifeIcon';
import { TrophyIcon } from './components/icons/TrophyIcon';


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
        duration: 'Leitura de 5 min',
        Icon: ForkKnifeIcon,
        bgColor: 'bg-red-100',
        textColor: 'text-red-500',
        imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDF8fGhlYWx0aHklMjBmb29kfGVufDB8fHx8fDE3MTk5Mzk3NjN8MA&ixlib=rb-4.0.3&q=80&w=400',
        content: `A alimentação consciente é a prática de estar totalmente presente durante as refeições, prestando atenção aos sinais de fome e saciedade do seu corpo e aos sabores, texturas e cheiros da comida.\n\nDicas para começar:\n- Coma devagar e sem distrações: Desligue a TV e guarde o celular.\n- Aprecie sua comida: Observe as cores, cheiros e texturas.\n- Ouça seu corpo: Coma quando estiver com fome e pare quando estiver satisfeito, não estufado.`
    },
    {
        id: 'receita-smoothie-verde',
        category: 'nutrition',
        title: 'Receita: Smoothie Verde Detox',
        description: 'Energia e nutrientes em um copo.',
        duration: '5 min',
        Icon: ForkKnifeIcon,
        bgColor: 'bg-green-100',
        textColor: 'text-green-500',
        imageUrl: 'https://images.unsplash.com/photo-1578351574193-35a14a5a1f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        content: 'Um smoothie delicioso e nutritivo para começar o dia.\n\nIngredientes:\n- 1 xícara de espinafre fresco\n- 1/2 banana congelada\n- 1/2 maçã verde\n- 1/4 de abacate\n- 1 colher de sopa de sementes de chia\n- 1 xícara de água de coco ou leite de amêndoas\n\nModo de Preparo:\n1. Adicione todos os ingredientes no liquidificador.\n2. Bata até obter uma consistência cremosa e homogênea.\n3. Sirva imediatamente e aproveite!'
    },
    {
        id: 'guia-hidratacao',
        category: 'nutrition',
        title: 'Guia de Hidratação Essencial',
        description: 'Beba água da forma certa para mais energia.',
        duration: 'Leitura de 3 min',
        Icon: ForkKnifeIcon,
        bgColor: 'bg-sky-100',
        textColor: 'text-sky-500',
        imageUrl: 'https://images.unsplash.com/photo-1523362628745-0c100150b5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        content: 'Manter-se hidratado é crucial para a saúde física e mental. A água ajuda a regular a temperatura corporal, a lubrificar as articulações e a otimizar a função cerebral.\n\nDicas para se manter hidratado:\n- Beba pelo menos 8 copos (2 litros) de água por dia.\n- Tenha sempre uma garrafa de água por perto.\n- Consuma alimentos ricos em água, como melancia, pepino e laranjas.\n- Beba antes, durante e após a prática de exercícios.\n- Observe a cor da sua urina: ela deve ser clara, de um amarelo-pálido.'
    }
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

export const professionalsByCategory: Record<string, Professional[]> = {
    psychologists: [
        {
            id: 'psy1',
            name: 'Dra. Evelyn Reed',
            specialty: 'Terapia Cognitivo-Comportamental (TCC)',
            bio: 'Especializada em ajudar jovens adultos a navegar pela ansiedade, estresse e transições de vida com uma abordagem compassiva e baseada em evidências.',
            avatarUrl: 'https://i.pravatar.cc/150?img=25',
            paymentStatus: 'paid',
        },
        {
            id: 'psy2',
            name: 'Dr. Marcus Thorne',
            specialty: 'Mindfulness e Redução de Estresse',
            bio: 'Especialista em técnicas de mindfulness para gerenciar o burnout e a fadiga digital. Ajuda os clientes a construir resiliência e encontrar equilíbrio.',
            avatarUrl: 'https://i.pravatar.cc/150?img=60',
            paymentStatus: 'overdue',
        },
        {
            id: 'psy3',
            name: 'Dra. Chloe Davis',
            specialty: 'Relacionamento e Teoria do Apego',
            bio: 'Focada em ajudar indivíduos a entenderem seus estilos de apego para construir relacionamentos mais saudáveis e seguros.',
            avatarUrl: 'https://i.pravatar.cc/150?img=47',
            paymentStatus: 'paid',
        },
        {
            id: 'psy4',
            name: 'Dr. Leonardo Farias',
            specialty: 'Terapia de Aceitação e Compromisso',
            bio: 'Ajudo a desenvolver flexibilidade psicológica para lidar com pensamentos e sentimentos difíceis, focando no que realmente importa.',
            avatarUrl: 'https://i.pravatar.cc/150?img=58',
            paymentStatus: 'paid',
        },
        {
            id: 'psy5',
            name: 'Dra. Sofia Mendes',
            specialty: 'Psicologia Positiva',
            bio: 'Foco em cultivar forças, bem-estar e uma vida mais significativa e feliz, utilizando intervenções baseadas na ciência da felicidade.',
            avatarUrl: 'https://i.pravatar.cc/150?img=32',
            paymentStatus: 'overdue',
        },
    ],
    nutritionists: [
        {
            id: 'nut1',
            name: 'Dr. Ricardo Alves',
            specialty: 'Nutrição Esportiva',
            bio: 'Otimize seu desempenho e recuperação com um plano alimentar personalizado para seus treinos e metas.',
            avatarUrl: 'https://i.pravatar.cc/150?img=68',
            paymentStatus: 'paid',
        },
        {
            id: 'nut2',
            name: 'Dra. Beatriz Lima',
            specialty: 'Nutrição Funcional',
            bio: 'Vamos investigar a causa raiz dos seus problemas de saúde e criar um plano alimentar que nutre seu corpo de dentro para fora.',
            avatarUrl: 'https://i.pravatar.cc/150?img=40',
            paymentStatus: 'paid',
        },
        {
            id: 'nut3',
            name: 'Dra. Clara Ribeiro',
            specialty: 'Comportamento Alimentar',
            bio: 'Desenvolva uma relação mais saudável e intuitiva com a comida, sem dietas restritivas e com foco no bem-estar.',
            avatarUrl: 'https://i.pravatar.cc/150?img=43',
            paymentStatus: 'overdue',
        },
        {
            id: 'nut4',
            name: 'Dr. Fernando Costa',
            specialty: 'Nutrição Clínica',
            bio: 'Planos alimentares para controle de doenças crônicas como diabetes, hipertensão e colesterol alto.',
            avatarUrl: 'https://i.pravatar.cc/150?img=18',
            paymentStatus: 'paid',
        },
        {
            id: 'nut5',
            name: 'Dra. Laura Gomes',
            specialty: 'Nutrição Materno-Infantil',
            bio: 'Acompanhamento nutricional para gestantes, lactantes e crianças, garantindo saúde para mãe e bebê.',
            avatarUrl: 'https://i.pravatar.cc/150?img=35',
            paymentStatus: 'paid',
        },
    ],
    personalTrainers: [
        {
            id: 'pt1',
            name: 'Lucas Pereira',
            specialty: 'Treinamento de Força e Hipertrofia',
            bio: 'Vamos construir o físico dos seus sonhos com treinos intensos, seguros e eficientes, focados em ganho de massa muscular.',
            avatarUrl: 'https://i.pravatar.cc/150?img=14',
            paymentStatus: 'overdue',
        },
        {
            id: 'pt2',
            name: 'Ana Clara Santos',
            specialty: 'HIIT e Condicionamento Físico',
            bio: 'Aulas de alta intensidade para queimar calorias, aumentar a resistência e definir o corpo de forma dinâmica e divertida.',
            avatarUrl: 'https://i.pravatar.cc/150?img=20',
            paymentStatus: 'paid',
        },
        {
            id: 'pt3',
            name: 'Pedro Oliveira',
            specialty: 'Treinamento Funcional e Mobilidade',
            bio: 'Melhore sua força, equilíbrio e flexibilidade para as atividades do dia a dia, prevenindo lesões e ganhando qualidade de vida.',
            avatarUrl: 'https://i.pravatar.cc/150?img=11',
            paymentStatus: 'paid',
        },
        {
            id: 'pt4',
            name: 'Juliana Martins',
            specialty: 'Corrida e Endurance',
            bio: 'Treinadora especializada em preparar atletas para corridas de 5km a maratonas. Vamos cruzar essa linha de chegada!',
            avatarUrl: 'https://i.pravatar.cc/150?img=26',
            paymentStatus: 'overdue',
        },
        {
            id: 'pt5',
            name: 'Gabriel Almeida',
            specialty: 'Calistenia e Peso Corporal',
            bio: 'Domine seu corpo com treinos que usam apenas o seu próprio peso. Desenvolva força, controle e consciência corporal.',
            avatarUrl: 'https://i.pravatar.cc/150?img=33',
            paymentStatus: 'paid',
        },
    ],
    lifeCoaches: [
        {
            id: 'lc1',
            name: 'Renata Andrade',
            specialty: 'Coach de Carreira e Produtividade',
            bio: 'Alcance seus objetivos profissionais com clareza, foco e um plano de ação estratégico. Vamos destravar seu potencial.',
            avatarUrl: 'https://i.pravatar.cc/150?img=27',
            paymentStatus: 'paid',
        },
        {
            id: 'lc2',
            name: 'Tiago Barros',
            specialty: 'Coach de Relacionamentos',
            bio: 'Construa conexões mais autênticas, saudáveis e significativas em todas as áreas da sua vida.',
            avatarUrl: 'https://i.pravatar.cc/150?img=63',
            paymentStatus: 'paid',
        },
        {
            id: 'lc3',
            name: 'Camila Rocha',
            specialty: 'Coach de Propósito e Missão',
            bio: 'Descubra suas paixões e alinhe sua vida com o que realmente importa para você. Viva uma vida com mais propósito.',
            avatarUrl: 'https://i.pravatar.cc/150?img=48',
            paymentStatus: 'overdue',
        },
        {
            id: 'lc4',
            name: 'Rafael Souza',
            specialty: 'Coach de Finanças Pessoais',
            bio: 'Organize suas finanças, saia das dívidas e comece a investir no seu futuro com um plano claro e eficaz.',
            avatarUrl: 'https://i.pravatar.cc/150?img=15',
            paymentStatus: 'paid',
        },
        {
            id: 'lc5',
            name: 'Isabela Ferreira',
            specialty: 'Coach de Autoestima e Imagem',
            bio: 'Desenvolva autoconfiança para se expressar autenticamente, melhorar sua imagem e conquistar seus sonhos.',
            avatarUrl: 'https://i.pravatar.cc/150?img=45',
            paymentStatus: 'paid',
        },
    ],
    meditationInstructors: [
        {
            id: 'mi1',
            name: 'Mestre Ananda',
            specialty: 'Meditação Vipassana e Mindfulness',
            bio: 'Cultive a atenção plena e a equanimidade através da observação silenciosa da sua própria experiência.',
            avatarUrl: 'https://i.pravatar.cc/150?img=62',
            paymentStatus: 'paid',
        },
        {
            id: 'mi2',
            name: 'Lila Devi',
            specialty: 'Meditação Guiada e Relaxamento',
            bio: 'Encontre paz interior e alivie o estresse com meditações guiadas suaves e acolhedoras para todos os níveis.',
            avatarUrl: 'https://i.pravatar.cc/150?img=49',
            paymentStatus: 'overdue',
        },
        {
            id: 'mi3',
            name: 'Kenji Tanaka',
            specialty: 'Zen Budismo e Zazen',
            bio: 'Aprenda a arte de sentar em silêncio para encontrar clareza, estabilidade e profundidade mental no seu dia a dia.',
            avatarUrl: 'https://i.pravatar.cc/150?img=59',
            paymentStatus: 'paid',
        },
        {
            id: 'mi4',
            name: 'Amara Flores',
            specialty: 'Meditação com Mantras e Sons',
            bio: 'Utilize o poder das vibrações sonoras para acalmar a mente, abrir o coração e elevar sua consciência.',
            avatarUrl: 'https://i.pravatar.cc/150?img=23',
            paymentStatus: 'paid',
        },
        {
            id: 'mi5',
            name: 'Leo Marques',
            specialty: 'Meditação em Movimento e Tai Chi',
            bio: 'Harmonize corpo e mente com práticas suaves que integram meditação, respiração e movimento consciente.',
            avatarUrl: 'https://i.pravatar.cc/150?img=12',
            paymentStatus: 'overdue',
        },
    ]
};

export const initialUser: User = {
    name: 'Alex Rivera',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzIwNDE4MDIzfDA&ixlib=rb-4.0.3&q=80&w=200',
    handle: '@alex_rivera',
    bio: 'Explorando o equilíbrio entre mente e corpo. ✨\nAmante de ioga, natureza e boa comida.',
    followers: 1450,
    following: 320,
};

const userAuthor = { 
    name: initialUser.name, 
    handle: initialUser.handle, 
    avatar: initialUser.avatarUrl 
};

export const feedPosts: FeedPost[] = [
  {
    id: 'post1',
    author: { name: 'Respira Fundo', handle: '@respira_fundo', avatar: '🧘' },
    imageUrl: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    caption: 'Pequenos momentos de calma podem transformar o seu dia. Onde você encontra sua paz?',
    likes: 1245,
    comments: 87,
  },
  {
    id: 'post2',
    author: userAuthor,
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDF8fGhlYWx0aHklMjBmb29kfGVufDB8fHx8MTcyMDMyNTEwMXww&ixlib=rb-4.0.3&q=80&w=400',
    caption: 'Nutrir o corpo é uma forma de amor-próprio. Smoothie verde para começar a semana com energia!',
    likes: 2301,
    comments: 154,
  },
  {
    id: 'post3',
    author: { name: 'Diário de Gratidão', handle: '@gratidao_diaria', avatar: '✍️' },
    imageUrl: 'https://images.unsplash.com/photo-1518619894348-15c1523b0a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    caption: 'Hoje sou grato(a) pelo sol, por uma boa xícara de café e por novos começos. E você?',
    likes: 987,
    comments: 65,
  },
  {
    id: 'post4',
    author: userAuthor,
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDF8fHlvZ2F8ZW58MHx8fHwxNzIwMzI1MzE3fDA&ixlib=rb-4.0.3&q=80&w=400',
    caption: 'Alongue, respire, conecte-se. Seu corpo agradece cada movimento.',
    likes: 1853,
    comments: 112,
  },
  {
    id: 'post5',
    author: { name: 'Mente Sã', handle: '@mente_sa', avatar: '🧠' },
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    caption: 'Ler um bom livro é como ter uma conversa profunda consigo mesmo. Qual sua leitura do momento?',
    likes: 754,
    comments: 43,
  },
  {
    id: 'post6',
    author: { name: 'Naturaleza Pura', handle: '@naturaleza_cura', avatar: '🌿' },
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    caption: 'Caminhar na natureza é o melhor remédio para uma mente agitada.',
    likes: 3120,
    comments: 240,
  },
  {
    id: 'post7',
    author: { name: 'Arte de Viver', handle: '@arte_viver', avatar: '🎨' },
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDF8fHBhaW50aW5nfGVufDB8fHx8MTcyMDMyNTQ4OHww&ixlib=rb-4.0.3&q=80&w=400',
    caption: 'A criatividade é a inteligência se divertindo. Permita-se criar algo novo hoje!',
    likes: 1599,
    comments: 99,
  },
  {
    id: 'post8',
    author: { name: 'Respira Fundo', handle: '@respira_fundo', avatar: '🧘' },
    imageUrl: 'https://images.unsplash.com/photo-1542642825-4b1e5a519803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    caption: 'Silêncio. Apenas por 5 minutos. Observe a mágica acontecer.',
    likes: 2056,
    comments: 133,
  },
  {
    id: 'post9',
    author: { name: 'Conexões Reais', handle: '@conexoes_reais', avatar: '🫂' },
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDEwfHxmcmllbmRzJTIwaGFwcHl8ZW58MHx8fHwxNzIwMzI1NTkyfDA&ixlib=rb-4.0.3&q=80&w=400',
    caption: 'A felicidade é real quando compartilhada. Marque alguém que ilumina seus dias!',
    likes: 4231,
    comments: 501,
  },
  {
    id: 'post10',
    author: { name: 'Comida com Alma', handle: '@comidacom_alma', avatar: '🥗' },
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    caption: 'Cores no prato, alegria na vida. Uma salada vibrante para um dia vibrante.',
    likes: 1788,
    comments: 94,
  },
  {
    id: 'post11',
    author: { name: 'Sono Reparador', handle: '@sono_reparador', avatar: '🌙' },
    imageUrl: 'https://images.unsplash.com/photo-1530508128472-944369a6519b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    caption: 'Uma boa noite de sono é o superpoder mais subestimado. Invista no seu descanso.',
    likes: 1102,
    comments: 72,
  },
  {
    id: 'post12',
    author: userAuthor,
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fGd5bXxlbnwwfHx8fDE3MjAzMjU3NTR8MA&ixlib=rb-4.0.3&q=80&w=400',
    caption: 'A força não vem do que você pode fazer. Vem de superar as coisas que você pensou que não podia.',
    likes: 2543,
    comments: 188,
  },
  {
    id: 'post13',
    author: { name: 'Diário de Gratidão', handle: '@gratidao_diaria', avatar: '✍️' },
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    caption: 'Agradecer pelo dia que termina e pela noite que chega. Cada pôr do sol é uma promessa de um novo amanhecer.',
    likes: 1987,
    comments: 101,
  },
  {
    id: 'post14',
    author: { name: 'Hidrate-se', handle: '@hidrate_se', avatar: '💧' },
    imageUrl: 'https://images.unsplash.com/photo-1603831910530-9b882e37c157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    caption: 'Lembrete amigável para beber um copo d\'água agora mesmo. 😉',
    likes: 834,
    comments: 50,
  },
  {
    id: 'post15',
    author: { name: 'Música para a Alma', handle: '@musica_alma', avatar: '🎧' },
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fG11c2ljfGVufDB8fHx8MTcyMDMyNTg3Nnww&ixlib=rb-4.0.3&q=80&w=400',
    caption: 'Qual música está na sua playlist de bem-estar hoje? Compartilhe nos comentários!',
    likes: 1321,
    comments: 210,
  },
  {
    id: 'post16',
    author: userAuthor,
    imageUrl: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDh8fG1vdW50YWlufGVufDB8fHx8MTcyMDMyNTk1N3ww&ixlib=rb-4.0.3&q=80&w=400',
    caption: 'O topo da montanha é sempre mais alto do que você pensa. Continue subindo.',
    likes: 3500,
    comments: 298,
  },
  {
    id: 'post17',
    author: { name: 'Arte de Viver', handle: '@arte_viver', avatar: '🎨' },
    imageUrl: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDR8fHBhaW50aW5nfGVufDB8fHx8MTcyMDMyNTQ4OHww&ixlib=rb-4.0.3&q=80&w=400',
    caption: 'Deixe a vida colorir seus dias. Não tenha medo de usar todas as cores da paleta.',
    likes: 1729,
    comments: 104,
  },
  {
    id: 'post18',
    author: { name: 'Conexões Reais', handle: '@conexoes_reais', avatar: '🫂' },
    imageUrl: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDl8fGZyaWVuZHMlMjBoYXBweXxlbnwwfHx8fDE3MjAzMjU1OTJ8MA&ixlib=rb-4.0.3&q=80&w=400',
    caption: 'Às vezes, um café e uma boa conversa é tudo que a gente precisa.',
    likes: 3108,
    comments: 355,
  },
  {
    id: 'post19',
    author: { name: 'Mente Sã', handle: '@mente_sa', avatar: '🧠' },
    imageUrl: 'https://images.unsplash.com/photo-1531104985433-2d5a37445749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    caption: 'Sua mente é um quebra-cabeça. Cuide bem de todas as peças.',
    likes: 999,
    comments: 82,
  },
  {
    id: 'post20',
    author: { name: 'Respira Fundo', handle: '@respira_fundo', avatar: '🧘' },
    imageUrl: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDEzfHxzdHJlc3MlMjByZWxpZWZ8ZW58MHx8fHwxNzE5OTM5NTkyfDA&ixlib=rb-4.0.3&q=80&w=400',
    caption: 'Você não pode controlar tudo. Às vezes você só precisa relaxar e ter fé que as coisas vão dar certo. Deixe ir e deixe a vida acontecer.',
    likes: 2450,
    comments: 199,
  },
];


export const chatConversations: ChatConversation[] = [
    {
        id: 'chat1',
        user: { name: 'Respira Fundo', avatar: '🧘' },
        lastMessage: 'Claro, ótima ideia! Vamos fazer isso amanhã.',
        timestamp: '5m',
        isRead: false,
    },
    {
        id: 'chat2',
        user: { name: 'Dra. Evelyn Reed', avatar: 'https://i.pravatar.cc/150?img=25' },
        lastMessage: 'Sua sessão está confirmada para amanhã às 14h.',
        timestamp: '1h',
        isRead: true,
    },
    {
        id: 'chat3',
        user: { name: 'Diário de Gratidão', avatar: '✍️' },
        lastMessage: 'Adorei sua postagem sobre a caminhada!',
        timestamp: '3h',
        isRead: false,
    },
    {
        id: 'chat4',
        user: { name: 'Naturaleza Pura', avatar: '🌿' },
        lastMessage: 'Você: Obrigado pela dica!',
        timestamp: '1d',
        isRead: true,
    },
    {
        id: 'chat5',
        user: { name: 'Mente Sã', avatar: '🧠' },
        lastMessage: 'Vamos marcar nossa leitura conjunta.',
        timestamp: '2d',
        isRead: true,
    },
    {
        id: 'chat6',
        user: { name: 'Dr. Marcus Thorne', avatar: 'https://i.pravatar.cc/150?img=60' },
        lastMessage: 'Lembre-se das técnicas de mindfulness que praticamos.',
        timestamp: '2d',
        isRead: true,
    }
];


// Nutrition Data
export const dailyNutrition: DailyNutrition = {
    consumed: 1291,
    goal: 2117, // 1291 consumed + 826 remaining
    burned: 244,
};

export const macros: Macro[] = [
    { name: 'Carboidratos', consumed: 206, goal: 258, color: 'bg-blue-400' },
    { name: 'Proteína', consumed: 35, goal: 103, color: 'bg-pink-400' },
    { name: 'Gordura', consumed: 32, goal: 68, color: 'bg-yellow-400' },
];

export const meals: Meal[] = [
    { id: '1', name: 'Café da manhã', calories: 56, goal: 635, icon: '☕️' },
    { id: '2', name: 'Almoço', calories: 856, goal: 847, icon: '🥪' },
    { id: '3', name: 'Jantar', calories: 379, goal: 529, icon: '🥗' },
    { id: '4', name: 'Lanches', calories: 0, goal: 106, icon: '🍎' },
];

export const notifications: Notification[] = [
    {
        id: '1',
        user: {
            name: 'Respira Fundo',
            avatar: '🧘'
        },
        type: 'like',
        content: 'curtiu sua postagem.',
        timestamp: '5m',
        isRead: false,
        postThumbnail: feedPosts.find(p => p.id === 'post12')?.imageUrl,
    },
    {
        id: '2',
        user: {
            name: 'Dra. Evelyn Reed',
            avatar: 'https://i.pravatar.cc/150?img=25'
        },
        type: 'comment',
        content: 'comentou: "Ótima perspectiva! Continue assim."',
        timestamp: '1h',
        isRead: false,
        postThumbnail: feedPosts.find(p => p.id === 'post4')?.imageUrl,
    },
    {
        id: '3',
        user: {
            name: 'Diário de Gratidão',
            avatar: '✍️'
        },
        type: 'follow',
        content: 'começou a seguir você.',
        timestamp: '3h',
        isRead: false,
    },
    {
        id: '4',
        user: {
            name: 'Synapse',
            avatar: '🧠'
        },
        type: 'system',
        content: 'Seu relatório semanal de humor está pronto!',
        timestamp: '1d',
        isRead: true,
    },
    {
        id: '5',
        user: {
            name: 'Naturaleza Pura',
            avatar: '🌿'
        },
        type: 'like',
        content: 'curtiu sua postagem.',
        timestamp: '2d',
        isRead: true,
        postThumbnail: feedPosts.find(p => p.id === 'post16')?.imageUrl,
    },
     {
        id: '6',
        user: {
            name: 'Mente Sã',
            avatar: '🧠'
        },
        type: 'comment',
        content: 'comentou: "Adorei a recomendação de livro!"',
        timestamp: '2d',
        isRead: true,
        postThumbnail: feedPosts.find(p => p.id === 'post5')?.imageUrl,
    },
    {
        id: '7',
        user: {
            name: 'Conexões Reais',
            avatar: '🫂'
        },
        type: 'follow',
        content: 'começou a seguir você.',
        timestamp: '3d',
        isRead: true,
    }
];

export const workoutFrequencyData: ProgressChartData[] = [
  { week: 'S-4', workouts: 3 },
  { week: 'S-3', workouts: 4 },
  { week: 'S-2', workouts: 2 },
  { week: 'S-1', workouts: 5 },
  { week: 'Atual', workouts: 4 },
];

export const goals: Goal[] = [
  { 
    id: 'g1', 
    title: 'Meditação Consistente', 
    description: 'Meditar por 10 minutos todos os dias.', 
    currentProgress: 4, 
    target: 7, 
    unit: 'dias' 
  },
  { 
    id: 'g2', 
    title: 'Meta de Passos', 
    description: 'Atingir 10.000 passos diários.', 
    currentProgress: 8500, 
    target: 10000, 
    unit: 'passos' 
  },
  { 
    id: 'g3', 
    title: 'Hidratação', 
    description: 'Beber 2 litros de água por dia.', 
    currentProgress: 1.5, 
    target: 2, 
    unit: 'litros' 
  },
];

export const achievements: Achievement[] = [
    { id: 'a1', title: 'Primeiro Login', unlocked: true, Icon: TrophyIcon },
    { id: 'a2', title: 'Check-in de 7 Dias', unlocked: true, Icon: TrophyIcon },
    { id: 'a3', title: 'Primeiro Treino', unlocked: true, Icon: TrophyIcon },
    { id: 'a4', title: 'Mente Zen', unlocked: true, Icon: TrophyIcon },
    { id: 'a5', title: 'Leitor Voraz', unlocked: false, Icon: TrophyIcon },
    { id: 'a6', title: 'Chef Saudável', unlocked: false, Icon: TrophyIcon },
    { id: 'a7', title: 'Guru da Academia', unlocked: false, Icon: TrophyIcon },
    { id: 'a8', title: 'Explorador Mestre', unlocked: false, Icon: TrophyIcon },
];
