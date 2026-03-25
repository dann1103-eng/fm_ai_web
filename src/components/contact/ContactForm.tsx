'use client';

import { useState, useEffect, Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

/* ─────────────────────────────────────────
   Inner form — reads ?servicio= query param
───────────────────────────────────────── */
function ContactFormInner() {
  const t = useTranslations('contact');
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: searchParams.get('servicio') ?? 'automatizacion',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Sync query param → select (in case it changes)
  useEffect(() => {
    const s = searchParams.get('servicio');
    if (s) setForm((f) => ({ ...f, service: s }));
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(
        'https://n8n-n8n.5hoafb.easypanel.host/webhook-test/formulario_fmai_web',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        },
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: 'automatizacion', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-white border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-2xl py-4 px-5 transition-all duration-300 outline-none text-on-surface placeholder:text-on-surface-variant/40 font-body text-sm';

  const labelClass = 'text-xs font-bold uppercase tracking-widest text-secondary font-label';

  return (
    <div className="bg-surface-container rounded-[2rem] shadow-sm p-8 md:p-10">
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
          </div>
          <h3 className="text-2xl font-extrabold text-primary font-headline">
            {t('success')}
          </h3>
          <button
            onClick={() => setStatus('idle')}
            className="text-sm text-on-surface-variant underline underline-offset-4 hover:text-primary transition-colors font-body"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="name">
                {t('name')} *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Daniel García"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="email">
                {t('email')} *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="hola@empresa.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Phone + Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="phone">
                {t('phone')}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+54 9 11 1234-5678"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="service">
                {t('service')}
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputClass + ' cursor-pointer appearance-none'}
              >
                <option value="automatizacion">{t('serviceOptions.automation')}</option>
                <option value="chatbot">{t('serviceOptions.chatbot')}</option>
                <option value="desarrollo">{t('serviceOptions.webdev')}</option>
                <option value="consultoria">{t('serviceOptions.consulting')}</option>
                <option value="otro">{t('serviceOptions.other')}</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="message">
              {t('message')} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Cuéntanos los detalles de tu requerimiento..."
              value={form.message}
              onChange={handleChange}
              className={inputClass + ' resize-none'}
            />
          </div>

          {status === 'error' && (
            <p className="text-error text-sm font-body bg-error-container/40 px-4 py-3 rounded-xl">
              {t('error')}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="primary-gradient mt-2 py-5 px-8 rounded-full text-white font-bold flex items-center justify-center gap-3 group transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed font-headline cursor-pointer shadow-lg shadow-primary/20"
          >
            {status === 'loading' ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <span>{t('send')}</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-lg">
                  arrow_forward
                </span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Export with Suspense boundary (required
   by Next.js for useSearchParams)
───────────────────────────────────────── */
export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="bg-surface-container rounded-[2rem] p-10 animate-pulse h-80" />
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
