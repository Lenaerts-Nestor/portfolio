import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.slate[300]};
  box-shadow: ${(props) => props.theme.shadow.sm};
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const Nav = styled.nav`
  max-width: 72rem; /* container */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem; /* h-16 */
`;

export const Logo = styled.a`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: 1.875rem; /* text-3xl */
  background: ${(props) => props.theme.colors.primary.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9; /* hover:opacity-90 */
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.5rem; /* md:text-2xl */
  }
`;

export const DesktopNav = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: 2rem; /* space-x-8 */
  }
`;

export const NavLink = styled.a<{ $active: boolean }>`
  padding: 0.5rem 0.75rem; /* px-3 py-2 */
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  transition: colors 0.2s;

  ${(props) =>
    props.$active
      ? `
    color: ${props.theme.colors.indigo[600]};
    border-bottom: 2px solid ${props.theme.colors.indigo[600]};
  `
      : `
    color: ${props.theme.colors.slate[700]};
    &:hover {
      color: ${props.theme.colors.indigo[600]};
    }
  `}
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem; /* space-x-4 */
`;

export const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.slate[700]};
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.indigo[600]};
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.slate[700]};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 4rem; /* top-16 */
  left: 0;
  right: 0;
  padding: 1rem; /* p-4 */
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.slate[300]};
  box-shadow: ${(props) => props.theme.shadow.lg};
  z-index: 50;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* space-y-2 */
`;

export const MobileNavLink = styled.a<{ active: boolean }>`
  display: block;
  padding: 0.75rem; /* p-3 */
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  transition: colors 0.2s;
  border-radius: ${(props) => props.theme.borderRadius.md};

  ${(props) =>
    props.active
      ? `
    color: ${props.theme.colors.indigo[600]};
    background-color: ${props.theme.colors.indigo[50]};
  `
      : `
    color: ${props.theme.colors.slate[700]};
    &:hover {
      background-color: ${props.theme.colors.slate[100]};
    }
  `}
`;

export const MobileMenuFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.slate[200]};
`;

export const RightSectionDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
