import React from 'react';

const About = () => {
  return (
    <div
      className="flex flex-col lg:gap-2 gap-6"
      id="about"
    >
      <h2 className="text-secondary text-[20px]">Hi, my name is</h2>
      <div>
        <p className="lg:text-[80px] md:text-[65px] text-[30px] tracking-wide text-neutral-300">Tomasz Iwanicki.</p>
        <p className="lg:text-[80px]  md:text-[65px] text-[30px] tracking-wide text-neutral-400">I'm a web developer</p>
      </div>
      <p className="text-neutral-400 text-[18px] lg:w-[50%] sm:w-[70%]">
        I'm a web developer mainly focused on frontend. I specialize in bringing digital experiences to life through visually appealing and interactive user interfaces. My portfolio showcases a diverse range of projects where I have leveraged my skills in web development.
      </p>
      <div className="flex md:justify-start justify-center">
        <a
          href="#projects"
          className="w-[260px]"
        >
          <button className="py-3 px-6 border-[2px] w-[260px] border-secondary rounded-md mt-8 text-secondary hover:border-secondary/50 hover:text-secondary/80 text-[20px]">Check out my projects!</button>
        </a>
      </div>
    </div>
  );
};

export default About;
