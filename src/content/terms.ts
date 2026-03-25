export type TermsContent = {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  lastUpdated: string;
  navLabel: string;
  nav: { href: string; label: string }[];
  s01: { title: string; body: string };
  s02: {
    title: string;
    intro: string;
    services: { icon: string; title: string; desc: string }[];
  };
  s03: { title: string; body: string };
  s04: { title: string; body: string };
  s05: { title: string; body: string };
  s06: { title: string; intro: string; items: string[] };
  s07_10: { n: string; id: string; title: string; text: string }[];
  s11: { title: string; subtitle: string };
  backLink: string;
};

const es: TermsContent = {
  badge: 'Información Legal',
  title: 'Términos &',
  titleHighlight: 'Condiciones',
  subtitle:
    'Este documento rige la relación entre usted y FM AI. Por favor, lea detenidamente estas disposiciones antes de utilizar nuestros servicios de automatización e IA.',
  lastUpdated: 'Última actualización: Marzo 2026',
  navLabel: 'Navegación',
  nav: [
    { href: '#aceptacion',      label: '1. Aceptación'             },
    { href: '#descripcion',     label: '2. Descripción'            },
    { href: '#registro',        label: '3. Registro'               },
    { href: '#uso',             label: '4. Uso Aceptable'          },
    { href: '#propiedad',       label: '5. Propiedad Intelectual'  },
    { href: '#responsabilidad', label: '6. Responsabilidad'        },
    { href: '#terceros',        label: '7. Terceros'               },
    { href: '#modificaciones',  label: '8. Modificaciones'         },
    { href: '#terminacion',     label: '9. Terminación'            },
    { href: '#ley',             label: '10. Ley Aplicable'         },
    { href: '#contacto',        label: '11. Contacto'              },
  ],
  s01: {
    title: 'Aceptación de los Términos',
    body: 'Al acceder y utilizar el sitio web de FM AI y cualquier subdominio o servicio relacionado, usted reconoce que ha leído, comprendido y aceptado estar sujeto a estos Términos y Condiciones en su totalidad. Si no está de acuerdo con alguna parte de estos términos, debe cesar inmediatamente el uso de nuestra plataforma.',
  },
  s02: {
    title: 'Descripción del Servicio',
    intro: 'FM AI ofrece soluciones tecnológicas avanzadas diseñadas para la optimización empresarial, que incluyen pero no se limitan a:',
    services: [
      { icon: 'settings_input_component', title: 'Automatización de Procesos', desc: 'Implementación de flujos de trabajo autónomos mediante IA.' },
      { icon: 'language',                 title: 'Desarrollo Web',             desc: 'Sitios optimizados para rendimiento y conversión.' },
      { icon: 'smart_toy',                title: 'Chatbots Inteligentes',      desc: 'Sistemas de conversación basados en LLM personalizados.' },
      { icon: 'query_stats',              title: 'Consultoría Estratégica',    desc: 'Asesoramiento técnico para la integración de IA.' },
    ],
  },
  s03: {
    title: '3. Registro y Cuenta',
    body: 'El usuario es el único responsable de mantener la confidencialidad de sus credenciales de acceso. Cualquier actividad realizada bajo su cuenta será su responsabilidad directa ante FM AI.',
  },
  s04: {
    title: '4. Uso Aceptable',
    body: 'Queda estrictamente prohibido el uso del sitio para fines ilícitos, ingeniería inversa de nuestras herramientas de IA, o cualquier acción que comprometa la integridad técnica de FM AI.',
  },
  s05: {
    title: 'Propiedad Intelectual',
    body: 'Todo el contenido, incluyendo algoritmos, interfaces de usuario, diseños visuales, logotipos y código fuente, es propiedad exclusiva de FM AI. Se prohíbe la reproducción total o parcial sin consentimiento previo y por escrito.',
  },
  s06: {
    title: 'Limitación de Responsabilidad',
    intro: 'FM AI proporciona tecnología de IA de vanguardia "tal cual". No nos hacemos responsables por:',
    items: [
      'Daños indirectos, incidentales o consecuentes.',
      'Errores derivados de datos de entrada proporcionados por el usuario.',
      'Interrupciones del servicio por mantenimiento técnico.',
    ],
  },
  s07_10: [
    { n: '7',  id: 'terceros',       title: 'Enlaces a Terceros',              text: 'No controlamos ni asumimos responsabilidad por el contenido de sitios externos enlazados desde nuestra plataforma.' },
    { n: '8',  id: 'modificaciones', title: 'Modificaciones a los Términos',   text: 'FM AI se reserva el derecho de actualizar estos términos en cualquier momento. El uso continuado implica la aceptación de los nuevos cambios.' },
    { n: '9',  id: 'terminacion',    title: 'Terminación del Servicio',        text: 'Podemos suspender o cancelar su acceso si detectamos un incumplimiento de las políticas aquí descritas.' },
    { n: '10', id: 'ley',            title: 'Ley Aplicable y Jurisdicción',    text: 'Cualquier disputa legal se regirá por las leyes locales de la jurisdicción de operación principal de FM AI.' },
  ],
  s11: {
    title: '¿Tiene dudas legales?',
    subtitle: 'Nuestro equipo jurídico está disponible para resolver cualquier consulta sobre estos términos.',
  },
  backLink: 'Volver al inicio',
};

const en: TermsContent = {
  badge: 'Legal Information',
  title: 'Terms &',
  titleHighlight: 'Conditions',
  subtitle:
    'This document governs the relationship between you and FM AI. Please read these provisions carefully before using our automation and AI services.',
  lastUpdated: 'Last updated: March 2026',
  navLabel: 'Navigation',
  nav: [
    { href: '#aceptacion',      label: '1. Acceptance'            },
    { href: '#descripcion',     label: '2. Description'           },
    { href: '#registro',        label: '3. Registration'          },
    { href: '#uso',             label: '4. Acceptable Use'        },
    { href: '#propiedad',       label: '5. Intellectual Property' },
    { href: '#responsabilidad', label: '6. Liability'             },
    { href: '#terceros',        label: '7. Third Parties'         },
    { href: '#modificaciones',  label: '8. Modifications'         },
    { href: '#terminacion',     label: '9. Termination'           },
    { href: '#ley',             label: '10. Applicable Law'       },
    { href: '#contacto',        label: '11. Contact'              },
  ],
  s01: {
    title: 'Acceptance of Terms',
    body: 'By accessing and using the FM AI website and any related subdomains or services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions in their entirety. If you do not agree with any part of these terms, you must immediately cease using our platform.',
  },
  s02: {
    title: 'Service Description',
    intro: 'FM AI offers advanced technology solutions designed for business optimization, including but not limited to:',
    services: [
      { icon: 'settings_input_component', title: 'Process Automation',   desc: 'Implementation of autonomous workflows powered by AI.' },
      { icon: 'language',                 title: 'Web Development',      desc: 'Sites optimized for performance and conversion.' },
      { icon: 'smart_toy',                title: 'Intelligent Chatbots', desc: 'Custom LLM-based conversation systems.' },
      { icon: 'query_stats',              title: 'Strategic Consulting', desc: 'Technical advisory for AI integration.' },
    ],
  },
  s03: {
    title: '3. Registration & Account',
    body: 'The user is solely responsible for maintaining the confidentiality of their access credentials. Any activity performed under your account will be your direct responsibility to FM AI.',
  },
  s04: {
    title: '4. Acceptable Use',
    body: 'Any use of the site for unlawful purposes, reverse engineering of our AI tools, or any action that compromises the technical integrity of FM AI is strictly prohibited.',
  },
  s05: {
    title: 'Intellectual Property',
    body: 'All content, including algorithms, user interfaces, visual designs, logos, and source code, is the exclusive property of FM AI. Reproduction in whole or in part without prior written consent is prohibited.',
  },
  s06: {
    title: 'Limitation of Liability',
    intro: 'FM AI provides cutting-edge AI technology "as is". We are not liable for:',
    items: [
      'Indirect, incidental, or consequential damages.',
      'Errors derived from input data provided by the user.',
      'Service interruptions due to technical maintenance.',
    ],
  },
  s07_10: [
    { n: '7',  id: 'terceros',       title: 'Third-Party Links',       text: 'We do not control or assume responsibility for the content of external sites linked from our platform.' },
    { n: '8',  id: 'modificaciones', title: 'Modifications to Terms',  text: 'FM AI reserves the right to update these terms at any time. Continued use implies acceptance of the new changes.' },
    { n: '9',  id: 'terminacion',    title: 'Termination of Service',  text: 'We may suspend or cancel your access if we detect a breach of the policies described herein.' },
    { n: '10', id: 'ley',            title: 'Applicable Law & Jurisdiction', text: 'Any legal dispute shall be governed by the local laws of the principal operating jurisdiction of FM AI.' },
  ],
  s11: {
    title: 'Have legal questions?',
    subtitle: 'Our legal team is available to answer any questions about these terms.',
  },
  backLink: 'Back to home',
};

export const termsContent: Record<string, TermsContent> = { es, en };
