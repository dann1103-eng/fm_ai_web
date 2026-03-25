import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  FadeUp,
  FadeIn,
  SlideIn,
  Stagger,
  StaggerItem,
  ScaleOnHover,
  HeroReveal,
  HeroRevealItem,
} from '@/components/ui/motion';

/* ─────────────────────────────────────────
   Reusable: feature checklist item
───────────────────────────────────────── */
function Feature({
  icon,
  label,
  bg = 'bg-surface-container-low',
}: {
  icon: string;
  label: string;
  bg?: string;
}) {
  return (
    <li className={`flex items-start gap-3 p-4 rounded-2xl ${bg} border border-outline-variant/10`}>
      <span className="material-symbols-outlined text-primary text-xl leading-none mt-0.5">
        {icon}
      </span>
      <span className="font-semibold text-on-surface font-headline text-sm">{label}</span>
    </li>
  );
}

/* ─────────────────────────────────────────
   Reusable: service visual placeholder
───────────────────────────────────────── */
function ServiceVisual({
  icon,
  accent = 'bg-primary/10',
  iconColor = 'text-primary',
}: {
  icon: string;
  accent?: string;
  iconColor?: string;
}) {
  return (
    <div className="relative group w-full">
      <div
        className={`absolute inset-0 ${accent} rounded-[2rem] blur-3xl transform group-hover:scale-105 transition-transform duration-500`}
      />
      <div className="relative z-10 w-full aspect-video rounded-[2rem] bg-surface-container flex items-center justify-center shadow-2xl overflow-hidden border border-outline-variant/10">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-high" />
        <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute bottom-6 left-6 w-32 h-32 rounded-full bg-ochre/5 blur-2xl" />
        <span
          className={`material-symbols-outlined ${iconColor} relative z-10`}
          style={{ fontSize: '5rem', opacity: 0.2 }}
        >
          {icon}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function ServiciosPage() {
  const t = useTranslations('services');

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[560px] flex items-center justify-center overflow-hidden bg-surface bg-pattern px-6 py-20 pt-36">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <HeroReveal>
            <HeroRevealItem>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest mb-6 font-label">
                FM AI SOLUTIONS
              </span>
            </HeroRevealItem>
            <HeroRevealItem>
              <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-8 tracking-tight leading-[1.1] font-headline">
                {t('pageTitle')}
              </h1>
            </HeroRevealItem>
            <HeroRevealItem>
              <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-2xl mx-auto font-body">
                {t('pageSubtitle')}
              </p>
            </HeroRevealItem>
            <HeroRevealItem>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="primary-gradient text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all active:scale-95 font-headline cursor-pointer"
                >
                  Explorar Soluciones
                </Link>
                <Link
                  href="/contacto"
                  className="bg-surface-container-high text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-all active:scale-95 font-headline cursor-pointer"
                >
                  Ver Casos de Éxito
                </Link>
              </div>
            </HeroRevealItem>
          </HeroReveal>
        </div>
      </section>

      {/* ── SERVICE 1: AHORRA TIEMPO ── */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text — left */}
          <SlideIn direction="left" className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
              </div>
              <h2 className="text-4xl font-extrabold text-primary font-headline">
                {t('saveTime.title')}
              </h2>
            </div>
            <p className="text-xl font-bold text-ochre mb-4 italic font-headline">
              {t('saveTime.tagline')}
            </p>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed font-body">
              {t('saveTime.description')}
            </p>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {(t.raw('saveTime.features') as string[]).map((f) => (
                <StaggerItem key={f}>
                  <Feature icon="check_circle" label={f} bg="bg-surface-container-low" />
                </StaggerItem>
              ))}
            </Stagger>
            <FadeUp delay={0.3}>
              <Link
                href="/contacto?servicio=automatizacion"
                className="primary-gradient text-white px-8 py-4 rounded-full font-bold inline-block active:scale-95 shadow-lg shadow-primary/20 font-headline transition-all hover:shadow-xl cursor-pointer"
              >
                {t('saveTime.cta')}
              </Link>
            </FadeUp>
          </SlideIn>
          {/* Visual — right */}
          <SlideIn direction="right" className="order-1 lg:order-2">
            <ServiceVisual icon="account_tree" accent="bg-primary/10" />
          </SlideIn>
        </div>
      </section>

      {/* ── SERVICE 2: VENDE MÁS ── */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual — left */}
          <SlideIn direction="left" className="order-1">
            <ServiceVisual icon="forum" accent="bg-secondary-container/50" iconColor="text-secondary" />
          </SlideIn>
          {/* Text — right */}
          <SlideIn direction="right" className="order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-3xl">trending_up</span>
              </div>
              <h2 className="text-4xl font-extrabold text-primary font-headline">
                {t('sellMore.title')}
              </h2>
            </div>
            <p className="text-xl font-bold text-ochre mb-4 italic font-headline">
              {t('sellMore.tagline')}
            </p>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed font-body">
              {t('sellMore.description')}
            </p>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {(t.raw('sellMore.features') as string[]).map((f) => (
                <StaggerItem key={f}>
                  <Feature icon="rocket_launch" label={f} bg="bg-surface-container" />
                </StaggerItem>
              ))}
            </Stagger>
            <FadeUp delay={0.3}>
              <Link
                href="/contacto?servicio=chatbot"
                className="primary-gradient text-white px-8 py-4 rounded-full font-bold inline-block active:scale-95 shadow-lg shadow-primary/20 font-headline transition-all hover:shadow-xl cursor-pointer"
              >
                {t('sellMore.cta')}
              </Link>
            </FadeUp>
          </SlideIn>
        </div>
      </section>

      {/* ── SERVICE 3: ESCALA ── */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text — left */}
          <SlideIn direction="left" className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">altitude</span>
              </div>
              <h2 className="text-4xl font-extrabold text-primary font-headline">
                {t('scale.title')}
              </h2>
            </div>
            <p className="text-xl font-bold text-ochre mb-4 italic font-headline">
              {t('scale.tagline')}
            </p>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed font-body">
              {t('scale.description')}
            </p>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {(t.raw('scale.features') as string[]).map((f) => (
                <StaggerItem key={f}>
                  <Feature icon="hub" label={f} bg="bg-surface-container-low" />
                </StaggerItem>
              ))}
            </Stagger>
            <FadeUp delay={0.3}>
              <Link
                href="/contacto?servicio=escala"
                className="primary-gradient text-white px-8 py-4 rounded-full font-bold inline-block active:scale-95 shadow-lg shadow-primary/20 font-headline transition-all hover:shadow-xl cursor-pointer"
              >
                {t('scale.cta')}
              </Link>
            </FadeUp>
          </SlideIn>
          {/* Visual — right */}
          <SlideIn direction="right" className="order-1 lg:order-2">
            <ServiceVisual icon="bar_chart" accent="bg-primary/10" />
          </SlideIn>
        </div>
      </section>

      {/* ── SERVICE 4: INNOVA CON IA ── */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual — left */}
          <SlideIn direction="left" className="order-1">
            <ServiceVisual icon="psychology" accent="bg-secondary-container/50" iconColor="text-secondary" />
          </SlideIn>
          {/* Text — right */}
          <SlideIn direction="right" className="order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-3xl">psychology</span>
              </div>
              <h2 className="text-4xl font-extrabold text-primary font-headline">
                {t('innovate.title')}
              </h2>
            </div>
            <p className="text-xl font-bold text-ochre mb-4 italic font-headline">
              {t('innovate.tagline')}
            </p>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed font-body">
              {t('innovate.description')}
            </p>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {(t.raw('innovate.features') as string[]).map((f) => (
                <StaggerItem key={f}>
                  <Feature icon="lightbulb" label={f} bg="bg-surface-container" />
                </StaggerItem>
              ))}
            </Stagger>
            <FadeUp delay={0.3}>
              <Link
                href="/contacto?servicio=consultoria"
                className="primary-gradient text-white px-8 py-4 rounded-full font-bold inline-block active:scale-95 shadow-lg shadow-primary/20 font-headline transition-all hover:shadow-xl cursor-pointer"
              >
                {t('innovate.cta')}
              </Link>
            </FadeUp>
          </SlideIn>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 md:px-12">
        <FadeUp>
          <div className="max-w-5xl mx-auto bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ochre/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
            <h3 className="text-3xl md:text-5xl font-extrabold text-on-primary mb-6 relative z-10 leading-tight font-headline">
              {t('ctaSection.title')}
            </h3>
            <p className="text-xl md:text-2xl text-on-primary/80 mb-12 relative z-10 max-w-2xl mx-auto font-body">
              {t('ctaSection.subtitle')}
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-white text-primary px-12 py-5 rounded-full font-bold text-xl relative z-10 hover:bg-ochre hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/20 font-headline cursor-pointer"
            >
              {t('ctaSection.cta')}
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
