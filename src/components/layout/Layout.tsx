import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { LayoutProps } from '@/interfaces/interface';
import { LayoutContainer, Main } from './Layout.styled';

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
}
