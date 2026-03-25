'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const bars = [
  { label: 'Tareas manuales', before: 85, after: 12, color: '#00391c' },
  { label: 'Tiempo de respuesta', before: 72, after: 8, color: '#00522c' },
  { label: 'Errores operativos', before: 64, after: 5, color: '#c88536' },
  { label: 'Costo por proceso', before: 91, after: 18, color: '#00391c' },
];

export default function BarChartSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="w-full rounded-3xl bg-white border border-secondary-container p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <p className="text-sm font-medium text-primary/60 uppercase tracking-widest mb-1">Impacto real</p>
        <h3 className="text-xl font-bold text-primary">Antes vs. Después de FM AI</h3>
      </div>

      <div className="space-y-5">
        {bars.map((bar, i) => (
          <div key={bar.label}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-primary/80">{bar.label}</span>
              <span className="text-xs text-primary/50">
                <span className="line-through mr-1">{bar.before}%</span>
                <span className="text-ochre font-semibold">{bar.after}%</span>
              </span>
            </div>
            <div className="relative h-2.5 bg-secondary-container rounded-full overflow-hidden mb-1">
              <motion.div
                className="h-full rounded-full opacity-30"
                style={{ backgroundColor: bar.color }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${bar.before}%` } : { width: 0 }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: 'easeOut' }}
              />
            </div>
            <div className="relative h-2.5 bg-secondary-container rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: bar.color }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${bar.after}%` } : { width: 0 }}
                transition={{ duration: 0.8, delay: i * 0.12 + 0.3, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 text-xs text-primary/50">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-primary/30" />
          Antes
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-primary" />
          Con FM AI
        </span>
      </div>
    </div>
  );
}
