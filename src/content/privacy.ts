export type PrivacyContent = {
  badge: string;
  lastUpdated: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  s01: { title: string; cards: { icon: string; title: string; desc: string }[] };
  s02: { label: string; title: string; items: string[] };
  s03: { label: string; title: string; body: string };
  s04: { label: string; title: string; subtitle: string; partners: { icon: string; name: string; tag: string }[] };
  s05: { title: string; body: string };
  s06: { title: string; body: string };
  s07: { title: string; intro: string; rights: string[] };
  visualBreak: string;
  s08_11: { n: string; title: string; text: string }[];
  cta: { title: string; subtitle: string };
  backLink: string;
};

const es: PrivacyContent = {
  badge: 'Legal',
  lastUpdated: 'Última actualización: Marzo 2026',
  title: 'Política de',
  titleHighlight: 'Privacidad',
  subtitle:
    'En FM AI, la transparencia y la seguridad de sus datos son nuestra prioridad absoluta. Esta política detalla cómo manejamos su información en el ecosistema digital.',
  s01: {
    title: 'Información que Recopilamos',
    cards: [
      { icon: 'forms_add_on', title: 'Formularios', desc: 'Nombre, email, teléfono y el mensaje enviado a través de nuestros canales oficiales.' },
      { icon: 'forum',        title: 'Chatbots',    desc: 'Historial de conversaciones y preferencias manifestadas durante la interacción IA.' },
      { icon: 'devices',      title: 'Navegación',  desc: 'Dirección IP, cookies técnicas, tipo de dispositivo y sistema operativo.' },
    ],
  },
  s02: {
    label: '02. Propósito',
    title: 'Cómo Utilizamos la Información',
    items: [
      'Provisión y personalización de servicios IA.',
      'Mejora continua de la experiencia de usuario.',
      'Comunicaciones comerciales y actualizaciones.',
    ],
  },
  s03: {
    label: '03. Legitimidad',
    title: 'Base Legal para el Procesamiento',
    body: 'El procesamiento de sus datos se fundamenta en el consentimiento explícito del usuario y en la necesidad de ejecución de contratos de servicios solicitados a FM AI.',
  },
  s04: {
    label: '04. Ecosistema',
    title: 'Compartición de Datos con Terceros',
    subtitle: 'Colaboramos con procesadores líderes para garantizar la eficiencia de nuestras automatizaciones y agendamientos.',
    partners: [
      { icon: 'hub',           name: 'n8n',      tag: 'Automatización' },
      { icon: 'calendar_month', name: 'Calendly', tag: 'Agendamiento'  },
    ],
  },
  s05: {
    title: '05. Cookies y Tecnologías de Rastreo',
    body: 'Utilizamos cookies propias y de terceros para analizar el tráfico de nuestro sitio y asegurar las funcionalidades básicas del dashboard de IA. Puede gestionar sus preferencias desde el panel de configuración de su navegador.',
  },
  s06: {
    title: '06. Seguridad de los Datos',
    body: 'Implementamos medidas técnicas de última generación, incluyendo cifrado SSL/TLS y protocolos de acceso restringido, para proteger su información contra pérdida, robo o acceso no autorizado.',
  },
  s07: {
    title: '07. Derechos del Usuario',
    intro: 'Usted mantiene el control total sobre sus datos. En cualquier momento puede ejercer sus derechos de:',
    rights: ['Acceso', 'Rectificación', 'Eliminación', 'Portabilidad'],
  },
  visualBreak: 'Protección · Integridad · Privacidad',
  s08_11: [
    { n: '08', title: 'Retención de Datos',              text: 'Los datos personales serán conservados únicamente durante el tiempo necesario para cumplir con los fines descritos en esta política o mientras exista una obligación legal de mantenimiento.' },
    { n: '09', title: 'Transferencias Internacionales',  text: 'En caso de transferencias transfronterizas, FM AI garantiza el uso de Cláusulas Contractuales Estándar y marcos de protección de datos equivalentes a los estándares europeos.' },
    { n: '10', title: 'Menores de Edad',                 text: 'Nuestros servicios están diseñados para un público profesional y no están dirigidos a menores de 18 años. No recopilamos conscientemente datos de menores.' },
    { n: '11', title: 'Cambios a esta Política',         text: 'Nos reservamos el derecho de actualizar esta política. Notificaremos cualquier cambio significativo a través de nuestra plataforma o vía correo electrónico.' },
  ],
  cta: {
    title: '¿Tiene dudas sobre su privacidad?',
    subtitle: 'Nuestro Delegado de Protección de Datos está a su disposición para cualquier consulta técnica o legal.',
  },
  backLink: 'Volver al inicio',
};

const en: PrivacyContent = {
  badge: 'Legal',
  lastUpdated: 'Last updated: March 2026',
  title: 'Privacy',
  titleHighlight: 'Policy',
  subtitle:
    'At FM AI, transparency and the security of your data are our absolute priority. This policy details how we handle your information across our digital ecosystem.',
  s01: {
    title: 'Information We Collect',
    cards: [
      { icon: 'forms_add_on', title: 'Forms',    desc: 'Name, email, phone and the message submitted through our official channels.' },
      { icon: 'forum',        title: 'Chatbots', desc: 'Conversation history and preferences expressed during AI interactions.' },
      { icon: 'devices',      title: 'Browsing', desc: 'IP address, technical cookies, device type and operating system.' },
    ],
  },
  s02: {
    label: '02. Purpose',
    title: 'How We Use Your Information',
    items: [
      'Provision and personalization of AI services.',
      'Continuous improvement of user experience.',
      'Commercial communications and updates.',
    ],
  },
  s03: {
    label: '03. Legitimacy',
    title: 'Legal Basis for Processing',
    body: 'The processing of your data is based on the explicit consent of the user and on the need to execute service contracts requested from FM AI.',
  },
  s04: {
    label: '04. Ecosystem',
    title: 'Data Sharing with Third Parties',
    subtitle: 'We work with leading processors to ensure the efficiency of our automations and scheduling.',
    partners: [
      { icon: 'hub',            name: 'n8n',      tag: 'Automation' },
      { icon: 'calendar_month', name: 'Calendly', tag: 'Scheduling' },
    ],
  },
  s05: {
    title: '05. Cookies & Tracking Technologies',
    body: 'We use first-party and third-party cookies to analyze site traffic and ensure core AI dashboard functionality. You can manage your preferences from your browser settings panel.',
  },
  s06: {
    title: '06. Data Security',
    body: 'We implement state-of-the-art technical measures, including SSL/TLS encryption and restricted access protocols, to protect your information against loss, theft, or unauthorized access.',
  },
  s07: {
    title: '07. User Rights',
    intro: 'You maintain full control over your data. At any time you may exercise your rights to:',
    rights: ['Access', 'Rectification', 'Deletion', 'Portability'],
  },
  visualBreak: 'Protection · Integrity · Privacy',
  s08_11: [
    { n: '08', title: 'Data Retention',           text: 'Personal data will be retained only for as long as necessary to fulfil the purposes described in this policy or as required by law.' },
    { n: '09', title: 'International Transfers',  text: 'For cross-border transfers, FM AI ensures the use of Standard Contractual Clauses and data protection frameworks equivalent to European standards.' },
    { n: '10', title: 'Minors',                   text: 'Our services are designed for a professional audience and are not directed at individuals under 18. We do not knowingly collect data from minors.' },
    { n: '11', title: 'Changes to this Policy',   text: 'We reserve the right to update this policy. We will notify you of any significant changes through our platform or via email.' },
  ],
  cta: {
    title: 'Have questions about your privacy?',
    subtitle: 'Our Data Protection Officer is available for any technical or legal enquiry.',
  },
  backLink: 'Back to home',
};

export const privacyContent: Record<string, PrivacyContent> = { es, en };
