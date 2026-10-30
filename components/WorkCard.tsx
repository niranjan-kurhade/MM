import Image from 'next/image'

type Collaboration = {
    id: string
    title: string
    subtitle: string
    link: string
    thumb: string
    category: string
}

type WorkCardProps = {
    item: Collaboration
    className?: string
    preload?: boolean
}

const WorkCard = ({ item, className = '', preload = false }: WorkCardProps) => {
    return (
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block ${className}`}
        >
            <div className="relative aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden border border-border-subtle bg-card-surface transition-all duration-500 group-hover:border-accent-primary/60 group-hover:shadow-[0_20px_60px_-20px_rgba(124,58,237,0.6)] group-hover:-translate-y-1">
                {item.thumb ? (
                    <Image
                        src={item.thumb}
                        alt={`${item.title} influencer marketing campaign by Midnight Media`}
                        fill
                        preload={preload}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 240px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center px-4 text-center text-sm font-medium text-text-secondary">
                        Preview unavailable
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" aria-hidden="true" />

                {/* Touch screens have no hover, so a small reel badge is always shown there */}
                <div className="absolute right-2 top-2 rounded-full bg-black/50 p-1.5 md:hidden" aria-hidden="true">
                    <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>

                <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none" aria-hidden="true">
                    <div className="rounded-full bg-white/20 p-4 scale-75 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-4">
                    <span className="inline-flex rounded-full bg-black/40 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white">
                        {item.category}
                    </span>
                    <h3 className="mt-1.5 sm:mt-2 text-xs sm:text-base font-semibold leading-snug text-white line-clamp-2">{item.title}</h3>
                </div>
            </div>
        </a>
    )
}

export default WorkCard
