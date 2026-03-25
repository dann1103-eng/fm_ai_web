import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-black w-full rounded-t-3xl border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        {/* Col 1: Brand */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="text-xl font-bold text-primary font-headline">
            FM AI
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            {t('footer.description')}
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2026 FM AI. {t('footer.rights')}
          </p>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">
            {t('footer.links')}
          </h4>
          <ul className="flex flex-col gap-4 text-sm">
            {[
              { href: '/', label: t('nav.home') },
              { href: '/servicios', label: t('nav.services') },
              { href: '/sobre-nosotros', label: t('nav.about') },
              { href: '/contacto', label: t('nav.contact') },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">
            {t('footer.servicesTitle')}
          </h4>
          <ul className="flex flex-col gap-4 text-sm">
            {[
              t('services.saveTime.title'),
              t('services.sellMore.title'),
              t('services.scale.title'),
              t('services.innovate.title'),
            ].map((service) => (
              <li key={service}>
                <Link
                  href="/servicios"
                  className="text-gray-500 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Legal */}
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">
            {t('footer.legal')}
          </h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link
                href="/terminos-y-condiciones"
                className="text-gray-500 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
              >
                {t('footer.terms')}
              </Link>
            </li>
            <li>
              <Link
                href="/politica-de-privacidad"
                className="text-gray-500 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
              >
                {t('footer.privacy')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
