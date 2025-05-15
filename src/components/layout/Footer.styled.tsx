import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.gray[900]};
  color: ${(props) => props.theme.colors.gray[300]};
`;

export const FooterContent = styled.div`
  max-width: 72rem; /* container */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
  padding-top: 3rem; /* py-12 */
  padding-bottom: 3rem;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* grid-cols-1 */
  gap: 2rem; /* gap-8 */

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
  }
`;

export const FooterSection = styled.div``;

export const FooterHeading = styled.h3`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 1rem; /* mb-4 */
`;

export const FooterText = styled.p`
  color: ${(props) => props.theme.colors.gray[400]};
  line-height: 1.625; /* leading-relaxed */
`;

export const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* space-y-2 */
`;

export const FooterLinkItem = styled.li``;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.gray[400]};
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.primary.indigo};
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem; /* space-x-4 */
  margin-top: 1rem; /* mt-4 */
`;

export const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.gray[400]};
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.gray[100]};
  }
`;

export const Copyright = styled.div`
  margin-top: 2rem; /* mt-8 */
  padding-top: 2rem; /* pt-8 */
  border-top: 1px solid ${(props) => props.theme.colors.gray[800]};
  text-align: center;
  color: ${(props) => props.theme.colors.gray[500]};
  font-size: ${(props) => props.theme.fontSize.sm};
`;
