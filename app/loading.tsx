export default function Loading() {
  return (
    <div className="min-h-screen bg-background-primary flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-bright rounded-lg flex items-center justify-center mb-4 animate-pulse mx-auto glow-violet">
          <span className="text-white font-bold text-2xl">M</span>
        </div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  )
}
