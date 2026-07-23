/**
 * FM AI — Customer Support content (ES / EN)
 *
 * This page is the public "Customer Support URL" submitted to
 * Google Cloud Console and Meta Business Manager for business
 * verification. It must stay publicly reachable without login.
 */

export const SUPPORT_EMAIL = 'soporte@fmcomsolutions.com';
export const SITE_URL = 'https://fm-ai-website.vercel.app';

export type SupportChannel = {
  icon: string;
  title: string;
  desc: string;
  meta: string;
  action: string;
  href: string | null;
  hrefType: 'internal' | 'external';
};

export type SupportContent = {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  updated: string;
  navLabel: string;
  nav: { href: string; label: string }[];
  channels: { title: string; intro: string; items: SupportChannel[] };
  hours: {
    title: string;
    intro: string;
    rows: { label: string; value: string }[];
    note: string;
  };
  sla: {
    title: string;
    intro: string;
    cols: [string, string, string];
    rows: { level: string; desc: string; time: string; accent: boolean }[];
    note: string;
  };
  process: {
    title: string;
    intro: string;
    steps: { n: string; title: string; text: string }[];
  };
  faq: { title: string; intro: string; items: { q: string; a: string }[] };
  identity: {
    title: string;
    intro: string;
    rows: { icon: string; label: string; value: string }[];
  };
  legal: {
    title: string;
    subtitle: string;
    terms: string;
    privacy: string;
  };
  cta: { title: string; subtitle: string; button: string };
  backLink: string;
};

/* ══════════════════════════════════════════════════════════
   ESPAÑOL
══════════════════════════════════════════════════════════ */
const es: SupportContent = {
  badge: 'Centro de Ayuda',
  title: 'Soporte al',
  titleHighlight: 'Cliente',
  subtitle:
    'Estamos aquí para ayudarte. Encuentra el canal de atención que mejor se ajuste a tu caso, consulta nuestros tiempos de respuesta comprometidos o resuelve tus dudas en las preguntas frecuentes.',
  updated: 'Última actualización: Julio 2026',
  navLabel: 'Navegación',
  nav: [
    { href: '#canales',   label: '1. Canales de Atención' },
    { href: '#horarios',  label: '2. Horarios' },
    { href: '#tiempos',   label: '3. Tiempos de Respuesta' },
    { href: '#proceso',   label: '4. Cómo Funciona' },
    { href: '#faq',       label: '5. Preguntas Frecuentes' },
    { href: '#identidad', label: '6. Datos del Negocio' },
    { href: '#legal',     label: '7. Documentos Legales' },
  ],

  channels: {
    title: 'Canales de Atención',
    intro:
      'Todos nuestros canales son gratuitos para clientes activos y para cualquier persona interesada en nuestros servicios. No es necesario tener una cuenta para contactarnos.',
    items: [
      {
        icon: 'mail',
        title: 'Correo de Soporte',
        desc: 'El canal principal y el más rápido. Escríbenos con el detalle de tu caso y te asignaremos un especialista.',
        meta: 'Respuesta en menos de 24 horas hábiles',
        action: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
        hrefType: 'external',
      },
      {
        icon: 'edit_note',
        title: 'Formulario de Contacto',
        desc: 'Completa el formulario con los datos de tu solicitud y recibirás una confirmación automática con tu número de referencia.',
        meta: 'Disponible 24/7',
        action: 'Ir al formulario',
        href: '/contacto',
        hrefType: 'internal',
      },
      {
        icon: 'smart_toy',
        title: 'Asistente Virtual',
        desc: 'Nuestro asistente con IA responde al instante las consultas más frecuentes sobre servicios, precios y procesos.',
        meta: 'Disponible 24/7 — botón inferior derecho',
        action: 'Abrir el chat en cualquier página',
        href: null,
        hrefType: 'internal',
      },
      {
        icon: 'calendar_month',
        title: 'Videollamada con un Consultor',
        desc: 'Agenda una sesión de 30 minutos si tu caso requiere una explicación en vivo o una revisión técnica compartida.',
        meta: 'Según disponibilidad de agenda',
        action: 'Agendar una llamada',
        href: '/contacto',
        hrefType: 'internal',
      },
    ],
  },

  hours: {
    title: 'Horarios de Atención',
    intro:
      'Nuestro equipo opera de forma remota desde Latinoamérica. Los horarios se expresan en GMT-6 (Hora de Centroamérica).',
    rows: [
      { label: 'Lunes a Viernes', value: '09:00 – 18:00 (GMT-6)' },
      { label: 'Sábados',         value: '09:00 – 13:00 (GMT-6)' },
      { label: 'Domingos y festivos', value: 'Cerrado' },
      { label: 'Correo y formulario', value: 'Se reciben 24/7' },
    ],
    note: 'Las solicitudes recibidas fuera de horario se atienden el siguiente día hábil. Los incidentes críticos de clientes con contrato activo se atienden también fuera de horario según lo pactado.',
  },

  sla: {
    title: 'Tiempos de Respuesta',
    intro:
      'Clasificamos cada solicitud por prioridad para garantizar que los casos más urgentes se atiendan primero. Estos son nuestros compromisos de primera respuesta:',
    cols: ['Prioridad', 'Cuándo aplica', 'Primera respuesta'],
    rows: [
      { level: 'Crítica', desc: 'Un servicio en producción está caído o inoperativo.',     time: '4 horas hábiles',  accent: true  },
      { level: 'Alta',    desc: 'Una función clave presenta fallos y afecta la operación.', time: '8 horas hábiles',  accent: false },
      { level: 'Media',   desc: 'Error menor, duda técnica o solicitud de configuración.',  time: '24 horas hábiles', accent: false },
      { level: 'Baja',    desc: 'Consulta general, presupuesto o sugerencia de mejora.',    time: '48 horas hábiles', accent: false },
    ],
    note: 'Los tiempos indicados corresponden a la primera respuesta de un agente humano, no al cierre definitivo del caso. El tiempo de resolución depende de la complejidad y se comunica en la primera respuesta.',
  },

  process: {
    title: 'Cómo Funciona Nuestro Soporte',
    intro:
      'Un proceso claro y trazable, desde que nos escribes hasta que tu caso queda cerrado.',
    steps: [
      { n: '01', title: 'Envías tu solicitud',      text: 'Por correo, formulario o chat. Incluye la mayor cantidad de detalles posible: qué ocurre, desde cuándo y qué esperabas que sucediera.' },
      { n: '02', title: 'Recibes tu número de caso', text: 'Te enviamos una confirmación automática con un número de referencia. Consérvalo para dar seguimiento a tu solicitud.' },
      { n: '03', title: 'Diagnóstico y asignación',  text: 'Clasificamos la prioridad y asignamos un especialista del área correspondiente. Si necesitamos más información, te la solicitamos en la primera respuesta.' },
      { n: '04', title: 'Resolución y seguimiento',  text: 'Trabajamos en la solución y te mantenemos informado del avance. Al cerrar el caso te confirmamos qué se hizo y cómo evitar que vuelva a ocurrir.' },
      { n: '05', title: 'Escalamiento',              text: `Si no quedas conforme con la resolución, escríbenos a ${SUPPORT_EMAIL} con el asunto "ESCALAMIENTO" y tu número de caso. Un responsable revisará tu solicitud en un plazo máximo de 5 días hábiles.` },
    ],
  },

  faq: {
    title: 'Preguntas Frecuentes',
    intro: 'Las consultas que recibimos con más frecuencia.',
    items: [
      {
        q: '¿Cómo abro una solicitud de soporte?',
        a: `Escríbenos a ${SUPPORT_EMAIL} o completa el formulario de contacto de este sitio. Ambos canales generan un caso con número de referencia y no requieren que tengas una cuenta creada.`,
      },
      {
        q: '¿Cuánto tardan en responder?',
        a: 'Entre 4 y 48 horas hábiles según la prioridad del caso, tal como se detalla en la tabla de tiempos de respuesta de esta página. La mayoría de las consultas se responden dentro de las primeras 24 horas hábiles.',
      },
      {
        q: '¿El soporte tiene algún costo?',
        a: 'No. La atención por correo, formulario y asistente virtual es gratuita tanto para clientes activos como para personas que aún no han contratado un servicio. Los trabajos de desarrollo o configuración que excedan el alcance contratado se cotizan por separado y siempre se informan antes de ejecutarlos.',
      },
      {
        q: '¿En qué idiomas brindan atención?',
        a: 'Atendemos en español e inglés. Puedes escribirnos en cualquiera de los dos idiomas y te responderemos en el mismo.',
      },
      {
        q: '¿Cómo solicito acceso, corrección o eliminación de mis datos personales?',
        a: `Envía tu solicitud a ${SUPPORT_EMAIL} indicando "DATOS PERSONALES" en el asunto y el derecho que deseas ejercer. Verificamos tu identidad y respondemos en un plazo máximo de 30 días naturales. Los detalles completos están en nuestra Política de Privacidad.`,
      },
      {
        q: '¿Cómo reporto una vulnerabilidad o un problema de seguridad?',
        a: `Escríbenos a ${SUPPORT_EMAIL} con el asunto "SEGURIDAD". Los reportes de seguridad se tratan con prioridad crítica y de forma confidencial. Te pedimos no divulgar públicamente el hallazgo hasta que lo hayamos corregido.`,
      },
      {
        q: '¿Puedo modificar o cancelar un servicio contratado?',
        a: 'Sí. Las condiciones de modificación y cancelación se detallan en los Términos y Condiciones y en la propuesta comercial firmada. Para iniciar el trámite, contáctanos por correo indicando el servicio y el motivo.',
      },
      {
        q: '¿Cómo presento una queja formal?',
        a: `Toda queja formal debe enviarse a ${SUPPORT_EMAIL} con el asunto "QUEJA FORMAL". La registramos, te confirmamos su recepción en un máximo de 2 días hábiles y emitimos una resolución escrita dentro de los 15 días hábiles siguientes.`,
      },
    ],
  },

  identity: {
    title: 'Datos del Negocio',
    intro:
      'Información pública de identificación de FM AI, disponible para clientes, usuarios y procesos de verificación.',
    rows: [
      { icon: 'storefront',  label: 'Nombre comercial',  value: 'FM AI — Automatizaciones Inteligentes' },
      { icon: 'mail',        label: 'Correo de soporte',  value: SUPPORT_EMAIL },
      { icon: 'public',      label: 'Sitio web oficial',  value: SITE_URL.replace('https://', '') },
      { icon: 'travel_explore', label: 'Cobertura',       value: 'Latinoamérica — operación 100% remota' },
      { icon: 'translate',   label: 'Idiomas de atención', value: 'Español e Inglés' },
      { icon: 'schedule',    label: 'Horario de atención', value: 'Lun a Vie, 09:00 – 18:00 (GMT-6)' },
    ],
  },

  legal: {
    title: 'Documentos Legales',
    subtitle:
      'Antes de contratar o utilizar nuestros servicios, te recomendamos revisar los siguientes documentos.',
    terms: 'Términos y Condiciones',
    privacy: 'Política de Privacidad',
  },

  cta: {
    title: '¿No encontraste lo que buscabas?',
    subtitle: 'Escríbenos directamente. Una persona real leerá tu mensaje y te responderá.',
    button: 'Contactar a soporte',
  },

  backLink: 'Volver al inicio',
};

/* ══════════════════════════════════════════════════════════
   ENGLISH
══════════════════════════════════════════════════════════ */
const en: SupportContent = {
  badge: 'Help Center',
  title: 'Customer',
  titleHighlight: 'Support',
  subtitle:
    'We are here to help. Find the support channel that best fits your case, check our committed response times, or resolve your questions in the FAQ section.',
  updated: 'Last updated: July 2026',
  navLabel: 'Navigation',
  nav: [
    { href: '#canales',   label: '1. Support Channels' },
    { href: '#horarios',  label: '2. Business Hours' },
    { href: '#tiempos',   label: '3. Response Times' },
    { href: '#proceso',   label: '4. How It Works' },
    { href: '#faq',       label: '5. FAQ' },
    { href: '#identidad', label: '6. Business Details' },
    { href: '#legal',     label: '7. Legal Documents' },
  ],

  channels: {
    title: 'Support Channels',
    intro:
      'All our channels are free for active clients and for anyone interested in our services. You do not need an account to contact us.',
    items: [
      {
        icon: 'mail',
        title: 'Support Email',
        desc: 'Our primary and fastest channel. Write to us with the details of your case and we will assign a specialist.',
        meta: 'Reply within 24 business hours',
        action: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
        hrefType: 'external',
      },
      {
        icon: 'edit_note',
        title: 'Contact Form',
        desc: 'Fill out the form with your request details and you will receive an automatic confirmation with your reference number.',
        meta: 'Available 24/7',
        action: 'Go to the form',
        href: '/contacto',
        hrefType: 'internal',
      },
      {
        icon: 'smart_toy',
        title: 'Virtual Assistant',
        desc: 'Our AI assistant instantly answers the most common questions about services, pricing, and processes.',
        meta: 'Available 24/7 — bottom right button',
        action: 'Open the chat on any page',
        href: null,
        hrefType: 'internal',
      },
      {
        icon: 'calendar_month',
        title: 'Video Call with a Consultant',
        desc: 'Book a 30-minute session if your case requires a live walkthrough or a shared technical review.',
        meta: 'Subject to calendar availability',
        action: 'Book a call',
        href: '/contacto',
        hrefType: 'internal',
      },
    ],
  },

  hours: {
    title: 'Business Hours',
    intro:
      'Our team operates remotely from Latin America. Hours are expressed in GMT-6 (Central America Time).',
    rows: [
      { label: 'Monday to Friday',  value: '09:00 – 18:00 (GMT-6)' },
      { label: 'Saturdays',         value: '09:00 – 13:00 (GMT-6)' },
      { label: 'Sundays & holidays', value: 'Closed' },
      { label: 'Email & form',      value: 'Received 24/7' },
    ],
    note: 'Requests received outside business hours are handled the next business day. Critical incidents for clients with an active contract are also handled outside business hours as agreed.',
  },

  sla: {
    title: 'Response Times',
    intro:
      'We classify every request by priority to guarantee that the most urgent cases are handled first. These are our first-response commitments:',
    cols: ['Priority', 'When it applies', 'First response'],
    rows: [
      { level: 'Critical', desc: 'A production service is down or inoperative.',            time: '4 business hours',  accent: true  },
      { level: 'High',     desc: 'A key feature is failing and affects daily operations.',  time: '8 business hours',  accent: false },
      { level: 'Medium',   desc: 'Minor bug, technical question, or configuration request.', time: '24 business hours', accent: false },
      { level: 'Low',      desc: 'General inquiry, quote request, or improvement suggestion.', time: '48 business hours', accent: false },
    ],
    note: 'The times shown correspond to the first response from a human agent, not to the final closure of the case. Resolution time depends on complexity and is communicated in the first response.',
  },

  process: {
    title: 'How Our Support Works',
    intro: 'A clear, traceable process from the moment you write to us until your case is closed.',
    steps: [
      { n: '01', title: 'You submit your request', text: 'By email, form, or chat. Include as much detail as possible: what happens, since when, and what you expected instead.' },
      { n: '02', title: 'You receive a case number', text: 'We send an automatic confirmation with a reference number. Keep it to follow up on your request.' },
      { n: '03', title: 'Triage and assignment',    text: 'We classify the priority and assign a specialist from the relevant area. If we need more information, we request it in the first response.' },
      { n: '04', title: 'Resolution and follow-up', text: 'We work on the solution and keep you informed of progress. When we close the case we confirm what was done and how to prevent it from happening again.' },
      { n: '05', title: 'Escalation',               text: `If you are not satisfied with the resolution, write to ${SUPPORT_EMAIL} with the subject "ESCALATION" and your case number. A manager will review your request within a maximum of 5 business days.` },
    ],
  },

  faq: {
    title: 'Frequently Asked Questions',
    intro: 'The questions we receive most often.',
    items: [
      {
        q: 'How do I open a support request?',
        a: `Write to ${SUPPORT_EMAIL} or fill out the contact form on this site. Both channels generate a case with a reference number and do not require you to have an account.`,
      },
      {
        q: 'How long does it take to get a reply?',
        a: 'Between 4 and 48 business hours depending on the priority of the case, as detailed in the response times table on this page. Most inquiries are answered within the first 24 business hours.',
      },
      {
        q: 'Is support free of charge?',
        a: 'Yes. Support via email, form, and virtual assistant is free both for active clients and for people who have not yet hired a service. Development or configuration work that exceeds the contracted scope is quoted separately and always communicated before being carried out.',
      },
      {
        q: 'What languages do you provide support in?',
        a: 'We provide support in Spanish and English. You can write to us in either language and we will reply in the same one.',
      },
      {
        q: 'How do I request access, correction, or deletion of my personal data?',
        a: `Send your request to ${SUPPORT_EMAIL} with "PERSONAL DATA" in the subject line and the right you wish to exercise. We verify your identity and respond within a maximum of 30 calendar days. Full details are in our Privacy Policy.`,
      },
      {
        q: 'How do I report a vulnerability or security issue?',
        a: `Write to ${SUPPORT_EMAIL} with the subject "SECURITY". Security reports are treated with critical priority and handled confidentially. We ask that you do not publicly disclose the finding until we have fixed it.`,
      },
      {
        q: 'Can I modify or cancel a contracted service?',
        a: 'Yes. Modification and cancellation conditions are detailed in the Terms & Conditions and in the signed commercial proposal. To start the process, contact us by email indicating the service and the reason.',
      },
      {
        q: 'How do I file a formal complaint?',
        a: `Every formal complaint must be sent to ${SUPPORT_EMAIL} with the subject "FORMAL COMPLAINT". We register it, confirm receipt within a maximum of 2 business days, and issue a written resolution within the following 15 business days.`,
      },
    ],
  },

  identity: {
    title: 'Business Details',
    intro:
      'Public identification information for FM AI, available for clients, users, and verification processes.',
    rows: [
      { icon: 'storefront',     label: 'Trade name',        value: 'FM AI — Intelligent Automation' },
      { icon: 'mail',           label: 'Support email',     value: SUPPORT_EMAIL },
      { icon: 'public',         label: 'Official website',  value: SITE_URL.replace('https://', '') },
      { icon: 'travel_explore', label: 'Coverage',          value: 'Latin America — 100% remote operation' },
      { icon: 'translate',      label: 'Support languages', value: 'Spanish and English' },
      { icon: 'schedule',       label: 'Business hours',    value: 'Mon to Fri, 09:00 – 18:00 (GMT-6)' },
    ],
  },

  legal: {
    title: 'Legal Documents',
    subtitle:
      'Before hiring or using our services, we recommend reviewing the following documents.',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
  },

  cta: {
    title: "Didn't find what you were looking for?",
    subtitle: 'Write to us directly. A real person will read your message and reply.',
    button: 'Contact support',
  },

  backLink: 'Back to home',
};

export const supportContent: Record<string, SupportContent> = { es, en };
