import React, { FC } from 'react';
import SectionHeader from './SectionHeader';
import { AboutSectionProps } from '@/interfaces/interface';

const AboutSection: FC<AboutSectionProps> = ({
  icon,
  title,
  children,
  className = '',
}) => (
  <section className={`mb-12 ${className}`}>
    <SectionHeader icon={icon} title={title} />
    {children}
  </section>
);

export default AboutSection;
