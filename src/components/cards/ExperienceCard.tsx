import { ExperienceCardProps } from '@/interfaces/interface';
import { FC } from 'react';

const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  company,
  date,
  location,
  description,
}) => {
  return (
    <div className='border border-slate-300 p-4 rounded-lg'>
      <h3 className='text-xl font-semibold text-slate-800'>{title}</h3>
      <p className='text-indigo-600 font-medium'>{company}</p>
      <p className='text-sm text-slate-500'>{date}</p>
      <p className='text-sm text-slate-500'>{location}</p>
      <p className='text-slate-600 mt-2'>{description}</p>
    </div>
  );
};

export default ExperienceCard;
