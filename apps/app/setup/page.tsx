'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SetupPage() {
  const [apiKey, setApiKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const saveKey = async () => {
    setLoading(true)
    setError('')

    const res = await fetch('/api/setup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || 'Invalid API key')
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto mt-24">
      <h1 className="text-2xl font-bold mb-2">Connect OpenAI API</h1>
      <p className="mb-4">One key powers all tools in this bundle.</p>

      <input
        type="password"
        placeholder="sk-..."
        className="w-full border p-2 mb-3"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <button
        onClick={saveKey}
        disabled={loading}
        className="w-full bg-black text-white p-2"
      >
        {loading ? 'Verifying...' : 'Save and Continue'}
      </button>
    </div>
  )
}
