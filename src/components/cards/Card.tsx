// src/components/Card.tsx
import { CardProps } from '@/interfaces/interface';
import React, { FC } from 'react';

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
