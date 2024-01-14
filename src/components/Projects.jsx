import Heading from './Heading';
import { data } from '../constants';
import { TbBrandGithub } from 'react-icons/tb';
import { LiaShareSquare } from 'react-icons/lia';

const Project = ({ title, description, tech, image, githubLink, liveDemo }) => (
  <a
    href={liveDemo}
    target="_blank"
    className="flex flex-col justify-center items-center gap-6 border-[2px] border-secondary/30 rounded-lg p-6 hover:cursor-pointer hover:border-secondary"
  >
    <div className="xl:h-[335px] flex items-center">
      <img
        src={image}
        alt="img"
        className="xl:max-w-[450px] xl:max-h-[335px]"
      />
    </div>
    <h3 className="text-[20px] text-secondary font-bold">{title}</h3>
    <p className="text-center text-neutral-400">{description}</p>
    <p className="text-secondary text-[18px]">{tech}</p>
    <div className="flex justify-center items-center gap-12">
      <a
        href={githubLink}
        target="_blank"
      >
        <div className="flex gap-4 items-center hover:text-neutral-400 hover:cursor-pointer">
          <p>Github code</p>
          <TbBrandGithub fontSize="30px" />
        </div>
      </a>
      <a
        href={liveDemo}
        target="_blank"
      >
        <div className="flex gap-4 items-center hover:text-neutral-400 hover:cursor-pointer">
          <p>Live Demo</p>
          <LiaShareSquare fontSize="30px" />
        </div>
      </a>
    </div>
  </a>
);

const Projects = () => {
  return (
    <div
      className="flex flex-col gap-16 lg:mt-20 mt-12"
      id="projects"
    >
      <Heading
        subtitle="My Work"
        title="Projects."
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
        {data.projects.map((project) => (
          <Project
            key={project.name}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
