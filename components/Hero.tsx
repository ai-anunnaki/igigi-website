import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            高质量的开源工具集
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            为 macOS 用户打造的实用工具，开源、免费、高效
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/#tools"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center gap-2"
            >
              浏览工具
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/ai-anunnaki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
            >
              查看源码 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
