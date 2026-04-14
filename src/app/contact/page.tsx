import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SocialLinksList } from '@/components/SocialLinks'

export const metadata = {
  title: 'Contact',
  description: 'Phone, email, location, map, and social links.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Contact</h1>
          <p className="mt-2 text-gray-600">Reach out by phone, email, or social—whatever works for you.</p>

          <section className="mt-12 space-y-4 text-lg text-gray-700">
            <p>
              <strong className="text-gray-900">Phone:</strong>{' '}
              <a href="tel:+84945577133" className="text-indigo-600 hover:underline">
                +84 945 577 133
              </a>
            </p>
            <p>
              <strong className="text-gray-900">Email:</strong>{' '}
              <a href="mailto:chithai1999@gmail.com" className="text-indigo-600 hover:underline">
                chithai1999@gmail.com
              </a>
            </p>
            <p>
              <strong className="text-gray-900">Website:</strong>{' '}
              <a
                href="https://www.tctsoftwares.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                tctsoftwares.com
              </a>
            </p>
            <p>
              <strong className="text-gray-900">Address:</strong> 330 tổ 1, Khu Phố Dòng Sỏi, Thành Phố Bến
              Cát, Bình Dương, Việt Nam
            </p>
            <p>
              <strong className="text-gray-900">Business hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM
            </p>
          </section>

          <section className="mt-10 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.6289783730444!2d106.53430059802021!3d11.09414242120059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174cd3cd7292143%3A0x349707358a762795!2sTCT%20Softwares!5e0!3m2!1svi!2s!4v1749265050520!5m2!1svi!2s"
              width="100%"
              height="300"
              className="iframe-borderless min-h-[280px] w-full"
              allowFullScreen
              title="TCT Softwares location"
            />
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900">Social networks</h2>
            <p className="mt-2 text-sm text-gray-600">
              GitHub, LinkedIn, X, YouTube, Facebook, and the TCT Softwares site—all in one place.
            </p>
            <div className="mt-6">
              <SocialLinksList />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
