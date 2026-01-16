export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const apiKey = req.headers["x-openai-key"]

  if (!apiKey) {
    return res.status(401).json({ error: "Missing OpenAI API key" })
  }

  try {
    const { prompt } = typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: prompt || "Write a short product description." }
        ]
      })
    })

    const data = await response.json()

    res.status(200).json({
      text: data.choices?.[0]?.message?.content || ""
    })
  } catch (e) {
    res.status(500).json({ error: "OpenAI request failed" })
  }
}
