'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Navbar() {
  const t = useTranslations('nav');
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const next = locale === 'es' ? 'en' : 'es';
    router.replace(pathname, { locale: next });
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/servicios', label: t('services') },
    { href: '/sobre-nosotros', label: t('about') },
    { href: '/contacto', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-900/20">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary font-headline">
          FM AI
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-label tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="hidden lg:block text-on-surface-variant text-xs font-bold tracking-widest cursor-pointer hover:text-primary transition-colors font-label"
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>
          <Link
            href="/contacto"
            className="hidden md:block bg-primary text-on-primary px-5 py-2 font-bold font-headline text-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:bg-cyan-300 active:scale-95 transition-all duration-200"
          >
            {t('cta')}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-on-surface p-1"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-surface-container-low px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-on-surface-variant hover:text-primary py-2 font-label transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-white/10">
            <button
              onClick={toggleLocale}
              className="text-on-surface-variant text-xs font-bold tracking-widest hover:text-primary transition-colors"
            >
              {locale === 'es' ? 'EN' : 'ES'}
            </button>
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-on-primary px-4 py-2 font-bold font-headline text-sm"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
