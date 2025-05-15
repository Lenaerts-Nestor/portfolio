// src/components/TechGrid.tsx
import React from 'react';
import Image from 'next/image';

import { TechGridProps } from '@/interfaces/interface';

export default function TechGrid({
  technologies,
  className = '',
}: TechGridProps) {
  return (
    <section className={`${className}`}>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4'>
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className='group relative flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:z-10'
          >
            <div className='relative w-12 h-12 mb-2'>
              <Image
                src={tech.iconPath}
                alt={tech.name}
                fill
                className='object-contain'
              />
            </div>
            <p className={`text-sm font-medium ${tech.color} text-center`}>
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
