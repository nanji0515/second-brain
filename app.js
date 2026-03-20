// Markdown renderer
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

// Init: default all cards open
function initOpenCards() {
  for (const cat of CATEGORIES) {
    for (const sec of cat.sections) {
      openCards.add(cat.id + '-' + sec.title);
    }
  }
}
initOpenCards();

// Build tabs
function buildTabs() {
  const tabs = document.getElementById('tabs');
  const total = CATEGORIES.reduce((s, c) => s + c.sections.length, 0);
  let html = `<div class="tab ${currentCategory === 'all' ? 'active' : ''}" data-id="all">📚 全部 <span class="count">${total}</span></div>`;
  for (const cat of CATEGORIES) {
    html += `<div class="tab ${currentCategory === cat.id ? 'active' : ''}" data-id="${cat.id}">${cat.emoji} ${cat.name} <span class="count">${cat.sections.length}</span></div>`;
  }
  tabs.innerHTML = html;
  tabs.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentCategory = tab.dataset.id;
      buildTabs(); renderContent();
    });
  });
}

// Highlight
function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

// Render
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
      const isOpen = openCards.has(cardId);
      const titleHtml = highlight(sec.title, searchQuery);
      const bodyHtml = searchQuery ? highlight(renderMd(sec.content), searchQuery) : renderMd(sec.content);
      catHtml += `<div class="card" data-card="${cardId}">
        <div class="card-header"><h3>${titleHtml}</h3><span class="arrow ${isOpen ? 'open' : ''}">▶</span></div>
        <div class="card-body ${isOpen ? 'open' : ''}">${bodyHtml}</div></div>`;
    }
    if (catHtml) {
      html += `<div class="category-header">${cat.emoji} ${cat.name}</div>${catHtml}`;
    }
  }
  if (!hasResults) {
    html = `<div class="empty"><span class="emoji">🔍</span>没有找到匹配的知识</div>`;
  }
  content.innerHTML = html;

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
const searchInput = document.getElementById('search');
let searchTimer;
searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = e.target.value.trim();
    if (searchQuery) {
      // Open all matching cards when searching
      for (const cat of CATEGORIES) {
        for (const sec of cat.sections) {
          openCards.add(cat.id + '-' + sec.title);
        }
      }
    }
    renderContent();
  }, 150);
});

// Theme
const themeToggle = document.getElementById('themeToggle');
let isDark = localStorage.getItem('theme') !== 'light';
function applyTheme() {
  document.body.classList.toggle('light', !isDark);
  themeToggle.textContent = isDark ? '🌙' : '☀️';
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#0f0f1a' : '#f5f5fa';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
applyTheme();
themeToggle.addEventListener('click', () => { isDark = !isDark; applyTheme(); });

// Back to top
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 300);
});
backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Footer
const totalSections = CATEGORIES.reduce((s, c) => s + c.sections.length, 0);
document.getElementById('footer').textContent = `${totalSections} 条知识 · 更新于 ${LAST_UPDATED}`;

// Init
buildTabs();
renderContent();
