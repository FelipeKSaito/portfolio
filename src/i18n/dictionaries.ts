import type { Locale } from "./config";

export const profile = {
  name: "Felipe Saito",
  email: "felipe.ksaito@outlook.com",
  linkedin: "https://www.linkedin.com/in/felipeksaito/",
  github: "https://github.com/FelipeKSaito",
};

export type Project = {
  name: string;
  url: string;
  domain: string;
  category: string;
  description: string;
  work: string[];
  /** Optional screenshot placed in /public/projects */
  image?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  place: string;
  summary: string;
};

const pt = {
  meta: {
    title: "Felipe Saito · Desenvolvedor Full Stack",
    description:
      "Portfólio de Felipe Saito, desenvolvedor Full Stack especializado em lojas Shopify: UI/UX, seções em Liquid, campanhas e integrações com ERP.",
  },
  nav: {
    projects: "Projetos",
    skills: "Habilidades",
    experience: "Trajetória",
    contact: "Contato",
    switchLabel: "Read in English",
    switchShort: "EN",
  },
  hero: {
    greeting: "Oi, eu sou o",
    role: "Desenvolvedor Full Stack que constrói e cuida de lojas Shopify, do layout à integração com o ERP.",
    now: "Hoje sou Analista Programador em Salto (SP), responsável pela Eco Flame Garden, Sofá na Caixa e Little Duck.",
    ctaProjects: "Ver projetos",
    ctaContact: "Falar comigo",
    panelTitle: "Página inicial",
    panelSections: [
      "Banner principal",
      "Campanha da semana",
      "Coleção em destaque",
      "Avaliações de clientes",
      "Rodapé",
    ],
    panelAdd: "Adicionar seção",
    panelSaved: "Salvo",
  },
  about: {
    title: "Sobre",
    paragraphs: [
      "Sou formado em Análise e Desenvolvimento de Sistemas pela Anhembi Morumbi e trabalho com desenvolvimento web, caminhando para uma atuação Full Stack completa.",
      "No dia a dia, sou responsável por toda a parte visual das lojas: penso a experiência de quem compra, crio seções novas, monto as campanhas e cuido da operação na Shopify, de produtos e apps a descontos.",
      "Gosto de entender a aplicação de ponta a ponta, da estrutura dos dados até o que aparece na tela, e de usar IA no fluxo de trabalho para entregar mais rápido sem perder qualidade.",
    ],
  },
  projects: {
    title: "Lojas em que trabalho",
    intro:
      "Três lojas Shopify em produção. Em todas, cuido da interface, das seções do tema, das campanhas e da gestão da loja.",
    visit: "Visitar loja",
    workLabel: "O que eu faço",
    items: [
      {
        name: "Eco Flame Garden",
        url: "https://ecoflamegarden.com.br/",
        domain: "ecoflamegarden.com.br",
        category: "Móveis para área externa",
        description:
          "Puffs de piscina e jardim, espreguiçadeiras, sofás modulares, lareiras e ombrelones para varandas, jardins e áreas de lazer.",
        work: [
          "UI/UX e layout da loja",
          "Seções e snippets em Liquid",
          "Campanhas e banners",
          "Produtos, apps e descontos",
          "Integração com Olist Tiny e Omie",
        ],
      },
      {
        name: "Sofá na Caixa",
        url: "https://www.sofanacaixa.com.br/",
        domain: "sofanacaixa.com.br",
        category: "Sofás compactados",
        description:
          "Sofás modulares, poltronas e sofás-cama que chegam compactados na caixa e são montados em casa, com entrega para todo o Brasil.",
        work: [
          "UI/UX e layout da loja",
          "Seções e snippets em Liquid",
          "Campanhas e banners",
          "Produtos, apps e descontos",
        ],
      },
      {
        name: "Little Duck",
        url: "https://littleduck.com.br/",
        domain: "littleduck.com.br",
        category: "Móveis infantis",
        description:
          "Móveis e acessórios infantis para deixar o quarto das crianças mais confortável e prático.",
        work: [
          "UI/UX e layout da loja",
          "Seções e snippets em Liquid",
          "Campanhas e banners",
          "Produtos, apps e descontos",
        ],
      },
    ] as Project[],
  },
  skills: {
    title: "Habilidades",
    groups: [
      {
        name: "Front-end",
        items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML", "CSS"],
      },
      {
        name: "E-commerce",
        items: [
          "Shopify",
          "Liquid",
          "Customização de temas",
          "UI/UX",
          "Apps e descontos",
        ],
      },
      {
        name: "Back-end e dados",
        items: [
          "Python",
          "Integração com ERP (Olist Tiny, Omie)",
          "Modelagem de dados",
          "SAP S/4HANA",
          "ABAP",
        ],
      },
      {
        name: "IA e ferramentas",
        items: ["Agentes de IA", "Claude Code", "Codex", "Inglês"],
      },
    ],
  },
  experience: {
    title: "Trajetória",
    items: [
      {
        role: "Analista Programador",
        company: "Eco Flame Garden",
        period: "fev. 2026 até hoje",
        place: "Salto, SP",
        summary:
          "Desenvolvimento e manutenção das lojas Shopify com Liquid, HTML, CSS e JavaScript, componentes reutilizáveis, integrações com ERP e interfaces orientadas a dados.",
      },
      {
        role: "Desenvolvedor freelancer",
        company: "Autônomo",
        period: "out. 2025 a jan. 2026",
        place: "Remoto",
        summary:
          "Projetos de ponta a ponta para clientes diversos, com foco em soluções de IA e desenvolvimento web e de aplicativos.",
      },
      {
        role: "Estagiário de TI",
        company: "ZF Group",
        period: "set. 2023 a mai. 2025",
        place: "Sorocaba, SP",
        summary:
          "Suporte técnico para um grande volume de usuários, infraestrutura e ativos de TI, e contato com fluxos de dados no SAP S/4HANA.",
      },
      {
        role: "Estagiário de TI",
        company: "Escola Portal",
        period: "jul. a ago. 2023",
        place: "Sorocaba, SP",
        summary:
          "Suporte técnico, manutenção de hardware e apoio à estrutura de áudio e vídeo em eventos.",
      },
    ] as Experience[],
    educationTitle: "Formação",
    education: "Análise e Desenvolvimento de Sistemas, Anhembi Morumbi (Sorocaba)",
    certificatesTitle: "Certificados",
    certificates: [
      "Imersão Dev de Agentes de IA, Alura",
      "Jornada Python, Hashtag Treinamentos",
      "Imersão JavaScript na Prática, Hashtag Treinamentos",
      "Desenvolvimento Web Completo, Udemy",
      "Fundamentos do SAP S/4HANA, Ka Solution",
      "ABAP para Iniciantes, Udemy",
    ],
  },
  contact: {
    title: "Vamos conversar?",
    text: "Estou aberto a oportunidades como desenvolvedor Full Stack e a projetos de lojas Shopify. O jeito mais rápido de falar comigo é por e-mail.",
    emailLabel: "Enviar e-mail",
    copy: "Copiar e-mail",
    copied: "E-mail copiado",
  },
  footer: "Feito com Next.js e hospedado na Vercel.",
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  meta: {
    title: "Felipe Saito · Full Stack Developer",
    description:
      "Portfolio of Felipe Saito, a Full Stack developer specialized in Shopify stores: UI/UX, Liquid sections, campaigns and ERP integrations.",
  },
  nav: {
    projects: "Projects",
    skills: "Skills",
    experience: "Journey",
    contact: "Contact",
    switchLabel: "Ler em português",
    switchShort: "PT",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "A Full Stack developer who builds and runs Shopify stores, from the layout to the ERP integration.",
    now: "I currently work as a Programmer Analyst in Salto, Brazil, in charge of Eco Flame Garden, Sofá na Caixa and Little Duck.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    panelTitle: "Home page",
    panelSections: [
      "Hero banner",
      "Weekly campaign",
      "Featured collection",
      "Customer reviews",
      "Footer",
    ],
    panelAdd: "Add section",
    panelSaved: "Saved",
  },
  about: {
    title: "About",
    paragraphs: [
      "I hold a degree in Systems Analysis and Development from Anhembi Morumbi and work in web development, growing into a complete Full Stack role.",
      "Day to day, I own the visual side of the stores: I design the shopping experience, build new sections, set up campaigns and run the Shopify operation, from products and apps to discounts.",
      "I like understanding an application end to end, from the data structure to what shows up on screen, and I use AI in my workflow to ship faster without cutting corners.",
    ],
  },
  projects: {
    title: "Stores I work on",
    intro:
      "Three Shopify stores in production. On all of them I handle the interface, theme sections, campaigns and store management.",
    visit: "Visit store",
    workLabel: "What I do",
    items: [
      {
        name: "Eco Flame Garden",
        url: "https://ecoflamegarden.com.br/",
        domain: "ecoflamegarden.com.br",
        category: "Outdoor furniture",
        description:
          "Pool and garden poufs, sun loungers, modular sofas, fireplaces and umbrellas for patios, gardens and leisure areas.",
        work: [
          "Store UI/UX and layout",
          "Liquid sections and snippets",
          "Campaigns and banners",
          "Products, apps and discounts",
          "Olist Tiny and Omie integration",
        ],
      },
      {
        name: "Sofá na Caixa",
        url: "https://www.sofanacaixa.com.br/",
        domain: "sofanacaixa.com.br",
        category: "Sofas in a box",
        description:
          "Modular sofas, armchairs and sofa beds that arrive compressed in a box and are assembled at home, shipped across Brazil.",
        work: [
          "Store UI/UX and layout",
          "Liquid sections and snippets",
          "Campaigns and banners",
          "Products, apps and discounts",
        ],
      },
      {
        name: "Little Duck",
        url: "https://littleduck.com.br/",
        domain: "littleduck.com.br",
        category: "Kids' furniture",
        description:
          "Kids' furniture and accessories that make children's rooms more comfortable and practical.",
        work: [
          "Store UI/UX and layout",
          "Liquid sections and snippets",
          "Campaigns and banners",
          "Products, apps and discounts",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      {
        name: "Front-end",
        items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML", "CSS"],
      },
      {
        name: "E-commerce",
        items: [
          "Shopify",
          "Liquid",
          "Theme customization",
          "UI/UX",
          "Apps and discounts",
        ],
      },
      {
        name: "Back-end and data",
        items: [
          "Python",
          "ERP integration (Olist Tiny, Omie)",
          "Data modeling",
          "SAP S/4HANA",
          "ABAP",
        ],
      },
      {
        name: "AI and tools",
        items: ["AI agents", "Claude Code", "Codex", "English"],
      },
    ],
  },
  experience: {
    title: "Journey",
    items: [
      {
        role: "Programmer Analyst",
        company: "Eco Flame Garden",
        period: "Feb 2026 to present",
        place: "Salto, Brazil",
        summary:
          "Building and maintaining the Shopify stores with Liquid, HTML, CSS and JavaScript, reusable components, ERP integrations and data-driven interfaces.",
      },
      {
        role: "Freelance developer",
        company: "Self-employed",
        period: "Oct 2025 to Jan 2026",
        place: "Remote",
        summary:
          "End-to-end projects for a range of clients, focused on AI solutions and web and app development.",
      },
      {
        role: "IT Intern",
        company: "ZF Group",
        period: "Sep 2023 to May 2025",
        place: "Sorocaba, Brazil",
        summary:
          "Technical support for a large user base, IT infrastructure and assets, and exposure to SAP S/4HANA data flows.",
      },
      {
        role: "IT Intern",
        company: "Escola Portal",
        period: "Jul to Aug 2023",
        place: "Sorocaba, Brazil",
        summary:
          "Technical support, hardware maintenance and audio-video setup for school events.",
      },
    ],
    educationTitle: "Education",
    education: "Systems Analysis and Development, Anhembi Morumbi (Sorocaba)",
    certificatesTitle: "Certificates",
    certificates: [
      "AI Agents Developer Immersion, Alura",
      "Python Journey, Hashtag Treinamentos",
      "Hands-on JavaScript Immersion, Hashtag Treinamentos",
      "Complete Web Development, Udemy",
      "SAP S/4HANA Fundamentals, Ka Solution",
      "ABAP for Beginners, Udemy",
    ],
  },
  contact: {
    title: "Let's talk?",
    text: "I'm open to Full Stack developer roles and Shopify store projects. Email is the fastest way to reach me.",
    emailLabel: "Send an email",
    copy: "Copy email",
    copied: "Email copied",
  },
  footer: "Built with Next.js and hosted on Vercel.",
};

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
