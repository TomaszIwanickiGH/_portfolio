import Heading from './Heading';
import { data, images } from '../constants';
import { TbBrandGithub } from 'react-icons/tb';

const Project = ({ title, description, tech, image, githubLink, liveDemo }) => (
  <div className="flex flex-col justify-center items-center gap-6 border-[2px] border-secondary/30 rounded-lg p-6 hover:cursor-pointer hover:border-secondary">
    <div className="h-[335px] flex items-center">
      <img
        src={image}
        alt="img"
        className="max-w-[450px] max-h-[335px]"
      />
    </div>
    <h3 className="text-[20px] text-secondary font-bold">{title}</h3>
    <p className="text-center text-neutral-400">{description}</p>
    <p className="text-secondary text-[18px]">{tech}</p>
    <div className="flex justify-center items-center gap-12">
      <div className="flex gap-4 items-center hover:text-neutral-400 hover:cursor-pointer">
        <p>Github code</p>
        <TbBrandGithub fontSize="30px" />
      </div>
      <div className="flex gap-4 items-center hover:text-neutral-400 hover:cursor-pointer">
        <p>Live Demo</p>
        <img
          src={images.iconLive}
          alt="live"
          className="w-[30px]"
        />
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div
      className="flex flex-col gap-16 mt-20"
      id="projects"
    >
      <Heading
        subtitle="My Work"
        title="Projects."
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
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
