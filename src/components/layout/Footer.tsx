import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="w-full rounded-t-[3rem] bg-secondary-container mt-0">
      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-12 py-20">
        {/* Brand */}
        <div className="space-y-5">
          <Link href="/" className="text-xl font-black text-primary font-headline">
            FM AI
          </Link>
          <p className="text-on-secondary-container/70 text-sm leading-relaxed max-w-xs font-body">
            {t('footer.description')}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary font-headline text-sm uppercase tracking-wider">
            {t('footer.links')}
          </h4>
          {[
            { href: '/',               label: t('nav.home') },
            { href: '/servicios',      label: t('nav.services') },
            { href: '/sobre-nosotros', label: t('nav.about') },
            { href: '/contacto',       label: t('nav.contact') },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-secondary-container/70 hover:text-ochre hover:opacity-100 transition-all text-sm font-body"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary font-headline text-sm uppercase tracking-wider">
            {t('footer.legal')}
          </h4>
          <Link
            href="/politica-de-privacidad"
            className="text-on-secondary-container/70 hover:text-ochre transition-all text-sm font-body"
          >
            {t('footer.privacy')}
          </Link>
          <Link
            href="/terminos-y-condiciones"
            className="text-on-secondary-container/70 hover:text-ochre transition-all text-sm font-body"
          >
            {t('footer.terms')}
          </Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary font-headline text-sm uppercase tracking-wider">
            {t('contact.title')}
          </h4>
          <p className="text-on-secondary-container/70 text-sm font-body">
            {t('contact.info.email')}
          </p>
          <p className="text-on-secondary-container/70 text-sm font-body">
            {t('contact.info.location')}
          </p>
          <p className="text-on-secondary-container/40 text-xs mt-8 font-label">
            © 2026 FM AI. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
