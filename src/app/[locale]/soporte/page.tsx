import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { supportContent, SUPPORT_EMAIL, type SupportChannel } from '@/content/support';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  return {
    title: isEn ? 'Customer Support | FM AI' : 'Soporte al Cliente | FM AI',
    description: isEn
      ? 'FM AI Help Center: support channels, business hours, committed response times, FAQ, and contact details for customers and users.'
      : 'Centro de ayuda de FM AI: canales de atención, horarios, tiempos de respuesta comprometidos, preguntas frecuentes y datos de contacto para clientes y usuarios.',
    alternates: { canonical: '/soporte' },
  };
}

function NumBadge({ n }: { n: string }) {
  return (
    <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-surface-container-high text-primary font-bold text-sm font-headline">
      {n}
    </span>
  );
}

/* ─────────────────────────────────────────
   Support channel card
───────────────────────────────────────── */
function ChannelCard({ item }: { item: SupportChannel }) {
  const body = (
    <>
      <div className="flex items-start gap-4 mb-5">
        <span className="w-12 h-12 shrink-0 rounded-2xl bg-ochre/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-ochre text-2xl">{item.icon}</span>
        </span>
        <div className="pt-1">
          <h3 className="font-bold text-primary font-headline text-lg leading-tight">
            {item.title}
          </h3>
          <p className="text-[11px] uppercase tracking-widest font-bold text-on-surface-variant/50 font-label mt-1.5">
            {item.meta}
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-on-surface-variant font-body mb-6">
        {item.desc}
      </p>

      <span
        className={`inline-flex items-center gap-2 text-sm font-bold font-headline mt-auto ${
          item.href
            ? 'text-primary group-hover:text-ochre transition-colors duration-200'
            : 'text-on-surface-variant/60'
        }`}
      >
        {item.action}
        {item.href && (
          <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-0.5">
            arrow_forward
          </span>
        )}
      </span>
    </>
  );

  const cardClass =
    'group h-full flex flex-col bg-white p-8 rounded-[1.5rem] border border-outline-variant/20 shadow-[0_20px_40px_-24px_rgba(26,28,26,0.18)] transition-all duration-300';

  if (!item.href) {
    return <div className={cardClass}>{body}</div>;
  }

  if (item.hrefType === 'external') {
    return (
      <a href={item.href} className={`${cardClass} hover:-translate-y-1`}>
        {body}
      </a>
    );
  }

  return (
    <Link href={item.href} className={`${cardClass} hover:-translate-y-1`}>
      {body}
    </Link>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default async function SoportePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = supportContent[locale] ?? supportContent['es'];

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
          {c.updated}
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

        {/* ── MAIN CONTENT ── */}
        <div className="lg:col-span-9 space-y-16">

          {/* 01 — CHANNELS */}
          <section className="scroll-mt-32" id="canales">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="01" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                {c.channels.title}
              </h2>
            </div>
            <p className="leading-relaxed text-on-surface-variant font-body mb-8">
              {c.channels.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {c.channels.items.map((item) => (
                <ChannelCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          {/* 02 — HOURS */}
          <section className="scroll-mt-32" id="horarios">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="02" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                {c.hours.title}
              </h2>
            </div>
            <p className="leading-relaxed text-on-surface-variant font-body mb-6">
              {c.hours.intro}
            </p>
            <div className="bg-surface-container-low p-8 rounded-[1.5rem] border-l-4 border-primary">
              <dl className="divide-y divide-outline-variant/25">
                {c.hours.rows.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 first:pt-0 last:pb-0"
                  >
                    <dt className="text-sm font-bold text-primary font-headline">{label}</dt>
                    <dd className="text-sm text-on-surface-variant font-body tabular-nums">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-5 text-sm text-on-surface-variant/80 font-body leading-relaxed flex gap-3">
              <span className="material-symbols-outlined text-base text-ochre shrink-0 mt-0.5">
                info
              </span>
              {c.hours.note}
            </p>
          </section>

          {/* 03 — SLA */}
          <section className="scroll-mt-32" id="tiempos">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="03" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                {c.sla.title}
              </h2>
            </div>
            <p className="leading-relaxed text-on-surface-variant font-body mb-8">
              {c.sla.intro}
            </p>

            <div className="overflow-x-auto rounded-[1.5rem] border border-outline-variant/25 bg-white">
              <table className="w-full min-w-[34rem] text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container">
                    {c.sla.cols.map((col) => (
                      <th
                        key={col}
                        scope="col"
                        className="px-6 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-primary font-label"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  {c.sla.rows.map((row) => (
                    <tr key={row.level}>
                      <td className="px-6 py-5 align-top">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-label whitespace-nowrap ${
                            row.accent
                              ? 'bg-error-container text-on-error-container'
                              : 'bg-secondary-container text-on-secondary-container'
                          }`}
                        >
                          {row.accent && (
                            <span className="material-symbols-outlined text-sm">
                              priority_high
                            </span>
                          )}
                          {row.level}
                        </span>
                      </td>
                      <td className="px-6 py-5 align-top text-sm text-on-surface-variant font-body leading-relaxed">
                        {row.desc}
                      </td>
                      <td className="px-6 py-5 align-top text-sm font-bold text-primary font-headline whitespace-nowrap">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-sm text-on-surface-variant/80 font-body leading-relaxed flex gap-3">
              <span className="material-symbols-outlined text-base text-ochre shrink-0 mt-0.5">
                info
              </span>
              {c.sla.note}
            </p>
          </section>

          {/* 04 — PROCESS */}
          <section className="scroll-mt-32" id="proceso">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="04" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                {c.process.title}
              </h2>
            </div>
            <p className="leading-relaxed text-on-surface-variant font-body mb-8">
              {c.process.intro}
            </p>
            <ol className="space-y-3">
              {c.process.steps.map(({ n, title, text }) => (
                <li
                  key={n}
                  className="flex gap-5 p-6 bg-surface-container rounded-[1.25rem]"
                >
                  <span className="text-2xl font-black text-ochre/40 font-headline leading-none shrink-0 tabular-nums">
                    {n}
                  </span>
                  <div>
                    <h4 className="font-bold text-primary mb-1.5 font-headline text-base">
                      {title}
                    </h4>
                    <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* 05 — FAQ */}
          <section className="scroll-mt-32" id="faq">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="05" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                {c.faq.title}
              </h2>
            </div>
            <p className="leading-relaxed text-on-surface-variant font-body mb-8">
              {c.faq.intro}
            </p>
            <div className="space-y-3">
              {c.faq.items.map(({ q, a }) => (
                <details
                  key={q}
                  className="group bg-white rounded-[1.25rem] border border-outline-variant/25 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-7 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-bold text-primary font-headline text-base leading-snug">
                      {q}
                    </span>
                    <span className="material-symbols-outlined text-ochre shrink-0 transition-transform duration-300 group-open:rotate-45">
                      add
                    </span>
                  </summary>
                  <p className="px-7 pb-6 -mt-1 text-sm text-on-surface-variant font-body leading-relaxed">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* 06 — BUSINESS IDENTITY */}
          <section className="scroll-mt-32" id="identidad">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="06" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                {c.identity.title}
              </h2>
            </div>
            <p className="leading-relaxed text-on-surface-variant font-body mb-8">
              {c.identity.intro}
            </p>
            <div className="relative overflow-hidden p-8 md:p-10 bg-primary text-on-primary rounded-[1.5rem]">
              <div className="absolute -right-12 -top-12 w-64 h-64 bg-ochre opacity-10 rounded-full blur-3xl pointer-events-none" />
              <dl className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
                {c.identity.rows.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-fixed-dim text-lg">
                        {icon}
                      </span>
                    </span>
                    <div className="min-w-0">
                      <dt className="text-[10px] uppercase tracking-widest opacity-60 font-bold font-label">
                        {label}
                      </dt>
                      <dd className="text-sm font-medium font-body break-words">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* 07 — LEGAL */}
          <section className="scroll-mt-32" id="legal">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="07" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                {c.legal.title}
              </h2>
            </div>
            <p className="leading-relaxed text-on-surface-variant font-body mb-8">
              {c.legal.subtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { href: '/terminos-y-condiciones', label: c.legal.terms,   icon: 'gavel' },
                { href: '/politica-de-privacidad', label: c.legal.privacy, icon: 'shield_person' },
              ].map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-4 p-6 bg-surface-container rounded-[1.25rem] hover:bg-surface-container-high transition-colors duration-200"
                >
                  <span className="material-symbols-outlined text-primary text-2xl shrink-0">
                    {icon}
                  </span>
                  <span className="font-bold text-primary font-headline text-sm flex-1">
                    {label}
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant/50 text-lg transition-transform duration-200 group-hover:translate-x-0.5">
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="pt-4">
            <div className="bg-ochre/10 p-12 rounded-[2rem] text-center">
              <h2 className="text-3xl font-extrabold text-primary mb-4 font-headline">
                {c.cta.title}
              </h2>
              <p className="text-on-surface-variant mb-8 font-body">{c.cta.subtitle}</p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-2 text-xl font-bold text-primary hover:text-ochre hover:underline underline-offset-8 transition-all font-headline break-all"
              >
                {SUPPORT_EMAIL}
                <span className="material-symbols-outlined text-xl shrink-0">
                  alternate_email
                </span>
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
