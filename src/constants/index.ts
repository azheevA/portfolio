import { DiscordIcon, GithubIcon, TelegramIcon, VKIcon } from "./svg";

interface ModelConfig {
  name: string;
  modelPath: string;
  scale: number | [number, number, number];
  rotation: [number, number, number];
}

const navLinks = [
  {
    name: "Работа",
    link: "#work",
  },
  {
    name: "Опыт",
    link: "#experience",
  },
  {
    name: "Навыки",
    link: "#skills",
  },
  {
    name: "Отзывы",
    link: "#testimonials",
  },
];
const words = [
  { text: "Идеи", imgPath: "/images/ideas.svg" },
  { text: "Концепции", imgPath: "/images/concepts.svg" },
  { text: "Дизайны", imgPath: "/images/designs.svg" },
  { text: "Код", imgPath: "/images/code.svg" },
  { text: "Идеи", imgPath: "/images/ideas.svg" },
  { text: "Концепции", imgPath: "/images/concepts.svg" },
  { text: "Дизайны", imgPath: "/images/designs.svg" },
  { text: "Код", imgPath: "/images/code.svg" },
];
const counterItems = [
  { value: 1, suffix: "+", label: "Лет в разработке" },
  //   { value: 200, suffix: "+", label: "Удовлетворенных Клиентов" },
  { value: 26, suffix: "+", label: "Завершенных проектов" },
  { value: 87, suffix: "%", label: "Положительных отзывов от клиентов" },
];
const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];
const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Фокус на качестве",
    desc: "Достижение высоких результатов с вниманием к каждой детали.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Надёжная коммуникация",
    desc: "Держу вас в курсе на каждом этапе, обеспечивая прозрачность и ясность.",
  },
  {
    imgPath: "/images/time.png",
    title: "Соблюдение сроков",
    desc: "Гарантирую завершение проектов вовремя, сохраняя качество и внимание к деталям.",
  },
];
const expCards = [
  {
    review:
      "Александр — мастер системного подхода. Он не просто пишет код на Nest.js, но и упаковывает его в Docker, документирует через Swagger и обеспечивает безопасность уровня argon2. Работа с Oracle API выполнена безупречно.",
    imgPath: "/images/exp_react.png",
    logoPath: "/images/logo_nextjs.png",
    title: "Fullstack Developer (Nest.js / Next.js)",
    date: "2024 — Настоящее время",
    responsibilities: [
      "Разработка масштабируемого бэкенда на Nest.js с полной авторизацией (argon2/JWT) и генерацией API в Oracle.",
      "Контейнеризация приложений с помощью Docker и проектирование интерактивной документации API в Swagger.",
      "Создание сложных интерфейсов на Next.js с использованием современных библиотек и серверного рендеринга.",
    ],
  },
  {
    review:
      "Его навыки работы с состоянием приложения через Redux Toolkit и кэшированием данных в Tanstack Query вывели наш фронтенд на новый уровень. Очень ценно внимание к деталям и производительности.",
    imgPath: "/images/exp_vue3.png",
    logoPath: "/images/logo_nestjs.png",
    title: "Frontend Developer (React / Redux)",
    date: "2023 — 2024",
    responsibilities: [
      "Разработка интерфейсов на React, управление сложным состоянием через Redux Toolkit.",
      "Оптимизация работы с серверными данными с помощью Tanstack Query (React Query).",
      "Реализация отзывчивого дизайна и интеграция фронтенда с REST API.",
    ],
  },
  {
    review:
      "Александр уделяет внимание качеству кода: внедрение тестов на Vitest помогло нам сократить количество багов. Опыт работы с Vue позволяет ему быстро переключаться между разными стеками проекта.",
    imgPath: "/images/exp_angular.png",
    logoPath: "/images/logo_docker.png",
    title: "Frontend Developer (Vue / Testing)",
    date: "2023",
    responsibilities: [
      "Разработка UI-компонентов на Vue.js и поддержка существующих проектов.",
      "Написание юнит-тестов с использованием Vitest для обеспечения стабильности функционала.",
      "Участие в оптимизации сборки и улучшении архитектуры клиентской части.",
    ],
  },
];
const techStackIcons: ModelConfig[] = [
  {
    name: "React/Next.js разработчик",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node/Nest.js разработчик",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Разработчик интерактивных решений",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Менеджер проектов",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
] as const;
const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];
const testimonials = [
  {
    name: "Ажеев Сергей",
    mentions: "@sumi4ka",
    review:
      "Работать с Сашей — это прежде всего про надежность и уверенность в результате. Я всегда знаю, что он не просто выполнит задачу, а вникнет в самую суть и сделает всё на совесть. Он очень отзывчивый и всегда готов поддержать, когда проект требует особого внимания. С ним чувствуешь себя в надежных руках — и как с разработчиком, и как с человеком.",
    imgPath: "/images/client1.jpg",
  },
];
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const siteConfig = {
  links: {
    telegram: "https://t.me/твой_ник",
    discord: "https://discord.com/users/твой_айди",
    github: "https://github.com/твой_ник",
    vk: "https://vk.com/твоя_страница",
  },
};

const socials = [
  {
    name: "Telegram",
    href: siteConfig.links.telegram,
    icon: TelegramIcon,
    label: "Перейти в Telegram Александра",
  },
  {
    name: "Discord",
    href: siteConfig.links.discord,
    icon: DiscordIcon,
    label: "Связаться в Discord",
  },
  {
    name: "Github",
    href: siteConfig.links.github,
    icon: GithubIcon,
    label: "Посмотреть проекты на Github",
  },
  {
    name: "VK",
    href: siteConfig.links.vk,
    icon: VKIcon,
    label: "Профиль ВКонтакте",
  },
];
export {
  navLinks,
  words,
  counterItems,
  logoIconsList,
  abilities,
  expCards,
  techStackIcons,
  techStackImgs,
  testimonials,
  socialImgs,
  siteConfig,
  socials,
};
