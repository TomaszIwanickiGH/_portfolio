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
];

const projects = [
  {
    image: images.audiophile,
    title: 'AUDIONEST',
    description: 'AudioNest is an e-commerce website, which allows users to purchase headphones, speakers and airpods. The website provides lots of different audio devices.',
    tech: 'ReactJS Tailwind CSS Redux',
    githubLink: 'https://github.com/TomaszIwanickiGH/audiophile',
    liveDemo: 'https://ti-audiophile.online/',
  },
  {
    image: images.kanban,
    title: 'TASKIFY',
    description: 'Taskify app simplifies your day, helping you organize, prioritize, and track your activities effortlessly. Stay productive with a user-friendly interface that keeps your tasks at your fingertips."',
    tech: 'NextJS Tailwind CSS Zustand',
    githubLink: 'https://github.com/TomaszIwanickiGH/',
    liveDemo: 'https://ti-kanban.online',
  },
  {
    image: images.designo,
    title: 'DESIGNO',
    description: 'Discover diverse designs in one app – your ultimate solution for personalized and visually striking mobile experiences.',
    tech: 'ReactJS Tailwind CSS',
    githubLink: 'https://github.com/TomaszIwanickiGH/designo',
    liveDemo: 'https://ti-designo.online',
  },
  {
    image: images.movieland,
    title: 'MOVIELAND',
    description: 'Your shortcut to a world of films. Explore, discover, and enjoy a vast movie library with personalized recommendations in a sleek, user-friendly interface.',
    tech: 'ReactJS Tailwind CSS Zustand',
    githubLink: 'https://github.com/TomaszIwanickiGH/entertainment-app',
    liveDemo: 'https://ti-movieland.online',
  },
  // {
  //   image: images.crowdfund,
  //   title: 'CROWDFUND',
  //   description: 'Crowdfund is a website which represents different funding methods.',
  //   tech: 'React Tailwind',
  //   githubLink: 'https://github.com/TomaszIwanickiGH',
  //   liveDemo: 'https://ti-crowdfund.online',
  // },
];

export default { navLinks, skills, projects };
