'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect border-b border-border-subtle' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden group-hover:glow-violet-sm transition-all duration-200">
              <Image 
                src="/MM-logo.png" 
                alt="Midnight Media Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading font-bold text-xl text-text-primary">
              Midnight Media
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://forms.gle/demo-brand-consultation" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
                Book a Strategy Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border-subtle pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <a href="https://forms.gle/demo-brand-consultation" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="primary" size="md" className="w-full">
                    Book a Strategy Call
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
