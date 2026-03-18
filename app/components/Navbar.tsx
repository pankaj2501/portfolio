'use client'

import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Resume', href: '/resume.pdf', external: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="text-sm font-medium tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          Pankaj Gupta
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-text-primary"
                style={{ color: 'var(--muted)' }}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-text-primary"
                style={{ color: 'var(--muted)' }}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-4 transition-all duration-200"
            style={{
              backgroundColor: 'var(--text)',
              transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : undefined,
            }}
          />
          <span
            className="block h-px w-4 transition-all duration-200"
            style={{
              backgroundColor: 'var(--text)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-4 transition-all duration-200"
            style={{
              backgroundColor: 'var(--text)',
              transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : undefined,
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="border-t px-6 py-4 md:hidden"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'rgba(10,10,10,0.95)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm transition-colors hover:text-text-primary"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
