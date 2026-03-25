'use client';

import { useEffect, useRef } from 'react';

const CALENDLY_URL =
  'https://calendly.com/danielmancia111203/sesion-descubrimiento-fm-ai' +
  '?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=00391c';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, string>;
      }) => void;
    };
  }
}

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- CSS (only once) ---
    const CSS_ID = 'calendly-widget-css';
    if (!document.getElementById(CSS_ID)) {
      const link = document.createElement('link');
      link.id = CSS_ID;
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    const init = () => {
      if (window.Calendly && containerRef.current) {
        // Clear any previous render inside the container
        containerRef.current.innerHTML = '';
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: containerRef.current,
        });
      }
    };

    // --- Script ---
    const SCRIPT_ID = 'calendly-widget-js';
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = init;
      document.body.appendChild(script);
    } else {
      // Script already present — just init
      init();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-[2rem] overflow-hidden bg-surface-container-low"
      style={{ minWidth: '280px', height: '660px' }}
    />
  );
}
