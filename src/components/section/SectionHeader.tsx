import React, { FC } from 'react';
import { SectionHeaderProps } from '@/interfaces/interface';

const SectionHeader: FC<SectionHeaderProps> = ({ icon: Icon, title }) => (
  <div className='flex items-center gap-3 mb-6'>
    <Icon className='w-8 h-8 text-indigo-600' />
    <h3 className='text-xl font-semibold text-slate-800'>{title}</h3>
  </div>
);

export default SectionHeader;
