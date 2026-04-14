'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/', label: 'Home', match: (p: string) => p === '/' },
  { href: '/#about', label: 'About', match: () => false },
  { href: '/#projects', label: 'Projects', match: () => false },
  {
    href: '/contact',
    label: 'Contact',
    match: (p: string) => p === '/contact',
  },
] as const

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold text-indigo-700 transition hover:text-indigo-800"
        >
          Trần Chí Thái
        </Link>
        <nav className="flex items-center gap-1 sm:gap-6" aria-label="Primary">
          {nav.map(({ href, label, match }) => {
            const isActive = match(pathname)
            return (
              <Link
                key={label}
                href={href}
                className={`rounded-md px-2 py-1 text-sm font-medium transition sm:text-base ${
                  isActive ? 'text-indigo-700' : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
