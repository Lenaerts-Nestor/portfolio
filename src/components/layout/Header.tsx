// src/components/layout/Header.tsx
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation('common');

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl tracking-tight hover:text-blue-100 transition-colors">
            Portfolio WPL
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-blue-100 hover:text-white transition-colors">
              {t('navigation.home', 'Home')}
            </Link>
            <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
              {t('navigation.about', 'About')}
            </Link>
            <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
              {t('navigation.blog', 'Blog')}
            </Link>
            <Link href="/documentation" className="text-blue-100 hover:text-white transition-colors">
              {t('navigation.documentation', 'Documentation')}
            </Link>
            <LanguageSwitcher />
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-blue-500">
            <Link 
              href="/" 
              className="block text-blue-100 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.home', 'Home')}
            </Link>
            <Link 
              href="/about" 
              className="block text-blue-100 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.about', 'About')}
            </Link>
            <Link 
              href="/blog" 
              className="block text-blue-100 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.blog', 'Blog')}
            </Link>
            <Link 
              href="/documentation" 
              className="block text-blue-100 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.documentation', 'Documentation')}
            </Link>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}