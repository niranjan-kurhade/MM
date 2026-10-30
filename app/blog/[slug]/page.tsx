import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'
import JsonLd from '@/components/JsonLd'
import { getPost, posts } from '@/lib/posts'
import { getServicePage } from '@/lib/services'
import { organizationId, pageMetadata, siteConfig } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const base = pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}`, absoluteTitle: true })
  return { ...base, openGraph: { ...base.openGraph, type: 'article', publishedTime: post.publishedAt } }
}

export default async function BlogPostPage({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const url = `${siteConfig.url}/blog/${post.slug}`
  const service = getServicePage(post.relatedService)
  const published = new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <main className="min-h-screen bg-background-primary">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.description,
              datePublished: post.publishedAt,
              dateModified: post.publishedAt,
              url,
              mainEntityOfPage: url,
              image: `${siteConfig.url}/opengraph-image`,
              inLanguage: 'en-IN',
              author: { '@id': organizationId, '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
              publisher: { '@id': organizationId, '@type': 'Organization', name: siteConfig.name, logo: `${siteConfig.url}${siteConfig.logo}` },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.url}/blog` },
                { '@type': 'ListItem', position: 3, name: post.title, item: url },
              ],
            },
          ],
        }}
      />
      <Navbar />

      <article className="pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-text-secondary">
            <Link href="/" className="hover:text-text-primary">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-text-primary">Blog</Link>
          </nav>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-text-primary">{post.title}</h1>
          <p className="mt-4 text-sm text-text-secondary">
            <time dateTime={post.publishedAt}>{published}</time> · {post.readingMinutes} min read
          </p>
          <p className="mt-8 text-xl text-text-secondary leading-relaxed">{post.description}</p>

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-lg text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 space-y-2 list-disc pl-6 text-lg text-text-secondary marker:text-accent-bright">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {service && (
            <aside className="mt-16 rounded-2xl border border-border-subtle bg-card-surface p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">Work with us</p>
              <p className="mt-3 text-2xl font-heading font-semibold text-text-primary">{service.h1}</p>
              <p className="mt-2 text-text-secondary">{service.intro}</p>
              <Link href={`/services/${service.slug}`} className="mt-6 inline-block font-medium text-accent-bright hover:underline">
                Learn more →
              </Link>
            </aside>
          )}
        </div>
      </article>

      <FinalCTA />
      <Footer />
    </main>
  )
}
