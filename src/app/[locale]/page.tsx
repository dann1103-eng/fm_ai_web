import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-secondary-container blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase font-label">
            The Neural Architect
          </div>

          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-on-background">
            {t('hero.title').split(' ').slice(0, -2).join(' ')}{' '}
            <br />
            <span className="text-transparent bg-clip-text neural-gradient">
              {t('hero.title').split(' ').slice(-2).join(' ')}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl font-light leading-relaxed mb-12">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="w-full md:w-auto px-8 py-4 font-headline font-bold text-lg neural-gradient text-white hover:scale-105 transition-transform cyan-glow inline-block text-center"
            >
              {t('hero.cta')}
            </Link>
            <Link
              href="/servicios"
              className="w-full md:w-auto px-8 py-4 font-headline font-bold text-lg border border-outline-variant hover:bg-surface-container-high transition-colors inline-block text-center"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== BENTO GRID ===================== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-background">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-on-surface-variant text-lg">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Automatización - Wide Card */}
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10 hover:border-primary/40 transition-all duration-500">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">settings_input_component</span>
                <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-4">{t('services.saveTime.title')}</h3>
              <p className="text-on-surface-variant max-w-md">{t('services.saveTime.tagline')}</p>
            </div>
            <div className="mt-12 h-48 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 neural-gradient opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '8rem' }}>
                  account_tree
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
            </div>
          </div>

          {/* Chatbots - Small Card */}
          <div className="md:col-span-4 group bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 hover:border-secondary/40 transition-all duration-500">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">forum</span>
            <h3 className="font-headline text-2xl font-bold mb-4">{t('services.sellMore.title')}</h3>
            <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
              {t('services.sellMore.tagline')}
            </p>
            <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20 font-mono text-[10px] text-primary/70">
              <div className="mb-2 opacity-50">&gt; initializing_llm...</div>
              <div className="mb-2">&gt; input: &quot;{t('chatbot.greeting').slice(0, 30)}...&quot;</div>
              <div className="text-secondary">&gt; processing with AI...</div>
            </div>
          </div>

          {/* Desarrollo Web - Small Card */}
          <div className="md:col-span-4 group bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 hover:border-primary/40 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block">terminal</span>
            <h3 className="font-headline text-2xl font-bold mb-4">{t('services.scale.title')}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {t('services.scale.tagline')}
            </p>
            <div className="mt-8 flex justify-center opacity-30 group-hover:opacity-60 transition-opacity">
              <span className="material-symbols-outlined text-6xl">data_object</span>
            </div>
          </div>

          {/* Consultoría - Large Card */}
          <div className="md:col-span-8 group relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 hover:border-secondary/40 transition-all duration-500">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-8 flex flex-col justify-center">
                <div className="text-secondary text-xs font-bold tracking-widest uppercase mb-4 font-label">
                  {t('services.innovate.title')}
                </div>
                <h3 className="font-headline text-3xl font-bold mb-4">
                  {t('services.innovate.tagline')}
                </h3>
                <p className="text-on-surface-variant mb-6 text-sm">
                  {t('services.innovate.description')}
                </p>
                <Link
                  href="/servicios"
                  className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all w-fit"
                >
                  {t('nav.services')}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
              <div className="relative min-h-[200px] md:min-h-full bg-gradient-to-br from-secondary-container/20 to-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary/30 group-hover:text-primary/50 transition-colors" style={{ fontSize: '8rem' }}>
                  neurology
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TECH STACK ===================== */}
      <section className="py-20 border-t border-outline-variant/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-on-surface-variant text-xs font-bold tracking-[0.3em] uppercase mb-12 font-label">
            Powered by World-Class Intelligence
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-all duration-500">
            {[
              { icon: 'terminal', label: 'Python' },
              { icon: 'neurology', label: 'OpenAI' },
              { icon: 'deployed_code', label: 'React' },
              { icon: 'javascript', label: 'Next.js' },
              { icon: 'hub', label: 'n8n' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
                <span className="font-headline font-bold text-xl">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            {t('testimonials.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-8 flex flex-col gap-4 hover:border-primary/30 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-primary text-2xl">format_quote</span>
              <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
                &ldquo;{t(`testimonials.items.${i}.quote`)}&rdquo;
              </p>
              <div className="border-t border-outline-variant/20 pt-4">
                <p className="font-headline font-bold text-on-surface text-sm">
                  {t(`testimonials.items.${i}.name`)}
                </p>
                <p className="text-on-surface-variant text-xs mt-1">
                  {t(`testimonials.items.${i}.role`)} · {t(`testimonials.items.${i}.company`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-container/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="text-on-surface-variant text-lg mb-12">{t('cta.subtitle')}</p>
          <Link
            href="/contacto"
            className="inline-block px-12 py-6 font-headline font-bold text-xl md:text-2xl neural-gradient text-white hover:scale-105 transition-transform cyan-glow rounded-sm"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
}
