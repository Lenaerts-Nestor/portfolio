import { ButtonProps } from '@/interfaces/interface';
import React, { FC } from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  className?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[2]};
  padding: ${(props) => props.theme.spacing[3]}
    ${(props) => props.theme.spacing[8]};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  transition: colors 0.3s ease;

  /* The className prop will be handled by styled-components */
  ${(props) => props.className && props.className};
`;

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
