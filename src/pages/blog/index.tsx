import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Calendar, X, ChevronRight } from 'lucide-react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { GlobalStyleIndex } from '@/utils/utils';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 72rem; /* max-w-6xl */
  margin: 0 auto;
  padding: 0 1rem; /* px-4 */
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 1rem 0; /* pt-4 pb-8 approximated */
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50'>
      <div
        className='fixed inset-0 bg-black bg-opacity-50 transition-opacity'
        onClick={onClose}
      />
      <div className='flex min-h-full items-center justify-center p-4'>
        <div className='relative w-full max-w-4xl max-h-[85vh] bg-white shadow-xl transition-all rounded-2xl flex flex-col'>
          <div className='flex justify-between items-center p-6 border-b border-slate-200'>
            <h2 className='text-2xl font-bold text-slate-800'>Week 1</h2>
            <button
              onClick={onClose}
              className='p-2 hover:bg-red-100 rounded-full transition-colors'
            >
              <X className='w-6 h-6 text-red-500' />
            </button>
          </div>
          <div className='overflow-y-auto no-scrollbar flex-1'>{children}</div>
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(1);

  const { t } = useTranslation('common');

  const updates = t(`blog.dailyUpdates.week${selectedWeek}.days`, {
    returnObjects: true,
  }) as Array<{ date: string; content: string }>;
  return (
    <>
      <GlobalStyleIndex />
      <Head>
        <title>{`WPL Portfolio - ${t('navigation.blog')}`}</title>
        <meta name='description' content={t('blog.description')} />
      </Head>

      <Container>
        {/* Hero Section */}
        <HeroSection>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.4] tracking-normal py-1'>
              {t('blog.title')}
            </h1>
            <p className='text-base text-slate-600 max-w-3xl mx-auto leading-relaxed'>
              {t('blog.description')}
            </p>
          </div>
        </HeroSection>

        {/* Blog Posts Grid */}
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((weekNumber) => (
            <div
              key={weekNumber}
              onClick={() => {
                setSelectedWeek(weekNumber);
                setIsModalOpen(true);
              }}
              className='bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-[1.02] flex flex-col'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='bg-gradient-to-br from-indigo-500 to-purple-500 p-2 rounded-full'>
                  <Calendar className='w-5 h-5 text-white' />
                </div>
                <h2 className='text-xl font-bold text-slate-800'>
                  {t('blog.dailyUpdates.week' + weekNumber + '.title', {
                    defaultValue: `Week ${weekNumber}`,
                  })}
                </h2>
              </div>
              <p className='text-slate-600 leading-relaxed mb-4'>
                {t(`blog.dailyUpdates.week${weekNumber}.overview`)}
              </p>
              <div className='mt-auto flex items-center text-indigo-600 font-semibold'>
                <span>{t('blog.readMore')}</span>
                <ChevronRight className='w-5 h-5 ml-1' />
              </div>
            </div>
          ))}
        </Grid>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className='p-6'>
            <div className='space-y-6'>
              {updates.map((update, index) => (
                <div
                  key={index}
                  className='p-6 border border-slate-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]'
                >
                  <h3 className='text-xl font-semibold text-indigo-600 mb-3'>
                    {update.date}
                  </h3>
                  <p className='text-slate-700 leading-relaxed'>
                    {update.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </Container>
    </>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'nl', ['common'])),
  },
});
