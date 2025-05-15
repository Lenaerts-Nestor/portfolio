import { SectionProps } from '@/interfaces/interface';
import React, { FC } from 'react';
import styled from 'styled-components';

interface StyledSectionProps {
  className?: string;
}

const StyledSection = styled.section<StyledSectionProps>`
  margin-bottom: ${(props) => props.theme.spacing[12]};
  ${(props) => props.className && props.className};
`;

const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize['4xl']};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing[12]};
  background: ${(props) => props.theme.colors.primary.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  padding-bottom: ${(props) => props.theme.spacing[2]};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -${(props) => props.theme.spacing[2]};
    height: 0.125rem;
    background: ${(props) => props.theme.colors.primary.gradient};
    margin: 0 auto;
    max-width: 72rem; /* equivalent to max-w-6xl */
  }
`;

const Section: FC<SectionProps> = ({ title, children, className }) => {
  return (
    <StyledSection className={className}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledSection>
  );
};

export default Section;
