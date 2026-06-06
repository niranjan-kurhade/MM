'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import collaborations from '../data/our-work.json'
import WorkCard from './WorkCard'

const OurWork = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const items = collaborations
  const duplicatedItems = [...items, ...items, ...items]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    let isPaused = false

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.4
        const scrollWidth = scrollContainer.scrollWidth / 3
        if (scrollPosition >= scrollWidth) scrollPosition = 0
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
      }
      animationId = requestAnimationFrame(animate)
    }

    const handleMouseEnter = () => {
      isPaused = true
    }

    const handleMouseLeave = () => {
      isPaused = false
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section id="ourwork" className="py-16 md:py-24 bg-background-secondary overflow-hidden relative">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent-primary rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent-bright rounded-full filter blur-3xl opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3">Our Work</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex gap-5 will-change-transform">
              {duplicatedItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex-shrink-0 w-[220px] md:w-[240px] lg:w-[260px] h-[420px]">
                  <WorkCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/work" className="inline-flex items-center text-sm font-semibold text-accent-primary hover:underline">
            View all collaborations
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurWork
