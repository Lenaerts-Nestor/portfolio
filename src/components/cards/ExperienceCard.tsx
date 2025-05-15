import { ExperienceCardProps } from '@/interfaces/interface';
import { FC } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.slate[300]};
  padding: ${(props) => props.theme.spacing[4]};
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;

const CardTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  color: ${(props) => props.theme.colors.slate[800]};
`;

const CompanyName = styled.p`
  color: ${(props) => props.theme.colors.indigo[600]};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

const CardMeta = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.slate[500]};
`;

const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.slate[600]};
  margin-top: ${(props) => props.theme.spacing[2]};
`;

const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  company,
  date,
  location,
  description,
}) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CompanyName>{company}</CompanyName>
      <CardMeta>{date}</CardMeta>
      <CardMeta>{location}</CardMeta>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default ExperienceCard;
