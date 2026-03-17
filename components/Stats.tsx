'use client'

import { useEffect, useState } from 'react'
import { Eye, Download, TrendingUp } from 'lucide-react'

interface StatsData {
  pageViews: number
  downloads: number
  tools: number
}

export default function Stats() {
  const [stats, setStats] = useState<StatsData>({
    pageViews: 0,
    downloads: 0,
    tools: 2
  })

  useEffect(() => {
    // 记录页面访问
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'pageview' })
    }).catch(console.error)

    // 获取统计数据
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error)
  }, [])

  const statItems = [
    {
      name: '页面访问量',
      value: stats.pageViews.toLocaleString(),
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      name: '总下载量',
      value: stats.downloads.toLocaleString(),
      icon: Download,
      color: 'text-green-600'
    },
    {
      name: '工具数量',
      value: stats.tools.toString(),
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ]

  return (
    <section id="stats" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">实时统计</h2>
          <p className="mt-4 text-lg text-gray-600">
            感谢每一位用户的支持
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <p className="text-4xl font-bold mb-2">{item.value}</p>
              <p className="text-gray-600">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
