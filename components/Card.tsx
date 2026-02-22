'use client'

import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-card-surface border border-border-subtle rounded-xl p-6
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary hover:glow-violet-sm' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
