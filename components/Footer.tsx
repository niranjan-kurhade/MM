'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      'Influencer Strategy',
      'Creator Discovery',
      'Performance Ads',
      'Product Launches',
      'Brand Partnerships',
      'Analytics & ROI',
    ],
    Company: [
      'About Us',
      'Case Studies',
      'Our Process',
      'Careers',
      'Contact',
    ],
    Resources: [
      'Blog',
      'Industry Reports',
      'Creator Database',
      'ROI Calculator',
    ],
  }

  return (
    <footer id="contact" className="bg-background-secondary border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-primary to-accent-bright rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-heading font-bold text-xl text-text-primary">
                Midnight Media
              </span>
            </div>
            <p className="text-text-secondary mb-6 max-w-sm">
              Performance-driven influencer marketing partner for premium brands. We don't chase influence—we engineer it.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card-surface border border-border-subtle flex items-center justify-center hover:border-accent-primary hover:glow-violet-sm transition-all duration-200"
                  aria-label={social}
                >
                  <span className="text-text-secondary text-sm">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-text-primary mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-text-secondary hover:text-accent-bright transition-colors duration-200 text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            © {currentYear} Midnight Media. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-text-secondary hover:text-accent-bright transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-text-secondary hover:text-accent-bright transition-colors duration-200 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
