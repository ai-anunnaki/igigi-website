import { Heart, Coffee } from 'lucide-react'
import Link from 'next/link'

export default function SponsorCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-6">
            <Heart className="w-8 h-8 text-pink-600" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4">喜欢我们的工具？</h2>
          <p className="text-lg text-gray-600 mb-8">
            所有工具完全免费开源。如果它们帮助了你，考虑赞助我们持续开发和维护。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sponsor"
              className="inline-flex items-center gap-2 rounded-lg bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 transition-colors"
            >
              <Heart className="w-4 h-4" />
              成为赞助商
            </Link>
            <a
              href="https://buymeacoffee.com/igigi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-yellow-400 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-50 transition-colors"
            >
              <Coffee className="w-4 h-4 text-yellow-500" />
              请我喝咖啡
            </a>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            从 $1/月起 · 100% 用于开发和维护
          </p>
        </div>
      </div>
    </section>
  )
}
