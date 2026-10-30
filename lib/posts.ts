export type Post = {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingMinutes: number
  relatedService: string
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
}

export const posts: Post[] = [
  {
    slug: 'ugc-vs-influencer-marketing',
    title: 'UGC vs Influencer Marketing: Which Is Right for Your Brand?',
    description:
      'UGC creators and influencers both make creator content, but they solve different problems. Here is how to choose, and when to use both.',
    publishedAt: '2026-10-30',
    readingMinutes: 5,
    relatedService: 'ugc-creator-agency',
    sections: [
      {
        heading: 'The short answer',
        paragraphs: [
          'Influencer marketing buys you attention from an existing audience. UGC (user-generated content) buys you content: authentic videos your brand owns and runs on its own channels and ads.',
          'Most growing D2C brands in India end up using both. Influencers create awareness and social proof, while UGC fuels the paid ads that turn that awareness into sales.',
        ],
      },
      {
        heading: 'What is influencer marketing?',
        paragraphs: [
          'Influencer marketing means partnering with creators who post about your brand to their own followers. You pay for reach, credibility and the creator’s relationship with their audience.',
        ],
        bullets: [
          'Best for: launches, awareness, building trust in a new category',
          'You pay for: the creator’s audience and their content',
          'Success looks like: reach, engagement, saves, shares and tracked sales',
        ],
      },
      {
        heading: 'What is UGC?',
        paragraphs: [
          'UGC creators make natural, phone-shot style videos for your brand to publish. They do not need a big following, because the value is the content itself, not their audience.',
        ],
        bullets: [
          'Best for: Meta and Instagram ads, product pages, organic brand posts',
          'You pay for: the content and its usage rights',
          'Success looks like: lower cost per purchase and higher ad click-through rates',
        ],
      },
      {
        heading: 'How to decide',
        paragraphs: [
          'If you need people to discover you, start with influencers. If you already run paid ads and your creatives are getting tired, start with UGC. If you are launching a product, combine both: influencers to create the moment, UGC to keep ads fresh afterwards.',
          'Whichever you choose, vet creators carefully. Real engagement, audience fit and on-camera quality matter far more than follower count.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-choose-influencer-marketing-agency-india',
    title: 'How to Choose an Influencer Marketing Agency in India',
    description:
      'A practical checklist for brands hiring an influencer marketing agency in India: what to ask, what to look for and the red flags to avoid.',
    publishedAt: '2026-10-30',
    readingMinutes: 6,
    relatedService: 'influencer-marketing-agency',
    sections: [
      {
        heading: 'Start with your goal',
        paragraphs: [
          'Before you compare agencies, decide what success means: awareness for a launch, content for ads, or measurable sales. The right agency for a product launch is not always the right one for always-on performance.',
        ],
      },
      {
        heading: 'Seven things to check',
        paragraphs: ['Use this checklist on every agency call:'],
        bullets: [
          'Real campaign examples in your category, with links you can open',
          'How they vet creators for fake followers and engagement pods',
          'Whether they work with micro influencers as well as big names',
          'Who owns creator negotiation, contracts, approvals and payments',
          'What they report on after the campaign, and how often',
          'Whether UGC usage rights are included for your ads',
          'How quickly they can go from brief to live content',
        ],
      },
      {
        heading: 'Red flags',
        paragraphs: [
          'Be careful with agencies that only talk about follower counts, cannot show live examples, promise guaranteed virality, or will not tell you which creators they plan to use before you pay.',
        ],
      },
      {
        heading: 'What a good first call looks like',
        paragraphs: [
          'A strong agency asks about your customer, margins and past marketing before pitching creators. You should leave the call with a rough campaign plan, the type of creators they would use and a clear idea of what you will measure.',
        ],
      },
    ],
  },
  {
    slug: 'micro-influencers-vs-macro-influencers',
    title: 'Micro vs Macro Influencers: Which Should Your Brand Work With?',
    description:
      'Micro influencers bring trust and engagement, macro influencers bring scale. Learn when to use each in your Instagram influencer marketing.',
    publishedAt: '2026-10-30',
    readingMinutes: 4,
    relatedService: 'instagram-influencer-marketing',
    sections: [
      {
        heading: 'The difference in one line',
        paragraphs: [
          'Micro influencers have smaller, tighter communities that trust them. Macro influencers have large audiences that give you reach fast.',
        ],
      },
      {
        heading: 'When micro influencers win',
        paragraphs: [
          'Micro creators usually have closer relationships with their followers, so recommendations feel personal. They are great for niche products, regional targeting and building lots of social proof across many voices.',
        ],
        bullets: ['Niche categories like skincare, fitness or food', 'City or region-specific campaigns', 'Budgets that need many creators instead of one'],
      },
      {
        heading: 'When macro influencers win',
        paragraphs: [
          'Larger creators make sense when you need a big moment: a launch, a rebrand or a festive campaign where reach in a short window matters most.',
        ],
      },
      {
        heading: 'The best answer: a creator mix',
        paragraphs: [
          'Most effective Instagram campaigns combine one or two larger creators for reach with a wider group of micro creators for trust and volume. The mix depends on your goal, budget and category.',
        ],
      },
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}
