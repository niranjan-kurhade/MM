'use client'

interface ValueProps {
  icon: string
  title: string
  description: string
}

function ValueCard({ icon, title, description }: ValueProps) {
  return (
    <div className="text-center group cursor-default">
      <div className="text-4xl mb-4 transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div className="text-xl font-bold text-text-primary mb-2 transition-all duration-300 group-hover:text-accent-bright">
        {title}
      </div>
      <div className="text-sm text-text-secondary">
        {description}
      </div>
    </div>
  )
}

export default function AuthorityStrip() {
  return (
    <section className="py-20 border-t border-b border-border-subtle bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Why <span className="text-accent-bright">Midnight Media</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We're building the future of influencer marketing with a performance-first approach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <ValueCard 
            icon="🎯" 
            title="Strategic Focus" 
            description="Data-driven campaigns built for measurable growth" 
          />
          <ValueCard 
            icon="🤝" 
            title="Authentic Partnerships" 
            description="Genuine connections between brands and creators" 
          />
          <ValueCard 
            icon="⚡" 
            title="Performance Driven" 
            description="Every campaign optimized for maximum ROI" 
          />
          <ValueCard 
            icon="🌟" 
            title="Premium Quality" 
            description="Elite-level execution for ambitious brands" 
          />
        </div>
      </div>
    </section>
  )
}
