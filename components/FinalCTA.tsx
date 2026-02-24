'use client'

import Button from './Button'

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-background-primary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary mb-6">
          Ready to <span className="bg-gradient-to-r from-accent-primary via-accent-bright to-accent-primary bg-clip-text text-transparent">Dominate the Feed</span>?
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto px-4">
          Let's build campaigns that don't just create buzz—they create business impact.
        </p>

        {/* CTA Button */}
        <a href="https://forms.gle/demo-brand-consultation" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block">
          <Button 
            variant="primary" 
            size="lg" 
            className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 glow-violet w-full"
          >
            Book Your Strategy Call
          </Button>
        </a>

        {/* Additional Info */}
        <p className="text-text-secondary mt-8 text-sm">
          For brands and creators ready to elevate their influence game
        </p>
      </div>
    </section>
  )
}
