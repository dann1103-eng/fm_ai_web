import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

/* ─────────────────────────────────────────
   Section number badge
───────────────────────────────────────── */
function NumBadge({ n }: { n: string }) {
  return (
    <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-surface-container-high text-primary font-bold text-sm font-headline">
      {n}
    </span>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default async function TerminosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">

      {/* ── HEADER ── */}
      <header className="mb-20 text-center md:text-left">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6 font-label">
          Información Legal
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary tracking-tight leading-none mb-6 font-headline">
          Términos &amp;{' '}
          <span className="text-ochre italic">Condiciones</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed font-body">
          Este documento rige la relación entre usted y FM AI. Por favor, lea detenidamente estas
          disposiciones antes de utilizar nuestros servicios de automatización e IA.
        </p>
        <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-primary font-label">
          <span className="material-symbols-outlined text-base">calendar_today</span>
          Última actualización: Marzo 2026
        </div>
      </header>

      {/* ── CONTENT GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* ── SIDEBAR TOC (sticky, desktop only) ── */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
          <nav className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-outline mb-6 font-label">
              Navegación
            </p>
            {[
              { href: '#aceptacion',     label: '1. Aceptación'           },
              { href: '#descripcion',    label: '2. Descripción'           },
              { href: '#registro',       label: '3. Registro'              },
              { href: '#uso',            label: '4. Uso Aceptable'         },
              { href: '#propiedad',      label: '5. Propiedad Intelectual' },
              { href: '#responsabilidad',label: '6. Responsabilidad'       },
              { href: '#terceros',       label: '7. Terceros'              },
              { href: '#modificaciones', label: '8. Modificaciones'        },
              { href: '#terminacion',    label: '9. Terminación'           },
              { href: '#ley',            label: '10. Ley Aplicable'        },
              { href: '#contacto',       label: '11. Contacto'             },
            ].map(({ href, label }) => (
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

          {/* 01 — Aceptación */}
          <section className="scroll-mt-32" id="aceptacion">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="01" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                Aceptación de los Términos
              </h2>
            </div>
            <div className="bg-surface-container-low p-8 rounded-[1.5rem] border-l-4 border-primary shadow-[0_40px_60px_-15px_rgba(26,28,26,0.05)]">
              <p className="leading-relaxed text-on-surface-variant font-body">
                Al acceder y utilizar el sitio web de{' '}
                <strong className="text-primary font-extrabold">FM AI</strong> y cualquier
                subdominio o servicio relacionado, usted reconoce que ha leído, comprendido y
                aceptado estar sujeto a estos Términos y Condiciones en su totalidad. Si no está de
                acuerdo con alguna parte de estos términos, debe cesar inmediatamente el uso de
                nuestra plataforma.
              </p>
            </div>
          </section>

          {/* 02 — Descripción */}
          <section className="scroll-mt-32" id="descripcion">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="02" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                Descripción del Servicio
              </h2>
            </div>
            <div className="space-y-6">
              <p className="leading-relaxed text-on-surface-variant font-body">
                FM AI ofrece soluciones tecnológicas avanzadas diseñadas para la optimización
                empresarial, que incluyen pero no se limitan a:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: 'settings_input_component', title: 'Automatización de Procesos', desc: 'Implementación de flujos de trabajo autónomos mediante IA.' },
                  { icon: 'language',                 title: 'Desarrollo Web',              desc: 'Sitios optimizados para rendimiento y conversión.' },
                  { icon: 'smart_toy',                title: 'Chatbots Inteligentes',       desc: 'Sistemas de conversación basados en LLM personalizados.' },
                  { icon: 'query_stats',              title: 'Consultoría Estratégica',      desc: 'Asesoramiento técnico para la integración de IA.' },
                ].map(({ icon, title, desc }) => (
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

          {/* 03 + 04 — 2-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="p-8 bg-surface-container rounded-[1.5rem] scroll-mt-32" id="registro">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined text-primary text-xl">account_circle</span>
                3. Registro y Cuenta
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                El usuario es el único responsable de mantener la confidencialidad de sus
                credenciales de acceso. Cualquier actividad realizada bajo su cuenta será su
                responsabilidad directa ante FM AI.
              </p>
            </section>

            <section className="p-8 bg-surface-container rounded-[1.5rem] scroll-mt-32" id="uso">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined text-primary text-xl">gavel</span>
                4. Uso Aceptable
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                Queda estrictamente prohibido el uso del sitio para fines ilícitos, ingeniería
                inversa de nuestras herramientas de IA, o cualquier acción que comprometa la
                integridad técnica de FM AI.
              </p>
            </section>
          </div>

          {/* 05 — Propiedad Intelectual */}
          <section className="scroll-mt-32" id="propiedad">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="05" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                Propiedad Intelectual
              </h2>
            </div>
            <div className="relative overflow-hidden p-8 bg-primary text-on-primary rounded-[1.5rem]">
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '12rem', fontVariationSettings: "'FILL' 1" }}
                >
                  copyright
                </span>
              </div>
              <p className="relative z-10 leading-relaxed opacity-90 font-body">
                Todo el contenido, incluyendo algoritmos, interfaces de usuario, diseños visuales,
                logotipos y código fuente, es propiedad exclusiva de{' '}
                <strong className="text-ochre">FM AI</strong>. Se prohíbe la reproducción total o
                parcial sin consentimiento previo y por escrito.
              </p>
            </div>
          </section>

          {/* 06 — Limitación de Responsabilidad */}
          <section className="scroll-mt-32" id="responsabilidad">
            <div className="flex items-center gap-4 mb-6">
              <NumBadge n="06" />
              <h2 className="text-2xl font-extrabold text-primary tracking-tight uppercase font-headline">
                Limitación de Responsabilidad
              </h2>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed text-on-surface-variant font-body">
                FM AI proporciona tecnología de IA de vanguardia &ldquo;tal cual&rdquo;. No nos
                hacemos responsables por:
              </p>
              <ul className="space-y-4 ml-4">
                {[
                  'Daños indirectos, incidentales o consecuentes.',
                  'Errores derivados de datos de entrada proporcionados por el usuario.',
                  'Interrupciones del servicio por mantenimiento técnico.',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-on-surface-variant font-body">
                    <span className="w-2 h-2 rounded-full bg-ochre shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 07 – 10 — Simple bordered list */}
          <section className="space-y-8">
            {[
              { n: '7',  id: 'terceros',      title: 'Enlaces a Terceros',         text: 'No controlamos ni asumimos responsabilidad por el contenido de sitios externos enlazados desde nuestra plataforma.' },
              { n: '8',  id: 'modificaciones',title: 'Modificaciones a los Términos', text: 'FM AI se reserva el derecho de actualizar estos términos en cualquier momento. El uso continuado implica la aceptación de los nuevos cambios.' },
              { n: '9',  id: 'terminacion',   title: 'Terminación del Servicio',   text: 'Podemos suspender o cancelar su acceso si detectamos un incumplimiento de las políticas aquí descritas.' },
              { n: '10', id: 'ley',           title: 'Ley Aplicable y Jurisdicción', text: 'Cualquier disputa legal se regirá por las leyes locales de la jurisdicción de operación principal de FM AI.' },
            ].map(({ n, id, title, text }) => (
              <div key={n} id={id} className="border-t border-outline-variant/30 pt-8 scroll-mt-32">
                <h4 className="font-bold text-primary mb-2 uppercase tracking-wide font-headline text-sm">
                  {n}. {title}
                </h4>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </section>

          {/* 11 — Contacto */}
          <section className="scroll-mt-32 pt-4" id="contacto">
            <div className="bg-ochre/10 p-12 rounded-[2rem] text-center">
              <h2 className="text-3xl font-extrabold text-primary mb-4 font-headline">
                ¿Tiene dudas legales?
              </h2>
              <p className="text-on-surface-variant mb-8 font-body">
                Nuestro equipo jurídico está disponible para resolver cualquier consulta sobre estos
                términos.
              </p>
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
              Volver al inicio
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
