export default function Home() {
  return (
    <main className="font-sans">

      {/* HERO SECTION */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Launch or Flip Revenue-Ready AI Products Faster
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          An AI startup studio building deploy-ready SaaS tools for founders,
          agencies, and AI product flippers.
        </p>

        <a
          href="#products"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg"
        >
          View Available AI Products
        </a>
      </section>

      {/* TARGET AUDIENCE */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-8">Who This Is For</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <p className="font-medium">Startup founders</p>
            <p className="text-sm text-gray-600">
              Launch AI products without building from scratch
            </p>
          </div>

          <div>
            <p className="font-medium">Agencies</p>
            <p className="text-sm text-gray-600">
              White-label AI tools for clients
            </p>
          </div>

          <div>
            <p className="font-medium">AI tool flippers</p>
            <p className="text-sm text-gray-600">
              Sell ready-made SaaS on marketplaces
            </p>
          </div>
        </div>
      </section>

      {/* AVAILABLE PRODUCTS */}
      <section id="products" className="py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Available AI Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">SociaBoost AI</h3>
            <p className="text-sm mb-2">
              Automates social media growth and engagement using AI.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Built for creators, brands, and agencies managing multiple platforms.
            </p>
            <span className="text-xs bg-green-100 px-2 py-1 rounded">
              Ready
            </span>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">AutoPrompt AI</h3>
            <p className="text-sm mb-2">
              Pre-built AI prompt workflows for faster execution.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Designed for developers, marketers, and AI operators.
            </p>
            <span className="text-xs bg-green-100 px-2 py-1 rounded">
              Ready
            </span>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Coming Soon / Private Beta
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">StoreBoost AI</h3>
            <p className="text-sm mb-2">
              Optimizes eCommerce content and conversions using AI.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Built for online stores and digital brands.
            </p>
            <span className="text-xs bg-yellow-100 px-2 py-1 rounded">
              Private Beta
            </span>
          </div>
        </div>
      </section>

      {/* MONETIZATION */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          How You Can Work With Us
        </h2>

        <ul className="max-w-xl mx-auto text-gray-700 mb-6 space-y-2">
          <li>Buy individual AI products</li>
          <li>Bundle multiple tools at a discount</li>
          <li>White-label or custom deployment</li>
          <li>Partnership or revenue-share options</li>
        </ul>

        <a
          href="mailto:your@email.com"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg"
        >
          Request Pricing
        </a>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          What You Get
        </h2>

        <ul className="max-w-xl mx-auto text-gray-700 space-y-2">
          <li>Full source code and IP transfer</li>
          <li>Deploy-ready setup (Vercel compatible)</li>
          <li>Brand assets and landing page</li>
          <li>Documentation and setup guide</li>
          <li>Limited onboarding support</li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Early Feedback
        </h2>

        <p className="max-w-xl mx-auto text-gray-600">
          Feedback from early users and pilot partners testing our AI products.
        </p>
      </section>

      {/* LEAD CAPTURE */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Get Early Access or Full Product Details
        </h2>

        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your name"
            className="w-full mb-3 px-4 py-2 rounded text-black"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full mb-3 px-4 py-2 rounded text-black"
          />
          <button className="w-full px-4 py-2 bg-white text-black rounded">
            Get Access
          </button>
        </form>
      </section>

    </main>
  )
}
