import Navbar from '@/components/Navbar'
import WorkCard from '@/components/WorkCard'
import collaborations from '@/data/our-work.json'

export const metadata = {
    title: 'Work | Midnight Media',
    description: 'A clean gallery of our collaborations category tags.',
}

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-background-secondary">
            <Navbar />
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Work</p>
                        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-text-primary">
                            Reel collaborations and campaign posts.
                        </h1>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {collaborations.map((item) => (
                            <WorkCard key={item.id} item={item} className="w-full" />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
