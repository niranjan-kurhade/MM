'use client'

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
}

const WorkCard = ({ item, className = '' }: WorkCardProps) => {
    return (
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block ${className}`}
        >
            <div className="h-full rounded-[2rem] overflow-hidden border border-border-subtle bg-card-surface shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[9/16] bg-slate-950/5">
                    {item.thumb ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={item.thumb}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center px-4 text-center text-sm font-medium text-text-secondary">
                            Preview unavailable
                        </div>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="rounded-full bg-black/30 p-3">
                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="p-5">
                    <div className="mb-3 inline-flex rounded-full border border-border-subtle bg-background-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">
                        {item.category}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default WorkCard
