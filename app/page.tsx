import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AuthorityStrip from '@/components/AuthorityStrip'
import Services from '@/components/Services'
import Process from '@/components/Process'
import ChoicePath from '@/components/ChoicePath'
import Testimonials from '@/components/Testimonials'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AuthorityStrip />
      <Services />
      <Process />
      <ChoicePath />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
