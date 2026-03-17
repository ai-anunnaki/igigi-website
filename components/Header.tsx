'use client'

import Link from 'next/link'
import { Github } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Igigi
          </span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link href="/#tools" className="text-sm font-medium hover:text-blue-600 transition-colors">
            工具
          </Link>
          <Link href="/#stats" className="text-sm font-medium hover:text-blue-600 transition-colors">
            统计
          </Link>
          <a 
            href="https://github.com/ai-anunnaki" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
