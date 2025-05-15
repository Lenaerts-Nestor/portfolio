import { BadgeProps } from '@/interfaces/interface';
import { FC } from 'react';

const Badge: FC<BadgeProps> = ({ text }) => {
  return <div className='badge'>{text}</div>;
};

export default Badge;
