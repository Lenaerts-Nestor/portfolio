import styled from 'styled-components';

export const TechGridContainer = styled.section`
  ${(props) => props.className && props.className}
`;

export const TechGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* grid-cols-3 */
  gap: 1rem; /* gap-4 */

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr); /* md:grid-cols-4 */
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(7, 1fr); /* lg:grid-cols-7 */
  }
`;

export const TechItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem; /* p-4 */
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadow.sm};
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.lg};
    transform: translateY(-0.25rem); /* hover:-translate-y-1 */
    z-index: 10; /* hover:z-10 */
  }
`;

export const TechImageWrapper = styled.div`
  position: relative;
  width: 3rem; /* w-12 */
  height: 3rem; /* h-12 */
  margin-bottom: 0.5rem; /* mb-2 */
`;

export const TechName = styled.p<{ color: string }>`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: ${(props) => props.color || props.theme.colors.slate[800]};
  text-align: center;
`;
