import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { SocialIconRow } from '@/components/SocialLinks'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.22),transparent)]"
        aria-hidden
      />
      <div className="relative flex flex-col items-center justify-center text-center px-4 pt-24 pb-28 sm:pt-28 sm:pb-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">
          Portfolio
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
          Hello, I’m Trần Chí Thái
        </h1>
        <p className="mt-5 max-w-xl text-lg text-gray-600 leading-relaxed">
          Software engineer building modern web experiences—shipping thoughtful UI, solid
          architecture, and clean code.
        </p>
        <p className="mt-2 text-base text-gray-500">Engineer • Gamer • Creator</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View my work
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-indigo-300 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Get in touch
          </Link>
        </div>
        <div className="mt-12 w-full max-w-md">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Social</p>
          <SocialIconRow size="md" className="mt-3 text-gray-500" gapClass="gap-6" />
        </div>
      </div>
    </section>
  )
}
