// src/pages/documentation/initiation.tsx
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';

export default function InitiationDocumentation() {
  const { t } = useTranslation('documentation');

  return (
    <>
      <Head>
        <title>{`WPL Portfolio - ${t('initiation.title')}`}</title>
        <meta name="description" content={t('initiation.description')} />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/documentation" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            ← {t('backToOverview')}
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">{t('initiation.title')}</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t('initiation.sections.setup.title')}</h2>
          <p className="mb-4">{t('initiation.sections.setup.description')}</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <pre className="text-sm text-gray-700">npx create-next-app@latest portfolio-wpl</pre>
          </div>
        </section>

      
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
          <p className="mb-4">The project follows a structured organization with clear separation of concerns:</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <pre className="text-sm text-gray-700">
{`src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
├── pages/
│   ├── index.tsx
│   ├── about.tsx
│   ├── blog/
│   │   ├── index.tsx
│   │   └── [slug].tsx
└── styles/
    └── globals.css`}
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Internationalization Implementation</h2>
          <p className="mb-4">We implemented a complete internationalization (i18n) system supporting English and Dutch languages. This includes:</p>
          <div className="space-y-4">
            <div className="bg-white shadow-sm rounded p-4">
              <h3 className="font-semibold mb-2">1. Dependencies Installation</h3>
              <p className="text-gray-700">Added next-i18next, react-i18next, and i18next for translation support.</p>
            </div>
            <div className="bg-white shadow-sm rounded p-4">
              <h3 className="font-semibold mb-2">2. Configuration Setup</h3>
              <p className="text-gray-700">Created next-i18next.config.js with locale settings and integrated it with Next.js configuration.</p>
            </div>
            <div className="bg-white shadow-sm rounded p-4">
              <h3 className="font-semibold mb-2">3. Translation Files</h3>
              <p className="text-gray-700">Organized translations in /public/locales/{'{locale}'}/common.json structure.</p>
            </div>
            <div className="bg-white shadow-sm rounded p-4">
              <h3 className="font-semibold mb-2">4. Language Switcher</h3>
              <p className="text-gray-700">Implemented a language switcher component in the header for seamless language switching.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Current Status</h2>
          <p className="mb-4">The portfolio website now features:</p>
          <div className="bg-white shadow-sm rounded p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Responsive layout with header and footer components</li>
              <li>Bilingual support (English and Dutch)</li>
              <li>Dynamic language switching capability</li>
              <li>Landing page with sections for blog posts and internship overview</li>
              <li>Clean, professional design using Tailwind CSS</li>
            </ul>
          </div>
        </section>
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