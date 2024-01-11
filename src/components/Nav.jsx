import { useState } from 'react';

import { images, navLinks } from '../constants';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex md:justify-end justify-between items-center md:p-12 p-8">
      <div className="md:hidden flex justify-center items-center w-[70px]">
        <img
          src={images.logo}
          alt="logo"
          className="w-full bg-cover"
        />
      </div>
      <div className="md:flex hidden justify-end items-center gap-6">
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="flex gap-2"
          >
            <span className="text-secondary">{link.number}</span>
            <p>{link.name}</p>
          </div>
        ))}
      </div>
      <GiHamburgerMenu
        className="md:hidden flex"
        fontSize="28px"
        color="white"
      />

      {toggleMenu && <div></div>}
    </div>
  );
};

export default Nav;
