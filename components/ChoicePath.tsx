'use client'

import { useState } from 'react'
import Card from './Card'

interface PathCardProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: string
  ctaText: string
  ctaLink: string
  isActive: boolean
  onHover: () => void
  onLeave: () => void
}

function PathCard({ 
  title, 
  subtitle, 
  description, 
  features, 
  icon, 
  ctaText, 
  ctaLink,
  isActive,
  onHover,
  onLeave 
}: PathCardProps) {
  return (
    <div 
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative"
    >
      <Card className={`h-full transition-all duration-300 ${isActive ? 'scale-105 border-accent-primary' : ''}`}>
        {/* Icon */}
        <div className="text-6xl mb-6 text-center">{icon}</div>
        
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-text-primary mb-2">{title}</h3>
          <p className="text-accent-bright font-medium">{subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-text-secondary mb-6 text-center leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-text-secondary">
              <svg
                className="w-5 h-5 text-accent-primary mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={ctaLink}
          target={ctaLink.startsWith('http') ? '_blank' : undefined}
          rel={ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="block w-full px-6 py-4 bg-accent-primary hover:bg-accent-bright text-white text-center font-medium rounded-lg transition-all duration-200 hover:glow-violet hover:scale-[1.02]"
        >
          {ctaText}
        </a>
      </Card>
    </div>
  )
}

export default function ChoicePath() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Choose Your <span className="text-accent-bright">Path</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Whether you're a brand looking to scale or a creator ready to monetize, we've got you covered.
          </p>
        </div>

        {/* Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PathCard
            title="For Brands"
            subtitle="Scale Your Influence"
            description="Partner with us to launch high-performance influencer campaigns that drive real business results."
            features={[
              'Strategic campaign planning',
              'Hand-picked creator matching',
              'End-to-end campaign management',
              'Performance tracking & optimization',
            ]}
            icon="🏢"
            ctaText="Book a Brand Consultation"
            ctaLink="https://forms.gle/PqpHvHF5vqbTmpkn9"
            isActive={activeCard === 'brand'}
            onHover={() => setActiveCard('brand')}
            onLeave={() => setActiveCard(null)}
          />

          <PathCard
            title="For Creators"
            subtitle="Amplify Your Impact"
            description="Join our talent roster and get access to premium brand deals, strategic guidance, and growth support."
            features={[
              'Exclusive brand partnerships',
              'Professional representation',
              'Content & growth strategy',
              'Negotiation & contract support',
            ]}
            icon="⭐"
            ctaText="Apply as a Creator"
            ctaLink="https://forms.gle/6Cjt9WxpgDa4b1vaA"
            isActive={activeCard === 'creator'}
            onHover={() => setActiveCard('creator')}
            onLeave={() => setActiveCard(null)}
          />
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-text-secondary text-sm">
            Not sure which path is right for you? <a href="#contact" className="text-accent-bright hover:underline">Let's talk</a>
          </p>
        </div>
      </div>
    </section>
  )
}
