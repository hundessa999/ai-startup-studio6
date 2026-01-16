import { useState } from "react";
import clsx from "clsx";

export default function Dashboard() {
  const [dark, setDark] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/generate", { method: "POST", body: JSON.stringify({ prompt }) });
      const data = await res.json();
      setOutput(data.text || data.error || "No output");
    } catch (e) {
      setOutput(String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={clsx(dark && "dark")}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container py-8">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold dark:text-white">AI Ad Script Generator — Dashboard</h1>
            <div className="flex gap-2">
              <button onClick={() => setDark(!dark)} className="btn">{dark ? "Light" : "Dark"}</button>
              <a href="/" className="btn">Home</a>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="card md:col-span-2">
              <div className="label mb-2">Prompt</div>
              <textarea className="input h-36" placeholder="Describe what you want..." onChange={(e)=>setPrompt(e.target.value)} />
              <button onClick={generate} className="btn mt-3">{loading ? "Generating..." : "Generate with AI"}</button>
              <div className="label mt-6 mb-2">AI Output</div>
              <pre className="bg-gray-100 dark:bg-gray-900/40 rounded-xl p-4 overflow-auto text-sm">{output || "Your result will appear here."}</pre>
            </div>
            <div className="card">
              <div className="label mb-2">Quick Actions</div>
              <ul className="space-y-2 text-sm">
                <li>• Save template</li>
                <li>• Export as .txt</li>
                <li>• Copy to clipboard</li>
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="card">
              <h3 className="text-lg mb-2">Stats</h3>
              <p className="text-sm opacity-80">Requests today: 12</p>
              <p className="text-sm opacity-80">Avg tokens: 450</p>
            </div>
            <div className="card">
              <h3 className="text-lg mb-2">Recent Items</h3>
              <ul className="text-sm space-y-1">
                <li>• Welcome email sequence</li>
                <li>• Product description (ecom)</li>
                <li>• 30-sec ad script</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg mb-2">Settings</h3>
              <p className="text-sm opacity-80">Model: gpt-4o-mini</p>
              <p className="text-sm opacity-80">Temperature: 0.7</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
