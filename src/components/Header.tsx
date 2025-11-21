'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-widest uppercase z-50 relative" onClick={() => setIsMenuOpen(false)}>
          Diletta Robuschi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/works" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors uppercase tracking-wide">
            Works
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors uppercase tracking-wide">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors uppercase tracking-wide">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 relative p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <nav className="flex flex-col space-y-8 text-center">
            <Link href="/works" className="text-2xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors uppercase tracking-wide" onClick={toggleMenu}>
              Works
            </Link>
            <Link href="/about" className="text-2xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors uppercase tracking-wide" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/contact" className="text-2xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors uppercase tracking-wide" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
