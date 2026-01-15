import { NextResponse } from 'next/server'
import OpenAI from 'openai'

let STORED_KEY: string | null = null

export async function POST(req: Request) {
  const { apiKey } = await req.json()

  if (!apiKey) {
    return NextResponse.json({ error: 'API key required' }, { status: 400 })
  }

  try {
    const openai = new OpenAI({ apiKey })

    await openai.models.list()

    STORED_KEY = apiKey

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid OpenAI API key' }, { status: 401 })
  }
}

export function getStoredKey() {
  return STORED_KEY
}
