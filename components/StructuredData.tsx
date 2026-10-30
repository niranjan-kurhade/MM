import JsonLd from './JsonLd'
import { organizationId, siteConfig } from '@/lib/site'
import { servicePages } from '@/lib/services'

export default function StructuredData() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': ['Organization', 'ProfessionalService'],
            '@id': organizationId,
            name: siteConfig.name,
            alternateName: ['Midnight Media Agency', 'MidnightMedia'],
            url: siteConfig.url,
            logo: `${siteConfig.url}${siteConfig.logo}`,
            image: `${siteConfig.url}${siteConfig.logo}`,
            description: siteConfig.description,
            email: siteConfig.email,
            areaServed: { '@type': 'Country', name: 'India' },
            knowsAbout: [
              'Influencer marketing',
              'UGC content creation',
              'Instagram marketing',
              'Creator partnerships',
              'Influencer talent management',
              'Social media marketing',
            ],
            sameAs: [siteConfig.socials.instagram, siteConfig.socials.linkedin],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              email: siteConfig.email,
              areaServed: 'IN',
              availableLanguage: 'English',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Influencer Marketing & UGC Services',
              itemListElement: servicePages.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.h1,
                  description: service.metaDescription,
                  url: `${siteConfig.url}/services/${service.slug}`,
                },
              })),
            },
          },
          {
            '@type': 'WebSite',
            '@id': `${siteConfig.url}/#website`,
            url: siteConfig.url,
            name: siteConfig.name,
            description: siteConfig.description,
            publisher: { '@id': organizationId },
            inLanguage: 'en-IN',
          },
        ],
      }}
    />
  )
}
