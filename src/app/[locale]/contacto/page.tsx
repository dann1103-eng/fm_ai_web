import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactForm from '@/components/contact/ContactForm';
import CalendlyEmbed from '@/components/contact/CalendlyEmbed';
import { FadeUp, SlideIn, FadeIn } from '@/components/ui/motion';

/* ─────────────────────────────────────────
   Info row (email / phone / location)
───────────────────────────────────────── */
function InfoRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-primary-fixed-dim text-xl">{icon}</span>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold font-label">
          {label}
        </p>
        <p className="text-base font-medium font-body text-on-primary">{value}</p>
      </div>
    </div>
  );
}

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 pt-36">
      {/* ── GRID: Form (left) + Sidebar (right) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* ── LEFT: Form ── */}
        <SlideIn direction="left">
          <section className="flex flex-col gap-10">
            <div className="space-y-4">
              <span className="text-ochre font-bold tracking-[0.2em] uppercase text-xs font-label">
                Hablemos
              </span>
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]">
                {t('subtitle')}
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg font-body leading-relaxed">
                {t('formSubtitle')}
              </p>
            </div>

            {/* Client form component */}
            <ContactForm />
          </section>
        </SlideIn>

        {/* ── RIGHT: Sidebar ── */}
        <SlideIn direction="right" delay={0.1}>
          <aside className="flex flex-col gap-8 lg:sticky lg:top-32">

            {/* Info card */}
            <div className="bg-secondary text-on-primary rounded-[2rem] p-10 flex flex-col gap-7 overflow-hidden relative">
              {/* Decorative blob */}
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10">
                <InfoRow
                  icon="mail"
                  label="Email"
                  value={t('info.email')}
                />
                <InfoRow
                  icon="call"
                  label="Teléfono"
                  value={t('info.phone')}
                />
                <InfoRow
                  icon="location_on"
                  label="Ubicación"
                  value={t('info.location')}
                />
              </div>
            </div>

            {/* Divider */}
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-4 px-2">
                <div className="h-px flex-1 bg-outline-variant/30" />
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 font-label whitespace-nowrap">
                  {t('calendly')}
                </span>
                <div className="h-px flex-1 bg-outline-variant/30" />
              </div>
            </FadeIn>

            {/* Calendly embed */}
            <FadeUp delay={0.25}>
              <CalendlyEmbed />
            </FadeUp>

          </aside>
        </SlideIn>
      </div>
    </div>
  );
}
