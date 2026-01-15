import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { getStoredKey } from '../setup/route'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const apiKey = getStoredKey()

  if (!apiKey) {
    return NextResponse.json({ error: 'Setup required' }, { status: 403 })
  }

  const openai = new OpenAI({ apiKey })

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  })

  return NextResponse.json({
    result: completion.choices[0].message.content,
  })
}
