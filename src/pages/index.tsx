import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { techStack } from '@/config/techStack';
import { projects } from '@/config/projects';
import TechGrid from '@/components/TechGrid';
import TechCard from '@/components/cards/TechCard';
import Section from '@/components/section/Section';
import Card from '@/components/cards/Card';
import ExperienceCard from '@/components/cards/ExperienceCard';
import Badge from '@/components/Badge';
import HeroSection from '@/components/section/HeroSection';
import {
  Container,
  SectionDescription,
  SkillsGrid,
  SkillText,
  ProjectGrid,
  ExperienceSection,
  EducationSection,
  EducationHeader,
  EducationTitle,
  EducationSchool,
  EducationDuration,
  EducationContent,
  EducationCourseText,
  BadgeContainer,
} from './index.styled';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{`WPL Portfolio - ${t('navigation.home')}`}</title>
        <meta name='description' content={t('home.description')} />
      </Head>

      <Container>
        <HeroSection
          title={t('home.welcome')}
          description={t('home.description').replace("'", '&apos;')}
          blogText={t('home.readBlog')}
          aboutText={t('home.aboutMe')}
        />

        {/* Technologies Section */}
        <Section title={t('home.technologies')}>
          <SectionDescription>{t('home.techDescription')}</SectionDescription>
          <TechGrid technologies={techStack} className='mb-8' />
        </Section>

        {/* Projects Section */}
        <Section title={t('home.projects')}>
          <SectionDescription>
            {t('home.projectsDescription')}
          </SectionDescription>
          <ProjectGrid>
            {projects.map((project) => (
              <TechCard
                key={project.title}
                project={project}
                className='border border-slate-300'
              />
            ))}
          </ProjectGrid>
        </Section>

        {/* Experience Section */}
        <Section title={t('home.experienceTitle')}>
          <ExperienceSection>
            <SectionDescription>
              {t('home.experienceDescription')}
            </SectionDescription>
            <ExperienceCard
              title={t('home.positions.fullStackDev')}
              company={t('home.companies.amotek')}
              date={t('home.experienceDates.amotek')}
              location={t('home.locations.hybrid')}
              description={t('home.experienceDescriptions.amotek')}
            />
            <ExperienceCard
              title={t('home.positions.ictConsultant')}
              company={t('home.companies.beego')}
              date={t('home.experienceDates.beego')}
              location={t('home.locations.remote')}
              description={t('home.experienceDescriptions.beego')}
            />
            <ExperienceCard
              title={t('home.positions.ictSupport')}
              company={t('home.companies.digipolis')}
              date={t('home.experienceDates.digipolis')}
              location={t('home.locations.antwerp')}
              description={t('home.experienceDescriptions.digipolis')}
            />
          </ExperienceSection>
        </Section>

        {/* Core Skills Section */}
        <Section title={t('home.coreSkillsTitle')}>
          <EducationSection>
            <SectionDescription>
              {t('home.skillsDescription')}
            </SectionDescription>
            <SkillsGrid>
              {(t('home.skills', { returnObjects: true }) as string[]).map(
                (skill) => (
                  <Card key={skill}>
                    <SkillText>{skill}</SkillText>
                  </Card>
                )
              )}
            </SkillsGrid>
          </EducationSection>
        </Section>

        {/* Education Section */}
        <Section title={t('home.educationTitle')}>
          <SectionDescription>
            {t('home.educationDescription')}
          </SectionDescription>
          <EducationSection>
            <Card>
              <EducationHeader>
                <div>
                  <EducationTitle>{t('home.education.degree')}</EducationTitle>
                  <EducationSchool>
                    {t('home.education.school')}
                  </EducationSchool>
                </div>
                <EducationDuration>
                  {t('home.education.duration')}
                </EducationDuration>
              </EducationHeader>
              <EducationContent>
                <EducationCourseText>
                  {t('home.education.courses')}
                </EducationCourseText>
                <BadgeContainer>
                  <Badge text={t('home.education.courseList.web')} />
                  <Badge text={t('home.education.courseList.systems')} />
                </BadgeContainer>
              </EducationContent>
            </Card>
          </EducationSection>
        </Section>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
