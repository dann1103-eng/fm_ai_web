import { Link } from '@/i18n/navigation';

const sections = [
  {
    n: '01',
    title: 'Aceptación de los Términos',
    text: 'Al acceder y utilizar los servicios de FM AI, usted acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a nuestros servicios.',
  },
  {
    n: '02',
    title: 'Descripción del Servicio',
    text: 'FM AI provee soluciones de inteligencia artificial, automatización de procesos, desarrollo web y consultoría tecnológica. Nos reservamos el derecho de modificar o discontinuar cualquier servicio sin previo aviso.',
  },
  {
    n: '03',
    title: 'Propiedad Intelectual',
    text: 'Todo el contenido, código, diseño, logotipos y materiales presentes en la plataforma FM AI son propiedad exclusiva de FM AI y están protegidos por las leyes de propiedad intelectual aplicables. Queda prohibida su reproducción sin autorización expresa.',
  },
  {
    n: '04',
    title: 'Uso Aceptable',
    text: 'Usted se compromete a utilizar nuestros servicios únicamente para fines legales y de acuerdo con estos términos. Queda prohibido el uso de nuestros servicios para actividades ilícitas, fraudulentas, o que vulneren derechos de terceros.',
  },
  {
    n: '05',
    title: 'Limitación de Responsabilidad',
    text: 'FM AI no será responsable de daños indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de uso de nuestros servicios. La responsabilidad total de FM AI no excederá el importe pagado por el cliente en los últimos 12 meses.',
  },
  {
    n: '06',
    title: 'Confidencialidad',
    text: 'Toda información compartida durante la prestación de servicios será tratada con estricta confidencialidad. FM AI no divulgará información del cliente a terceros salvo requerimiento legal expreso.',
  },
  {
    n: '07',
    title: 'Pagos y Facturación',
    text: 'Los precios de los servicios son los acordados en el contrato o propuesta comercial correspondiente. Los pagos son no reembolsables salvo acuerdo expreso. FM AI se reserva el derecho de suspender servicios ante falta de pago.',
  },
  {
    n: '08',
    title: 'Resolución de Disputas',
    text: 'Cualquier disputa derivada de estos términos será resuelta mediante arbitraje bajo las normas de la cámara arbitral competente en la jurisdicción aplicable, antes de recurrir a instancias judiciales.',
  },
  {
    n: '09',
    title: 'Ley Aplicable',
    text: 'Estos términos se rigen por las leyes vigentes en la República Argentina (o la jurisdicción del domicilio del cliente, según corresponda). Las partes se someten a la jurisdicción de los tribunales competentes.',
  },
  {
    n: '10',
    title: 'Modificaciones',
    text: 'FM AI se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor al publicarse en esta página. El uso continuado del servicio implica la aceptación de los términos modificados.',
  },
];

export default function TerminosPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        {/* ── HEADER ── */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase font-label">
              Legal
            </span>
            <span className="text-outline text-sm font-body">Última actualización: Marzo 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tighter leading-tight mb-8 font-headline">
            Términos y{' '}
            <span className="text-primary italic">Condiciones</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-body">
            Por favor, lea detenidamente estos términos antes de utilizar nuestros servicios.
            Al acceder a FM AI, usted acepta quedar vinculado por las condiciones aquí descritas.
          </p>
        </header>

        {/* ── SECTIONS ── */}
        <div className="space-y-0">
          {sections.map(({ n, title, text }, i) => (
            <div
              key={n}
              className={`group flex items-start gap-6 py-10 ${
                i < sections.length - 1 ? 'border-b border-outline-variant/20' : ''
              }`}
            >
              <span className="text-3xl font-black text-primary/20 group-hover:text-primary/70 transition-colors duration-300 shrink-0 font-headline leading-tight w-10">
                {n}
              </span>
              <div>
                <h2 className="text-xl font-bold text-secondary mb-3 font-headline">{title}</h2>
                <p className="text-on-surface-variant leading-relaxed font-body text-sm">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── ACCEPTANCE BANNER ── */}
        <div className="mt-20 bg-surface-container-low rounded-[2rem] p-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
          </div>
          <div>
            <h3 className="font-bold text-primary font-headline mb-1">
              ¿Preguntas sobre estos términos?
            </h3>
            <p className="text-on-surface-variant text-sm font-body">
              Contáctenos en{' '}
              <a
                href="mailto:legal@fmai.com"
                className="text-primary font-semibold hover:text-ochre transition-colors underline underline-offset-2"
              >
                legal@fmai.com
              </a>{' '}
              y nuestro equipo legal le responderá en menos de 48 horas.
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors font-label"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Volver al inicio
          </Link>
        </div>

      </div>
    </main>
  );
}
