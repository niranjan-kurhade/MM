'use client'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
}

function TestimonialCard({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="bg-card-surface border border-border-subtle rounded-xl p-8 hover:border-accent-primary transition-all duration-300 hover:-translate-y-1 hover:glow-violet-sm">
      {/* Quote Icon */}
      <div className="text-accent-primary text-5xl mb-4 opacity-50">"</div>
      
      {/* Quote */}
      <p className="text-text-primary text-lg mb-6 leading-relaxed">
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-bright flex items-center justify-center text-white font-bold text-lg mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <div className="text-text-primary font-semibold">{author}</div>
          <div className="text-text-secondary text-sm">
            {role} at {company}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const testimonials: TestimonialProps[] = [
    {
      quote: "The strategic approach to influencer marketing that Midnight Media brings is exactly what modern brands need—performance-driven and authentic.",
      author: "Marketing Executive",
      role: "Industry Leader",
      company: "Premium Beauty Brand",
    },
    {
      quote: "Finally, an agency that understands both sides of the equation—creating value for brands while respecting and elevating creators.",
      author: "Content Creator",
      role: "Influencer",
      company: "Lifestyle & Wellness",
    },
    {
      quote: "The Midnight Method provides a clear framework that connects brand objectives with authentic creator partnerships. It's the future of influencer marketing.",
      author: "Digital Strategist",
      role: "Marketing Consultant",
      company: "Tech Industry",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What The <span className="text-accent-bright">Industry</span> Needs
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Built on insights from brands, creators, and marketing leaders who understand the future of influence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
