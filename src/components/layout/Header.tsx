// src/components/layout/Header.tsx
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Menu, X, Github, Linkedin } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation("common");
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <header className="bg-white border-b border-slate-300 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-bold text-3xl md:text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-slate-700 hover:text-indigo-600"
              } transition-colors`}
            >
              {t("navigation.home")}
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/about")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-slate-700 hover:text-indigo-600"
              } transition-colors`}
            >
              {t("navigation.about")}
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/blog")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-slate-700 hover:text-indigo-600"
              } transition-colors`}
            >
              {t("navigation.blog")}
            </Link>

            <div className="pl-4 border-l border-slate-200">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="animate-spin-in" />
              ) : (
                <Menu size={24} className="animate-spin-in" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-slate-300">
            <Link
              href="/"
              className={`block px-4 py-3 text-base ${
                isActive("/")
                  ? "text-indigo-600 bg-indigo-50 rounded-lg font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.home")}
            </Link>

            <Link
              href="/about"
              className={`block px-4 py-3 text-base ${
                isActive("/about")
                  ? "text-indigo-600 bg-indigo-50 rounded-lg font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.about")}
            </Link>

            <Link
              href="/blog"
              className={`block px-4 py-3 text-base ${
                isActive("/blog")
                  ? "text-indigo-600 bg-indigo-50 rounded-lg font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.blog")}
            </Link>

            <div className="flex justify-center space-x-6 pt-4 border-t border-slate-200">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-slate-700 hover:text-indigo-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-slate-700 hover:text-indigo-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
