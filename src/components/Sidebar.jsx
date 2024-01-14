import { images } from '../constants';
import { TbBrandGithub } from 'react-icons/tb';
import { BiLogoLinkedin } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className="md:flex hidden flex-col justify-between items-center w-[8%] h-screen px-12 pt-8">
      <div className="flex justify-center items-center w-[70px]">
        <a href="/">
          <img
            src={images.logo}
            alt="logo"
            className="w-full bg-cover"
          />
        </a>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="mb-16">
          <p className="-rotate-90 tracking-wide text-neutral-400">tomasz.iwanicki@onet.pl</p>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="https://github.com/TomaszIwanickiGH"
            target="_blank"
            className=" hover:text-white text-neutral-400"
          >
            <TbBrandGithub fontSize="30px" />
          </a>
          <a
            href="https://www.linkedin.com/in/tomasz-iwanicki-765596278/"
            target="_blank"
            className=" hover:text-white text-neutral-400"
          >
            <BiLogoLinkedin fontSize="30px" />
          </a>
        </div>
        <div className="w-[2px] flex justify-center items-center bg-neutral-500 h-[100px]" />
      </div>
    </div>
  );
};

export default Sidebar;
