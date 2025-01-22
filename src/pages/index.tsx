import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Book, Briefcase } from 'lucide-react';
import { techStack } from '@/config/techStack';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import TechScroll from '@/components/TechScroll';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{`WPL Portfolio - ${t('navigation.home')}`}</title>
        <meta name="description" content={t('home.description')} />
      </Head>

      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('home.welcome')}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('home.description').replace("'", "&apos;")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              {t('home.readBlog')}
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center gap-2 border-2 border-indigo-500 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              {t('home.aboutMe')}
            </Link>
          </div>
        </section>

        {/* Technologies Infinite Scroll */}
        <TechScroll 
          technologies={techStack} 
          className="mb-12"
        />

        {/* Information Cards */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-500/50 transition-all shadow-sm hover:shadow-md">
            <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Briefcase size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              {t('home.internshipDetails')}
            </h3>
            <p className="text-slate-600">
              [Company Name]<br />
              {t('home.position')}: [Your Role]<br />
              {t('home.duration')}: [Start Date - End Date]
            </p>
          </div>
          
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-500/50 transition-all shadow-sm hover:shadow-md">
            <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Book size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              {t('home.latestPosts')}
            </h3>
            <p className="text-slate-600">{t('home.comingSoon')}</p>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};