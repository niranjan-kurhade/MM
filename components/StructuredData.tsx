export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Midnight Media',
    alternateName: 'Midnight Media Agency',
    url: 'https://midnightmedia.in',
    logo: 'https://midnightmedia.in/MM-logo.png',
    description: 'Performance-driven influencer marketing agency specializing in high-performance campaigns, creator partnerships, and measurable growth for premium brands.',
    sameAs: [
      'https://www.linkedin.com/company/midnightmedia', // Replace with actual URLs
      'https://twitter.com/midnightmedia',
      'https://www.instagram.com/midnightmedia',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      // Add specific address when available
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Midnight Media',
    image: 'https://midnightmedia.in/MM-logo.png',
    '@id': 'https://midnightmedia.in',
    url: 'https://midnightmedia.in',
    telephone: '', // Add your phone number
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Add coordinates when available
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '42' // Update with real data
    }
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Influencer Marketing Agency',
    provider: {
      '@type': 'Organization',
      name: 'Midnight Media',
      url: 'https://midnightmedia.in'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Influencer Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Influencer Campaign Strategy',
            description: 'Data-driven campaign architecture designed for maximum ROI and brand alignment.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Creator Discovery & Vetting',
            description: 'Deep-dive research to find authentic voices that move the needle for your brand.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Paid UGC & Performance Ads',
            description: 'Convert creator content into high-performing paid media assets.'
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
