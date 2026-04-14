'use client'

import { FormEvent, useState } from 'react'
import { SocialIconRow } from '@/components/SocialLinks'
import { isFirebaseConfigured } from '@/lib/firebase'
import { submitContactMessage } from '@/lib/submitContactMessage'

const TO_EMAIL = 'chithai1999@gmail.com'

export default function ContactForm() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSuccess(false)
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setError('Please fill in name, email, and message.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setError(null)

    if (!isFirebaseConfigured()) {
      const subject = encodeURIComponent(`Portfolio: message from ${name}`)
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
      window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`
      return
    }

    setSubmitting(true)
    try {
      await submitContactMessage({ name, email, message })
      setSuccess(true)
      form.reset()
    } catch (err) {
      console.error(err)
      setError('Could not send your message. Try again or use the contact page.')
    } finally {
      setSubmitting(false)
    }
  }

  const firebaseReady = isFirebaseConfigured()

  return (
    <section id="contact" className="py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Send a message</h2>
          <p className="text-gray-600 mt-2">
            Prefer a full page with map and hours?{' '}
            <a href="/contact" className="font-medium text-indigo-600 hover:underline">
              Contact page
            </a>
            .
          </p>
          {!firebaseReady && (
            <p className="mt-3 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-left">
              Firebase env vars are not set—submits will open your email app instead. Add{' '}
              <code className="text-xs bg-amber-100/80 px-1 rounded">.env.local</code> from{' '}
              <code className="text-xs bg-amber-100/80 px-1 rounded">.env.local.example</code> to save
              messages in Firestore.
            </p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4" noValidate>
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Your name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              disabled={submitting}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Your email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your email"
              disabled={submitting}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your message"
              rows={5}
              disabled={submitting}
              className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60"
            />
          </div>
          {success && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2" role="status">
              Thanks—your message was sent.
            </p>
          )}
          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60"
          >
            {submitting ? 'Sending…' : firebaseReady ? 'Send message' : 'Open email client'}
          </button>
          <p className="text-center text-xs text-gray-500">
            {firebaseReady
              ? 'Messages are stored in Firebase Firestore.'
              : 'Opens your mail app with this message until Firebase is configured.'}
          </p>
        </form>
        <div className="mt-12 border-t border-gray-100 pt-10">
          <p className="text-center text-sm font-medium text-gray-700">Or find me online</p>
          <SocialIconRow size="md" className="mt-4" gapClass="gap-6" />
        </div>
      </div>
    </section>
  )
}
