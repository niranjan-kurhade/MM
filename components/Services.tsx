'use client'

import Card from './Card'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  highlights?: string[]
}

function ServiceCard({ icon, title, description, highlights }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-primary to-accent-bright flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary mb-4 flex-grow">{description}</p>
      {highlights && (
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start text-sm text-text-secondary">
              <svg
                className="w-5 h-5 text-accent-primary mr-2 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}

export default function Services() {
  const services = [
    {
      icon: '🎯',
      title: 'Influencer Campaign Strategy',
      description: 'Data-driven campaign architecture designed for maximum ROI and brand alignment.',
      highlights: [
        'Audience analysis & targeting',
        'Platform strategy optimization',
        'Budget allocation modeling',
      ],
    },
    {
      icon: '🔍',
      title: 'Creator Discovery & Vetting',
      description: 'Deep-dive research to find authentic voices that move the needle for your brand.',
      highlights: [
        'Fraud detection & authenticity scoring',
        'Audience overlap analysis',
        'Brand safety verification',
      ],
    },
    {
      icon: '🎬',
      title: 'Paid UGC & Performance Ads',
      description: 'Convert creator content into high-performing paid media assets.',
      highlights: [
        'UGC content production',
        'Multi-platform distribution',
        'Creative testing & iteration',
      ],
    },
    {
      icon: '🚀',
      title: 'Product Launch Amplification',
      description: 'Synchronized influencer activations that create cultural momentum.',
      highlights: [
        'Launch event coordination',
        'Seeding & unboxing campaigns',
        'Viral content engineering',
      ],
    },
    {
      icon: '🤝',
      title: 'Long-Term Brand Partnerships',
      description: 'Build sustained influence through strategic creator relationships.',
      highlights: [
        'Ambassador program management',
        'Content collaboration planning',
        'Relationship development',
      ],
    },
    {
      icon: '⭐',
      title: 'Talent Management',
      description: 'Comprehensive management services for creators looking to scale their influence.',
      highlights: [
        'Brand deal negotiation',
        'Content strategy & growth',
        'Personal brand development',
      ],
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            How We <span className="text-accent-bright">Engineer Influence</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive influencer marketing services designed for performance and authenticity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-6">
            Need a custom solution? We build bespoke strategies for complex challenges.
          </p>
          <a 
            href="https://forms.gle/PqpHvHF5vqbTmpkn9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-transparent border border-accent-primary text-accent-bright rounded-lg hover:bg-accent-primary hover:text-white transition-all duration-200 hover:glow-violet-sm"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
