'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/lib/site'

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1800, 1)
          setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="about" className="relative py-16 sm:py-20 bg-background-primary border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-sm font-body font-medium uppercase tracking-[0.3em] text-text-secondary mb-12">
          Results, not promises
        </h2>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:divide-x divide-border-subtle">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse items-center text-center px-4">
              <dt className="mt-3 text-sm sm:text-base text-text-secondary">{stat.label}</dt>
              <dd className="font-heading text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-accent-bright bg-clip-text text-transparent">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
