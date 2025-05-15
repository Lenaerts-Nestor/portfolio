// src/components/Card.tsx
import { CardProps } from '@/interfaces/interface';
import React, { FC } from 'react';
import styled from 'styled-components';

interface StyledCardProps {
  className?: string;
}

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius['2xl']};
  border: 1px solid ${(props) => props.theme.colors.slate[200]};
  padding: ${(props) => props.theme.spacing[6]};
  box-shadow: ${(props) => props.theme.shadow.sm};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.md};
  }

  /* The className prop will be handled by styled-components */
  ${(props) => props.className && props.className};
`;

const Card: FC<CardProps> = ({ children, className }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;
