'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-background-secondary border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-primary to-accent-bright rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-heading font-bold text-xl text-text-primary">
                Midnight Media
              </span>
            </div>
            <p className="text-text-secondary mb-6 max-w-sm">
              Performance-driven influencer marketing partner for premium brands. We don't chase influence, we engineer it.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card-surface border border-border-subtle flex items-center justify-center hover:border-accent-primary hover:glow-violet-sm transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Image 
                  src="/linkedin-svgrepo-com.svg" 
                  alt="LinkedIn" 
                  width={20} 
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card-surface border border-border-subtle flex items-center justify-center hover:border-accent-primary hover:glow-violet-sm transition-all duration-200"
                aria-label="Instagram"
              >
                <Image 
                  src="/instagram-svgrepo-com.svg" 
                  alt="Instagram" 
                  width={20} 
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:text-right md:ml-auto">
            <h3 className="font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#about"
                  className="text-text-secondary hover:text-accent-bright transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="text-text-secondary hover:text-accent-bright transition-colors duration-200 text-sm"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/midnightmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-bright transition-colors duration-200 text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@midnightmedia.in"
                  className="text-text-secondary hover:text-accent-bright transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            © {currentYear} Midnight Media. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-text-secondary hover:text-accent-bright transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-secondary hover:text-accent-bright transition-colors duration-200 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
