import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
