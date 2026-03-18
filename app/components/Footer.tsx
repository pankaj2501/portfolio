export default function Footer() {
  return (
    <footer className="px-6 py-20" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="mx-auto max-w-3xl">
        <p className="font-serif text-2xl leading-snug md:text-3xl" style={{ color: 'var(--text)' }}>
          Let&apos;s work together.
        </p>
        <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
          Open to senior full-stack and backend roles. Hyderabad-based or remote.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          <a
            href="mailto:pankajgupta2357@gmail.com"
            className="link-underline text-sm"
            style={{ color: 'var(--accent)' }}
          >
            pankajgupta2357@gmail.com
          </a>
          <a
            href="https://github.com/pankaj2501"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm"
            style={{ color: 'var(--muted)' }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/pankaj-gupta"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm"
            style={{ color: 'var(--muted)' }}
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-14 text-xs" style={{ color: 'var(--muted)', opacity: 0.4 }}>
          Built with Next.js
        </p>
      </div>
    </footer>
  )
}
