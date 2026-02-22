'use client'

import Card from './Card'

interface CaseStudyProps {
  brand: string
  category: string
  problem: string
  strategy: string
  metrics: {
    label: string
    value: string
    color?: string
  }[]
  featured?: boolean
}

function CaseStudyCard({ brand, category, problem, strategy, metrics, featured }: CaseStudyProps) {
  return (
    <Card className={`${featured ? 'md:col-span-2 border-accent-primary' : ''}`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-text-primary">{brand}</h3>
            <span className="px-3 py-1 text-xs font-medium bg-accent-primary/20 text-accent-bright rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-6 flex-grow">
          <div>
            <h4 className="text-sm font-semibold text-accent-bright mb-2 uppercase tracking-wider">
              Challenge
            </h4>
            <p className="text-text-secondary">{problem}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-accent-bright mb-2 uppercase tracking-wider">
              Solution
            </h4>
            <p className="text-text-secondary">{strategy}</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="pt-6 border-t border-border-subtle">
          <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
            Results
          </h4>
          <div className={`grid ${metrics.length > 2 ? 'grid-cols-3' : 'grid-cols-2'} gap-4`}>
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold ${metric.color || 'text-accent-bright'} mb-1`}>
                  {metric.value}
                </div>
                <div className="text-xs text-text-secondary">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function CaseStudies() {
  const caseStudies: CaseStudyProps[] = [
    {
      brand: 'LuxeBeauty',
      category: 'Beauty & Skincare',
      problem: 'Premium skincare brand struggling to break into Gen Z market with traditional marketing.',
      strategy: 'Micro-influencer campaign targeting skincare enthusiasts with authentic before/after content and educational series.',
      metrics: [
        { label: 'Revenue', value: '₹8.2Cr', color: 'text-green-400' },
        { label: 'ROI', value: '6.4x', color: 'text-accent-bright' },
        { label: 'Conversions', value: '+340%', color: 'text-purple-400' },
      ],
      featured: true,
    },
    {
      brand: 'UrbanFit',
      category: 'Fitness Apparel',
      problem: 'New athleisure brand needed rapid awareness in competitive market.',
      strategy: 'Strategic partnerships with 50+ fitness micro-influencers and gym culture creators for authentic product integration.',
      metrics: [
        { label: 'Reach', value: '45M+', color: 'text-blue-400' },
        { label: 'Engagement', value: '8.2%', color: 'text-accent-bright' },
      ],
    },
    {
      brand: 'TechNova',
      category: 'Consumer Electronics',
      problem: 'Product launch needed to generate pre-orders and market buzz.',
      strategy: 'Tech reviewer seeding + coordinated launch day content blitz with 30+ creators.',
      metrics: [
        { label: 'Pre-orders', value: '12K+', color: 'text-yellow-400' },
        { label: 'Views', value: '25M+', color: 'text-pink-400' },
      ],
    },
    {
      brand: 'EcoHome',
      category: 'Sustainable Living',
      problem: 'Niche sustainable products needed to reach wider environmentally conscious audience.',
      strategy: 'Long-term partnerships with eco-lifestyle creators for integrated content series.',
      metrics: [
        { label: 'Revenue', value: '₹3.5Cr', color: 'text-green-400' },
        { label: 'Growth', value: '+210%', color: 'text-accent-bright' },
      ],
    },
  ]

  return (
    <section id="case-studies" className="py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            <span className="text-accent-bright">Results</span> That Speak
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We don't chase influence. We engineer it. Here's the proof.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-text-secondary mb-6 text-lg">
            Want to see your brand here?
          </p>
          <button className="px-8 py-4 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-bright transition-all duration-200 hover:glow-violet hover:scale-105">
            Let's Build Your Case Study
          </button>
        </div>
      </div>
    </section>
  )
}
