// src/pages/index.tsx
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{`WPL Portfolio - ${t('navigation.home')}`}</title>
        <meta name="description" content={t('home.description')} />
      </Head>

      <div className="max-w-4xl mx-auto px-4">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-6">{t('home.welcome')}</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            {t('home.description').replace("'", "&apos;")}
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/blog" 
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              {t('home.readBlog')}
            </Link>
            <Link 
              href="/about" 
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition-colors"
            >
              {t('home.aboutMe')}
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t('home.latestPosts')}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-500">{t('home.comingSoon')}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t('home.quickOverview')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-2">{t('home.internshipDetails')}</h3>
              <p className="text-gray-700">
                [Your Company Name]<br />
                Position: [Your Role]<br />
                Duration: [Start Date - End Date]
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-2">{t('home.technologies')}</h3>
              <p className="text-gray-700">
                [List the main technologies you're working with during your internship]
              </p>
            </div>
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