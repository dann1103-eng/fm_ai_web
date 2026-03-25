'use client';

import Script from 'next/script';

const CALENDLY_URL =
  'https://calendly.com/danielmancia111203/sesion-descubrimiento-fm-ai';

export default function CalendlyEmbed() {
  return (
    <>
      {/* Calendly styles */}
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />

      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget w-full rounded-[2rem] overflow-hidden"
        data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=00391c`}
        style={{ minWidth: '280px', height: '660px' }}
      />

      {/* Calendly script — loaded after page is interactive */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
