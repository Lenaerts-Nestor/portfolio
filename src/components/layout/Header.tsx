// src/components/layout/Header.tsx
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation('common');

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl">
            Portfolio WPL
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              {t('navigation.home', 'Home')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              {t('navigation.about', 'About')}
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              {t('navigation.blog', 'Blog')}
            </Link>
            <Link href="/documentation" className="text-gray-700 hover:text-gray-900">
              {t('navigation.documentation', 'Documentation')}
            </Link>
            <LanguageSwitcher />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Mobile menu button content */}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.home', 'Home')}
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.about', 'About')}
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.blog', 'Blog')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}