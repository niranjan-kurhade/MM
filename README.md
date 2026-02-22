# Midnight Media - Influencer Marketing Agency Website

A bold, modern, high-converting website for Midnight Media - a performance-driven influencer marketing agency.

## 🎨 Design Features

- **Theme**: Dark Black + Shiny Violet
- **Style**: Modern Dark Minimal with Subtle Glassmorphism
- **Aesthetic**: Cinematic lighting with controlled energy
- **Typography**: Space Grotesk (headings) + Inter (body)

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom color system
- **Animations**: Framer Motion + Custom CSS animations
- **Language**: TypeScript
- **Performance**: WebP images, lazy loading, optimized animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎯 Features

- Full-screen immersive hero with animated gradient mesh
- Value proposition showcase (replacing metrics for new agency)
- Services grid with 6 offerings including Talent Management
- The Midnight Method - 3-step process framework
- Dual-path selection (For Brands / For Creators)
- Industry insights and testimonials
- High-converting CTAs throughout
- Sticky glassmorphic navbar
- Smooth scroll animations
- Mobile responsive design
- Performance optimized (WebP, lazy loading)
- Respects `prefers-reduced-motion`

## 🎨 Color System

```css
--background-primary: #050505   /* Deep Bright Black */
--background-secondary: #0F0F12 /* Elevated Surface */
--card-surface: #15151B         /* Card Background */
--border-subtle: #24242E

--text-primary: #F5F5F7
--text-secondary: #A1A1AA

--accent-primary: #7C3AED      /* Shiny Violet */
--accent-bright: #8B5CF6       /* Electric Purple */
--accent-glow: rgba(124, 58, 237, 0.5)
```

## 📄 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main homepage
│   ├── globals.css         # Global styles & utilities
│   ├── loading.tsx         # Loading state
│   ├── robots.ts           # SEO robots.txt
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Hero.tsx            # Hero section with animated mesh
│   ├── AuthorityStrip.tsx  # Value proposition showcase
│   ├── Services.tsx        # Services grid (6 services)
│   ├── Process.tsx         # The Midnight Method (3 steps)
│   ├── ChoicePath.tsx      # Brand/Creator selection
│   ├── Testimonials.tsx    # Industry perspectives
│   ├── FinalCTA.tsx        # Conversion CTA
│   ├── Footer.tsx          # Site footer
│   ├── Button.tsx          # Reusable button component
│   ├── Card.tsx            # Reusable card component
│   └── ScrollReveal.tsx    # Scroll animation wrapper
└── tailwind.config.ts      # Tailwind configuration
```

## 🎭 Brand Voice

- Direct
- Performance-driven
- Confident
- Metrics-focused
- No fluff

**Tagline**: "We don't chase influence. We engineer it."

## 🔧 Customization

### Updating Colors

Edit `tailwind.config.ts` and `app/globals.css` to modify the color system.

### Adding New Sections

Create a new component in `components/` and import it into `app/page.tsx`.

### Modifying Content

Update the content in each component file directly. All data is currently hardcoded for easy customization.

## 📱 Performance

- Optimized for Core Web Vitals
- WebP image formats
- Lazy loading implemented
- GPU-accelerated animations
- Minimal JavaScript bundle
- CLS < 0.1 target

## 🌐 SEO

- Semantic HTML structure
- Meta tags configured
- Sitemap included
- Robots.txt configured
- Proper heading hierarchy
- Alt texts for images (add your own)

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

**Built with precision by Midnight Media**
