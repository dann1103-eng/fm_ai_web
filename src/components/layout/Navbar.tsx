'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const t = useTranslations('nav');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLocale = () => {
    const next = locale === 'es' ? 'en' : 'es';
    router.replace(pathname, { locale: next });
  };

  const navLinks = [
    { href: '/',               label: t('home') },
    { href: '/servicios',      label: t('services') },
    { href: '/sobre-nosotros', label: t('about') },
    { href: '/contacto',       label: t('contact') },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 backdrop-blur-3xl border-b border-outline-variant/20 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 shadow-md shadow-primary/5' : 'bg-white/70'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 md:px-12 py-5">

        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tight text-primary font-headline">
          FM AI
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface/80 hover:text-primary font-headline font-medium text-base tracking-tight transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          <button
            onClick={toggleLocale}
            className="hidden lg:block text-on-surface/70 font-label text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>

          <Link
            href="/contacto"
            className="hidden md:inline-flex items-center bg-primary text-on-primary px-7 py-3 rounded-full font-headline font-semibold text-sm hover:bg-ochre active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {t('cta')}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-on-surface p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-outline-variant/20 px-8 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-on-surface/80 hover:text-primary font-headline font-medium py-1 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/30">
            <button
              onClick={toggleLocale}
              className="text-on-surface/70 text-sm font-medium font-label hover:text-primary transition-colors"
            >
              {locale === 'es' ? 'EN' : 'ES'}
            </button>
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-on-primary px-6 py-3 rounded-full font-headline font-semibold text-sm hover:bg-ochre transition-all"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
