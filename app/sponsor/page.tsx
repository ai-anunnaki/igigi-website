import { Heart, Github, Coffee } from 'lucide-react'

interface Sponsor {
  name: string
  logo?: string
  url?: string
}

const sponsors: Sponsor[] = [
  // 未来赞助商展示位
]

export default function SponsorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">❤️</div>
          <h1 className="text-4xl font-bold mb-4">支持 Igigi</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            所有工具完全免费开源。如果它们帮助了你，考虑赞助我们持续开发和维护。
          </p>
        </div>

        {/* 捐赠选项 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* GitHub Sponsors */}
          <a
            href="https://github.com/sponsors/ai-anunnaki"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 bg-white hover:shadow-xl transition-all duration-300"
          >
            <Github className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">GitHub Sponsors</h3>
            <p className="text-gray-600 text-center text-sm mb-4">
              通过 GitHub 赞助，支持月度或一次性捐赠
            </p>
            <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900">
              从 $1/月起 →
            </span>
          </a>

          {/* Buy Me a Coffee */}
          <a
            href="https://buymeacoffee.com/igigi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 rounded-2xl border-2 border-yellow-200 hover:border-yellow-400 bg-white hover:shadow-xl transition-all duration-300"
          >
            <Coffee className="w-12 h-12 mb-4 text-yellow-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Buy Me a Coffee</h3>
            <p className="text-gray-600 text-center text-sm mb-4">
              请我喝杯咖啡，支持开发者继续创作
            </p>
            <span className="text-sm font-medium text-yellow-600 group-hover:text-yellow-700">
              一次性 $5 起 →
            </span>
          </a>
        </div>

        {/* 赞助档位 */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">赞助档位</h2>
          <div className="space-y-4">
            {[
              { tier: '☕ 咖啡', amount: '$5', desc: '感谢你的支持！名字出现在感谢列表' },
              { tier: '🍕 披萨', amount: '$20', desc: '名字出现在 README 感谢列表' },
              { tier: '🚀 火箭', amount: '$50/月', desc: 'Logo 展示在网站赞助商区域' },
              { tier: '💎 钻石', amount: '$200/月', desc: 'Logo 展示 + 优先技术支持 + 功能需求优先处理' },
            ].map((item) => (
              <div key={item.tier} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <div className="text-2xl w-10">{item.tier.split(' ')[0]}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{item.tier.split(' ')[1]}</span>
                    <span className="text-blue-600 font-bold">{item.amount}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 赞助商展示 */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">感谢赞助商</h2>
          {sponsors.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-gray-300 p-12 text-gray-400">
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <p>成为第一位赞助商</p>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-4">
              {sponsors.map((s) => (
                <div key={s.name} className="p-4 rounded-xl border bg-white">
                  {s.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 其他支持方式 */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-4">不方便捐赠？还有其他方式支持我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>在 GitHub 给项目点 Star</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">📢</span>
              <span>分享给朋友和同事</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">🐛</span>
              <span>提交 Bug 报告或功能建议</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
