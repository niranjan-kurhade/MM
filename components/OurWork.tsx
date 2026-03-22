'use client'

import { useEffect, useRef } from 'react'

const OurWork = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const brands = [
    { name: 'Mamaearth', logo: '/brands/mamaearth.jpg' },
    { name: 'Honasa', logo: '/brands/honasa.jpeg' },
    { name: 'Plum', logo: '/brands/plum.jpeg' },
    { name: 'Dot & Key', logo: '/brands/dot-and-key-logo.jpeg' },
    { name: 'Kapiva', logo: '/brands/kapiva.png' },
    { name: 'Nutrabay', logo: '/brands/nutrabay.png' },
    { name: 'Knosh Food', logo: '/brands/knoshfood.png' },
    { name: 'Brand Partner', logo: '/brands/images.png' },
  ]

  // Triple the brands array for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    let animationId: number
    let isPaused = false

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5 // Adjust speed here (lower = slower, higher = faster)
        
        // Get the width of one set of brands
        const scrollWidth = scrollContainer.scrollWidth / 3
        
        // Reset position when we've scrolled through one complete set
        if (scrollPosition >= scrollWidth) {
          scrollPosition = 0
        }
        
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
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section id="ourwork" className="py-16 md:py-24 bg-background-secondary overflow-hidden relative">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-primary rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-bright rounded-full filter blur-3xl opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Trusted by leading brands
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none" />

          {/* Scrolling Carousel */}
          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex will-change-transform">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 px-6 md:px-8 lg:px-10"
                >
                  <div className="bg-card-surface rounded-lg border border-border-subtle hover:border-accent-primary hover:glow-violet-sm transition-all duration-300 p-6 md:p-8 w-[200px] h-[120px] md:w-[240px] md:h-[140px] lg:w-[280px] lg:h-[160px] flex items-center justify-center group">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent && !parent.querySelector('.fallback-text')) {
                            const fallback = document.createElement('div')
                            fallback.className = 'fallback-text text-text-secondary font-semibold text-lg md:text-xl text-center'
                            fallback.textContent = brand.name
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWork
