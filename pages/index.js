export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          AI Startup Studio
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A growing portfolio of AI SaaS products — ready to launch, license, or flip.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#available" className="px-6 py-3 bg-black text-white rounded">
            View Products
          </a>
          <a href="#bundle" className="px-6 py-3 border rounded">
            Buy Full Bundle
          </a>
        </div>
      </section>

      {/* AVAILABLE */}
      <section id="available" className="py-20 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Available AI Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <ToolCard
            title="SociaBoost AI"
            desc="AI social growth automation for creators and brands."
            status="Ready"
          />

          <ToolCard
            title="AutoPrompt AI"
            desc="Automated prompt workflows and reusable templates."
            status="Ready"
          />

          <ToolCard
            title="AI Ad Script Generator"
            desc="Instant ad copy for Meta, Google, TikTok, and more."
            status="Ready"
          />

        </div>
      </section>

      {/* PRIVATE BETA */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Private Beta
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">

          <ToolCard
            title="StoreBoost AI"
            desc="AI-powered conversion optimization for eCommerce."
            status="Private Beta"
          />

          <ToolCard
            title="NicheBlog AI"
            desc="Automated SEO-focused niche content engine."
            status="Private Beta"
          />

        </div>
      </section>

      {/* COMING SOON */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Coming Soon
        </h2>

        <div className="max-w-md mx-auto px-6">
          <ToolCard
            title="AI Reels Factory"
            desc="AI short-form video generator for TikTok, Reels, Shorts."
            status="Coming Soon"
          />
        </div>
      </section>

      {/* BUNDLE */}
      <section id="bundle" className="py-24 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">
          Full AI Startup Bundle
        </h2>
        <p className="text-gray-600 mb-6">
          Get all current tools plus future releases under one license.
        </p>

        <div className="border rounded-lg p-8">
          <ul className="text-left mb-6 space-y-2">
            <li>All 6 AI products</li>
            <li>Full source code & IP transfer</li>
            <li>Deploy-ready Vercel projects</li>
            <li>Brand kits and UI</li>
            <li>Future tools included</li>
          </ul>

          <a
            href="#"
            className="inline-block px-8 py-4 bg-black text-white rounded"
          >
            Buy Full Bundle
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © 2025 AI Startup Studio
      </footer>

    </main>
  );
}

function ToolCard({ title, desc, status }) {
  const statusColor =
    status === "Ready"
      ? "bg-green-100"
      : status === "Private Beta"
      ? "bg-yellow-100"
      : "bg-blue-100";

  return (
    <div className="border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{desc}</p>
      <span className={`text-xs px-2 py-1 rounded ${statusColor}`}>
        {status}
      </span>
    </div>
  );
}
