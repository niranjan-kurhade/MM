import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { posts } from '@/lib/posts'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Influencer Marketing & UGC Blog',
  description: 'Guides on influencer marketing, UGC content and working with Instagram creators in India, from the Midnight Media team.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Navbar />
      <section className="pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Blog</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-text-primary">
            Influencer marketing, <span className="text-accent-bright">decoded.</span>
          </h1>

          <div className="mt-14 divide-y divide-border-subtle border-y border-border-subtle">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-10 py-8">
                  <div className="flex-1">
                    <h2 className="text-2xl font-heading font-semibold text-text-primary transition-colors group-hover:text-accent-bright">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-text-secondary">{post.description}</p>
                  </div>
                  <span className="text-sm text-text-secondary whitespace-nowrap">{post.readingMinutes} min read →</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
