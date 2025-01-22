// src/pages/documentation/index.tsx
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';

export default function Documentation() {
  const { t } = useTranslation('documentation');

  return (
    <>
      <Head>
        <title>{`WPL Portfolio - ${t('title')}`}</title>
        <meta name="description" content={t('description')} />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center">{t('title')}</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link 
            href="/documentation/initiation" 
            className="block group"
          >
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer h-full">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                {t('cards.initiation.title')}
              </h2>
              <p className="text-gray-600">
                {t('cards.initiation.description')}
              </p>
              <div className="mt-4 text-blue-500 group-hover:text-blue-600 transition-colors flex items-center">
                {t('readMore')} →
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'documentation'])),
    },
  };
};