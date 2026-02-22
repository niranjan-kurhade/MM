'use client'

interface ProcessStepProps {
  number: string
  title: string
  description: string
  details: string[]
}

function ProcessStep({ number, title, description, details }: ProcessStepProps) {
  return (
    <div className="relative">
      {/* Card */}
      <div className="bg-card-surface border border-border-subtle rounded-xl p-8 hover:border-accent-primary transition-all duration-300 hover:-translate-y-1 hover:glow-violet-sm">
        {/* Number Badge */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-accent-primary to-accent-bright text-white text-2xl font-bold mb-6 glow-violet-sm">
          {number}
        </div>

        <h3 className="text-2xl font-bold text-text-primary mb-3">{title}</h3>
        <p className="text-text-secondary mb-6 leading-relaxed">{description}</p>

        <ul className="space-y-3">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start text-sm text-text-secondary">
              <svg
                className="w-5 h-5 text-accent-primary mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Process() {
  const steps: ProcessStepProps[] = [
    {
      number: '01',
      title: 'Discover & Strategize',
      description: 'We dive deep into your brand DNA and market position to craft a bespoke influencer strategy.',
      details: [
        'Brand vision & objective alignment',
        'Target audience profiling',
        'Competitive landscape analysis',
        'Platform & budget strategy',
      ],
    },
    {
      number: '02',
      title: 'Match & Activate',
      description: 'Connect with hand-picked creators who authentically align with your brand values and vision.',
      details: [
        'Creator discovery & vetting',
        'Partnership negotiation',
        'Creative brief development',
        'Campaign launch coordination',
      ],
    },
    {
      number: '03',
      title: 'Measure & Amplify',
      description: 'Track performance, extract insights, and continuously optimize for maximum impact and growth.',
      details: [
        'Performance monitoring',
        'Content optimization',
        'Relationship nurturing',
        'Scale winning strategies',
      ],
    },
  ]

  return (
    <section id="process" className="py-24 bg-background-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            The <span className="text-accent-bright">Midnight Method</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our proven 3-step framework for turning influence into tangible business outcomes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary via-accent-bright to-accent-primary opacity-30" 
               style={{ top: '3.5rem' }} />
          
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-lg text-text-secondary italic max-w-2xl mx-auto">
            "We don't chase influence. We engineer it."
          </p>
        </div>
      </div>
    </section>
  )
}
