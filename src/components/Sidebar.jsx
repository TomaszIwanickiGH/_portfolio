import { images } from '../constants';
import { TbBrandGithub } from 'react-icons/tb';
import { BiLogoLinkedin } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className="md:flex hidden flex-col justify-between items-center w-[8%] h-screen px-6 pt-8">
      <div className="flex justify-center items-center w-[70px]">
        <img
          src={images.logo}
          alt="logo"
          className="w-full bg-cover"
        />
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col gap-4">
          <TbBrandGithub fontSize="30px" />
          <BiLogoLinkedin fontSize="30px" />
        </div>
        <div className="w-[2px] flex justify-center items-center bg-neutral-400 h-[100px]" />
      </div>
    </div>
  );
};

export default Sidebar;
