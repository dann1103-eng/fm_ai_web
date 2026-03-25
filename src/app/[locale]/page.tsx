import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* =============================================
          HERO
      ============================================= */}
      <section className="px-8 md:px-12 pt-36 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div className="space-y-8">
            <span className="text-ochre font-label font-bold tracking-[0.2em] uppercase text-xs">
              Inteligencia Táctil
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] text-on-surface font-headline">
              El Futuro de la IA,{' '}
              <br />
              con{' '}
              <span className="text-ochre italic">
                Sofisticación Orgánica.
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-lg font-body">
              {t('hero.subtitle')}. Tecnología de vanguardia con un toque artesanal, diseñada para hacer crecer tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/servicios"
                className="bg-primary text-on-primary px-10 py-5 rounded-full text-lg font-bold font-headline shadow-xl shadow-primary/10 hover:bg-ochre transition-all duration-300 cursor-pointer"
              >
                Explorar Soluciones
              </Link>
              <Link
                href="/contacto"
                className="flex items-center gap-2 px-6 py-5 rounded-full text-on-surface font-semibold font-headline hover:bg-surface-container transition-colors cursor-pointer"
              >
                {t('nav.contact')}
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right: Hero visual */}
          <div className="relative h-[520px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-surface-container-low">
            {/* Abstract data-flow illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary-container to-ochre/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-12">
              <div className="w-full grid grid-cols-3 gap-4 opacity-80">
                {[80, 45, 65, 90, 55, 75].map((h, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-full bg-primary/20 transition-all"
                      style={{ height: `${h}px` }}
                    />
                    <div className="w-2 h-2 rounded-full bg-ochre" />
                  </div>
                ))}
              </div>
              <div className="w-full bg-white/60 backdrop-blur-sm rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-sm">smart_toy</span>
                  </div>
                  <div className="h-2 w-40 bg-primary/20 rounded-full" />
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full" />
                <div className="h-2 w-3/4 bg-surface-container rounded-full" />
              </div>
              <div className="flex gap-3 self-end">
                <div className="px-4 py-2 bg-primary text-on-primary rounded-full text-xs font-bold font-label">IA Activa</div>
                <div className="px-4 py-2 bg-white/70 text-primary rounded-full text-xs font-bold font-label border border-primary/20">n8n Flow</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* =============================================
          BENTO GRID — Soluciones
      ============================================= */}
      <section className="px-8 md:px-12 py-24 bg-surface-container-low rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="mb-16">
            <span className="text-ochre font-label font-bold tracking-widest uppercase text-xs">
              Nuestras Capacidades
            </span>
            <h2 className="text-5xl font-extrabold tracking-tight mt-4 text-primary font-headline">
              {t('services.title')}
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px]">

            {/* Smart Automations — wide */}
            <div className="md:col-span-8 md:row-span-1 bento-card flex flex-col justify-between group hover:shadow-2xl hover:shadow-primary/5 cursor-default">
              <div className="flex justify-between items-start">
                <div className="bg-primary/5 p-4 rounded-2xl">
                  <span className="material-symbols-outlined text-primary text-4xl">automation</span>
                </div>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-primary cursor-pointer">
                  north_east
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-primary font-headline">
                  {t('services.saveTime.title')}
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md font-body">
                  {t('services.saveTime.tagline')}. Eliminamos la fricción operativa mediante agentes autónomos de última generación.
                </p>
              </div>
            </div>

            {/* Custom Chatbots — tall right column */}
            <div className="md:col-span-4 md:row-span-2 bento-card bg-primary text-on-primary flex flex-col justify-between">
              <div className="bg-white/10 p-4 rounded-2xl self-start">
                <span className="material-symbols-outlined text-4xl">chat_bubble</span>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold font-headline">
                  {t('services.sellMore.title')}
                </h3>
                <p className="opacity-90 text-lg font-body leading-relaxed">
                  {t('services.sellMore.tagline')}. Asistentes que comprenden el contexto emocional y técnico de tus clientes.
                </p>
                <div className="pt-8 border-t border-white/20">
                  <ul className="space-y-3 font-body">
                    {['NLP Multilingüe', 'Integración CRM Total', 'Disponible 24/7'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <span className="material-symbols-outlined text-sm text-ochre">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="md:col-span-4 md:row-span-1 bento-card flex flex-col justify-between hover:bg-surface-container-high transition-colors cursor-default">
              <span className="material-symbols-outlined text-ochre text-4xl">web</span>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary font-headline">
                  {t('services.scale.title')}
                </h3>
                <p className="text-on-surface-variant font-body">
                  {t('services.scale.tagline')}
                </p>
              </div>
            </div>

            {/* Predictive Analytics */}
            <div className="md:col-span-4 md:row-span-1 bento-card flex flex-col justify-between border border-outline-variant/40 cursor-default">
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-primary text-4xl">query_stats</span>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-ochre/20" />
                  <div className="w-8 h-8 rounded-full bg-ochre/50" />
                  <div className="w-8 h-8 rounded-full bg-ochre" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary font-headline">
                  {t('services.innovate.title')}
                </h3>
                <p className="text-on-surface-variant font-body">
                  {t('services.innovate.tagline')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =============================================
          SUCCESS STORY
      ============================================= */}
      <section className="px-8 md:px-12 py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">

          {/* Left: Copy + stats */}
          <div className="lg:w-1/2 space-y-10">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-label text-sm font-semibold">
              Caso de Éxito: LogisticCorp
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-on-surface font-headline">
              84% de reducción en latencia operacional.
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed font-body">
              {t('testimonials.items.0.quote')}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-black text-ochre font-headline">1.2M</div>
                <div className="text-xs text-on-surface-variant/60 font-label uppercase tracking-widest mt-1">
                  Costos Ahorrados
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-ochre font-headline">0.02s</div>
                <div className="text-xs text-on-surface-variant/60 font-label uppercase tracking-widest mt-1">
                  Tiempo de Respuesta
                </div>
              </div>
            </div>
            <Link
              href="/contacto"
              className="flex items-center gap-2 text-primary font-bold font-headline hover:gap-4 transition-all w-fit cursor-pointer"
            >
              Solicitar auditoría gratuita
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Right: Data viz card */}
          <div className="lg:w-1/2 relative w-full">
            <div className="absolute inset-0 w-full h-full bg-primary/5 rounded-full blur-3xl opacity-50 translate-x-12 -z-10" />
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-outline-variant/20">
              {/* Bar chart */}
              <div className="flex items-end gap-3 h-56 mb-8">
                {[
                  { h: '38%', color: 'bg-surface-container-low' },
                  { h: '55%', color: 'bg-ochre/20' },
                  { h: '72%', color: 'bg-ochre/50' },
                  { h: '100%', color: 'bg-primary' },
                  { h: '85%', color: 'bg-ochre' },
                ].map(({ h, color }, i) => (
                  <div
                    key={i}
                    className={`flex-1 ${color} rounded-t-xl transition-all hover:brightness-110 cursor-pointer`}
                    style={{ height: h }}
                  />
                ))}
              </div>
              <div className="space-y-3">
                <div className="h-2 w-3/4 bg-surface-container rounded-full" />
                <div className="h-2 w-1/2 bg-surface-container rounded-full" />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-xs text-on-surface-variant font-label">Antes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-ochre" />
                  <span className="text-xs text-on-surface-variant font-label">Con FM AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          TESTIMONIALS
      ============================================= */}
      <section className="px-8 md:px-12 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary">
              {t('testimonials.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([0, 1, 2] as const).map((i) => (
              <div
                key={i}
                className="bento-card flex flex-col gap-5 hover:shadow-xl hover:shadow-primary/5 transition-shadow"
              >
                <span className="material-symbols-outlined text-ochre text-3xl">format_quote</span>
                <p className="text-on-surface-variant font-body leading-relaxed flex-1">
                  &ldquo;{t(`testimonials.items.${i}.quote`)}&rdquo;
                </p>
                <div className="border-t border-outline-variant/30 pt-5">
                  <p className="font-bold text-on-surface font-headline text-sm">
                    {t(`testimonials.items.${i}.name`)}
                  </p>
                  <p className="text-on-surface-variant text-xs mt-1 font-label">
                    {t(`testimonials.items.${i}.role`)} · {t(`testimonials.items.${i}.company`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          TECH STACK
      ============================================= */}
      <section className="px-8 md:px-12 py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-label text-on-surface-variant/60 uppercase tracking-[0.3em] mb-12">
            Impulsado por Tecnología de Clase Mundial
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700 text-primary">
            {['Python', 'OpenAI', 'React', 'Next.js', 'n8n', 'AWS'].map((tech) => (
              <span key={tech} className="text-2xl md:text-3xl font-extrabold tracking-tight font-headline">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          CTA FINAL
      ============================================= */}
      <section className="px-8 md:px-12 py-24">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-16 md:p-20 text-center relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-ochre/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-on-primary tracking-tight mb-8 font-headline leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-on-primary/80 mb-12 max-w-2xl mx-auto font-body font-medium">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contacto"
                className="bg-white text-primary px-12 py-5 rounded-full text-lg font-bold font-headline hover:bg-ochre hover:text-white transition-colors cursor-pointer"
              >
                Solicitar Auditoría Gratuita
              </Link>
              <Link
                href="/contacto"
                className="text-on-primary px-8 py-5 font-semibold font-headline flex items-center gap-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                Hablar con un consultor
                <span className="material-symbols-outlined">call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
