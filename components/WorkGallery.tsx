'use client'

import { useState } from 'react'
import WorkCard from './WorkCard'
import collaborations from '@/data/our-work.json'

const ALL = 'All'
const categories = [ALL, ...Array.from(new Set(collaborations.map((item) => item.category)))]

export default function WorkGallery() {
  const [active, setActive] = useState(ALL)
  const items = active === ALL ? collaborations : collaborations.filter((item) => item.category === active)

  return (
    <>
      <h2 className="sr-only">Campaigns</h2>
      <div
        className="sticky top-16 sm:top-[72px] z-20 -mx-4 px-4 py-3 bg-background-secondary/95 border-b border-border-subtle sm:static sm:mx-0 sm:px-0 sm:bg-transparent sm:border-0"
        role="group"
        aria-label="Filter campaigns by category"
      >
        <div className="flex gap-2 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center">
          {categories.map((category) => {
            const count = category === ALL ? collaborations.length : collaborations.filter((item) => item.category === category).length
            const isActive = active === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(category)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-accent-primary bg-accent-primary text-white'
                    : 'border-border-subtle text-text-secondary hover:border-accent-primary hover:text-text-primary'
                }`}
              >
                {category}
                <span className={`ml-1.5 text-xs ${isActive ? 'text-white' : 'text-text-secondary'}`}>{count}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item, index) => (
          <WorkCard key={item.id} item={item} preload={index < 2} />
        ))}
      </div>
    </>
  )
}
