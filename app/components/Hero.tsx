'use client'

import { motion, useReducedMotion, type Transition } from 'framer-motion'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' } as Transition,
})

export default function Hero() {
  const prefMotion = useReducedMotion()

  return (
    <section className="px-6 pb-16 pt-32">
      <div className="mx-auto w-full max-w-3xl">
        <motion.h1
          {...(prefMotion ? {} : fade(0))}
          className="font-serif text-3xl leading-snug tracking-tight md:text-5xl md:leading-[1.15]"
          style={{ color: 'var(--text)' }}
        >
          Full-stack engineer who lives in the backend — building systems{' '}
          <span style={{ color: 'var(--muted)' }}>that move money at scale.</span>
        </motion.h1>

        <motion.p
          {...(prefMotion ? {} : fade(0.15))}
          className="mt-6 max-w-lg text-base leading-relaxed"
          style={{ color: 'var(--muted)' }}
        >
          5+ years across fintech and Web3 — from distributed backends
          and payment rails to the dashboards and interfaces built on top of them.
          Currently engineering at{' '}
          <span style={{ color: 'var(--text)' }}>Transak</span>.
        </motion.p>
      </div>
    </section>
  )
}
