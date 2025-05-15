import { SectionProps } from '@/interfaces/interface';
import React, { FC } from 'react';

const Section: FC<SectionProps> = ({ title, children, className }) => {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative pb-2'>
        {title}
        <span className='absolute left-0 right-0 -bottom-2 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto max-w-6xl'></span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
