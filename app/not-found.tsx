import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-primary flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden glow-violet-sm">
            <Image 
              src="/MM-logo.png" 
              alt="Midnight Media Logo" 
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-accent-primary via-accent-bright to-accent-primary bg-clip-text text-transparent mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="inline-flex items-center px-8 py-3 bg-accent-primary hover:bg-accent-bright text-white rounded-lg font-medium transition-all duration-200 hover:glow-violet-sm hover:scale-[1.02] w-full sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          <a 
            href="https://forms.gle/PqpHvHF5vqbTmpkn9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-card-surface hover:bg-background-secondary text-text-primary border border-border-subtle hover:border-accent-primary rounded-lg font-medium transition-all duration-200 w-full sm:w-auto"
          >
            Contact Us
          </a>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-border-subtle">
          <p className="text-text-secondary text-sm mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/#services" className="text-accent-bright hover:text-accent-primary transition-colors">
              Services
            </Link>
            <Link href="/#process" className="text-accent-bright hover:text-accent-primary transition-colors">
              Our Process
            </Link>
            <Link href="/#about" className="text-accent-bright hover:text-accent-primary transition-colors">
              About Us
            </Link>
            <Link href="/#contact" className="text-accent-bright hover:text-accent-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
