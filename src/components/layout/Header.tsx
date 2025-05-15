// src/components/layout/Header.tsx
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {
  HeaderContainer,
  Nav,
  NavContent,
  Logo,
  DesktopNav,
  NavLink,
  SocialIcons,
  SocialLink,
  MobileMenuButton,
  MobileMenu,
  MobileNavLinks,
  MobileNavLink,
  MobileMenuFooter,
  RightSectionDesktop,
} from './Header.styled';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <HeaderContainer>
      <Nav>
        <NavContent>
          <Link href='/' passHref legacyBehavior>
            <Logo>Lenaerts</Logo>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav>
            <Link href='/' passHref legacyBehavior>
              <NavLink $active={isActive('/')}>{t('navigation.home')}</NavLink>
            </Link>

            <Link href='/about' passHref legacyBehavior>
              <NavLink $active={isActive('/about')}>
                {t('navigation.about')}
              </NavLink>
            </Link>

            <Link href='/blog' passHref legacyBehavior>
              <NavLink $active={isActive('/blog')}>
                {t('navigation.blog')}
              </NavLink>
            </Link>

            <Link href='/documentation' passHref legacyBehavior>
              <NavLink $active={isActive('/documentation')}>
                {t('navigation.documentation')}
              </NavLink>
            </Link>

            <RightSectionDesktop>
              <SocialIcons>
                <SocialLink
                  href='https://github.com/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
                >
                  <Github size={20} />
                </SocialLink>
                <SocialLink
                  href='https://www.linkedin.com/in/yourprofile'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                >
                  <Linkedin size={20} />
                </SocialLink>
              </SocialIcons>

              <LanguageSwitcher />
            </RightSectionDesktop>
          </DesktopNav>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </NavContent>
      </Nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen}>
        <MobileNavLinks>
          <Link href='/' passHref legacyBehavior>
            <MobileNavLink
              active={isActive('/')}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.home')}
            </MobileNavLink>
          </Link>

          <Link href='/about' passHref legacyBehavior>
            <MobileNavLink
              active={isActive('/about')}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.about')}
            </MobileNavLink>
          </Link>

          <Link href='/blog' passHref legacyBehavior>
            <MobileNavLink
              active={isActive('/blog')}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.blog')}
            </MobileNavLink>
          </Link>

          <Link href='/documentation' passHref legacyBehavior>
            <MobileNavLink
              active={isActive('/documentation')}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.documentation')}
            </MobileNavLink>
          </Link>
        </MobileNavLinks>

        <MobileMenuFooter>
          <SocialIcons>
            <SocialLink
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <Github size={20} />
            </SocialLink>
            <SocialLink
              href='https://www.linkedin.com/in/yourprofile'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <Linkedin size={20} />
            </SocialLink>
          </SocialIcons>

          <LanguageSwitcher />
        </MobileMenuFooter>
      </MobileMenu>
    </HeaderContainer>
  );
}
