import Image from 'next/image'
import Marquee from './Marquee'

const brands = [
    { name: 'Mamaearth', logo: '/brands/mamaearth.jpg' },
    { name: 'OPD Cover', logo: '/brands/opdcover.png' },
    { name: 'Honasa', logo: '/brands/honasa.jpeg' },
    { name: 'Plum', logo: '/brands/plum.jpeg' },
    { name: 'Dot & Key', logo: '/brands/dot-and-key-logo.jpeg' },
    { name: 'Kapiva', logo: '/brands/kapiva.png' },
    { name: 'Nutrabay', logo: '/brands/nutrabay.png' },
    { name: 'Dinshaw’s Cafe', logo: '/brands/dinshaws.png' },
    { name: 'One Gummy', logo: '/brands/onegummy.png' },
    { name: 'Gracias Granny', logo: '/brands/gracias.png' },
    { name: 'Ripped Up Nutrition', logo: '/brands/images.png' },
    { name: 'Knosh', logo: '/brands/knoshfood.png' },
    { name: 'Apara', logo: '/brands/apara.png' },
    { name: 'Vastravali Jaipur', logo: '/brands/vj.png' },
]

const rows = [brands.slice(0, 7), brands.slice(7)]

const Brands = () => {
    return (
        <section id="brands" className="py-16 md:py-24 bg-background-secondary overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-text-secondary mb-4">Brands we&apos;ve worked with</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
                        Trusted by brands. <span className="text-accent-bright">Loved by feeds.</span>
                    </h2>
                </div>
            </div>

            <div className="space-y-6">
                {rows.map((row, rowIndex) => (
                    <Marquee key={rowIndex} duration={35} reverse={rowIndex === 1}>
                        {row.map((brand) => (
                            <div key={brand.name} className="px-3">
                                <div className="relative w-40 h-20 md:w-48 md:h-24 rounded-xl bg-white overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300">
                                    <Image src={brand.logo} alt={`${brand.name} logo`} fill sizes="192px" className="object-contain p-3" />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                ))}
            </div>
        </section>
    )
}

export default Brands
