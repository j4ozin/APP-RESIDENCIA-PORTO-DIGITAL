
export interface BriefingData {
  tipo: string;
  id: number;
  categoria: "Residencial" | "Comercial" | "Corporativo";
  titulo: string;
  descricao: string;
  tempo: string;
  nivel: "Iniciante" | "Médio" | "Avançado";
  perguntas: number;
  tags?: string[];
  dataCriacao: string;
  link: string;
}

export const briefings: BriefingData[] = [
  // Residenciais
  {
    id: 1,
    categoria: "Residencial",
    titulo: "Casa do Zero",
    descricao: "Este briefing é ideal para clientes que desejam construir uma casa completamente nova, partindo do zero. Ele abrange todas as etapas do projeto, desde a definição do terreno até os acabamentos e preferências estéticas. É indicado para arquitetos que precisam compreender profundamente o estilo de vida e os desejos do cliente para oferecer soluções personalizadas e completas.",
    tempo: "20–40min",
    nivel: "Avançado",
    perguntas: 50,
    tags: ["Destaque", "Popular"],
    dataCriacao: "2025-05-10",
    link: "/briefing/casadozero/",
    tipo: "destaque"
  },
  {
    id: 2,
    categoria: "Residencial",
    titulo: "Reforma Total",
    descricao: "Destinado a reformas completas, este briefing busca compreender quais espaços serão alterados, os objetivos da reforma e quais melhorias funcionais e visuais são esperadas. Ele é ideal para clientes que querem transformar sua residência atual sem trocar de imóvel, oferecendo ao profissional uma visão clara do escopo e prioridades da reforma.",
    tempo: "12–15min",
    nivel: "Médio",
    perguntas: 14,
    tags: ["Novo"],
    dataCriacao: "2025-05-15",
    link: "/",
    tipo: ""
  },
  {
    id: 3,
    categoria: "Residencial",
    titulo: "Cozinha dos Sonhos",
    descricao: "Focado no ambiente da cozinha, este briefing busca entender os hábitos culinários do cliente, suas necessidades de armazenamento, circulação e estética. É ideal para projetos que visam unir funcionalidade e beleza em um dos espaços mais importantes da casa.",
    tempo: "10–12min",
    nivel: "Médio",
    perguntas: 12,
    tags: ["Popular"],
    dataCriacao: "2025-05-12",
    link: "/",
    tipo: ""
  },
  {
    id: 4,
    categoria: "Residencial",
    titulo: "Espaço Kids",
    descricao: "Este briefing foca na criação de ambientes seguros, lúdicos e funcionais para crianças. Pode incluir quartos, brinquedotecas ou áreas de estudo. Ele ajuda o arquiteto a entender a faixa etária das crianças, preferências temáticas e necessidades específicas para um desenvolvimento saudável e criativo.",
    tempo: "10–15min",
    nivel: "Iniciante",
    perguntas: 10,
    dataCriacao: "2025-05-14",
    link: "/",
    tipo: ""
  },
  {
    id: 5,
    categoria: "Residencial",
    titulo: "Home Office Compacto",
    descricao: "Voltado para profissionais que trabalham de casa, este briefing ajuda a identificar as necessidades ergonômicas, acústicas e tecnológicas do cliente. O foco está na criação de um espaço de trabalho eficiente e confortável, mesmo em ambientes residenciais pequenos.",
    tempo: "8–10min",
    nivel: "Iniciante",
    perguntas: 8,
    tags: ["Novo"],
    dataCriacao: "2025-05-16",
    link: "/",
    tipo: ""
  },

  // Comerciais
  {
    id: 6,
    categoria: "Comercial",
    titulo: "Loja de Roupas",
    descricao: "Ideal para empreendedores do varejo de moda, este briefing explora a identidade da marca, o perfil dos clientes e o layout desejado para a loja. Ele auxilia o arquiteto a propor um ambiente que valorize os produtos, otimize a circulação e ofereça uma experiência de compra atrativa.",
    tempo: "11min",
    nivel: "Médio",
    perguntas: 13,
    dataCriacao: "2025-05-11",
    link: "/",
    tipo: ""
  },
  {
    id: 7,
    categoria: "Comercial",
    titulo: "Café Charmoso",
    descricao: "Este briefing tem como objetivo captar a essência e o estilo desejado para cafeterias ou padarias, considerando o público-alvo, a proposta de cardápio e a ambientação ideal. Ele é fundamental para criar espaços acolhedores que estimulem a permanência dos clientes e valorizem a experiência sensorial.",
    tempo: "12–15min",
    nivel: "Médio",
    perguntas: 15,
    tags: ["Popular"],
    dataCriacao: "2025-05-13",
    link: "/",
    tipo: ""
  },
  {
    id: 8,
    categoria: "Comercial",
    titulo: "Restaurante Temático",
    descricao: "Indicado para estabelecimentos que querem se destacar pela ambientação e conceito, este briefing explora o tipo de cozinha, o tema proposto e o clima desejado no espaço. Ele ajuda o profissional a projetar ambientes imersivos que reforcem a identidade do restaurante.",
    tempo: "15–18min",
    nivel: "Avançado",
    perguntas: 18,
    dataCriacao: "2025-05-09",
    link: "/",
    tipo: ""
  },
  {
    id: 9,
    categoria: "Comercial",
    titulo: "Barbearia Moderna",
    descricao: "Esse briefing é voltado para salões masculinos que desejam uma identidade visual forte e um ambiente funcional. Ele considera elementos como estilo do público, serviços oferecidos e diferenciais da marca, permitindo criar espaços que unem praticidade e estética contemporânea.",
    tempo: "10–12min",
    nivel: "Iniciante",
    perguntas: 11,
    tags: ["Novo"],
    dataCriacao: "2025-05-17",
    link: "/",
    tipo: ""
  },
  {
    id: 10,
    categoria: "Comercial",
    titulo: "Salão de Beleza",
    descricao: "Focado em espaços de estética, este briefing busca entender as necessidades dos profissionais que atuam no local, os fluxos de clientes, os serviços oferecidos e a atmosfera desejada. É ideal para projetos que unem funcionalidade, conforto e sofisticação.",
    tempo: "12–14min",
    nivel: "Médio",
    perguntas: 14,
    dataCriacao: "2025-05-08",
    link: "/",
    tipo: ""
  },

  // Corporativos
  {
    id: 11,
    categoria: "Corporativo",
    titulo: "Escritório Colaborativo",
    descricao: "Este briefing é ideal para empresas que buscam ambientes de trabalho dinâmicos e integrados. Ele investiga como os colaboradores interagem, os tipos de atividades realizadas e o estilo de liderança da organização, promovendo projetos que estimulem a criatividade e a cooperação.",
    tempo: "15–20min",
    nivel: "Avançado",
    perguntas: 22,
    tags: ["Popular"],
    dataCriacao: "2025-05-07",
    link: "/",
    tipo: ""
  },
  {
    id: 12,
    categoria: "Corporativo",
    titulo: "Sala de Reuniões Executiva",
    descricao: "Projetado para espaços formais de decisão e negociação, este briefing considera o número de participantes, o tipo de tecnologia necessária e o grau de privacidade desejado. É ideal para ambientes que exigem sofisticação e funcionalidade.",
    tempo: "10–12min",
    nivel: "Médio",
    perguntas: 12,
    dataCriacao: "2025-05-18",
    link: "/",
    tipo: ""
  },
  {
    id: 13,
    categoria: "Corporativo",
    titulo: "Recepção de Impacto",
    descricao: "Este briefing foca em criar recepções que reflitam os valores da empresa e impressionem visitantes logo na chegada. Ele aborda elementos como identidade visual, tipo de atendimento, circulação e atmosfera esperada, ajudando a definir um ponto de contato estratégico.",
    tempo: "12–15min",
    nivel: "Médio",
    perguntas: 15,
    tags: ["Novo"],
    dataCriacao: "2025-05-06",
    link: "/",
    tipo: ""
  },
  {
    id: 14,
    categoria: "Corporativo",
    titulo: "Espaço de Descompressão",
    descricao: "Ideal para empresas que valorizam o bem-estar dos colaboradores, este briefing ajuda a entender as preferências da equipe em relação a áreas de descanso, relaxamento ou lazer. Pode incluir salas de jogos, lounges ou ambientes verdes, promovendo mais equilíbrio no dia a dia corporativo.",
    tempo: "8–10min",
    nivel: "Iniciante",
    perguntas: 10,
    dataCriacao: "2025-05-05",
    link: "/",
    tipo: ""
  },
  {
    id: 15,
    categoria: "Corporativo",
    titulo: "Escritório Sustentável",
    descricao: "Com foco em sustentabilidade, este briefing busca entender o compromisso da empresa com práticas ecológicas, uso de materiais sustentáveis, eficiência energética e bem-estar dos ocupantes. Ele é ideal para projetos que almejam certificações verdes e menor impacto ambiental.",
    tempo: "18–22min",
    nivel: "Avançado",
    perguntas: 25,
    tags: ["Popular"],
    dataCriacao: "2025-05-04",
    link: "/",
    tipo: ""
  },
];
