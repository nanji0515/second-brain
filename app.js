// Category colors
const CAT_COLORS = {
  'dev-tools': 'green',
  'ai-automation': 'purple',
  'image-processing': 'blue',
  'mobile-dev': 'pink',
  'travel': 'orange'
};

// Section emojis (per knowledge card)
const SEC_EMOJIS = {
  'Claude Code': '🤖', 'GitHub Pages 部署': '🚀', 'Android APK 打包（Cordova）': '📦',
  'GitHub Spec Kit（规格驱动开发）': '📋', 'OpenClaw Cron 监控': '⏰', 'Skill 制作': '🧩',
  '截图中定位 UI 元素': '🎯', '已有 Skill': '🔧',
  'PWA 改造要点': '⚡', 'iOS 安装方式': '🍎', 'Android 安装方式': '🤖',
  '北京 → 伦敦机票': '✈️', '比价注意事项': '💰', '2026 国庆英国行': '🇬🇧'
};

// Markdown
function fixLists(html) {
  const lines = html.split('\n');
  let inList = false, result = [];
  for (const line of lines) {
    if (line.includes('<li>')) {
      if (!inList) { result.push('<ul>'); inList = true; }
      result.push(line);
    } else {
      if (inList) { result.push('</ul>'); inList = false; }
      result.push(line);
    }
  }
  if (inList) result.push('</ul>');
  return result.join('\n');
}

function renderMd(text) {
  let html = text
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>');
  return fixLists(html);
}

// State
let currentCategory = 'all';
let searchQuery = '';
let openCards = new Set();

// Default open
for (const cat of CATEGORIES) {
  for (const sec of cat.sections) {
    openCards.add(cat.id + '-' + sec.title);
  }
}

// Stats
function renderStats() {
  const total = CATEGORIES.reduce((s, c) => s + c.sections.length, 0);
  document.getElementById('stats').innerHTML = `
    <div class="stat-item"><div class="stat-num">${total}</div><div class="stat-label">知识条目</div></div>
    <div class="stat-item"><div class="stat-num">${CATEGORIES.length}</div><div class="stat-label">知识领域</div></div>
    <div class="stat-item"><div class="stat-num">${Math.floor((Date.now() - new Date('2026-03-10').getTime()) / 86400000)}</div><div class="stat-label">积累天数</div></div>
  `;
}

// Tags
function buildTags() {
  const tags = document.getElementById('tags');
  const total = CATEGORIES.reduce((s, c) => s + c.sections.length, 0);
  let html = `<div class="tag ${currentCategory === 'all' ? 'active' : ''}" data-id="all" data-color="all">📚 全部 <span class="badge">${total}</span></div>`;
  for (const cat of CATEGORIES) {
    const color = CAT_COLORS[cat.id] || 'green';
    html += `<div class="tag ${currentCategory === cat.id ? 'active' : ''}" data-id="${cat.id}" data-color="${color}">${cat.emoji} ${cat.name} <span class="badge">${cat.sections.length}</span></div>`;
  }
  tags.innerHTML = html;
  tags.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      currentCategory = tag.dataset.id;
      buildTags(); renderContent();
    });
  });
}

// Highlight
function highlight(text, q) {
  if (!q) return text;
  const e = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${e})`, 'gi'), '<mark>$1</mark>');
}

// Render
function renderContent() {
  const content = document.getElementById('content');
  let cats = currentCategory === 'all' ? CATEGORIES : CATEGORIES.filter(c => c.id === currentCategory);
  let html = '';
  let hasResults = false;
  let delay = 0;

  for (const cat of cats) {
    let catHtml = '';
    const color = CAT_COLORS[cat.id] || 'green';
    for (const sec of cat.sections) {
      const mt = !searchQuery || sec.title.toLowerCase().includes(searchQuery.toLowerCase());
      const mc = !searchQuery || sec.content.toLowerCase().includes(searchQuery.toLowerCase());
      if (!mt && !mc) continue;
      hasResults = true;
      const cardId = cat.id + '-' + sec.title;
      const isOpen = openCards.has(cardId);
      const emoji = SEC_EMOJIS[sec.title] || cat.emoji;
      const titleHtml = highlight(sec.title, searchQuery);
      const bodyHtml = searchQuery ? highlight(renderMd(sec.content), searchQuery) : renderMd(sec.content);
      catHtml += `<div class="card" data-card="${cardId}" data-accent="${color}" style="animation-delay:${delay}ms">
        <div class="card-header">
          <div class="card-emoji">${emoji}</div>
          <div class="card-title-wrap">
            <div class="card-title">${titleHtml}</div>
            <div class="card-category">${cat.name}</div>
          </div>
          <div class="card-toggle ${isOpen ? 'open' : ''}">▼</div>
        </div>
        <div class="card-body ${isOpen ? 'open' : ''}"><div class="card-body-inner">${bodyHtml}</div></div>
      </div>`;
      delay += 30;
    }
    if (catHtml) {
      html += `<div class="section"><div class="section-title">${cat.emoji} ${cat.name}</div>${catHtml}</div>`;
    }
  }
  if (!hasResults) {
    html = `<div class="empty"><div class="empty-icon">🔍</div><div class="empty-text">没有找到匹配的知识</div></div>`;
  }
  content.innerHTML = html;

  content.querySelectorAll('.card-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.parentElement;
      const body = card.querySelector('.card-body');
      const toggle = header.querySelector('.card-toggle');
      const cardId = card.dataset.card;
      body.classList.toggle('open');
      toggle.classList.toggle('open');
      if (body.classList.contains('open')) openCards.add(cardId);
      else openCards.delete(cardId);
    });
  });
}

// Search with debounce
let searchTimer;
document.getElementById('search').addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = e.target.value.trim();
    renderContent();
  }, 200);
});

// Theme
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.style.cssText = 'position:fixed;top:16px;right:16px;z-index:200;background:var(--bg3);border:1px solid var(--border);font-size:16px;cursor:pointer;padding:10px;border-radius:12px;transition:all .2s;';
document.body.appendChild(themeToggle);
let isDark = localStorage.getItem('theme') !== 'light';
function applyTheme() {
  document.body.classList.toggle('light', !isDark);
  themeToggle.textContent = isDark ? '🌙' : '☀️';
  const mc = document.querySelector('meta[name="theme-color"]');
  if (mc) mc.content = isDark ? '#0a0a12' : '#f0f0f8';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
applyTheme();
themeToggle.addEventListener('click', () => { isDark = !isDark; applyTheme(); });

// Back to top
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 400));
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Footer
const total = CATEGORIES.reduce((s, c) => s + c.sections.length, 0);
document.getElementById('footer').textContent = `🧠 ${total} 条知识 · 更新于 ${LAST_UPDATED} · 由噗噗整理`;

// Init
renderStats();
buildTags();
renderContent();
