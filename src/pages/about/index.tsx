import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import {
  GraduationCap,
  Languages,
  BrainCircuit,
  Target,
  BookOpen,
} from 'lucide-react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AboutSection from '../../components/section/AboutSection';

const Container = styled.div`
  max-width: 48rem; /* equivalent to max-w-3xl */
  margin: 0 auto;
  padding: 3rem 1rem; /* py-12 px-4 */
`;

const IntroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem; /* mb-16 */
`;

const Content = styled.div`
  line-height: 1.75;
  p {
    color: ${(props) => props.theme.colors.slate[600]};
    margin-bottom: ${(props) => props.theme.spacing[6]};
  }
  h1 {
    font-size: ${(props) => props.theme.fontSize['4xl']};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin-bottom: ${(props) => props.theme.spacing[2]};
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize['2xl']};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    color: ${(props) => props.theme.colors.slate[800]};
  }
`;

export default function About() {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Content>
        {/* Introduction */}
        <IntroSection>
          <h1>Nestor Lenaerts</h1>
          <h2>{t('about.title')}</h2>
        </IntroSection>

        {/* Goals Section */}
        <AboutSection icon={Target} title={t('about.goalsTitle')}>
          <p className='text-slate-600 leading-relaxed mb-6'>
            {t('about.goalsText')}
          </p>
          <div className='border-l-4 border-indigo-100 pl-4'>
            <p className='text-slate-600 italic'>
              {t('about.goalsPhilosophy')}
            </p>
          </div>
        </AboutSection>

        {/* Methods Section */}
        <AboutSection icon={BookOpen} title={t('about.methodsTitle')}>
          <div className='space-y-6'>
            <div className='border-l-4 border-indigo-100 pl-4'>
              <h4 className='text-lg font-semibold mb-3 text-slate-800'>
                {t('about.methodsApproach')}
              </h4>
              <p className='text-slate-600 leading-relaxed'>
                {t('about.methodsText1')}
              </p>
            </div>
            <div className='border-l-4 border-indigo-100 pl-4'>
              <h4 className='text-lg font-semibold mb-3 text-slate-800'>
                {t('about.methodsLearning')}
              </h4>
              <p className='text-slate-600 leading-relaxed'>
                {t('about.methodsText2')}
              </p>
            </div>
          </div>
        </AboutSection>

        {/* Education Section */}
        <AboutSection icon={GraduationCap} title={t('about.educationTitle')}>
          <p className='text-slate-600 leading-relaxed'>
            {t('about.educationText')}
          </p>
        </AboutSection>

        {/* Languages Section */}
        <AboutSection icon={Languages} title={t('about.languagesTitle')}>
          <p className='text-slate-600 leading-relaxed'>
            {t('about.languagesText')}
          </p>
        </AboutSection>

        {/* AI Perspective Section */}
        <AboutSection icon={BrainCircuit} title={t('about.aiTitle')}>
          <div className='space-y-8'>
            <div className='border-l-4 border-indigo-100 pl-4'>
              <h4 className='text-lg font-semibold mb-3 text-slate-800'>
                {t('about.aiPhilosophy')}
              </h4>
              <p className='text-slate-600 leading-relaxed'>
                {t('about.aiPhilosophyText')}
              </p>
            </div>
            <div className='border-l-4 border-indigo-100 pl-4'>
              <h4 className='text-lg font-semibold mb-3 text-slate-800'>
                {t('about.aiApproach')}
              </h4>
              <p className='text-slate-600 leading-relaxed'>
                {t('about.aiApproachText')}
              </p>
            </div>
          </div>
        </AboutSection>
      </Content>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'nl', ['common'])),
  },
});
