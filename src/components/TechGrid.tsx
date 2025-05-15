// src/components/TechGrid.tsx
import React from 'react';
import Image from 'next/image';
import { TechGridProps } from '@/interfaces/interface';
import {
  TechGridContainer,
  TechGridLayout,
  TechItem,
  TechImageWrapper,
  TechName,
} from './TechGrid.styled';

export default function TechGrid({
  technologies,
  className = '',
}: TechGridProps) {
  return (
    <TechGridContainer className={className}>
      <TechGridLayout>
        {technologies.map((tech) => (
          <TechItem key={tech.name}>
            <TechImageWrapper>
              <Image
                src={tech.iconPath}
                alt={tech.name}
                fill
                className='object-contain'
              />
            </TechImageWrapper>
            <TechName color={tech.color}>{tech.name}</TechName>
          </TechItem>
        ))}
      </TechGridLayout>
    </TechGridContainer>
  );
}
