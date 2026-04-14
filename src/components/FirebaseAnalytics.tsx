'use client'

import { useEffect } from 'react'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getFirebaseApp, isFirebaseAnalyticsConfigured } from '@/lib/firebase'

/**
 * Initializes Google Analytics for Firebase in the browser only.
 * Safe no-op when Analytics is not supported or measurementId is missing.
 */
export default function FirebaseAnalytics() {
  useEffect(() => {
    if (!isFirebaseAnalyticsConfigured()) return

    let cancelled = false

    async function init() {
      try {
        if (!(await isSupported())) return
        if (cancelled) return
        getAnalytics(getFirebaseApp())
      } catch {
        // ignore (e.g. ad blockers, SSR edge cases)
      }
    }

    void init()
    return () => {
      cancelled = true
    }
  }, [])

  return null
}
