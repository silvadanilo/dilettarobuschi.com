'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import { Locale } from '@/i18n/translations';

export default function Header({ locale }: { locale: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(locale);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isMenuOpen ? 'bg-transparent border-transparent' : 'bg-[var(--background)]/80 backdrop-blur-sm border-b border-white/10'
        }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-xl font-bold tracking-widest uppercase z-[100] relative" onClick={() => setIsMenuOpen(false)}>
          Diletta Robuschi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href={`/${locale}/about`} className="text-sm font-medium uppercase tracking-wide hover:text-gray-400 transition-colors">
            {t.nav.about}
          </Link>
          <Link href={`/${locale}/works`} className="text-sm font-medium uppercase tracking-wide hover:text-gray-400 transition-colors">
            {t.nav.works}
          </Link>
          <Link href={`/${locale}/contact`} className="text-sm font-medium uppercase tracking-wide hover:text-gray-400 transition-colors">
            {t.nav.contact}
          </Link>
          <LanguageSwitcher currentLocale={locale} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-[100] relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-[var(--background)] z-[90] flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            } md:hidden`}
        >
          <nav className="flex flex-col items-center space-y-8 p-8 w-full">
            <Link
              href={`/${locale}/about`}
              className="text-3xl font-light text-white hover:text-gray-400 transition-colors tracking-widest uppercase"
              onClick={toggleMenu}
            >
              {t.nav.about}
            </Link>
            <Link
              href={`/${locale}/works`}
              className="text-3xl font-light text-white hover:text-gray-400 transition-colors tracking-widest uppercase"
              onClick={toggleMenu}
            >
              {t.nav.works}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-3xl font-light text-white hover:text-gray-400 transition-colors tracking-widest uppercase"
              onClick={toggleMenu}
            >
              {t.nav.contact}
            </Link>

            <div className="w-12 h-px bg-gray-800 my-8"></div>

            <div className="scale-125">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
