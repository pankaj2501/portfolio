'use client'

import { motion, useReducedMotion, type Transition } from 'framer-motion'

interface Highlight {
  title: string
  context: string
  description: string
  metric?: string
  stack: string[]
  link?: { label: string; href: string }
}

const HIGHLIGHTS: Highlight[] = [
  {
    title: 'White-label API Platform',
    context: 'Transak · 2024–Present',
    description:
      'Designed the full API suite — onboarding, KYC, on/off-ramp, partner management — powering crypto purchases for MetaMask, Ledger, and 450+ Web3 partners. Led the monolith-to-microservices migration and built the centralised auth service across all products.',
    metric: '$240M+ gross transaction volume',
    stack: ['TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'GCP'],
    link: { label: 'API Docs', href: 'https://docs.transak.com/docs/transak-whitelabel-api-solution' },
  },
  {
    title: 'Partner Dashboard',
    context: 'Transak · 2024',
    description:
      'Built the self-serve integration hub where Web3 companies onboard and manage their crypto payment infrastructure — end to end, backend APIs through to the React frontend.',
    metric: '450+ partners · MetaMask, Ledger',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: { label: 'View Dashboard', href: 'https://dashboard.transak.com' },
  },
  {
    title: 'NFT Checkout',
    context: 'Transak · 2024',
    description:
      'Built the fiat-to-NFT purchase flow — users buy NFTs directly with credit cards, Apple Pay, or Google Pay. Supports 136+ tokens across 64+ countries with bulk minting.',
    metric: '95% approval rate · 64+ countries',
    stack: ['TypeScript', 'Node.js', 'NestJS'],
    link: { label: 'NFT Checkout', href: 'https://transak.com/nft-checkout' },
  },
  {
    title: 'AI-powered Compliance Automation',
    context: 'Transak · 2024',
    description:
      'Built LLM-powered workflow automations that review AML cases for the ops team. Took a manual process that required analysts to cross-reference multiple data sources and compressed it into an assisted review flow.',
    metric: '30 min → 4 min review time',
    stack: ['LLM APIs', 'Node.js', 'TypeScript'],
  },
  {
    title: 'Real-time Payments & Crypto Settlement',
    context: 'Juno Finance · 2022–2024',
    description:
      'Built instant card-to-card transfers with atomic consistency on distributed state. Shipped Spend Crypto via Card — real-time crypto-to-fiat settlement through ZeroHash that became a major revenue driver. Also implemented Brazil\'s PIX payment system — wallet creation, recovery, and state management with MongoDB schema optimised for high-throughput.',
    metric: '$3–4M daily volume · 30%+ of annual revenue',
    stack: ['Node.js', 'MongoDB', 'Redis', 'ZeroHash', 'TypeScript'],
    link: { label: 'Juno Finance', href: 'https://juno.finance/' },
  },
]

const TIMELINE = [
  { company: 'Transak', role: 'Software Development Engineer', period: '2024 — Present' },
  { company: 'Juno Finance', role: 'SDE II', period: '2022 — 2024' },
  { company: 'OpenText', role: 'Associate Software Engineer', period: '2021 — 2022' },
]

const vp = { once: true, margin: '-40px' as const }

export default function Work() {
  const prefMotion = useReducedMotion()
  const fadeIn = (delay = 0) =>
    prefMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: 'easeOut' as const } as Transition,
          viewport: vp,
        }

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        {/* Section heading */}
        <motion.p
          {...fadeIn()}
          className="text-sm"
          style={{ color: 'var(--accent)' }}
        >
          Selected work
        </motion.p>
        <motion.h2
          {...fadeIn(0.05)}
          className="mt-2 font-serif text-3xl tracking-tight md:text-4xl"
          style={{ color: 'var(--text)' }}
        >
          Things I&apos;ve built that I&apos;m proud of.
        </motion.h2>

        {/* Highlights */}
        <div className="mt-16 space-y-16">
          {HIGHLIGHTS.map((item) => (
            <motion.article key={item.title} {...fadeIn(0)}>
              <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
                {item.context}
              </p>
              <h3
                className="mt-2 font-serif text-xl md:text-2xl"
                style={{ color: 'var(--text)' }}
              >
                {item.title}
              </h3>
              {item.metric && (
                <p className="mt-2 text-sm" style={{ color: 'var(--accent)' }}>
                  {item.metric}
                </p>
              )}
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: 'var(--muted)' }}
              >
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                {item.stack.map((tech) => (
                  <span key={tech} className="font-mono text-xs" style={{ color: 'var(--muted)', opacity: 0.5 }}>
                    {tech}
                  </span>
                ))}
                {item.link && (
                  <>
                    <span className="font-mono text-xs" style={{ color: 'var(--muted)', opacity: 0.3 }}>·</span>
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-mono text-xs"
                      style={{ color: 'var(--accent)' }}
                    >
                      {item.link.label}
                    </a>
                  </>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20 border-t pt-10" style={{ borderColor: 'var(--muted)', borderTopWidth: '0.5px' }}>
          <motion.p
            {...fadeIn()}
            className="text-sm"
            style={{ color: 'var(--accent)' }}
          >
            Experience
          </motion.p>
          <motion.div {...fadeIn(0.05)} className="mt-5 space-y-3">
            {TIMELINE.map((entry) => (
              <div key={entry.company} className="flex flex-wrap items-baseline justify-between gap-x-4">
                <div>
                  <span className="text-sm" style={{ color: 'var(--text)' }}>
                    {entry.company}
                  </span>
                  <span className="ml-2 text-sm" style={{ color: 'var(--muted)' }}>
                    {entry.role}
                  </span>
                </div>
                <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                  {entry.period}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
