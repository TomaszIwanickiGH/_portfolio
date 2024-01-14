import Heading from './Heading';
import { data } from '../constants';

const TechStack = () => {
  return (
    <div
      className="flex flex-col gap-16 md:mt-20 mt-12"
      id="stack"
    >
      <Heading
        id="#stack"
        subtitle="Tech Stack"
        title="My Skills."
      />
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-16">
        {data.skills.map((skill) => (
          <div
            className="flex items-center justify-center flex-col gap-4"
            key={skill.name}
          >
            <img
              src={skill.icon}
              alt="icon"
              className="w-[70px] h-[70px]"
            />
            <p className="">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
