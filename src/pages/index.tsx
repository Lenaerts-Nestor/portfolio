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

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{`WPL Portfolio - ${t('navigation.home')}`}</title>
        <meta name='description' content={t('home.description')} />
      </Head>

      <div className='max-w-6xl mx-auto px-4'>
        <HeroSection
          title={t('home.welcome')}
          description={t('home.description').replace("'", '&apos;')}
          blogText={t('home.readBlog')}
          aboutText={t('home.aboutMe')}
        />

        {/* Technologies Section */}
        <Section title={t('home.technologies')}>
          <p className='text-center text-slate-600 mb-8 max-w-2xl mx-auto'>
            {t('home.techDescription')}
          </p>
          <TechGrid technologies={techStack} className='mb-8' />
        </Section>

        {/* Projects Section */}
        <Section title={t('home.projects')}>
          <p className='text-center text-slate-600 mb-8 max-w-2xl mx-auto'>
            {t('home.projectsDescription')}
          </p>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
            {projects.map((project) => (
              <TechCard
                key={project.title}
                project={project}
                className='border border-slate-300'
              />
            ))}
          </section>
        </Section>

        {/* Experience Section */}
        <Section title={t('home.experienceTitle')}>
          <section className='space-y-6 mb-8 max-w-3xl mx-auto'>
            <p className='text-center text-slate-600 mb-8 max-w-2xl mx-auto'>
              {t('home.experienceDescription')}
            </p>
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
          </section>
        </Section>

        {/* Core Skills Section */}
        <Section title={t('home.coreSkillsTitle')}>
          <section className='mb-8 max-w-3xl mx-auto'>
            <p className='text-center text-slate-600 mb-8 max-w-2xl mx-auto'>
              {t('home.skillsDescription')}
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {(t('home.skills', { returnObjects: true }) as string[]).map(
                (skill) => (
                  <Card
                    key={skill}
                    className='text-center flex items-center justify-center min-h-[120px] md:min-h-[100px]'
                  >
                    <span className='text-indigo-600 font-medium text-sm md:text-base break-words'>
                      {skill}
                    </span>
                  </Card>
                )
              )}
            </div>
          </section>
        </Section>

        {/* Education Section */}
        <Section title={t('home.educationTitle')}>
          <p className='text-center text-slate-600 mb-8 max-w-2xl mx-auto'>
            {t('home.educationDescription')}
          </p>
          <section className='mb-8 max-w-3xl mx-auto'>
            <Card className='hover:shadow-md transition-shadow border border-slate-300'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xl font-semibold text-slate-800'>
                    {t('home.education.degree')}
                  </h3>
                  <p className='text-indigo-600 font-medium'>
                    {t('home.education.school')}
                  </p>
                </div>
                <span className='text-sm text-slate-500'>
                  {t('home.education.duration')}
                </span>
              </div>
              <div className='mt-4'>
                <p className='text-slate-600'>{t('home.education.courses')}</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                  <Badge text={t('home.education.courseList.web')} />
                  <Badge text={t('home.education.courseList.systems')} />
                </div>
              </div>
            </Card>
          </section>
        </Section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
