import { PortfolioProject } from "@/app/projects/types/project";

export const PROJECTS: readonly PortfolioProject[] = [
  {
    slug: "infoCrypto",
    title: "infoCrypto",
    shortDescription: "Aplicação web educacional sobre criptomoedas.",
    description:
      "O infoCrypto é um trabalho de conclusão de curso. A ideia é ensinar fundamentos de cripto de forma didática, com páginas explicativas, conceitos importantes e uma navegação simples para quem está começando.",
    tags: ["Next.js", "Tailwind CSS", "FastAPI", "TypeScript"],
    highlights: [
      "Conteúdo educacional organizado por tópicos",
      "Valores das moedas atualizadas em tempo real",
      "Simulador BIP30 para entender melhor a criptografia",
      "Notícias relacionadas ao mercado de criptomoedas",
      "Fórum para interação de usuários, com validação de IA"
    ],
    images: [
      { src: "/projects/infocrypto/info-1.png", alt: "infoCrypto - Home Page" },
      {
        src: "/projects/infocrypto/info-2.png",
        alt: "infoCrypto - Tela das moedas",
      },
      {
        src: "/projects/infocrypto/info-3.png",
        alt: "infoCrypto - Página educacional",
      },
    ],
    links: [
      {
        type: "repo",
        label: "Repositório",
        href: "https://github.com/PFC-S-i/PFC-s.i.git1",
      },
      {
        type: "demo",
        label: "Visitar site",
        href: "https://pfc-si.vercel.app/",
      },
    ],
  },
  {
    slug: "prospeccao-de-clientes",
    title: "Prospecção de Clientes",
    shortDescription: "Sistema web para gerenciar leads e base de produtos.",
    description:
      "Este é um sistema desenvolvido de maneira full-stack para auxiliar na prospecção de clientes B2B. Ele permite gerenciar e cadastrar clientes, vinculando múltiplos produtos, cadastrar produtos e acompanhando data de último contato.",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    highlights: [
      "Cadastro de clientes, podendo vincular múltiplos produtos",
      "Visualização de clientes cadastrados",
      "Cadastro de produtos",
      "Edição de informações já cadastradas",
    ],
    images: [
      {
        src: "/projects/prospeccao/prospeccao-login.png",
        alt: "Prospeccao - Login",
      },
      {
        src: "/projects/prospeccao/prospeccao-home.png",
        alt: "Prospeccao - Home",
      },
      {
        src: "/projects/prospeccao/prospeccao-new-customer.png",
        alt: "Prospeccao - Cadastro",
      },
      {
        src: "/projects/prospeccao/prospeccao-customers.png",
        alt: "Prospeccao - Clientes",
      },
      {
        src: "/projects/prospeccao/prospeccao-produtos.png",
        alt: "Prospeccao - Produtos",
      },
    ],
    links: [
      {
        type: "repo",
        href: "https://github.com/Gu-Fernandes/customer-prospecting.git",
      },
      {
        type: "demo",
        href: "https://prospeccao-clientes-iota.vercel.app/",
      },
    ],
  },
  {
    slug: "impostor",
    title: "Jogo do impostor",
    shortDescription: "Aplicação web offline oferecida em formato de jogo.",
    description:
      "Este projeto foi desenvolvido 100% com front-end, com intuito de ser um jogo simples. O jogo consiste em que cada jogador receba uma palavra secreta, enquanto alguns jogadores não recebem. O objetivo dos jogadores é descobrir quem são os impostores através de dicas, enquanto os impostores tentam se misturar entre os outros jogadores.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    highlights: [
      "Nomes dos jogadores salvos localmente",
      "Geração de palavras aleatórias",
      "Definição de tempo por rodada",
      "Revelar o jogador imfiltrado",
    ],
    images: [
      {
        src: "/projects/impostor/impostor-home.png",
        alt: "Impostor - Home",
      },
      {
        src: "/projects/impostor/impostor-2.png",
        alt: "Impostor - Jogo",
      },
      {
        src: "/projects/impostor/impostor-word.png",
        alt: "Impostor - Ver palavra",
      },
      {
        src: "/projects/impostor/impostor-impostor.png",
        alt: "Impostor ",
      },
      {
        src: "/projects/impostor/impostor-timer.png",
        alt: "Impostor - Timer ",
      },
    ],
    links: [
      {
        type: "repo",
        href: "https://github.com/Gu-Fernandes/impostor.git",
      },
      {
        type: "demo",
        href: "https://jogo-do-impostor-one.vercel.app/",
      },
    ],
  },
  {
    slug: "helpdesk",
    title: "Central de Ajuda",
    shortDescription:
      "Sistema web pertencente ao ecosistema de um grupo empresarial.",
    description:
      "Aplicação web que faz parte de um ecosistema empresarial, onde os funcionários podem criar chamados relacionados a problemas técnicos ou solicitações de suporte. ANexando arquivos, descrvendo demanda, selecionando categoria pertencente ao chamado. A equipe de suporte pode atualizar o status, adicionar comentários, conversar por chat ao vivo e resolver os problemas reportados.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    highlights: [
      "Criação dew chamados",
      "Usuário pode avaliar e reabrir chamado",
      "Equipe de suporte atualiza status do chamado",
      "Chat de mensagens entre suporte e usuário ao vivo",
      "Equipe de suporte visualiza chamados por dashboard kanban",
    ],
    images: [
      {
        src: "/projects/tickets/tickets-home.png",
        alt: "Tickets - Home",
      },
      {
        src: "/projects/tickets/tickets-new.png",
        alt: "Tickets - New",
      },
      {
        src: "/projects/tickets/tickets-dash.jpeg",
        alt: "Tickets - Dashboard",
      },
    ],
  },
] as const;
