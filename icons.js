// Pixel art SVG icons
const PIXEL_ICONS = {
  // Brain - 知识库主图标
  brain: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="4" y="1" width="8" height="2" fill="currentColor"/>
    <rect x="3" y="3" width="2" height="2" fill="currentColor"/>
    <rect x="11" y="3" width="2" height="2" fill="currentColor"/>
    <rect x="2" y="5" width="2" height="4" fill="currentColor"/>
    <rect x="12" y="5" width="2" height="4" fill="currentColor"/>
    <rect x="5" y="5" width="2" height="2" fill="currentColor" opacity=".5"/>
    <rect x="9" y="5" width="2" height="2" fill="currentColor" opacity=".5"/>
    <rect x="7" y="3" width="2" height="6" fill="currentColor" opacity=".4"/>
    <rect x="3" y="9" width="2" height="2" fill="currentColor"/>
    <rect x="11" y="9" width="2" height="2" fill="currentColor"/>
    <rect x="5" y="11" width="6" height="2" fill="currentColor"/>
    <rect x="6" y="13" width="4" height="2" fill="currentColor"/>
  </svg>`,

  // Wrench - 开发工具
  wrench: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="10" y="1" width="2" height="2" fill="currentColor"/>
    <rect x="12" y="1" width="2" height="2" fill="currentColor"/>
    <rect x="12" y="3" width="2" height="2" fill="currentColor"/>
    <rect x="10" y="5" width="2" height="2" fill="currentColor"/>
    <rect x="8" y="7" width="2" height="2" fill="currentColor"/>
    <rect x="6" y="9" width="2" height="2" fill="currentColor"/>
    <rect x="4" y="11" width="2" height="2" fill="currentColor"/>
    <rect x="2" y="13" width="2" height="2" fill="currentColor"/>
    <rect x="1" y="12" width="2" height="2" fill="currentColor"/>
    <rect x="3" y="10" width="2" height="2" fill="currentColor"/>
  </svg>`,

  // Robot - AI
  robot: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="7" y="0" width="2" height="2" fill="currentColor"/>
    <rect x="6" y="2" width="4" height="2" fill="currentColor"/>
    <rect x="3" y="4" width="10" height="2" fill="currentColor"/>
    <rect x="2" y="6" width="12" height="4" fill="currentColor"/>
    <rect x="4" y="7" width="2" height="2" fill="#0a0a12"/>
    <rect x="10" y="7" width="2" height="2" fill="#0a0a12"/>
    <rect x="0" y="7" width="2" height="2" fill="currentColor"/>
    <rect x="14" y="7" width="2" height="2" fill="currentColor"/>
    <rect x="3" y="10" width="10" height="2" fill="currentColor"/>
    <rect x="4" y="12" width="3" height="2" fill="currentColor"/>
    <rect x="9" y="12" width="3" height="2" fill="currentColor"/>
  </svg>`,

  // Crosshair - 图像定位
  crosshair: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="7" y="0" width="2" height="4" fill="currentColor"/>
    <rect x="7" y="12" width="2" height="4" fill="currentColor"/>
    <rect x="0" y="7" width="4" height="2" fill="currentColor"/>
    <rect x="12" y="7" width="4" height="2" fill="currentColor"/>
    <rect x="5" y="5" width="6" height="6" fill="currentColor" opacity=".2"/>
    <rect x="5" y="5" width="2" height="2" fill="currentColor"/>
    <rect x="9" y="5" width="2" height="2" fill="currentColor"/>
    <rect x="5" y="9" width="2" height="2" fill="currentColor"/>
    <rect x="9" y="9" width="2" height="2" fill="currentColor"/>
  </svg>`,

  // Phone - 移动端
  phone: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="4" y="1" width="8" height="14" rx="0" fill="currentColor"/>
    <rect x="5" y="3" width="6" height="8" fill="#0a0a12"/>
    <rect x="7" y="12" width="2" height="2" fill="#0a0a12"/>
  </svg>`,

  // Plane - 旅行
  plane: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="7" y="0" width="2" height="4" fill="currentColor"/>
    <rect x="6" y="4" width="4" height="2" fill="currentColor"/>
    <rect x="1" y="6" width="14" height="2" fill="currentColor"/>
    <rect x="7" y="8" width="2" height="4" fill="currentColor"/>
    <rect x="4" y="12" width="8" height="2" fill="currentColor"/>
    <rect x="3" y="6" width="2" height="2" fill="currentColor" opacity=".6"/>
    <rect x="11" y="6" width="2" height="2" fill="currentColor" opacity=".6"/>
  </svg>`,

  // Rocket - 部署
  rocket: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="7" y="0" width="2" height="2" fill="currentColor"/>
    <rect x="6" y="2" width="4" height="2" fill="currentColor"/>
    <rect x="5" y="4" width="6" height="4" fill="currentColor"/>
    <rect x="5" y="8" width="6" height="2" fill="currentColor"/>
    <rect x="3" y="7" width="2" height="4" fill="currentColor"/>
    <rect x="11" y="7" width="2" height="4" fill="currentColor"/>
    <rect x="6" y="10" width="4" height="2" fill="currentColor"/>
    <rect x="6" y="12" width="2" height="2" fill="currentColor" opacity=".5"/>
    <rect x="8" y="13" width="2" height="2" fill="currentColor" opacity=".3"/>
  </svg>`,

  // Box - 打包
  box: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="1" y="4" width="14" height="2" fill="currentColor"/>
    <rect x="2" y="6" width="12" height="8" fill="currentColor" opacity=".7"/>
    <rect x="2" y="6" width="2" height="8" fill="currentColor"/>
    <rect x="12" y="6" width="2" height="8" fill="currentColor"/>
    <rect x="2" y="12" width="12" height="2" fill="currentColor"/>
    <rect x="7" y="6" width="2" height="4" fill="currentColor"/>
  </svg>`,

  // Clock - 定时
  clock: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="4" y="1" width="8" height="2" fill="currentColor"/>
    <rect x="2" y="3" width="2" height="2" fill="currentColor"/>
    <rect x="12" y="3" width="2" height="2" fill="currentColor"/>
    <rect x="1" y="5" width="2" height="6" fill="currentColor"/>
    <rect x="13" y="5" width="2" height="6" fill="currentColor"/>
    <rect x="2" y="11" width="2" height="2" fill="currentColor"/>
    <rect x="12" y="11" width="2" height="2" fill="currentColor"/>
    <rect x="4" y="13" width="8" height="2" fill="currentColor"/>
    <rect x="7" y="5" width="2" height="4" fill="currentColor"/>
    <rect x="9" y="7" width="2" height="2" fill="currentColor"/>
  </svg>`,

  // Puzzle - 技能
  puzzle: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="5" y="0" width="2" height="2" fill="currentColor"/>
    <rect x="3" y="2" width="6" height="2" fill="currentColor"/>
    <rect x="1" y="4" width="6" height="6" fill="currentColor"/>
    <rect x="7" y="6" width="2" height="2" fill="currentColor"/>
    <rect x="9" y="4" width="6" height="6" fill="currentColor"/>
    <rect x="3" y="10" width="6" height="2" fill="currentColor"/>
    <rect x="9" y="10" width="6" height="2" fill="currentColor"/>
    <rect x="3" y="12" width="6" height="2" fill="currentColor"/>
  </svg>`,

  // Gear - 工具
  gear: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="6" y="0" width="4" height="2" fill="currentColor"/>
    <rect x="6" y="14" width="4" height="2" fill="currentColor"/>
    <rect x="0" y="6" width="2" height="4" fill="currentColor"/>
    <rect x="14" y="6" width="2" height="4" fill="currentColor"/>
    <rect x="2" y="2" width="2" height="2" fill="currentColor"/>
    <rect x="12" y="2" width="2" height="2" fill="currentColor"/>
    <rect x="2" y="12" width="2" height="2" fill="currentColor"/>
    <rect x="12" y="12" width="2" height="2" fill="currentColor"/>
    <rect x="4" y="4" width="8" height="8" fill="currentColor"/>
    <rect x="6" y="6" width="4" height="4" fill="#0a0a12"/>
  </svg>`,

  // Coin - 钱
  coin: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="4" y="1" width="8" height="2" fill="currentColor"/>
    <rect x="2" y="3" width="2" height="2" fill="currentColor"/>
    <rect x="12" y="3" width="2" height="2" fill="currentColor"/>
    <rect x="1" y="5" width="2" height="6" fill="currentColor"/>
    <rect x="13" y="5" width="2" height="6" fill="currentColor"/>
    <rect x="2" y="11" width="2" height="2" fill="currentColor"/>
    <rect x="12" y="11" width="2" height="2" fill="currentColor"/>
    <rect x="4" y="13" width="8" height="2" fill="currentColor"/>
    <rect x="7" y="4" width="2" height="8" fill="currentColor" opacity=".5"/>
    <rect x="5" y="6" width="6" height="2" fill="currentColor" opacity=".5"/>
  </svg>`,

  // Flag - 英国
  flag: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="2" y="2" width="2" height="12" fill="currentColor"/>
    <rect x="4" y="2" width="10" height="2" fill="currentColor"/>
    <rect x="4" y="4" width="10" height="2" fill="currentColor" opacity=".6"/>
    <rect x="4" y="6" width="10" height="2" fill="currentColor" opacity=".3"/>
    <rect x="4" y="8" width="8" height="2" fill="currentColor" opacity=".15"/>
  </svg>`,

  // Apple
  apple: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="8" y="0" width="2" height="2" fill="currentColor"/>
    <rect x="7" y="2" width="2" height="2" fill="currentColor"/>
    <rect x="4" y="4" width="8" height="2" fill="currentColor"/>
    <rect x="3" y="6" width="10" height="6" fill="currentColor"/>
    <rect x="4" y="12" width="8" height="2" fill="currentColor"/>
    <rect x="5" y="14" width="6" height="1" fill="currentColor"/>
  </svg>`,

  // Lightning - PWA
  lightning: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="8" y="0" width="2" height="2" fill="currentColor"/>
    <rect x="7" y="2" width="2" height="2" fill="currentColor"/>
    <rect x="6" y="4" width="2" height="2" fill="currentColor"/>
    <rect x="4" y="6" width="6" height="2" fill="currentColor"/>
    <rect x="8" y="8" width="2" height="2" fill="currentColor"/>
    <rect x="7" y="10" width="2" height="2" fill="currentColor"/>
    <rect x="6" y="12" width="2" height="2" fill="currentColor"/>
    <rect x="5" y="14" width="2" height="2" fill="currentColor"/>
  </svg>`,

  // Book - 全部
  book: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="2" y="1" width="12" height="2" fill="currentColor"/>
    <rect x="1" y="3" width="2" height="10" fill="currentColor"/>
    <rect x="13" y="3" width="2" height="10" fill="currentColor"/>
    <rect x="2" y="13" width="12" height="2" fill="currentColor"/>
    <rect x="3" y="3" width="10" height="10" fill="currentColor" opacity=".2"/>
    <rect x="5" y="5" width="6" height="2" fill="currentColor" opacity=".5"/>
    <rect x="5" y="8" width="4" height="2" fill="currentColor" opacity=".3"/>
  </svg>`,

  // Search
  search: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="4" y="1" width="6" height="2" fill="currentColor"/>
    <rect x="2" y="3" width="2" height="2" fill="currentColor"/>
    <rect x="10" y="3" width="2" height="2" fill="currentColor"/>
    <rect x="1" y="5" width="2" height="4" fill="currentColor"/>
    <rect x="11" y="5" width="2" height="4" fill="currentColor"/>
    <rect x="2" y="9" width="2" height="2" fill="currentColor"/>
    <rect x="10" y="9" width="2" height="2" fill="currentColor"/>
    <rect x="4" y="11" width="6" height="2" fill="currentColor"/>
    <rect x="11" y="11" width="2" height="2" fill="currentColor"/>
    <rect x="13" y="13" width="2" height="2" fill="currentColor"/>
  </svg>`
};
