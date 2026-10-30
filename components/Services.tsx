'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/site'

interface ServiceRowProps {
  index: number
  title: string
  description: string
  href?: string
}

function ServiceRow({ index, title, description, href }: ServiceRowProps) {
  const content = (
    <>
      <span className="font-heading text-sm text-accent-bright tabular-nums pt-1.5">{String(index + 1).padStart(2, '0')}</span>
      <div className="flex-1">
        <h3 className="text-xl sm:text-2xl font-heading font-semibold text-text-primary transition-colors group-hover:text-accent-bright">
          {title}
        </h3>
        <p className="mt-1 text-text-secondary">{description}</p>
      </div>
      {href && (
        <span
          className="text-2xl text-text-secondary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-bright"
          aria-hidden="true"
        >
          ↗
        </span>
      )}
    </>
  )

  return (
    <li>
      {href ? (
        <Link href={href} className="group flex gap-6 py-6 sm:py-7">
          {content}
        </Link>
      ) : (
        <div className="group flex gap-6 py-6 sm:py-7">{content}</div>
      )}
    </li>
  )
}

export default function Services() {
  const services = [
    {
      title: 'Influencer Campaign Strategy',
      href: '/services/influencer-marketing-agency',
      description: 'Goals, audience, creators and budget mapped before anything goes live.',
    },
    {
      title: 'Creator Discovery & Vetting',
      description: 'Real audiences, real engagement. Fake followers filtered out.',
    },
    {
      title: 'UGC Content & Performance Ads',
      href: '/services/ugc-creator-agency',
      description: 'Authentic creator videos scripted to convert on Meta and Instagram.',
    },
    {
      title: 'Product Launch Amplification',
      href: '/services/instagram-influencer-marketing',
      description: 'Coordinated creator drops that make launch week impossible to miss.',
    },
    {
      title: 'Long-Term Brand Partnerships',
      description: 'Ambassador programs that compound trust over time.',
    },
    {
      title: 'Talent Management',
      href: '/services/influencer-talent-management',
      description: 'Better deals, fair contracts and growth strategy for creators.',
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-28 self-start">
            <p className="text-sm uppercase tracking-[0.3em] text-text-secondary mb-4">Influencer marketing &amp; UGC services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              From brief to buzz. <span className="text-accent-bright">All in-house.</span>
            </h2>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-primary px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-accent-bright hover:glow-violet-sm"
            >
              Discuss your project
            </a>
          </div>

          <ol className="divide-y divide-border-subtle border-y border-border-subtle">
            {services.map((service, index) => (
              <ServiceRow key={service.title} index={index} {...service} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
