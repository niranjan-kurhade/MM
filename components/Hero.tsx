'use client'

import { useState } from 'react'
import Image from 'next/image'
import Marquee from './Marquee'
import collaborations from '@/data/our-work.json'
import { siteConfig } from '@/lib/site'

const audiences = {
  brand: {
    label: "I'm a brand",
    sub: 'We match brands with vetted Instagram influencers and UGC creators, and run campaigns that drive measurable growth.',
    cta: 'Book a Strategy Call',
    href: siteConfig.bookingUrl,
  },
  creator: {
    label: "I'm a creator",
    sub: 'Land better brand deals, fair contracts and a team that grows your creator business with you.',
    cta: 'Apply as a Creator',
    href: siteConfig.creatorFormUrl,
  },
} as const

type Audience = keyof typeof audiences

const reels = collaborations.map((item) => item.thumb)
const leftReels = reels.filter((_, i) => i % 2 === 0)
const rightReels = reels.filter((_, i) => i % 2 === 1)

function ReelStrip({ items, reverse = false, vertical = true }: { items: string[]; reverse?: boolean; vertical?: boolean }) {
  return (
    <Marquee vertical={vertical} reverse={reverse} duration={vertical ? 50 : 35} className={vertical ? 'h-full' : ''}>
      {items.map((src) => (
        <div key={src} className={vertical ? 'pb-4' : 'pr-3'}>
          <div className="relative w-28 sm:w-32 xl:w-44 aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
            <Image src={src} alt="" fill sizes="176px" className="object-cover" />
          </div>
        </div>
      ))}
    </Marquee>
  )
}

const headline = [
  { text: 'Influence.', gradient: false },
  { text: 'Engineered', gradient: true },
  { text: 'for', gradient: true },
  { text: 'Impact.', gradient: true },
]

export default function Hero() {
  const [audience, setAudience] = useState<Audience>('brand')
  const active = audiences[audience]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-primary pt-28 pb-16 lg:py-0">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_55%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Reel wall: the work is the brand */}
      <div className="absolute -inset-y-24 left-6 xl:left-16 hidden lg:block -rotate-6 opacity-80" aria-hidden="true">
        <ReelStrip items={leftReels} />
      </div>
      <div className="absolute -inset-y-24 right-6 xl:right-16 hidden lg:block rotate-6 opacity-80" aria-hidden="true">
        <ReelStrip items={rightReels} reverse />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div
          className="inline-flex p-1 rounded-full bg-card-surface border border-border-subtle animate-fade-in"
          role="group"
          aria-label="Choose who you are"
        >
          {(Object.keys(audiences) as Audience[]).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={audience === key}
              onClick={() => setAudience(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                audience === key
                  ? 'bg-accent-primary text-white shadow-[0_0_24px_rgba(124,58,237,0.55)]'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {audiences[key].label}
            </button>
          ))}
        </div>

        <h1 className="mt-8 font-bold tracking-tight">
          <span className="block text-xs sm:text-sm font-body font-medium uppercase tracking-[0.3em] text-text-secondary">
            Influencer Marketing &amp; UGC Creator Agency in India
          </span>{' '}
          <span className="mt-5 block text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[1.05]">
            {headline.map((word, i) => (
              <span key={word.text}>
                <span
                  className={`word-reveal ${
                    word.gradient
                      ? 'bg-gradient-to-r from-accent-primary via-accent-bright to-fuchsia-400 bg-clip-text text-transparent'
                      : 'text-text-primary'
                  }`}
                  style={{ animationDelay: `${150 + i * 120}ms` }}
                >
                  {word.text}
                </span>
                {i === 0 ? <br /> : ' '}
              </span>
            ))}
          </span>
        </h1>

        <p key={audience} className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in">
          {active.sub}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={active.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:min-w-[220px] inline-flex items-center justify-center rounded-lg bg-accent-primary px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:bg-accent-bright hover:glow-violet-sm hover:scale-[1.02]"
          >
            {active.cta}
          </a>
          <a
            href="#ourwork"
            className="w-full sm:w-auto sm:min-w-[220px] inline-flex items-center justify-center rounded-lg border border-border-subtle bg-card-surface px-8 py-4 text-lg font-medium text-text-primary transition-all duration-200 hover:border-accent-primary"
          >
            See Our Work
          </a>
        </div>

        <div className="mt-12 -mx-4 sm:-mx-6 lg:hidden" aria-hidden="true">
          <ReelStrip items={reels} vertical={false} />
        </div>
      </div>
    </section>
  )
}
