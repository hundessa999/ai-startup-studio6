import { useState } from "react"
import { useRouter } from "next/router"

export default function Setup() {
  const [key, setKey] = useState("")
  const router = useRouter()

  const saveKey = () => {
    if (!key.startsWith("sk-")) {
      alert("Invalid OpenAI key")
      return
    }
    localStorage.setItem("OPENAI_API_KEY", key)
    router.push("/dashboard")
  }

  return (
    <div style={{ maxWidth: 400, margin: "80px auto" }}>
      <h2>Connect OpenAI</h2>
      <input
        type="password"
        placeholder="sk-..."
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ width: "100%", padding: 10 }}
      />
      <button onClick={saveKey} style={{ marginTop: 15 }}>
        Continue
      </button>
    </div>
  )
}
