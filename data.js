// Knowledge data embedded from markdown files
const CATEGORIES = [
  {
    id: 'dev-tools', emoji: '🛠️', name: '开发工具',
    sections: [
      {
        title: 'Claude Code',
        content: `- 安装：\`npm install -g @anthropic-ai/claude-code\`
- 非官方 API 需配 \`ANTHROPIC_AUTH_TOKEN\` + \`ANTHROPIC_BASE_URL\`（不是 \`ANTHROPIC_API_KEY\`）
- \`~/.claude.json\` 需要 \`"hasCompletedOnboarding": true\` 才能跳过引导
- 用 \`-p\` 参数可以非交互式运行，\`--allowedTools "Write,Read"\` 控制权限
- API 代理不稳定时自己手写是更快的选择`
      },
      {
        title: 'GitHub Pages 部署',
        content: `- 创建公开仓库 → push 代码 → Settings → Pages → Deploy from branch
- Fine-grained Token 权限坑多，Classic Token（ghp_开头）更省事
- \`gh auth setup-git\` 配置后 git push 才能用 gh 的凭据
- 部署后地址格式：\`https://{用户名}.github.io/{仓库名}/\``
      },
      {
        title: 'Android APK 打包（Cordova）',
        content: `- 依赖：Java 17 + Android SDK + Gradle
- 流程：\`cordova create\` → 复制 www 文件 → \`cordova platform add android\` → \`cordova build android\`
- APK 输出路径：\`platforms/android/app/build/outputs/apk/debug/app-debug.apk\`
- macOS 上 Gradle 用 \`brew install gradle\``
      }
    ]
  },
  {
    id: 'ai-automation', emoji: '🤖', name: 'AI 与自动化',
    sections: [
      {
        title: 'GitHub Spec Kit（规格驱动开发）',
        content: `- 核心理念：先写规格，再让 AI 生成代码，而不是 vibe coding
- 流程：constitution（原则）→ specify（需求）→ plan（方案）→ tasks（任务）→ implement（执行）
- 安装：\`uv tool install specify-cli --from git+https://github.com/github/spec-kit.git\`
- 适合复杂项目和团队协作，小工具用不着
- 支持 Claude Code、Copilot 等多种 agent`
      },
      {
        title: 'OpenClaw Cron 监控',
        content: `- 可以设定定时任务让 AI 自动执行并报告
- 搜索类任务用 Tavily API 做间接数据获取
- 注意：比价网站（Skyscanner/Google Flights）标注价和实际购买价差距大，要用实际平台价格
- 监控频率建议：远期 3 天/次 → 中期每天 → 临近 2 次/天`
      },
      {
        title: 'Skill 制作',
        content: `- 用 \`init_skill.py\` 初始化 → 写 SKILL.md + 脚本 → \`package_skill.py\` 打包
- SKILL.md 的 description 要写清楚触发条件，系统靠它匹配
- 脚本放 scripts/，参考资料放 references/`
      }
    ]
  },
  {
    id: 'image-processing', emoji: '🖼️', name: '图像处理',
    sections: [
      {
        title: '截图中定位 UI 元素',
        content: `- Dock/工具栏图标在全屏截图里只有 40-80px，肉眼几乎不可能准确识别
- **最可靠方法**：拿到原图 + 标注图，做像素 diff（逐像素比较差异 > 100 的位置）
- **次选方法**：逐步放大法 — 先 6x 看全局 → 8-10x 确认区域 → 10-12x 验证细节
- **大坑**：不要用颜色扫描找标注 — 红色标注会和红色 UI 元素（通知角标、app 图标如网易云音乐）混淆
- 工具：Pillow 的 crop + resize（NEAREST 保持像素锐利）
- 坐标系注意：图片像素 ≠ 屏幕像素 ≠ Retina 逻辑坐标，要搞清楚用哪套`
      },
      {
        title: '已有 Skill',
        content: `- \`visual-locate\`：scripts/crop_zoom.py、mark_position.py、diff_locate.py、find_target.py`
      }
    ]
  },
  {
    id: 'mobile-dev', emoji: '📱', name: '移动端开发',
    sections: [
      {
        title: 'PWA 改造要点',
        content: `- 必须文件：manifest.json + service-worker.js
- manifest.json：name、short_name、display: standalone、icons（192 和 512）
- iOS Safari 需要额外 meta 标签：
  - \`apple-mobile-web-app-capable = yes\`
  - \`apple-mobile-web-app-status-bar-style = black-translucent\`
  - \`apple-mobile-web-app-title\`
  - \`<link rel="apple-touch-icon">\`
- Service Worker：缓存所有静态资源实现离线使用
- 触摸优化：按钮最小 44px、字号 16px+、正确的 input type`
      },
      {
        title: 'iOS 安装方式',
        content: `- Safari 打开 → 分享按钮 → "添加到主屏幕"
- standalone 模式下体验接近原生 app`
      },
      {
        title: 'Android 安装方式',
        content: `- Cordova 打包成 APK 直接安装
- 或 Chrome 打开 PWA → 菜单 → "添加到主屏幕"`
      }
    ]
  },
  {
    id: 'travel', emoji: '✈️', name: '旅行',
    sections: [
      {
        title: '北京 → 伦敦机票',
        content: `- 直飞：国航 CA855/CA937（PEK T3→LHR T2）、南航 CZ673（PKX→LHR T4）
- 便宜转机：沙特航空（吉达）、阿提哈德（阿布扎比）、卡塔尔（多哈）、阿联酋（迪拜）
- 最佳购买窗口：出发前 3-8 个月
- 最便宜月份：11月、3月、5月
- 最贵：7-8月暑假、国庆、春节
- 最便宜出发日：周二、周三、周四
- 价格越临近出发越贵（2-3周前最贵）`
      },
      {
        title: '比价注意事项',
        content: `- Skyscanner/Google Flights 标注价和实际购买价差距大
- 要看携程、飞猪、去哪儿、航司官网的实际可购买价
- 每个价格要附购票链接才有用`
      },
      {
        title: '2026 国庆英国行',
        content: `- 计划：9.25 出发 → 10.5 返回，10 天
- 价格目标：直飞 < ¥6,000，转机 < ¥4,500
- 每日 9:00 AM 自动监控（cron job）`
      }
    ]
  }
];

const LAST_UPDATED = '2026-03-20';
