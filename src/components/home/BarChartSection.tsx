'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const bars = [
  { label: 'Antes', value: 100, color: 'bg-outline-variant/40', textColor: 'text-on-surface-variant' },
  { label: 'Mes 1',  value: 72,  color: 'bg-primary/30',        textColor: 'text-primary/70' },
  { label: 'Mes 2',  value: 45,  color: 'bg-primary/50',        textColor: 'text-primary/80' },
  { label: 'Mes 3',  value: 28,  color: 'bg-primary/70',        textColor: 'text-primary' },
  { label: 'Mes 6',  value: 16,  color: 'bg-ochre',             textColor: 'text-ochre' },
];

const MAX_HEIGHT = 260; // px

export default function BarChartSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div
      ref={ref}
      className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-primary/5 border border-outline-variant/20 w-full"
    >
      {/* Title */}
      <p className="text-xs font-label text-on-surface-variant/60 uppercase tracking-[0.25em] mb-2">
        Latencia Operacional
      </p>
      <p className="text-2xl font-extrabold font-headline text-on-surface mb-10">
        Reducción en 6 meses
      </p>

      {/* Chart */}
      <div className="flex items-end justify-between gap-3 h-[280px]">
        {bars.map((bar, i) => {
          const height = (bar.value / 100) * MAX_HEIGHT;
          return (
            <div key={bar.label} className="flex flex-col items-center gap-3 flex-1">
              {/* Value label */}
              <motion.span
                className={`text-sm font-bold font-headline ${bar.textColor}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                {bar.value}%
              </motion.span>

              {/* Bar */}
              <div
                className="w-full rounded-t-2xl rounded-b-lg flex items-end justify-center overflow-hidden"
                style={{ height: `${MAX_HEIGHT}px` }}
              >
                <motion.div
                  className={`w-full ${bar.color} rounded-t-2xl rounded-b-lg`}
                  initial={{ height: 0 }}
                  animate={inView ? { height } : { height: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ height: 0 }}
                />
              </div>

              {/* Label */}
              <motion.span
                className="text-xs font-label text-on-surface-variant/70 text-center"
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              >
                {bar.label}
              </motion.span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 pt-6 border-t border-outline-variant/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-ochre" />
          <span className="text-xs font-label text-on-surface-variant">Con FM AI</span>
        </div>
        <div className="text-right">
          <span className="text-2xl font-extrabold font-headline text-ochre">−84%</span>
          <p className="text-xs text-on-surface-variant/60 font-label">reducción total</p>
        </div>
      </div>
    </div>
  );
}
