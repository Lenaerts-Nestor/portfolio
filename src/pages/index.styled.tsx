import styled from 'styled-components';

// Container styles
export const Container = styled.div`
  max-width: 72rem; /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

// Section descriptions
export const SectionDescription = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.slate[600]};
  margin-bottom: 2rem; /* mb-8 */
  max-width: 42rem; /* max-w-2xl */
  margin-left: auto;
  margin-right: auto;
`;

// Skills grid
export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* grid-cols-2 */
  gap: 1rem; /* gap-4 */

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
  }
`;

export const SkillText = styled.span`
  color: ${(props) => props.theme.colors.indigo[600]};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: 0.875rem; /* text-sm */
  word-break: break-word; /* break-words */

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1rem; /* md:text-base */
  }
`;

// Project grid
export const ProjectGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr; /* grid-cols-1 */
  gap: 1.5rem; /* gap-6 */
  margin-bottom: 2rem; /* mb-8 */

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr); /* lg:grid-cols-3 */
  }
`;

// Experience section
export const ExperienceSection = styled.section`
  margin-bottom: 2rem; /* mb-8 */
  max-width: 48rem; /* max-w-3xl */
  margin-left: auto;
  margin-right: auto;
  > * + * {
    margin-top: 1.5rem; /* space-y-6 */
  }
`;

// Education section
export const EducationSection = styled.section`
  margin-bottom: 2rem; /* mb-8 */
  max-width: 48rem; /* max-w-3xl */
  margin-left: auto;
  margin-right: auto;
`;

export const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const EducationTitle = styled.h3`
  font-size: 1.25rem; /* text-xl */
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  color: ${(props) => props.theme.colors.slate[800]};
`;

export const EducationSchool = styled.p`
  color: ${(props) => props.theme.colors.indigo[600]};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

export const EducationDuration = styled.span`
  font-size: 0.875rem; /* text-sm */
  color: ${(props) => props.theme.colors.slate[500]};
`;

export const EducationContent = styled.div`
  margin-top: 1rem; /* mt-4 */
`;

export const EducationCourseText = styled.p`
  color: ${(props) => props.theme.colors.slate[600]};
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; /* gap-2 */
  margin-top: 0.5rem; /* mt-2 */
`;
