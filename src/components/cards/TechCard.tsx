import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Briefcase } from 'lucide-react';
import { Project } from '@/interfaces/interface';
import {
  StyledLink,
  CardWrapper,
  CardContent,
  IconContainer,
  CardTitle,
  CardDescription,
  CardFooter,
  FooterTitle,
  TechTag,
  TechsContainer,
  TechBadge,
  TechImageBox,
  TechName,
} from './TechCard.styled';

export default function TechCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const { t } = useTranslation('common');

  return (
    <Link href={project.href} passHref legacyBehavior>
      <StyledLink>
        <CardWrapper className={className}>
          <CardContent>
            <IconContainer>
              <Briefcase size={24} />
            </IconContainer>

            <CardTitle>{project.title}</CardTitle>

            <CardDescription>{project.description}</CardDescription>
          </CardContent>

          <CardFooter>
            <FooterTitle>
              <TechTag>#</TechTag> {t('techUsed')}
            </FooterTitle>

            <TechsContainer>
              {project.techs.map((tech) => (
                <TechBadge
                  key={tech.name}
                  bgColor={`${tech.color.replace('text-', '')}1a`}
                >
                  <TechImageBox>
                    <Image
                      src={tech.iconPath}
                      alt={tech.name}
                      fill
                      className='object-contain'
                    />
                  </TechImageBox>
                  <TechName>{tech.name}</TechName>
                </TechBadge>
              ))}
            </TechsContainer>
          </CardFooter>
        </CardWrapper>
      </StyledLink>
    </Link>
  );
}
