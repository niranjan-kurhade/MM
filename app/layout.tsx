import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://midnightmedia.in'), 
  title: {
    default: 'Midnight Media | Performance-Driven Influencer Marketing Agency',
    template: '%s | Midnight Media'
  },
  description: 'Midnight Media engineers influence. Leading influencer marketing agency specializing in high-performance campaigns, creator partnerships, and measurable growth for premium brands.',
  keywords: [
    'Midnight Media',
    'influencer marketing agency',
    'performance marketing',
    'brand partnerships',
    'creator marketing',
    'influencer campaigns',
    'social media marketing',
    'content creator partnerships',
    'UGC content',
    'brand influencer strategy',
    'ROI-driven marketing',
    'premium brand marketing'
  ],
  authors: [{ name: 'Midnight Media' }],
  creator: 'Midnight Media',
  publisher: 'Midnight Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://midnightmedia.in',
    siteName: 'Midnight Media',
    title: 'Midnight Media | Performance-Driven Influencer Marketing Agency',
    description: 'We engineer influence. High-performance influencer campaigns that drive measurable growth for premium brands.',
    images: [
      {
        url: '/og-image.png', // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Midnight Media - Performance-Driven Influencer Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Midnight Media | Performance-Driven Influencer Marketing Agency',
    description: 'We engineer influence. High-performance influencer campaigns that drive measurable growth for premium brands.',
    images: ['/og-image.png'],
    creator: '@midnightmedia', 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="canonical" href="https://midnightmedia.in" />
        <meta name="theme-color" content="#7C3AED" />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
