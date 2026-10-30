import { Fragment } from 'react'
import Marquee from './Marquee'

const words = ['Influencer Marketing', 'UGC Content', 'Creator Partnerships', 'Product Launches', 'Talent Management', 'Reels That Convert']

export default function TickerBand() {
  return (
    <div className="relative py-8 sm:py-10 bg-background-secondary border-y border-border-subtle overflow-hidden" aria-hidden="true">
      <Marquee duration={45}>
        {words.map((word, i) => (
          <Fragment key={word}>
            <span
              className={`font-heading text-4xl sm:text-6xl font-bold uppercase whitespace-nowrap px-6 ${
                i % 2 === 0 ? 'text-text-primary' : 'text-outline'
              }`}
            >
              {word}
            </span>
            <span className="text-accent-bright text-3xl sm:text-5xl self-center">✦</span>
          </Fragment>
        ))}
      </Marquee>
    </div>
  )
}
