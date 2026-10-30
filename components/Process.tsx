interface ProcessStepProps {
  number: string
  title: string
  description: string
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="group relative pt-6 border-t border-border-subtle">
      <span className="absolute left-0 top-0 h-px w-0 bg-accent-bright transition-all duration-700 group-hover:w-full" aria-hidden="true" />
      <div className="font-heading text-7xl md:text-8xl font-bold text-outline transition-colors duration-500 group-hover:text-accent-primary/30">
        {number}
      </div>
      <h3 className="mt-4 text-2xl font-bold text-text-primary">{title}</h3>
      <p className="mt-3 text-text-secondary leading-relaxed">{description}</p>
    </div>
  )
}

export default function Process() {
  const steps: ProcessStepProps[] = [
    {
      number: '01',
      title: 'Discover & Strategize',
      description: 'Your brand, audience and goals turned into a clear creator plan.',
    },
    {
      number: '02',
      title: 'Match & Activate',
      description: 'Hand-picked creators, sharp briefs and campaigns launched on time.',
    },
    {
      number: '03',
      title: 'Measure & Amplify',
      description: 'Track what works, double down on winners, scale the results.',
    },
  ]

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-14 md:mb-20 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-text-secondary mb-4">The Midnight Method</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Three steps. <span className="text-accent-bright">Zero guesswork.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}

