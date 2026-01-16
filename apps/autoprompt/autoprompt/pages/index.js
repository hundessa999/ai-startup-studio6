import Link from "next/link";

export default function Home() {
  return (
    <div style={{"--brandFrom":"#14B8A6","--brandTo":"#22C55E"}} className="min-h-screen gradient">
      <div className="container py-24">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur" />
            <span className="text-white text-xl font-semibold">AutoPrompt AI</span>
          </div>
          <Link href="/dashboard" className="btn">Open App</Link>
        </header>

        <main className="mt-24 text-white">
          <h1 className="text-5xl md:text-6xl leading-tight drop-shadow">AutoPrompt AI</h1>
          <p className="mt-4 text-lg opacity-90">AI features aligned to the product theme.</p>
          <div className="mt-10 flex gap-4">
            <Link href="/dashboard" className="btn bg-white text-gray-900">Try the Dashboard</Link>
            <a href="https://github.com" target="_blank" className="btn">View Code (after purchase)</a>
          </div>
        </main>
      </div>
    </div>
  )
}
