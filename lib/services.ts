export type ServicePage = {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  benefits: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}

export const servicePages: ServicePage[] = [
  {
    slug: 'influencer-marketing-agency',
    name: 'Influencer Marketing',
    metaTitle: 'Influencer Marketing Agency in India',
    metaDescription:
      'Performance-driven influencer marketing agency in India. Strategy, vetted creators, campaign management and reporting for D2C and consumer brands.',
    h1: 'Influencer Marketing Agency in India',
    intro:
      'We plan, launch and manage influencer campaigns end to end, matching your brand with vetted Instagram creators whose audiences actually buy.',
    benefits: [
      { title: 'Campaign strategy', description: 'Goals, audience, platforms and budget mapped before a single creator is contacted.' },
      { title: 'Vetted creators', description: 'Every influencer checked for real engagement, audience fit and brand safety.' },
      { title: 'End-to-end management', description: 'Briefs, negotiation, approvals, posting schedules and payments handled for you.' },
      { title: 'Measurable results', description: 'Clear reporting on reach, engagement, clicks and conversions after every campaign.' },
    ],
    faqs: [
      {
        question: 'Why hire an influencer marketing agency instead of doing it in-house?',
        answer:
          'An agency brings an existing creator network, negotiation experience and campaign processes. That saves your team time, avoids fake-follower creators and gets campaigns live faster.',
      },
      {
        question: 'Do you work with micro influencers?',
        answer:
          'Yes. Micro and mid-tier influencers often deliver the highest engagement and trust. We build creator mixes based on your goals, from nano and micro creators to larger names.',
      },
      {
        question: 'Which platforms do you run influencer campaigns on?',
        answer: 'Our campaigns are primarily on Instagram Reels, with support for YouTube and other short-form video platforms.',
      },
    ],
  },
  {
    slug: 'ugc-creator-agency',
    name: 'UGC Creators',
    metaTitle: 'UGC Creator Agency in India',
    metaDescription:
      'UGC creator agency in India. Get authentic user-generated content videos from vetted creators, ready for Instagram, Meta ads and your website.',
    h1: 'UGC Creator Agency',
    intro:
      'Authentic user-generated content from vetted creators, scripted for performance and delivered ready to run as ads, reels and product page content.',
    benefits: [
      { title: 'Vetted UGC creators', description: 'Creators selected for on-camera presence, niche fit and production quality.' },
      { title: 'Ad-ready content', description: 'Hooks, scripts and formats built for Meta and Instagram performance ads.' },
      { title: 'Creative testing', description: 'Multiple hooks and variations so you can find winning ads faster.' },
      { title: 'Usage rights handled', description: 'Clear content usage rights so you can run UGC across paid and organic channels.' },
    ],
    faqs: [
      {
        question: 'What is UGC content?',
        answer:
          'User-generated content (UGC) is photo or video content made by real creators in a natural, relatable style. Brands use it in ads, social posts and product pages because it feels more trustworthy than polished brand content.',
      },
      {
        question: 'What is the difference between UGC creators and influencers?',
        answer:
          'Influencers post content to their own audience. UGC creators make content for your brand to post and run as ads, so the value is the content itself rather than their follower count.',
      },
      {
        question: 'Can UGC videos be used for paid ads?',
        answer: 'Yes. We brief UGC creators specifically for paid performance and include the usage rights you need to run the content as ads.',
      },
    ],
  },
  {
    slug: 'instagram-influencer-marketing',
    name: 'Instagram Influencer Marketing',
    metaTitle: 'Instagram Influencer Marketing Agency',
    metaDescription:
      'Instagram influencer marketing that drives growth. Reel collaborations, product seeding and launch campaigns with vetted Instagram creators in India.',
    h1: 'Instagram Influencer Marketing',
    intro:
      'Reels collaborations, product seeding and launch campaigns with Instagram creators who fit your brand and reach the customers you want.',
    benefits: [
      { title: 'Reel collaborations', description: 'Short-form video built around trends, hooks and your product story.' },
      { title: 'Product launches', description: 'Coordinated creator drops that build buzz around a launch window.' },
      { title: 'Seeding & unboxing', description: 'Get your product into the hands of the right creators at scale.' },
      { title: 'Collab posts & whitelisting', description: 'Extend reach with collab posts and creator-led paid amplification.' },
    ],
    faqs: [
      {
        question: 'How much does Instagram influencer marketing cost?',
        answer:
          'Costs depend on creator size, deliverables, usage rights and campaign scale. Book a strategy call and we will recommend a plan that fits your budget and goals.',
      },
      {
        question: 'How do you measure Instagram campaign performance?',
        answer:
          'We track views, reach, engagement, saves, shares, link clicks and, where possible, sales through discount codes and tracked links.',
      },
    ],
  },
  {
    slug: 'influencer-talent-management',
    name: 'Talent Management',
    metaTitle: 'Influencer Talent Management Agency',
    metaDescription:
      'Influencer talent management for creators in India. Brand deals, negotiation, contracts and content strategy to grow your creator business.',
    h1: 'Influencer Talent Management',
    intro:
      'We represent creators and help them grow with better brand deals, fair contracts and a long-term content and personal brand strategy.',
    benefits: [
      { title: 'Brand deals', description: 'Access to paid collaborations with brands that match your niche.' },
      { title: 'Negotiation & contracts', description: 'Fair rates, clear deliverables and timely payments.' },
      { title: 'Content strategy', description: 'Guidance on formats, consistency and growth.' },
      { title: 'Personal brand', description: 'Position yourself for long-term partnerships, not one-off posts.' },
    ],
    faqs: [
      {
        question: 'Who can apply to join your creator roster?',
        answer:
          'Creators across beauty, fashion, food, lifestyle, fitness and wellness can apply. We look for authentic engagement and consistent content quality more than follower count alone.',
      },
      {
        question: 'How do I apply as a creator?',
        answer: 'Apply through our creator form and our team will get in touch if there is a fit.',
      },
    ],
  },
]

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug)
}
