// Simple markdown to HTML
function md(text) {
  return text
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/\n{2,}/g, '<br><br>')
    .replace(/(?<!\n)\n(?!\n)/g, '\n');
}

// Fix nested lists
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
  return result.join('\n').replace(/<ul><\/ul>/g, '');
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

// Build nav
function buildNav() {
  const nav = document.getElementById('nav');
  const totalSections = CATEGORIES.reduce((s, c) => s + c.sections.length, 0);
  let html = `<div class="nav-item ${currentCategory === 'all' ? 'active' : ''}" data-id="all">
    <span class="emoji">📚</span><span>全部</span><span class="count">${totalSections}</span></div>`;
  for (const cat of CATEGORIES) {
    html += `<div class="nav-item ${currentCategory === cat.id ? 'active' : ''}" data-id="${cat.id}">
      <span class="emoji">${cat.emoji}</span><span>${cat.name}</span><span class="count">${cat.sections.length}</span></div>`;
  }
  nav.innerHTML = html;
  nav.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      currentCategory = item.dataset.id;
      buildNav(); renderContent(); closeSidebar();
    });
  });
}

// Highlight search matches
function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

// Render content
function renderContent() {
  const content = document.getElementById('content');
  let cats = currentCategory === 'all' ? CATEGORIES : CATEGORIES.filter(c => c.id === currentCategory);
  let html = '';
  let hasResults = false;

  for (const cat of cats) {
    let catHtml = '';
    for (const sec of cat.sections) {
      const matchTitle = !searchQuery || sec.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchContent = !searchQuery || sec.content.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchTitle && !matchContent) continue;
      hasResults = true;
      const cardId = cat.id + '-' + sec.title;
      const isOpen = openCards.has(cardId) || !!searchQuery;
      const titleHtml = highlight(sec.title, searchQuery);
      const bodyHtml = searchQuery ? highlight(renderMd(sec.content), searchQuery) : renderMd(sec.content);
      catHtml += `<div class="card" data-card="${cardId}">
        <div class="card-header"><h3>${titleHtml}</h3><span class="arrow ${isOpen ? 'open' : ''}">▶</span></div>
        <div class="card-body ${isOpen ? 'open' : ''}">${bodyHtml}</div></div>`;
    }
    if (catHtml) {
      html += `<div class="category-title">${cat.emoji} ${cat.name}</div>${catHtml}`;
    }
  }
  if (!hasResults) {
    html = `<div class="empty">🔍 没有找到匹配的知识</div>`;
  }
  content.innerHTML = html;

  // Card toggle
  content.querySelectorAll('.card-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.parentElement;
      const body = card.querySelector('.card-body');
      const arrow = header.querySelector('.arrow');
      const cardId = card.dataset.card;
      body.classList.toggle('open');
      arrow.classList.toggle('open');
      if (body.classList.contains('open')) openCards.add(cardId);
      else openCards.delete(cardId);
    });
  });
}

// Search
document.getElementById('search').addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  renderContent();
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
let isDark = localStorage.getItem('theme') !== 'light';
function applyTheme() {
  document.body.classList.toggle('light', !isDark);
  themeToggle.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
applyTheme();
themeToggle.addEventListener('click', () => { isDark = !isDark; applyTheme(); });

// Mobile sidebar
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menuBtn');
function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('open'); }
menuBtn.addEventListener('click', () => { sidebar.classList.add('open'); overlay.classList.add('open'); });
overlay.addEventListener('click', closeSidebar);

// Stats
const totalSections = CATEGORIES.reduce((s, c) => s + c.sections.length, 0);
document.getElementById('stats').textContent = `${totalSections} 条知识 · 更新于 ${LAST_UPDATED}`;

// Init
buildNav();
renderContent();
