import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WorkCard from '@/components/WorkCard'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import JsonLd from '@/components/JsonLd'
import collaborations from '@/data/our-work.json'
import { getServicePage, servicePages } from '@/lib/services'
import { organizationId, pageMetadata, siteConfig } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps<'/services/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const service = getServicePage(slug)
  if (!service) return {}

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  })
}

export default async function ServicePage({ params }: PageProps<'/services/[slug]'>) {
  const { slug } = await params
  const service = getServicePage(slug)
  if (!service) notFound()

  const url = `${siteConfig.url}/services/${service.slug}`
  const isCreatorPage = service.slug === 'influencer-talent-management'
  const otherServices = servicePages.filter((s) => s.slug !== service.slug)

  return (
    <main className="min-h-screen bg-background-primary">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': `${url}#service`,
              name: service.h1,
              serviceType: service.name,
              description: service.metaDescription,
              url,
              provider: { '@id': organizationId, '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
              areaServed: { '@type': 'Country', name: 'India' },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
                { '@type': 'ListItem', position: 2, name: service.name, item: url },
              ],
            },
          ],
        }}
      />
      <Navbar />

      <section className="relative pt-36 pb-16 sm:pb-20 gradient-mesh">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
            <Link href="/" className="hover:text-text-primary">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-text-primary">{service.name}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary">{service.h1}</h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">{service.intro}</p>
          <a
            href={isCreatorPage ? siteConfig.creatorFormUrl : siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent-primary px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:bg-accent-bright hover:glow-violet-sm"
          >
            {isCreatorPage ? 'Apply as a Creator' : 'Book a Strategy Call'}
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">What you get</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl border border-border-subtle bg-card-surface p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">Recent campaigns</h2>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {collaborations.slice(0, 4).map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/work" className="text-sm font-semibold text-accent-bright hover:underline">
              View all campaigns
            </Link>
          </div>
        </div>
      </section>

      <FAQ faqs={service.faqs} title={`${service.name} FAQs`} />

      <section className="py-12 bg-background-secondary border-t border-border-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-semibold text-text-primary mb-6">Explore more services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border border-border-subtle px-5 py-2 text-sm text-text-secondary transition-colors hover:border-accent-primary hover:text-text-primary"
              >
                {s.h1}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
