// src/components/LanguageSwitcher.tsx
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLocale = router.locale === 'en' ? 'nl' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      aria-label="Toggle language"
    >
      <span className={`font-medium ${router.locale === 'en' ? 'text-blue-600' : 'text-gray-500'}`}>
        EN
      </span>
      <span className="text-gray-400">|</span>
      <span className={`font-medium ${router.locale === 'nl' ? 'text-blue-600' : 'text-gray-500'}`}>
        NL
      </span>
    </button>
  );
}