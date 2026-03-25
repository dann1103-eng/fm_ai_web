import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

/* ─────────────────────────────────────────
   Team member avatar placeholder
───────────────────────────────────────── */
function TeamAvatar({ initials, icon }: { initials: string; icon: string }) {
  return (
    <div className="w-48 h-48 rounded-full bg-surface-container-high flex flex-col items-center justify-center mx-auto border-4 border-white shadow-lg group-hover:border-primary/20 transition-all duration-500">
      <span className="material-symbols-outlined text-primary/40 text-5xl mb-1">{icon}</span>
      <span className="text-primary font-extrabold text-lg font-headline">{initials}</span>
    </div>
  );
}

export default function SobreNosotrosPage() {
  const t = useTranslations('about');

  const stats = [
    { value: t('stats.projects'), icon: 'folder_open' },
    { value: t('stats.clients'),  icon: 'groups'       },
    { value: t('stats.countries'),icon: 'public'       },
  ];

  const values = [
    {
      key:  'innovation',
      icon: 'lightbulb',
      bg:   'bg-secondary-container',
      color:'text-secondary',
    },
    {
      key:  'results',
      icon: 'insights',
      bg:   'bg-primary/10',
      color:'text-primary',
    },
    {
      key:  'closeness',
      icon: 'handshake',
      bg:   'bg-secondary-container/60',
      color:'text-secondary',
    },
  ] as const;

  const team = [
    { nameKey: 0, roleKey: 'CEO & Founder', descKey: 0, initials: 'CM', icon: 'manage_accounts' },
    { nameKey: 1, roleKey: 'CTO',           descKey: 1, initials: 'LF', icon: 'terminal'         },
    { nameKey: 2, roleKey: 'COO',           descKey: 2, initials: 'AR', icon: 'settings_suggest'  },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative px-8 py-24 md:py-40 flex flex-col items-center justify-center text-center overflow-hidden pt-48">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 hero-pattern pointer-events-none" />

        <div className="max-w-4xl relative z-10">
          <span className="text-ochre font-bold tracking-[0.2em] uppercase text-xs mb-6 block font-label">
            Nuestra Historia
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-8 leading-[1.1] font-headline">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed font-body">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* ── MISIÓN & STATS ── */}
      <section className="px-8 py-20 mx-4 md:mx-8 bg-surface-container-low rounded-[2rem]">
        <div className="max-w-5xl mx-auto text-center">
          {/* Mission quote */}
          <div className="mb-16">
            <h2 className="text-ochre font-bold tracking-widest uppercase text-xs mb-8 font-label">
              {t('mission')}
            </h2>
            <p className="text-3xl md:text-4xl font-semibold text-primary leading-tight max-w-4xl mx-auto font-headline">
              &ldquo;{t('missionText')}&rdquo;
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {stats.map(({ value, icon }) => (
              <div
                key={value}
                className="p-8 bg-white rounded-[1.5rem] border-b-4 border-primary shadow-sm flex flex-col items-center gap-3"
              >
                <span className="material-symbols-outlined text-primary/30 text-4xl">{icon}</span>
                <div className="text-4xl font-extrabold text-primary font-headline">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-ochre font-bold tracking-widest uppercase text-xs mb-4 font-label">
              Lo que nos guía
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-primary font-headline">
              {t('values.title')}
            </h3>
          </div>
          <div className="hidden md:block w-32 h-px bg-outline-variant" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map(({ key, icon, bg, color }) => (
            <div
              key={key}
              className="group p-10 bg-surface-container rounded-[2rem] hover:bg-surface-container-high transition-all duration-500 cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-full ${bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className={`material-symbols-outlined ${color} text-3xl`}>{icon}</span>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4 font-headline">
                {t(`values.${key}.title`)}
              </h4>
              <p className="text-on-surface-variant leading-relaxed font-body">
                {t(`values.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EQUIPO ── */}
      <section className="px-8 py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-ochre font-bold tracking-widest uppercase text-xs mb-4 font-label">
              Talento Humano
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-headline">
              {t('team.title')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map(({ nameKey, roleKey, descKey, initials, icon }) => (
              <div key={nameKey} className="text-center group cursor-default">
                <div className="relative mb-8 inline-block">
                  <div className="absolute inset-0 bg-ochre/20 rounded-full scale-110 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  <div className="relative z-10">
                    <TeamAvatar initials={initials} icon={icon} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-1 font-headline">
                  {t(`team.members.${nameKey}.name`)}
                </h4>
                <p className="text-ochre font-bold text-xs tracking-widest uppercase mb-4 font-label">
                  {roleKey}
                </p>
                <p className="text-on-surface-variant text-sm px-4 font-body leading-relaxed">
                  {t(`team.members.${descKey}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto bg-primary rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ochre/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-primary mb-8 tracking-tight leading-tight font-headline">
              {t('ctaTitle')}
            </h2>
            <p className="text-on-primary/70 text-lg mb-12 max-w-2xl mx-auto font-body">
              Estamos en constante búsqueda de mentes brillantes apasionadas por cambiar el futuro de los negocios en Latinoamérica.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-white text-primary px-10 py-5 rounded-full font-extrabold text-lg hover:bg-ochre hover:text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20 font-headline cursor-pointer"
            >
              {t('ctaButton')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
