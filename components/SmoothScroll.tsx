'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Offset in-page anchors so the fixed navbar doesn't cover section headings.
    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -80 } })
    return () => lenis.destroy()
  }, [])

  return null
}
