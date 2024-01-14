import React from 'react';

const Heading = ({ title, subtitle, id }) => {
  return (
    <section
      id={id}
      className="md:text-start text-center"
    >
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">{subtitle}</p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-wider">{title}</h2>
    </section>
  );
};

export default Heading;
