import React, { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styled from 'styled-components';

import Button from '../Button';
import { HeroSectionProps } from '@/interfaces/interface';

const StyledHeroSection = styled.section`
  text-align: center;
  padding-top: ${(props) => props.theme.spacing[16]};
  padding-bottom: ${(props) => props.theme.spacing[16]};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-top: ${(props) => props.theme.spacing[24]};
    padding-bottom: ${(props) => props.theme.spacing[24]};
  }
`;

const HeroTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize['5xl']};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin-bottom: ${(props) => props.theme.spacing[6]};
  background: ${(props) => props.theme.colors.primary.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSize['6xl']};
  }
`;

const HeroDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.colors.slate[600]};
  margin-bottom: ${(props) => props.theme.spacing[12]};
  max-width: 48rem; /* equivalent to max-w-3xl */
  margin-left: auto;
  margin-right: auto;
  line-height: 1.75;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[4]};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled(Button)`
  background: ${(props) => props.theme.colors.primary.gradient};
  color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.lg};
  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.colors.indigo[500]};
  color: ${(props) => props.theme.colors.indigo[600]};
  &:hover {
    background-color: ${(props) => props.theme.colors.indigo[50]};
  }
`;

const LinkWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing[2]};
`;

const HeroSection: FC<HeroSectionProps> = ({
  title,
  description,
  blogText,
  aboutText,
}) => (
  <StyledHeroSection>
    <HeroTitle>{title}</HeroTitle>
    <HeroDescription>{description}</HeroDescription>
    <ButtonContainer>
      <PrimaryButton>
        <Link href='/blog' passHref>
          <LinkWithIcon>
            {blogText}
            <ArrowRight size={20} />
          </LinkWithIcon>
        </Link>
      </PrimaryButton>
      <SecondaryButton>
        <Link href='/about' passHref>
          <LinkWithIcon>{aboutText}</LinkWithIcon>
        </Link>
      </SecondaryButton>
    </ButtonContainer>
  </StyledHeroSection>
);

export default HeroSection;
