'use client'

import { useEffect, useRef } from 'react'
import Button from './Button'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrameId: number
    let time = 0

    const drawGradient = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 100,
        canvas.height * 0.5 + Math.cos(time * 0.8) * 100,
        0,
        canvas.width * 0.3,
        canvas.height * 0.5,
        canvas.width * 0.4
      )
      
      gradient.addColorStop(0, 'rgba(124, 58, 237, 0.15)')
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.08)')
      gradient.addColorStop(1, 'rgba(5, 5, 5, 0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.005
      animationFrameId = requestAnimationFrame(drawGradient)
    }

    drawGradient()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: '#050505' }}
      />

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="space-y-6 sm:space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full bg-card-surface border border-accent-primary/30 text-sm text-text-secondary">
              <span className="inline-block w-2 h-2 bg-accent-primary rounded-full animate-glow-pulse mr-2"></span>
              Performance-Driven Influencer Marketing
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-text-primary">Influence.</span>
            <span className="block bg-gradient-to-r from-accent-primary via-accent-bright to-accent-primary bg-clip-text text-transparent">
              Engineered for Impact.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Midnight Media builds high-performance influencer campaigns that drive measurable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 px-4">
            <a href="https://forms.gle/demo-brand-consultation" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:min-w-[220px]">
                Book a Strategy Call
              </Button>
            </a>
            <a href="#process" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:min-w-[220px]">
                Learn Our Process
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
