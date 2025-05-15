// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  FooterHeading,
  FooterText,
  FooterLinksList,
  FooterLinkItem,
  FooterLink,
  SocialLinksContainer,
  SocialLink,
  Copyright,
} from './Footer.styled';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* About Section */}
          <FooterSection>
            <FooterHeading>About</FooterHeading>
            <FooterText>
              Documenting my internship journey at [Company Name] as part of the
              AP Hogeschool Programming program.
            </FooterText>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinksList>
              <FooterLinkItem>
                <Link href='/' passHref legacyBehavior>
                  <FooterLink>Home</FooterLink>
                </Link>
              </FooterLinkItem>
              <FooterLinkItem>
                <Link href='/about' passHref legacyBehavior>
                  <FooterLink>About</FooterLink>
                </Link>
              </FooterLinkItem>
              <FooterLinkItem>
                <Link href='/blog' passHref legacyBehavior>
                  <FooterLink>Blog</FooterLink>
                </Link>
              </FooterLinkItem>
              <FooterLinkItem>
                <Link href='/documentation' passHref legacyBehavior>
                  <FooterLink>Documentation</FooterLink>
                </Link>
              </FooterLinkItem>
            </FooterLinksList>
          </FooterSection>

          {/* Contact Section */}
          <FooterSection>
            <FooterHeading>Connect</FooterHeading>
            <FooterText>
              Follow me on social media or reach out directly.
            </FooterText>
            <SocialLinksContainer>
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
            </SocialLinksContainer>
          </FooterSection>
        </FooterGrid>

        <Copyright>
          © {currentYear} WPL Portfolio. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}
