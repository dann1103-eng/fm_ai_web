import { useTranslations } from 'next-intl';
import ContactForm from '@/components/contact/ContactForm';

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

export default function ContactoPage() {
  const t = useTranslations('contact');

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 pt-36">
      {/* ── GRID: Form (left) + Sidebar (right) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* ── LEFT: Form ── */}
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

        {/* ── RIGHT: Sidebar ── */}
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
          <div className="flex items-center gap-4 px-2">
            <div className="h-px flex-1 bg-outline-variant/30" />
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 font-label whitespace-nowrap">
              {t('calendly')}
            </span>
            <div className="h-px flex-1 bg-outline-variant/30" />
          </div>

          {/* Calendly placeholder */}
          <div className="bg-surface-container-low border-2 border-dashed border-outline-variant/40 rounded-[2rem] h-[400px] flex flex-col items-center justify-center p-8 text-center group transition-all duration-500 hover:border-primary/40">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">calendar_month</span>
            </div>
            <p className="font-bold text-primary text-xl mb-2 font-headline">
              Agenda una llamada
            </p>
            <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed font-body">
              Selecciona un espacio en nuestra agenda para una sesión de descubrimiento de 15 minutos.
            </p>
            {/* Pulsing skeleton — replace with actual Calendly embed */}
            <div className="mt-8 w-full max-w-sm h-40 bg-surface-container rounded-2xl animate-pulse opacity-50" />

            <p className="text-xs text-on-surface-variant/40 mt-4 font-label">
              Calendly embed va aquí
            </p>
          </div>

        </aside>
      </div>
    </div>
  );
}
