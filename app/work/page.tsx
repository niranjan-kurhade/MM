import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WorkGallery from '@/components/WorkGallery'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
    title: 'Influencer & UGC Campaign Portfolio',
    description:
        'See influencer marketing and UGC campaigns by Midnight Media for brands like BetterAlt, Dinshaw’s, OPD Cover, Brillare and Vastravali Jaipur.',
    path: '/work',
})

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-background-secondary">
            <Navbar />
            <section className="pt-28 sm:pt-32 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-text-secondary">Our Work</p>
                        <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
                            Influencer &amp; UGC Campaign Portfolio
                        </h1>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-text-secondary">
                            Reels we&apos;ve made with creators for beauty, food, fashion, fitness and wellness brands. Tap any reel to watch it on Instagram.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <WorkGallery />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
