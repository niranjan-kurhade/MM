import { siteConfig } from '@/lib/site'

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-28 md:py-36 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      <div
        className="absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.35),transparent_65%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight">
          Your next big moment{' '}
          <span className="block bg-gradient-to-r from-accent-primary via-accent-bright to-fuchsia-400 bg-clip-text text-transparent">
            starts at midnight.
          </span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
          Tell us about your brand. We&apos;ll come back with creators, ideas and a plan.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-accent-primary px-10 py-5 text-lg font-medium text-white glow-violet transition-all duration-200 hover:bg-accent-bright hover:scale-[1.02]"
          >
            Book Your Strategy Call
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-text-secondary hover:text-text-primary transition-colors underline-offset-4 hover:underline"
          >
            or email {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  )
}
