import styled from 'styled-components';

export const StyledLink = styled.a`
  display: flex;
  flex: 1;
  height: 100%;
  transform: translateZ(0);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
    z-index: 10;
  }
`;

export const CardWrapper = styled.div<{ className?: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  border: 1px solid ${(props) => props.theme.colors.slate[200]};
  padding: 1.5rem; /* p-6 */
  box-shadow: ${(props) => props.theme.shadow.sm};
  display: flex;
  flex-direction: column;
  min-height: 320px; /* min-h-[320px] */

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.md};
  }

  ${(props) => props.className && props.className}
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem; /* mb-6 */
  gap: 1rem; /* space-y-4 */
`;

export const IconContainer = styled.div`
  background-color: ${(props) => props.theme.colors.indigo[100]};
  color: ${(props) => props.theme.colors.indigo[600]};
  width: 3rem; /* w-12 */
  height: 3rem; /* h-12 */
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  color: ${(props) => props.theme.colors.slate[800]};
  padding-left: 0.5rem; /* px-2 */
  padding-right: 0.5rem; /* px-2 */
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.slate[600]};
  display: -webkit-box;
  -webkit-line-clamp: 4; /* line-clamp-4 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: 1.625; /* leading-relaxed */
  padding-left: 0.5rem; /* px-2 */
  padding-right: 0.5rem; /* px-2 */
`;

export const CardFooter = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.slate[100]};
  padding-top: 1rem; /* pt-4 */
  margin-top: auto; /* mt-auto */
`;

export const FooterTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: ${(props) => props.theme.colors.slate[500]};
  margin-bottom: 0.75rem; /* mb-3 */
  text-align: center;
`;

export const TechTag = styled.span`
  color: ${(props) => props.theme.colors.indigo[600]};
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem; /* gap-2 */
`;

export const TechBadge = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;
  padding-left: 0.75rem; /* px-3 */
  padding-right: 0.75rem; /* px-3 */
  padding-top: 0.25rem; /* py-1 */
  padding-bottom: 0.25rem; /* py-1 */
  border-radius: ${(props) => props.theme.borderRadius.md};
  background-color: ${(props) => props.bgColor || 'rgba(99, 102, 241, 0.1)'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.bgColor
        ? props.bgColor.replace('1a', '33')
        : 'rgba(99, 102, 241, 0.2)'};
  }
`;

export const TechImageBox = styled.div`
  position: relative;
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
  margin-right: 0.5rem; /* mr-2 */
`;

export const TechName = styled.span`
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.colors.slate[700]};
`;
