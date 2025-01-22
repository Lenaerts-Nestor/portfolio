import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TechStackItem } from '@/config/techStack';

interface TechScrollProps {
  technologies: TechStackItem[];
  scrollSpeed?: number;
  className?: string;
}

export default function TechScroll({ 
  technologies, 
  scrollSpeed = 30, 
  className = ""
}: TechScrollProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        return newPosition % (technologies.length * 100);
      });
    }, scrollSpeed);

    return () => clearInterval(scrollInterval);
  }, [technologies.length, scrollSpeed]);

  const extendedTechList = [...technologies, ...technologies];

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      
      <div 
        className="flex gap-4 transition-transform duration-100"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
        }}
      >
        {extendedTechList.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex-none w-24 h-24 bg-white rounded-xl border border-slate-900 hover:border-indigo-500/50 transition-all flex flex-col items-center justify-center gap-2 p-2 shadow-sm hover:shadow-md"
          >
            <div className="relative w-8 h-8">
              <Image
                src={tech.iconPath}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <p className={`text-xs font-medium ${tech.color} text-center`}>
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}