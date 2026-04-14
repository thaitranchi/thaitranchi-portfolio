import type { LucideIcon } from 'lucide-react'
import {
  Facebook,
  Github,
  Globe,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react'

export type SocialLinkItem = {
  label: string
  href: string
  /** Short handle for display, e.g. @bluetctgaming */
  handle?: string
  Icon: LucideIcon
}

/** Single source of truth for social profiles — update here sitewide. */
export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    label: 'Website',
    href: 'https://www.tctsoftwares.com',
    handle: 'tctsoftwares.com',
    Icon: Globe,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/thaitranchi',
    handle: '@thaitranchi',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thaichitran',
    handle: 'in/thaichitran',
    Icon: Linkedin,
  },
  {
    label: 'X',
    href: 'https://x.com/bluetctgaming',
    handle: '@bluetctgaming',
    Icon: Twitter,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@bluetctgaming',
    handle: '@bluetctgaming',
    Icon: Youtube,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/thaitranchi99/',
    handle: 'thaitranchi99',
    Icon: Facebook,
  },
]

type IconSize = 'sm' | 'md' | 'lg'

const iconSizeClass: Record<IconSize, string> = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
}

export function SocialIconRow({
  size = 'sm',
  className = '',
  gapClass = 'gap-5',
}: {
  size?: IconSize
  className?: string
  gapClass?: string
}) {
  return (
    <ul className={`flex flex-wrap items-center justify-center ${gapClass} text-gray-500 ${className}`}>
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="block transition hover:text-indigo-600"
          >
            <Icon className={iconSizeClass[size]} aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  )
}

export function SocialLinksList({ className = '' }: { className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {SOCIAL_LINKS.map(({ label, href, handle, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 transition hover:border-indigo-200 hover:bg-indigo-50/50"
          >
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block font-semibold text-gray-900">{label}</span>
              {handle && (
                <span className="block text-sm text-gray-500 group-hover:text-gray-600">{handle}</span>
              )}
              <span className="mt-1 block truncate text-xs text-indigo-600 group-hover:underline">
                {href.replace(/^https?:\/\/(www\.)?/, '')}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
