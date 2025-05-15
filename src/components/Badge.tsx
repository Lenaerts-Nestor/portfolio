import { BadgeProps } from '@/interfaces/interface';
import { FC } from 'react';
import styled from 'styled-components';

const BadgeContainer = styled.div`
  display: inline-flex;
  padding: 0.25rem 0.75rem;
  background-color: ${(props) => props.theme.colors.indigo[100]};
  color: ${(props) => props.theme.colors.indigo[600]};
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

const Badge: FC<BadgeProps> = ({ text }) => {
  return <BadgeContainer>{text}</BadgeContainer>;
};

export default Badge;
