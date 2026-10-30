import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Brands from '@/components/Brands'
import OurWork from '@/components/OurWork'
import TickerBand from '@/components/TickerBand'
import Services from '@/components/Services'
import Process from '@/components/Process'
import ChoicePath from '@/components/ChoicePath'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import FAQ from '@/components/FAQ'
import ScrollReveal from '@/components/ScrollReveal'
import { homeFaqs, pageMetadata, siteConfig } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = pageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: '/',
  absoluteTitle: true,
})

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-background-primary">
        <Navbar />
        <Hero />
        <Stats />
        <ScrollReveal>
          <Brands />
        </ScrollReveal>
        <ScrollReveal>
          <OurWork />
        </ScrollReveal>
        <TickerBand />
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <Process />
        </ScrollReveal>
        <ScrollReveal>
          <ChoicePath />
        </ScrollReveal>
        <ScrollReveal>
          <FAQ faqs={homeFaqs} title="Questions, answered." />
        </ScrollReveal>
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
