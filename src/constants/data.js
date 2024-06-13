import { images } from './index';

const navLinks = [
  {
    id: '#about',
    number: '01.',
    name: 'About',
  },
  {
    id: '#stack',
    number: '02.',
    name: 'Stack',
  },
  // {
  //   id: '#experience',
  //   number: '03.',
  //   name: 'Experience',
  // },
  {
    id: '#projects',
    number: '03.',
    name: 'Projects',
  },
  {
    id: '#contact',
    number: '04.',
    name: 'Contact',
  },
];

const skills = [
  {
    icon: images.htmlLogo,
    name: 'HTML 5',
  },
  {
    icon: images.cssLogo,
    name: 'CSS 3',
  },
  {
    icon: images.jsLogo,
    name: 'JavaScript',
  },
  {
    icon: images.reactLogo,
    name: 'React JS',
  },
  {
    icon: images.nextLogo,
    name: 'NextJS',
  },
  {
    icon: images.tsLogo,
    name: 'TypeScript',
  },
  {
    icon: images.tailwindLogo,
    name: 'Tailwind CSS',
  },
  {
    icon: images.githubLogo,
    name: 'Git & Github',
  },
  {
    icon: images.figmaLogo,
    name: 'Figma',
  },
  {
    icon: images.reduxLogo,
    name: 'Redux',
  },
  {
    icon: images.mongodbLogo,
    name: 'MongoDB',
  },
];

const projects = [
  {
    image: images.audiophile,
    title: 'AUDIONEST',
    description: 'AudioNest is an e-commerce website, which allows users to purchase headphones, speakers and airpods. The website provides lots of different audio devices.',
    tech: 'ReactJS Tailwind CSS Redux',
    githubLink: 'https://github.com/TomaszIwanickiGH/audionest',
    liveDemo: 'https://ti-audionest.online/',
  },
  {
    image: images.kanban,
    title: 'TASK MANAGEMENT',
    description: 'Kanban simplifies your day, helping you organize, prioritize, and track your activities effortlessly. Stay productive with a user-friendly interface that keeps your tasks at your fingertips.',
    tech: 'NextJS Tailwind CSS MongoDB',
    githubLink: 'https://github.com/TomaszIwanickiGH/taskify-task-nextjs',
    liveDemo: 'https://taskify-task-nextjs.vercel.app/',
  },
  {
    image: images.designo,
    title: 'DESIGNO',
    description: 'Discover diverse designs in one app – your ultimate solution for personalized and visually striking mobile experiences.',
    tech: 'ReactJS Tailwind CSS',
    githubLink: 'https://github.com/TomaszIwanickiGH/designo',
    // liveDemo: 'https://ti-designo-app.online',
    liveDemo: 'https://designo-beige.vercel.app/',
  },
  // {
  //   image: images.movieland,
  //   title: 'MOVIELAND',
  //   description: 'Your shortcut to a world of films. Explore, discover, and enjoy a vast movie library with personalized recommendations in a sleek, user-friendly interface.',
  //   tech: 'ReactJS Tailwind CSS Zustand',
  //   githubLink: 'https://github.com/TomaszIwanickiGH/movieland',
  //   liveDemo: 'https://ti-movieland.online',
  // },
  {
    image: images.gericht,
    title: 'GERICHT',
    description: 'Dine better with gericht app! Discover, book, and enjoy top-notch eateries hassle-free.',
    tech: 'ReactJS CSS',
    githubLink: 'https://github.com/TomaszIwanickiGH/gericht',
    liveDemo: 'https://ti-gericht.online',
  },
];

export default { navLinks, skills, projects };
