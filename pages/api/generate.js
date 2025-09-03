
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });
  let body = {}
  try { body = JSON.parse(req.body || '{}') } catch(e){}
  const prompt = body.prompt || 'Write a short caption.'
  const demo = `Demo AI Response:\n- You asked: "${prompt}"\n- Result: This is a placeholder response (DEMO_KEY). Replace OPENAI_API_KEY in Vercel to enable real AI.`
  return res.status(200).json({ text: demo })
}
