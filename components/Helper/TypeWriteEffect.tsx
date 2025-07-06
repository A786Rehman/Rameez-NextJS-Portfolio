import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'UI/UX Designer',
        1000,
        'Web & App Developer',
        1000,
        'Frontend Web Developer',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold'
      repeat={Infinity}
    />
  );
};

export default TypeWriteEffect;
