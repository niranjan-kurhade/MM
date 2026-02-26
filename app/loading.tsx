import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen bg-background-primary flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden mb-4 animate-pulse mx-auto glow-violet">
          <Image 
            src="/MM-logo.png" 
            alt="Midnight Media Logo" 
            fill
            className="object-contain"
          />
        </div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  )
}
