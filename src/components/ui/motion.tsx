'use client';

/**
 * FM AI — Motion Primitives
 *
 * All components respect prefers-reduced-motion automatically
 * via Framer Motion's built-in MotionConfig.
 *
 * Usage:
 *   <FadeUp>…</FadeUp>
 *   <SlideIn direction="left">…</SlideIn>
 *   <Stagger>
 *     <StaggerItem>…</StaggerItem>
 *   </Stagger>
 *   <AnimatedCounter to={84} suffix="%" />
 */

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  MotionProps,
} from 'framer-motion';
import { useRef, useEffect, ReactNode, ElementType } from 'react';

/* ── Shared easing ── */
const ease = [0.22, 1, 0.36, 1] as const; // custom cubic-bezier (spring-like)

/* ── Viewport config — trigger once when 15% visible ── */
const vpOnce = { once: true, margin: '-8% 0px' } as const;

/* ─────────────────────────────────────────────────────────
   FadeUp  — opacity: 0 + y: 40 → visible when in view
───────────────────────────────────────────────────────── */
interface FadeUpProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

export function FadeUp({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  ...rest
}: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, vpOnce);
  const MotionTag = motion(Tag as 'div');

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/* ─────────────────────────────────────────────────────────
   FadeIn  — plain opacity fade
───────────────────────────────────────────────────────── */
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, vpOnce);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   SlideIn  — slides in from left or right
───────────────────────────────────────────────────────── */
export function SlideIn({
  children,
  className,
  direction = 'left',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, vpOnce);
  const x = direction === 'left' ? -60 : 60;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Stagger  — wraps children with staggered entrance
───────────────────────────────────────────────────────── */
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, vpOnce);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   AnimatedCounter  — counts from 0 → value on scroll
───────────────────────────────────────────────────────── */
export function AnimatedCounter({
  to,
  suffix = '',
  prefix = '',
  duration = 1.8,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { ...vpOnce, margin: '-5% 0px' });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, motionVal, to]);

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
    });
  }, [spring, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
   HeroReveal  — staggered hero entrance (runs on mount)
───────────────────────────────────────────────────────── */
const heroContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function HeroReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={heroContainer}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export function HeroRevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={heroItem}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   ScaleOnHover  — subtle scale on hover/tap for cards
───────────────────────────────────────────────────────── */
export function ScaleOnHover({
  children,
  className,
  scale = 1.02,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale, transition: { duration: 0.25, ease: 'easeOut' } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
