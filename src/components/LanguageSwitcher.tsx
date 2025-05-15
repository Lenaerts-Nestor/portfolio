// src/components/LanguageSwitcher.tsx
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const toggleLanguage = () => {
    const newLocale = router.locale === 'en' ? 'nl' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className='flex items-center relative p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'
      aria-label={t('toggleLanguage')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className='relative flex items-center h-9 px-1'>
        <motion.div
          className='absolute inset-0 rounded-full bg-white shadow-sm border border-slate-200'
          initial={false}
          animate={{
            left: router.locale === 'en' ? '0%' : '50%',
            right: router.locale === 'en' ? '50%' : '0%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ width: '50%' }}
        />
        <div className='relative z-10 flex items-center justify-center space-x-3 w-[100px]'>
          <span
            className={`text-sm font-medium ${
              router.locale === 'en' ? 'text-indigo-600' : 'text-gray-500'
            } transition-colors px-3 py-1`}
          >
            EN
          </span>
          <span
            className={`text-sm font-medium ${
              router.locale === 'nl' ? 'text-indigo-600' : 'text-gray-500'
            } transition-colors px-3 py-1`}
          >
            NL
          </span>
        </div>
      </div>
    </motion.button>
  );
};

export default LanguageSwitcher;
