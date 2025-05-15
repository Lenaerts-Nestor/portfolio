// src/components/LanguageSwitcher.tsx
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import {
  SwitcherButton,
  SwitcherContainer,
  SwitcherSlider,
  LanguageOptions,
  LanguageOption,
} from './LanguageSwitcher.styled';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const toggleLanguage = () => {
    const newLocale = router.locale === 'en' ? 'nl' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <SwitcherButton
      onClick={toggleLanguage}
      aria-label={t('toggleLanguage')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <SwitcherContainer>
        <SwitcherSlider
          initial={false}
          animate={{
            left: router.locale === 'en' ? '0%' : '50%',
            right: router.locale === 'en' ? '50%' : '0%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ width: '50%' }}
        />
        <LanguageOptions>
          <LanguageOption isActive={router.locale === 'en'}>EN</LanguageOption>
          <LanguageOption isActive={router.locale === 'nl'}>NL</LanguageOption>
        </LanguageOptions>
      </SwitcherContainer>
    </SwitcherButton>
  );
};

export default LanguageSwitcher;
