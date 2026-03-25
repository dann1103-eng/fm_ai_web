import { useTranslations } from 'next-intl';

export default function ServiciosPage() {
  const t = useTranslations('services');

  return (
    <main className="flex-1 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold">{t('pageTitle')}</h1>
        <p className="mt-4 text-text-secondary">{t('pageSubtitle')}</p>
      </div>
    </main>
  );
}
