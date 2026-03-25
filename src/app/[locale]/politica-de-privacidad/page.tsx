import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

/* ─────────────────────────────────────────
   Reusable small components
───────────────────────────────────────── */
function SectionNumber({ n }: { n: string }) {
  return (
    <span className="text-4xl font-black text-primary/20 group-hover:text-primary/80 transition-colors duration-300 shrink-0 font-headline leading-none">
      {n}
    </span>
  );
}

function ThirdPartyCard({ icon, name, tag }: { icon: string; name: string; tag: string }) {
  return (
    <div className="bg-white p-6 rounded-[1.5rem] flex items-center gap-4 min-w-[200px] shadow-sm">
      <div className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-secondary text-lg">{icon}</span>
      </div>
      <div>
        <p className="font-bold text-on-surface font-headline text-sm">{name}</p>
        <p className="text-xs text-outline font-label">{tag}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default async function PrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        {/* ── HERO HEADER ── */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase font-label">
              Legal
            </span>
            <span className="text-outline text-sm font-body">Última actualización: Marzo 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tighter leading-tight mb-8 font-headline">
            Política de{' '}
            <span className="text-primary italic">Privacidad</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-body">
            En FM AI, la transparencia y la seguridad de sus datos son nuestra prioridad absoluta.
            Esta política detalla cómo manejamos su información en el ecosistema digital.
          </p>
        </header>

        {/* ── CONTENT ── */}
        <div className="space-y-24">

          {/* 01 — Información que Recopilamos */}
          <section className="group" id="informacion">
            <div className="flex items-start gap-6">
              <SectionNumber n="01" />
              <div className="space-y-6 w-full">
                <h2 className="text-3xl font-bold text-secondary font-headline">
                  Información que Recopilamos
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: 'forms_add_on',
                      title: 'Formularios',
                      desc: 'Nombre, email, teléfono y el mensaje enviado a través de nuestros canales oficiales.',
                    },
                    {
                      icon: 'forum',
                      title: 'Chatbots',
                      desc: 'Historial de conversaciones y preferencias manifestadas durante la interacción IA.',
                    },
                    {
                      icon: 'devices',
                      title: 'Navegación',
                      desc: 'Dirección IP, cookies técnicas, tipo de dispositivo y sistema operativo.',
                    },
                  ].map(({ icon, title, desc }) => (
                    <div
                      key={title}
                      className="bg-surface-container p-8 rounded-[1.5rem] shadow-[0_40px_60px_-15px_rgba(26,28,26,0.05)]"
                    >
                      <span className="material-symbols-outlined text-primary mb-4 block text-2xl">
                        {icon}
                      </span>
                      <h3 className="font-bold mb-2 font-headline text-on-surface">{title}</h3>
                      <p className="text-sm text-on-surface-variant font-body leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 02 + 03 — Propósito & Base Legal */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-surface-container-low p-10 rounded-[1.5rem]">
              <span className="text-xs font-black text-primary tracking-widest uppercase mb-4 block font-label">
                02. Propósito
              </span>
              <h2 className="text-2xl font-bold text-secondary mb-6 font-headline">
                Cómo Utilizamos la Información
              </h2>
              <ul className="space-y-4 text-on-surface-variant font-body">
                {[
                  'Provisión y personalización de servicios IA.',
                  'Mejora continua de la experiencia de usuario.',
                  'Comunicaciones comerciales y actualizaciones.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-secondary text-on-primary p-10 rounded-[1.5rem]">
              <span className="text-xs font-black text-primary-fixed-dim tracking-widest uppercase mb-4 block font-label">
                03. Legitimidad
              </span>
              <h2 className="text-2xl font-bold mb-6 font-headline">
                Base Legal para el Procesamiento
              </h2>
              <p className="opacity-80 leading-relaxed font-body text-sm">
                El procesamiento de sus datos se fundamenta en el{' '}
                <strong className="font-extrabold">consentimiento explícito</strong> del usuario y en
                la necesidad de{' '}
                <strong className="font-extrabold">ejecución de contratos</strong> de servicios
                solicitados a FM AI.
              </p>
            </section>
          </div>

          {/* 04 — Terceros */}
          <section className="bg-surface-container-highest p-12 rounded-[1.5rem] relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-black text-primary tracking-widest uppercase mb-4 block font-label">
                04. Ecosistema
              </span>
              <h2 className="text-3xl font-bold text-secondary mb-6 font-headline">
                Compartición de Datos con Terceros
              </h2>
              <p className="text-on-surface-variant mb-10 max-w-xl font-body">
                Colaboramos con procesadores líderes para garantizar la eficiencia de nuestras
                automatizaciones y agendamientos.
              </p>
              <div className="flex flex-wrap gap-4">
                <ThirdPartyCard icon="hub" name="n8n" tag="Automatización" />
                <ThirdPartyCard icon="calendar_month" name="Calendly" tag="Agendamiento" />
              </div>
            </div>
          </section>

          {/* 05 – 07 — Articles with left border */}
          <div className="space-y-16 border-l-2 border-surface-container pl-12">
            <article>
              <h3 className="text-2xl font-bold text-secondary mb-4 font-headline">
                05. Cookies y Tecnologías de Rastreo
              </h3>
              <p className="text-on-surface-variant leading-relaxed font-body">
                Utilizamos cookies propias y de terceros para analizar el tráfico de nuestro sitio y
                asegurar las funcionalidades básicas del dashboard de IA. Puede gestionar sus
                preferencias desde el panel de configuración de su navegador.
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-bold text-secondary mb-4 font-headline">
                06. Seguridad de los Datos
              </h3>
              <p className="text-on-surface-variant leading-relaxed font-body">
                Implementamos medidas técnicas de última generación, incluyendo cifrado SSL/TLS y
                protocolos de acceso restringido, para proteger su información contra pérdida, robo
                o acceso no autorizado.
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-bold text-secondary mb-4 font-headline">
                07. Derechos del Usuario
              </h3>
              <p className="text-on-surface-variant mb-6 font-body">
                Usted mantiene el control total sobre sus datos. En cualquier momento puede ejercer
                sus derechos de:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Acceso', 'Rectificación', 'Eliminación', 'Portabilidad'].map((right) => (
                  <span
                    key={right}
                    className="bg-surface-container px-4 py-2 rounded-full text-sm font-medium text-on-surface font-label"
                  >
                    {right}
                  </span>
                ))}
              </div>
            </article>
          </div>

          {/* Visual break */}
          <div className="rounded-[1.5rem] h-48 overflow-hidden relative bg-secondary-container/30">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-ochre/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-secondary font-black tracking-[0.4em] uppercase text-sm font-headline opacity-60">
                Protección · Integridad · Privacidad
              </p>
            </div>
          </div>

          {/* 08 – 11 — 2-col grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                n: '08',
                title: 'Retención de Datos',
                text: 'Los datos personales serán conservados únicamente durante el tiempo necesario para cumplir con los fines descritos en esta política o mientras exista una obligación legal de mantenimiento.',
              },
              {
                n: '09',
                title: 'Transferencias Internacionales',
                text: 'En caso de transferencias transfronterizas, FM AI garantiza el uso de Cláusulas Contractuales Estándar y marcos de protección de datos equivalentes a los estándares europeos.',
              },
              {
                n: '10',
                title: 'Menores de Edad',
                text: 'Nuestros servicios están diseñados para un público profesional y no están dirigidos a menores de 18 años. No recopilamos conscientemente datos de menores.',
              },
              {
                n: '11',
                title: 'Cambios a esta Política',
                text: 'Nos reservamos el derecho de actualizar esta política. Notificaremos cualquier cambio significativo a través de nuestra plataforma o vía correo electrónico.',
              },
            ].map(({ n, title, text }) => (
              <section key={n}>
                <h3 className="text-xl font-bold text-secondary mb-4 font-headline underline decoration-primary decoration-2 underline-offset-8">
                  {n}. {title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-body">{text}</p>
              </section>
            ))}
          </div>

          {/* Contact CTA */}
          <section className="bg-primary text-on-primary p-12 rounded-[2rem] text-center flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 font-headline">
              ¿Tiene dudas sobre su privacidad?
            </h2>
            <p className="opacity-90 mb-8 max-w-md font-body">
              Nuestro Delegado de Protección de Datos está a su disposición para cualquier consulta
              técnica o legal.
            </p>
            <a
              href="mailto:privacy@fmai.com"
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-ochre hover:text-white transition-all hover:scale-105 inline-flex items-center gap-3 font-headline shadow-lg"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              privacy@fmai.com
            </a>
          </section>

          {/* Back link */}
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
