import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Midnight Media',
  url: 'https://midnightmedia.in',
  title: 'Influencer Marketing & UGC Agency in India | Midnight Media',
  description:
    'Influencer marketing & UGC creator agency in India. We match brands with vetted Instagram creators and run performance-driven campaigns that drive sales.',
  email: 'hello@midnightmedia.in',
  bookingUrl: 'https://forms.gle/PqpHvHF5vqbTmpkn9',
  creatorFormUrl: 'https://forms.gle/6Cjt9WxpgDa4b1vaA',
  logo: '/MM-logo.png',
  stats: [
    { value: 200, suffix: 'M+', label: 'Views generated' },
    { value: 2000, suffix: '+', label: 'Creators in network' },
    { value: 50, suffix: '+', label: 'Brands partnered' },
    { value: 50, suffix: '+', label: 'Campaigns delivered' },
  ],
  socials: {
    instagram: 'https://www.instagram.com/midnightmedia.in/',
    linkedin: 'https://www.linkedin.com/company/midnight-media-in/',
  },
  keywords: [
    'influencer marketing agency',
    'influencer marketing agency in India',
    'UGC creator agency',
    'UGC agency India',
    'UGC content creators',
    'user generated content agency',
    'Instagram influencer marketing',
    'influencer agency',
    'creator marketing agency',
    'micro influencer agency',
    'influencer campaign management',
    'brand influencer collaborations',
    'D2C influencer marketing',
    'beauty influencer marketing',
    'fashion influencer marketing',
    'food influencer marketing',
    'influencer talent management',
    'social media marketing agency',
    'Midnight Media',
  ],
}

export const organizationId = `${siteConfig.url}/#organization`

// Child openGraph/twitter objects replace the parent's, so every page needs the full set.
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string
  description: string
  path: string
  absoluteTitle?: boolean
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`
  const images = [{ url: '/opengraph-image', width: 1200, height: 630, alt: siteConfig.title }]
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images,
    },
  }
}

export const homeFaqs = [
  {
    question: 'What does an influencer marketing agency do?',
    answer:
      'An influencer marketing agency plans and runs campaigns with social media creators on your behalf. Midnight Media handles strategy, creator discovery and vetting, negotiation, content briefs, approvals, posting and performance reporting, so your brand gets results without managing dozens of creators yourself.',
  },
  {
    question: 'Are you a UGC creator agency as well?',
    answer:
      'Yes. Alongside influencer collaborations, we source UGC creators who produce authentic videos and photos for your ads, website and social channels. You get usage-ready content built for paid performance on Instagram and Meta.',
  },
  {
    question: 'Which brands and industries do you work with?',
    answer:
      'We work with D2C and consumer brands across beauty, skincare, fashion, food and cafés, health and wellness, fitness and apps, including Mamaearth, Plum, Dot & Key, Dinshaw’s, OPD Cover and Vastravali Jaipur.',
  },
  {
    question: 'How do you choose the right influencers for my brand?',
    answer:
      'Every creator is vetted for audience quality, engagement authenticity, brand safety and audience fit with your target customer. We shortlist creators whose content style and followers match your goals, from micro influencers to larger creators.',
  },
  {
    question: 'How do I start a campaign with Midnight Media?',
    answer:
      'Book a free strategy call. We will understand your goals and budget, then share a campaign plan with recommended creators, deliverables and timelines.',
  },
]
