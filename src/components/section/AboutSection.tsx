import React, { FC } from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import { AboutSectionProps } from '@/interfaces/interface';

interface StyledSectionProps {
  className?: string;
}

const StyledSection = styled.section<StyledSectionProps>`
  margin-bottom: ${(props) => props.theme.spacing[12]};
  ${(props) => props.className && props.className};
`;

const AboutSection: FC<AboutSectionProps> = ({
  icon,
  title,
  children,
  className = '',
}) => (
  <StyledSection className={className}>
    <SectionHeader icon={icon} title={title} />
    {children}
  </StyledSection>
);

export default AboutSection;
