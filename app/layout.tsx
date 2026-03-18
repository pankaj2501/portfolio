import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const instrumentSerif = localFont({
  src: './fonts/InstrumentSerif-Regular.ttf',
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pankaj Gupta — Full-stack Engineer',
  description:
    'Full-stack engineer specialising in fintech infrastructure, real-time payment systems, and distributed systems at scale.',
  openGraph: {
    title: 'Pankaj Gupta',
    description: 'Full-stack engineer. Fintech infrastructure at scale.',
    url: 'https://pankajgupta.dev',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
