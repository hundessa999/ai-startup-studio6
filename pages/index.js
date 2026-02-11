export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white text-gray-900">

      {/* HERO */}
      <section className="py-28 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Acquire Revenue-Ready AI Startups
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8 drop-shadow-md">
          Full source, deploy-ready, IP transfer included. Our AI portfolio is designed for founders, agencies, and AI flippers.
        </p>
        <a href="#available" className="inline-block px-8 py-4 bg-black text-white rounded-lg font-semibold shadow-lg">
          Explore AI Products
        </a>
      </section>

      {/* AVAILABLE TOOLS */}
      <section id="available" className="py-20 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Available for Acquisition</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <ToolCard
            title="SociaBoost AI"
            desc="Automate social growth across TikTok, Instagram, and YouTube. Built for creators, agencies, and growth-focused businesses."
            modules="Includes teaser: Reelforge & AutoPrompt"
            status="Ready"
          />

          <ToolCard
            title="AutoPrompt AI"
            desc="Automated prompt workflows and reusable templates for faster execution."
            modules="Teaser modules included"
            status="Ready"
          />

          <ToolCard
            title="AI Ad Script Generator"
            desc="Instant multi-channel ad copy for Meta, Google, TikTok, and more."
            modules="N/A"
            status="Ready"
          />

        </div>
      </section>

      {/* PRIVATE BETA */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Private Beta</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">

          <ToolCard
            title="StoreBoost AI"
            desc="AI-powered conversion optimization for eCommerce stores."
            modules="Teaser: future modules included"
            status="Private Beta"
          />

          <ToolCard
            title="NicheBlog AI"
            desc="Automated SEO-focused niche content engine for blogs and websites."
            modules="Teaser included"
            status="Private Beta"
          />

        </div>
      </section>

      {/* COMING SOON */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Coming Soon</h2>
        <div className="max-w-md mx-auto px-6">
          <ToolCard
            title="AI Reels Factory"
            desc="AI short-form video generator optimized for TikTok, Instagram Reels, and YouTube Shorts."
            modules="N/A"
            status="Coming Soon"
          />
        </div>
      </section>

      {/* EARLY ACCESS / LEAD CAPTURE */}
      <section className="py-28 bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">Get Early Access or Full Product Details</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto drop-shadow-md">
          Be the first to acquire or license any of our AI startup tools. Limited slots available for high-value acquisition.
        </p>

        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg text-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg text-black focus:outline-none"
          />
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg">
            Request Access
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-300 bg-gray-900">
        © 2025 AI Startup Studio
      </footer>
    </main>
  );
}

// TOOL CARD COMPONENT
function ToolCard({ title, desc, modules, status }) {
  const statusColor =
    status === "Ready"
      ? "bg-green-100 text-green-800"
      : status === "Private Beta"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-blue-100 text-blue-800";

  return (
    <div className="border rounded-lg p-6 bg-white shadow-md hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-2">{desc}</p>
      {modules && <p className="text-xs text-gray-500 mb-4">{modules}</p>}
      <span className={`inline-block px-2 py-1 rounded ${statusColor} text-xs font-semibold`}>
        {status}
      </span>
    </div>
  );
}
