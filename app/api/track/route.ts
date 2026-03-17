import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const DATA_FILE = join(process.cwd(), 'data', 'stats.json')

interface StatsData {
  pageViews: number
  downloads: number
  tools: number
  toolDownloads: Record<string, number>
  lastUpdated: string
}

function readStats(): StatsData {
  if (!existsSync(DATA_FILE)) {
    const initial: StatsData = {
      pageViews: 0,
      downloads: 0,
      tools: 1,
      toolDownloads: {},
      lastUpdated: new Date().toISOString()
    }
    const dir = join(process.cwd(), 'data')
    if (!existsSync(dir)) {
      require('fs').mkdirSync(dir, { recursive: true })
    }
    writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2))
    return initial
  }
  return JSON.parse(readFileSync(DATA_FILE, 'utf-8'))
}

function writeStats(stats: StatsData) {
  stats.lastUpdated = new Date().toISOString()
  writeFileSync(DATA_FILE, JSON.stringify(stats, null, 2))
}

export async function GET() {
  const stats = readStats()
  return NextResponse.json({
    pageViews: stats.pageViews,
    downloads: stats.downloads,
    tools: stats.tools,
    toolDownloads: stats.toolDownloads
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const stats = readStats()

  if (body.type === 'pageview') {
    stats.pageViews += 1
  } else if (body.type === 'download' && body.toolId) {
    stats.downloads += 1
    stats.toolDownloads[body.toolId] = (stats.toolDownloads[body.toolId] || 0) + 1
  }

  writeStats(stats)
  return NextResponse.json({ success: true })
}
