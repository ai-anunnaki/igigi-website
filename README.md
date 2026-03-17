# Igigi.org 官方网站

Igigi 开源工具集的官方网站，展示我们开发的各类工具。

## 功能特性

- 🎨 现代化的响应式设计
- 📊 实时访问量和下载量统计
- 🚀 基于 Next.js 14 构建
- 💨 Tailwind CSS 样式
- 📱 移动端适配

## 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **语言**: TypeScript
- **部署**: Vercel / 自托管

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

访问 http://localhost:3000 查看网站。

## 项目结构

```
igigi-website/
├── app/
│   ├── api/
│   │   ├── stats/          # 统计数据API
│   │   └── track/          # 访问追踪API
│   ├── globals.css         # 全局样式
│   ├── layout.tsx          # 根布局
│   └── page.tsx            # 首页
├── components/
│   ├── Header.tsx          # 头部导航
│   ├── Footer.tsx          # 页脚
│   ├── Hero.tsx            # 首屏
│   ├── ToolsGrid.tsx       # 工具展示
│   └── Stats.tsx           # 统计数据
├── data/
│   └── stats.json          # 统计数据存储
├── public/                 # 静态资源
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 添加新工具

在 `components/ToolsGrid.tsx` 的 `tools` 数组中添加新工具：

```typescript
{
  id: 'tool-id',
  name: '工具名称',
  nameEn: 'Tool Name',
  description: '工具描述',
  icon: '🔧',
  version: '1.0.0',
  platform: 'macOS 13.0+',
  github: 'https://github.com/ai-anunnaki/ToolName',
  downloadUrl: 'https://github.com/ai-anunnaki/ToolName/releases/latest',
  features: [
    '功能1',
    '功能2',
    '功能3'
  ]
}
```

## 统计数据

统计数据存储在 `data/stats.json` 文件中：

```json
{
  "pageViews": 1234,
  "downloads": 567,
  "tools": 1,
  "toolDownloads": {
    "lucibox": 567
  },
  "lastUpdated": "2026-03-17T12:00:00.000Z"
}
```

## 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 配置域名 igigi.org
4. 自动部署

### 自托管

```bash
# 构建
npm run build

# 启动
npm start

# 或使用 PM2
pm2 start npm --name "igigi-website" -- start
```

## 环境变量

无需配置环境变量，开箱即用。

## 许可证

MIT License

Copyright (c) 2026 Igigi

## 联系方式

- GitHub: https://github.com/ai-anunnaki
- Email: ai.anunnaki@proton.me
- Website: https://igigi.org
