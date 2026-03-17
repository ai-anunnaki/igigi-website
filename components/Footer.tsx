export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Igigi</h3>
            <p className="text-sm text-gray-600">
              致力于打造高质量的开源工具，提升工作效率
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/ai-anunnaki" className="text-gray-600 hover:text-blue-600">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:ai.anunnaki@proton.me" className="text-gray-600 hover:text-blue-600">
                  联系我们
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">法律</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  隐私政策
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  使用条款
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>© 2026 Igigi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
