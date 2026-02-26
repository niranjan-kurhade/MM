import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Midnight Media - Read our terms and conditions for using our influencer marketing services and website.',
  openGraph: {
    title: 'Terms of Service | Midnight Media',
    description: 'Read our terms and conditions for using Midnight Media influencer marketing services.',
    url: 'https://midnightmedia.in/terms',
    siteName: 'Midnight Media',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Midnight Media',
    description: 'Read our terms and conditions for using Midnight Media services.',
  },
  alternates: {
    canonical: 'https://midnightmedia.in/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <header className="border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Link href="/" className="inline-flex items-center space-x-2 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden group-hover:glow-violet-sm transition-all duration-200">
              <Image 
                src="/MM-logo.png" 
                alt="Midnight Media Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading font-bold text-xl text-text-primary">
              Midnight Media
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
          Terms of Service
        </h1>
        <p className="text-text-secondary mb-8">
          Last Updated: February 24, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">1. Agreement to Terms</h2>
            <p className="text-text-secondary leading-relaxed">
              By accessing or using the Midnight Media website (midnightmedia.in), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">2. Services Description</h2>
            <p className="text-text-secondary leading-relaxed">
              Midnight Media provides influencer marketing services, including but not limited to campaign strategy, creator discovery, content production, and performance analytics. The specific services provided will be outlined in individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">3. User Responsibilities</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">4. Intellectual Property</h2>
            <p className="text-text-secondary leading-relaxed">
              All content on this website, including text, graphics, logos, and software, is the property of Midnight Media or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">5. Service Agreements</h2>
            <p className="text-text-secondary leading-relaxed">
              Specific services will be governed by individual service agreements that outline scope, deliverables, timelines, and compensation. These Terms of Service supplement but do not replace individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">6. Payment Terms</h2>
            <p className="text-text-secondary leading-relaxed">
              Payment terms will be specified in individual service agreements. Generally, payments are due according to the agreed-upon schedule. Late payments may result in suspension of services and may incur additional fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">7. Confidentiality</h2>
            <p className="text-text-secondary leading-relaxed">
              Both parties agree to maintain the confidentiality of any proprietary information shared during the course of our business relationship. This obligation survives the termination of any service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">8. Limitation of Liability</h2>
            <p className="text-text-secondary leading-relaxed">
              To the maximum extent permitted by law, Midnight Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">9. Termination</h2>
            <p className="text-text-secondary leading-relaxed">
              We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason, including breach of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">10. Dispute Resolution</h2>
            <p className="text-text-secondary leading-relaxed">
              Any disputes arising from these Terms of Service or our services shall be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration in accordance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">11. Changes to Terms</h2>
            <p className="text-text-secondary leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">12. Governing Law</h2>
            <p className="text-text-secondary leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">13. Contact Information</h2>
            <p className="text-text-secondary leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our website contact form or via the contact information provided on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">14. Severability</h2>
            <p className="text-text-secondary leading-relaxed">
              If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-border-subtle">
          <Link 
            href="/"
            className="inline-flex items-center text-accent-bright hover:text-accent-primary transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
