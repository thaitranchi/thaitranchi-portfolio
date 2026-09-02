import '../styles/globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import FirebaseAnalytics from '@/components/FirebaseAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Trần Chí Thái | Portfolio',
    template: '%s | Trần Chí Thái',
  },
  description: 'Software engineer — web apps, APIs, and reliable shipping. Gamer and creator.',
  openGraph: {
    title: 'Trần Chí Thái | Portfolio',
    description: 'Software engineer — web apps, APIs, and reliable shipping.',
    type: 'website',
  },
  other: {
    'google-adsense-account': 'ca-pub-7162298567727417',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4f46e5',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-white text-gray-900'}>
        <FirebaseAnalytics />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7162298567727417"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}
