import React, { FC } from 'react';
import styled from 'styled-components';
import { SectionHeaderProps } from '@/interfaces/interface';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing[3]};
  margin-bottom: ${(props) => props.theme.spacing[6]};
`;

const StyledIcon = styled.div`
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.theme.colors.indigo[600]};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const HeaderTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  color: ${(props) => props.theme.colors.slate[800]};
`;

const SectionHeader: FC<SectionHeaderProps> = ({ icon: Icon, title }) => (
  <HeaderContainer>
    <StyledIcon>
      <Icon />
    </StyledIcon>
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderContainer>
);

export default SectionHeader;
