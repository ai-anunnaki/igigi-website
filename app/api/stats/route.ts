import { NextResponse } from 'next/server'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const DATA_FILE = join(process.cwd(), 'data', 'stats.json')

export async function GET() {
  if (!existsSync(DATA_FILE)) {
    return NextResponse.json({ pageViews: 0, downloads: 0, tools: 1, toolDownloads: {} })
  }
  const stats = JSON.parse(readFileSync(DATA_FILE, 'utf-8'))
  return NextResponse.json(stats)
}
