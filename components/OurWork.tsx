import Link from 'next/link'
import collaborations from '../data/our-work.json'
import WorkCard from './WorkCard'

const featuredIds = ['15', '1', '4', '5', '2', '10', '11', '14']
const featured = featuredIds
  .map((id) => collaborations.find((item) => item.id === id))
  .filter((item) => item !== undefined)

const OurWork = () => {

  return (
    <section id="ourwork" className="py-16 md:py-24 bg-background-primary overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-text-secondary mb-4">Influencer &amp; UGC campaigns</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
              Made to stop <span className="text-accent-bright">the scroll.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 self-start md:self-auto rounded-full border border-border-subtle px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent-primary"
          >
            View all campaigns
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid gap-4 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-2">
          {featured.map((item) => (
            <div key={item.id} className="w-[65%] shrink-0 sm:w-auto snap-start">
              <WorkCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurWork
