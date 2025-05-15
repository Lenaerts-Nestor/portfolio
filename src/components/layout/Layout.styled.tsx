import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh; /* min-h-screen */
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex-grow: 1; /* flex-grow */
  max-width: 72rem; /* container */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
  padding-top: 2rem; /* py-8 */
  padding-bottom: 2rem;
`;
