// src/components/layout/Header.tsx
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher"; // Correct path

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation("common");
  const router = useRouter();

  // Helper function to check active path
  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    // In Header.tsx, modify the header className:
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-bold text-2xl text-slate-800 hover:text-indigo-600 transition-colors"
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
                  : "text-slate-600 hover:text-indigo-600"
              } transition-colors`}
            >
              {t("navigation.home")}
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/about")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-slate-600 hover:text-indigo-600"
              } transition-colors`}
            >
              {t("navigation.about")}
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/blog")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-slate-600 hover:text-indigo-600"
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
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-slate-200">
            <Link
              href="/"
              className={`block px-4 py-2 text-sm ${
                isActive("/")
                  ? "text-indigo-600 bg-indigo-50 rounded-lg"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.home")}
            </Link>

            <Link
              href="/about"
              className={`block px-4 py-2 text-sm ${
                isActive("/about")
                  ? "text-indigo-600 bg-indigo-50 rounded-lg"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.about")}
            </Link>

            <Link
              href="/blog"
              className={`block px-4 py-2 text-sm ${
                isActive("/blog")
                  ? "text-indigo-600 bg-indigo-50 rounded-lg"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.blog")}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
