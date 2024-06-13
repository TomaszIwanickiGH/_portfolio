import { useState } from 'react';

import { images, data } from '../constants';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex md:justify-end justify-between items-center bg-primary/70 z-10">
      <div className="md:hidden flex justify-center items-center w-[70px]">
        <a href="/">
          <img
            src={images.logo}
            alt="logo"
            className="w-full bg-cover"
          />
        </a>
      </div>
      <div className="sm:flex hidden justify-end items-center gap-6">
        {data.navLinks.map((link) => (
          <a
            key={link.name}
            href={link.id}
            className="flex gap-2 hover:cursor-pointer"
          >
            <span className="text-secondary">{link.number}</span>
            <p>{link.name}</p>
          </a>
        ))}
      </div>
      <GiHamburgerMenu
        onClick={() => setToggleMenu((prev) => !prev)}
        className="sm:hidden flex hover:cursor-pointer"
        fontSize="28px"
        color="white"
      />

      {toggleMenu && (
        <div className="flex flex-col gap-6 absolute top-[100px] right-[50px] p-4 border-[2px] border-secondary rounded-2xl z-50">
          {data.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.id}
              className="flex gap-2 min-w-[200px] hover:cursor-pointer border-b-[1px] border-secondary border-dashed pb-4"
            >
              <span className="text-secondary">{link.number}</span>
              <p>{link.name}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
