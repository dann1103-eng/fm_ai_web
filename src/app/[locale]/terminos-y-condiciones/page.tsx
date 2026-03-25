import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { termsContent } from '@/content/terms';

function NumBadge({ n }: { n: string }) {
  return (
    <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-surface-container-high text-primary font-bold text-sm font-headline">
      {n}
    </span>
  );
}

export default async function TerminosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = termsContent[locale] ?? termsContent['es'];

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">

      {/* ── HEADER ── */}
      <header className="mb-20 text-center md:text-left">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6 font-label">
          {c.badge}
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary tracking-tight leading-none mb-6 font-headline">
          {c.title}{' '}
          <span className="text-ochre italic">{c.titleHighlight}</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed font-body">
          {c.subtitle}
        </p>
        <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-primary font-label">
          <span className="material-symbols-outlined text-base">calendar_today</span>
          {c.lastUpdated}
        </div>
      </header>

      {/* ── CONTENT GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* ── SIDEBAR TOC ── */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
          <nav className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-outline mb-6 font-label">
              {c.navLabel}
            </p>
            {c.nav.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 font-body"
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* ── MAIN LEGAL TEXT ── */}
        <div className="lg:col-span-9 space-y-16">

          {/* 01 */}
          <section className="scroll-mt-32" id="aceptacion">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="01" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                {c.s01.title}
              </h2>
            </div>
            <div className="bg-surface-container-low p-8 rounded-[1.5rem] border-l-4 border-primary shadow-[0_40px_60px_-15px_rgba(26,28,26,0.05)]">
              <p className="leading-relaxed text-on-surface-variant font-body">
                {c.s01.body.replace('FM AI', '')}
                <strong className="text-primary font-extrabold">FM AI</strong>
                {c.s01.body.split('FM AI')[1]}
              </p>
            </div>
          </section>

          {/* 02 */}
          <section className="scroll-mt-32" id="descripcion">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="02" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                {c.s02.title}
              </h2>
            </div>
            <div className="space-y-6">
              <p className="leading-relaxed text-on-surface-variant font-body">{c.s02.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {c.s02.services.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="p-6 bg-white rounded-[1.25rem] border border-outline-variant/20 flex items-start gap-4 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-ochre text-2xl shrink-0 mt-0.5">{icon}</span>
                    <div>
                      <h4 className="font-bold text-primary mb-1 font-headline text-sm">{title}</h4>
                      <p className="text-sm text-on-surface-variant/80 font-body">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 03 + 04 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="p-8 bg-surface-container rounded-[1.5rem] scroll-mt-32" id="registro">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined text-primary text-xl">account_circle</span>
                {c.s03.title}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant font-body">{c.s03.body}</p>
            </section>
            <section className="p-8 bg-surface-container rounded-[1.5rem] scroll-mt-32" id="uso">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined text-primary text-xl">gavel</span>
                {c.s04.title}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant font-body">{c.s04.body}</p>
            </section>
          </div>

          {/* 05 */}
          <section className="scroll-mt-32" id="propiedad">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="05" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                {c.s05.title}
              </h2>
            </div>
            <div className="relative overflow-hidden p-8 bg-primary text-on-primary rounded-[1.5rem]">
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none">
                <span className="material-symbols-outlined" style={{ fontSize: '12rem', fontVariationSettings: "'FILL' 1" }}>
                  copyright
                </span>
              </div>
              <p className="relative z-10 leading-relaxed opacity-90 font-body">
                {c.s05.body.split('FM AI')[0]}
                <strong className="text-ochre">FM AI</strong>
                {c.s05.body.split('FM AI')[1]}
              </p>
            </div>
          </section>

          {/* 06 */}
          <section className="scroll-mt-32" id="responsabilidad">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="06" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                {c.s06.title}
              </h2>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed text-on-surface-variant font-body">{c.s06.intro}</p>
              <ul className="space-y-4 ml-4">
                {c.s06.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-on-surface-variant font-body">
                    <span className="w-2 h-2 rounded-full bg-ochre shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 07–10 */}
          <section className="space-y-8">
            {c.s07_10.map(({ n, id, title, text }) => (
              <div key={n} id={id} className="border-t border-outline-variant/30 pt-8 scroll-mt-32">
                <h4 className="font-bold text-primary mb-2 uppercase tracking-wide font-headline text-sm">
                  {n}. {title}
                </h4>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </section>

          {/* 11 */}
          <section className="scroll-mt-32 pt-4" id="contacto">
            <div className="bg-ochre/10 p-12 rounded-[2rem] text-center">
              <h2 className="text-3xl font-extrabold text-primary mb-4 font-headline">{c.s11.title}</h2>
              <p className="text-on-surface-variant mb-8 font-body">{c.s11.subtitle}</p>
              <a
                href="mailto:legal@fmai.com"
                className="inline-flex items-center gap-2 text-xl font-bold text-primary hover:text-ochre hover:underline underline-offset-8 transition-all font-headline"
              >
                legal@fmai.com
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
            </div>
          </section>

          {/* Back */}
          <div className="text-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors font-label"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              {c.backLink}
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
