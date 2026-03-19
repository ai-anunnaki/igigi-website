'use client'

import { Download, Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface Tool {
  id: string
  name: string
  nameEn: string
  description: string
  icon: string
  version: string
  platform: string
  github: string
  downloadUrl: string
  features: string[]
}

const tools: Tool[] = [
  {
    id: 'igigibox',
    name: '鸬鹚工具箱',
    nameEn: 'IgigiBox',
    description: '功能强大的 macOS 系统工具箱，提供进程管理、文件管理、剪贴板管理和系统监控功能',
    icon: '🐦',
    version: '1.1.0',
    platform: 'macOS 13.0+',
    github: 'https://github.com/ai-anunnaki/IgigiBox',
    downloadUrl: 'https://github.com/ai-anunnaki/IgigiBox/releases/latest',
    features: [
      '进程管理与监控',
      '文件浏览与管理',
      '剪贴板历史记录',
      '系统性能监控',
      '菜单栏快速访问'
    ]
  },
  {
    id: 'igigissh',
    name: '鸬鹚SSH客户端',
    nameEn: 'IgigiSsh',
    description: '简洁、跨平台的 SSH 客户端，支持多会话标签页、SFTP 文件管理和拖拽文件传输',
    icon: '🔐',
    version: '1.0.0',
    platform: 'macOS / Windows / Linux',
    github: 'https://github.com/ai-anunnaki/IgigiSsh',
    downloadUrl: 'https://github.com/ai-anunnaki/IgigiSsh/releases/latest',
    features: [
      '多会话标签页管理',
      'SFTP 文件浏览与管理',
      '拖拽上传，实时进度',
      '终端目录自动同步',
      '密码 / 私钥双认证'
    ]
  }
]

export default function ToolsGrid() {
  const [downloadCounts, setDownloadCounts] = useState<Record<string, number>>({})

  const handleDownload = async (toolId: string, url: string) => {
    // 记录下载
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'download', toolId })
      })
      setDownloadCounts(prev => ({
        ...prev,
        [toolId]: (prev[toolId] || 0) + 1
      }))
    } catch (error) {
      console.error('Failed to track download:', error)
    }
    
    // 打开下载链接
    window.open(url, '_blank')
  }

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">我们的工具</h2>
          <p className="mt-4 text-lg text-gray-600">
            精心打造的开源工具，持续更新中
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{tool.icon}</div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {tool.version}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{tool.nameEn}</p>
              <p className="text-gray-600 mb-6">{tool.description}</p>

              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">主要功能：</p>
                <ul className="space-y-1">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-blue-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span className="inline-flex items-center gap-1">
                  💻 {tool.platform}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleDownload(tool.id, tool.downloadUrl)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <Download className="w-4 h-4" />
                  下载
                </button>
                <a
                  href={tool.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}

          {/* 占位卡片 - 即将推出 */}
          <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">更多工具</h3>
            <p className="text-gray-600">敬请期待...</p>
          </div>
        </div>
      </div>
    </section>
  )
}
