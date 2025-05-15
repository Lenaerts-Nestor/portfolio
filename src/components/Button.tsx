import { ButtonProps } from '@/interfaces/interface';
import React, { FC } from 'react';

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
