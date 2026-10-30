import type { CSSProperties, ReactNode } from 'react'

type MarqueeProps = {
  children: ReactNode
  duration?: number
  reverse?: boolean
  vertical?: boolean
  className?: string
}

export default function Marquee({ children, duration = 40, reverse = false, vertical = false, className = '' }: MarqueeProps) {
  const half = vertical ? 'flex flex-col' : 'flex'
  return (
    <div className={`marquee-pause overflow-hidden ${vertical ? 'mask-fade-y' : 'mask-fade-x'} ${className}`}>
      <div
        className={`${vertical ? 'marquee-y-track' : 'marquee-track'} ${reverse ? 'marquee-track-reverse' : ''}`}
        style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
      >
        <div className={half}>{children}</div>
        {/* Visual duplicate for a seamless loop; inert keeps it out of tab order and screen readers */}
        <div className={half} aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  )
}
