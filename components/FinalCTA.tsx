'use client'

import Button from './Button'

export default function FinalCTA() {
  return (
    <section className="py-32 bg-background-primary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
          Ready to <span className="bg-gradient-to-r from-accent-primary via-accent-bright to-accent-primary bg-clip-text text-transparent">Dominate the Feed</span>?
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto">
          Let's build campaigns that don't just create buzz—they create business impact.
        </p>

        {/* CTA Button */}
        <Button 
          variant="primary" 
          size="lg" 
          className="text-xl px-12 py-5 glow-violet"
        >
          Book Your Strategy Call
        </Button>

        {/* Additional Info */}
        <p className="text-text-secondary mt-8 text-sm">
          For brands and creators ready to elevate their influence game
        </p>
      </div>
    </section>
  )
}
