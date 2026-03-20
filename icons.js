// Pixel art SVG icons - with colors!
const PIXEL_ICONS = {
  brain: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="4" y="1" width="8" height="2" fill="#f472b6"/>
    <rect x="3" y="3" width="2" height="2" fill="#f472b6"/>
    <rect x="11" y="3" width="2" height="2" fill="#f472b6"/>
    <rect x="2" y="5" width="2" height="4" fill="#ec4899"/>
    <rect x="12" y="5" width="2" height="4" fill="#ec4899"/>
    <rect x="5" y="5" width="2" height="2" fill="#fda4af"/>
    <rect x="9" y="5" width="2" height="2" fill="#fda4af"/>
    <rect x="7" y="3" width="2" height="6" fill="#fda4af" opacity=".6"/>
    <rect x="3" y="9" width="2" height="2" fill="#ec4899"/>
    <rect x="11" y="9" width="2" height="2" fill="#ec4899"/>
    <rect x="5" y="11" width="6" height="2" fill="#f472b6"/>
    <rect x="6" y="13" width="4" height="2" fill="#db2777"/>
  </svg>`,

  wrench: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="10" y="1" width="2" height="2" fill="#94a3b8"/>
    <rect x="12" y="1" width="2" height="2" fill="#cbd5e1"/>
    <rect x="12" y="3" width="2" height="2" fill="#94a3b8"/>
    <rect x="10" y="5" width="2" height="2" fill="#64748b"/>
    <rect x="8" y="7" width="2" height="2" fill="#64748b"/>
    <rect x="6" y="9" width="2" height="2" fill="#8b5e3c"/>
    <rect x="4" y="11" width="2" height="2" fill="#a0714f"/>
    <rect x="2" y="13" width="2" height="2" fill="#8b5e3c"/>
    <rect x="1" y="12" width="2" height="2" fill="#a0714f"/>
    <rect x="3" y="10" width="2" height="2" fill="#8b5e3c"/>
  </svg>`,

  robot: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="7" y="0" width="2" height="2" fill="#f87171"/>
    <rect x="6" y="2" width="4" height="2" fill="#94a3b8"/>
    <rect x="3" y="4" width="10" height="2" fill="#64748b"/>
    <rect x="2" y="6" width="12" height="4" fill="#94a3b8"/>
    <rect x="4" y="7" width="2" height="2" fill="#38bdf8"/>
    <rect x="10" y="7" width="2" height="2" fill="#38bdf8"/>
    <rect x="0" y="7" width="2" height="2" fill="#64748b"/>
    <rect x="14" y="7" width="2" height="2" fill="#64748b"/>
    <rect x="3" y="10" width="10" height="2" fill="#64748b"/>
    <rect x="4" y="12" width="3" height="2" fill="#475569"/>
    <rect x="9" y="12" width="3" height="2" fill="#475569"/>
  </svg>`,

  crosshair: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="7" y="0" width="2" height="4" fill="#60a5fa"/>
    <rect x="7" y="12" width="2" height="4" fill="#60a5fa"/>
    <rect x="0" y="7" width="4" height="2" fill="#60a5fa"/>
    <rect x="12" y="7" width="4" height="2" fill="#60a5fa"/>
    <rect x="5" y="5" width="6" height="6" fill="#3b82f6" opacity=".15"/>
    <rect x="5" y="5" width="2" height="2" fill="#3b82f6"/>
    <rect x="9" y="5" width="2" height="2" fill="#3b82f6"/>
    <rect x="5" y="9" width="2" height="2" fill="#3b82f6"/>
    <rect x="9" y="9" width="2" height="2" fill="#3b82f6"/>
    <rect x="7" y="7" width="2" height="2" fill="#f87171"/>
  </svg>`,

  phone: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="4" y="1" width="8" height="14" fill="#334155"/>
    <rect x="5" y="3" width="6" height="8" fill="#38bdf8"/>
    <rect x="5" y="3" width="6" height="3" fill="#7dd3fc"/>
    <rect x="7" y="12" width="2" height="2" fill="#64748b"/>
  </svg>`,

  plane: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="7" y="0" width="2" height="4" fill="#f97316"/>
    <rect x="6" y="4" width="4" height="2" fill="#fb923c"/>
    <rect x="1" y="6" width="14" height="2" fill="#e2e8f0"/>
    <rect x="7" y="8" width="2" height="4" fill="#cbd5e1"/>
    <rect x="4" y="12" width="8" height="2" fill="#e2e8f0"/>
    <rect x="3" y="6" width="2" height="2" fill="#f87171"/>
    <rect x="11" y="6" width="2" height="2" fill="#f87171"/>
    <rect x="7" y="6" width="2" height="2" fill="#38bdf8"/>
  </svg>`,

  rocket: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="7" y="0" width="2" height="2" fill="#f87171"/>
    <rect x="6" y="2" width="4" height="2" fill="#e2e8f0"/>
    <rect x="5" y="4" width="6" height="4" fill="#e2e8f0"/>
    <rect x="5" y="8" width="6" height="2" fill="#cbd5e1"/>
    <rect x="3" y="7" width="2" height="4" fill="#60a5fa"/>
    <rect x="11" y="7" width="2" height="4" fill="#60a5fa"/>
    <rect x="6" y="10" width="4" height="2" fill="#94a3b8"/>
    <rect x="7" y="12" width="2" height="2" fill="#f97316"/>
    <rect x="6" y="13" width="2" height="2" fill="#fbbf24" opacity=".7"/>
    <rect x="8" y="14" width="2" height="2" fill="#f97316" opacity=".5"/>
  </svg>`,

  box: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="1" y="4" width="14" height="2" fill="#d97706"/>
    <rect x="7" y="4" width="2" height="2" fill="#fbbf24"/>
    <rect x="2" y="6" width="12" height="8" fill="#b45309" opacity=".8"/>
    <rect x="2" y="6" width="2" height="8" fill="#92400e"/>
    <rect x="12" y="6" width="2" height="8" fill="#92400e"/>
    <rect x="2" y="12" width="12" height="2" fill="#92400e"/>
    <rect x="7" y="6" width="2" height="4" fill="#d97706"/>
  </svg>`,

  clock: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="4" y="1" width="8" height="2" fill="#fbbf24"/>
    <rect x="2" y="3" width="2" height="2" fill="#f59e0b"/>
    <rect x="12" y="3" width="2" height="2" fill="#f59e0b"/>
    <rect x="1" y="5" width="2" height="6" fill="#f59e0b"/>
    <rect x="13" y="5" width="2" height="6" fill="#f59e0b"/>
    <rect x="2" y="11" width="2" height="2" fill="#f59e0b"/>
    <rect x="12" y="11" width="2" height="2" fill="#f59e0b"/>
    <rect x="4" y="13" width="8" height="2" fill="#fbbf24"/>
    <rect x="3" y="3" width="10" height="10" fill="#fef3c7" opacity=".3"/>
    <rect x="7" y="4" width="2" height="5" fill="#1e293b"/>
    <rect x="9" y="7" width="2" height="2" fill="#1e293b"/>
  </svg>`,

  puzzle: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="5" y="0" width="2" height="2" fill="#a78bfa"/>
    <rect x="3" y="2" width="6" height="2" fill="#8b5cf6"/>
    <rect x="1" y="4" width="6" height="6" fill="#7c3aed"/>
    <rect x="7" y="6" width="2" height="2" fill="#a78bfa"/>
    <rect x="9" y="4" width="6" height="6" fill="#6d28d9"/>
    <rect x="3" y="10" width="6" height="2" fill="#5b21b6"/>
    <rect x="9" y="10" width="6" height="2" fill="#4c1d95"/>
    <rect x="3" y="12" width="6" height="2" fill="#5b21b6"/>
  </svg>`,

  gear: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="6" y="0" width="4" height="2" fill="#94a3b8"/>
    <rect x="6" y="14" width="4" height="2" fill="#94a3b8"/>
    <rect x="0" y="6" width="2" height="4" fill="#94a3b8"/>
    <rect x="14" y="6" width="2" height="4" fill="#94a3b8"/>
    <rect x="2" y="2" width="2" height="2" fill="#94a3b8"/>
    <rect x="12" y="2" width="2" height="2" fill="#94a3b8"/>
    <rect x="2" y="12" width="2" height="2" fill="#94a3b8"/>
    <rect x="12" y="12" width="2" height="2" fill="#94a3b8"/>
    <rect x="4" y="4" width="8" height="8" fill="#64748b"/>
    <rect x="6" y="6" width="4" height="4" fill="#cbd5e1"/>
  </svg>`,

  coin: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="4" y="1" width="8" height="2" fill="#fbbf24"/>
    <rect x="2" y="3" width="2" height="2" fill="#f59e0b"/>
    <rect x="12" y="3" width="2" height="2" fill="#f59e0b"/>
    <rect x="1" y="5" width="2" height="6" fill="#d97706"/>
    <rect x="13" y="5" width="2" height="6" fill="#d97706"/>
    <rect x="2" y="11" width="2" height="2" fill="#f59e0b"/>
    <rect x="12" y="11" width="2" height="2" fill="#f59e0b"/>
    <rect x="4" y="13" width="8" height="2" fill="#fbbf24"/>
    <rect x="3" y="3" width="10" height="10" fill="#fcd34d" opacity=".3"/>
    <rect x="7" y="4" width="2" height="8" fill="#92400e" opacity=".6"/>
    <rect x="5" y="6" width="6" height="2" fill="#92400e" opacity=".4"/>
  </svg>`,

  flag: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="2" y="2" width="2" height="12" fill="#78716c"/>
    <rect x="4" y="2" width="10" height="2" fill="#1e3a8a"/>
    <rect x="4" y="4" width="10" height="2" fill="#dc2626"/>
    <rect x="4" y="6" width="10" height="2" fill="#e2e8f0"/>
    <rect x="4" y="8" width="8" height="2" fill="#1e3a8a"/>
    <rect x="8" y="2" width="2" height="4" fill="#e2e8f0" opacity=".4"/>
    <rect x="4" y="3" width="10" height="2" fill="#dc2626" opacity=".3"/>
  </svg>`,

  apple: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="8" y="0" width="2" height="2" fill="#16a34a"/>
    <rect x="9" y="1" width="2" height="2" fill="#22c55e"/>
    <rect x="4" y="4" width="8" height="2" fill="#dc2626"/>
    <rect x="3" y="6" width="10" height="6" fill="#ef4444"/>
    <rect x="4" y="12" width="8" height="2" fill="#dc2626"/>
    <rect x="5" y="14" width="6" height="1" fill="#b91c1c"/>
    <rect x="6" y="6" width="2" height="2" fill="#fca5a5" opacity=".5"/>
  </svg>`,

  lightning: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="8" y="0" width="2" height="2" fill="#fbbf24"/>
    <rect x="7" y="2" width="2" height="2" fill="#fbbf24"/>
    <rect x="6" y="4" width="2" height="2" fill="#f59e0b"/>
    <rect x="4" y="6" width="6" height="2" fill="#fbbf24"/>
    <rect x="8" y="8" width="2" height="2" fill="#f59e0b"/>
    <rect x="7" y="10" width="2" height="2" fill="#f59e0b"/>
    <rect x="6" y="12" width="2" height="2" fill="#d97706"/>
    <rect x="5" y="14" width="2" height="2" fill="#d97706"/>
  </svg>`,

  book: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="2" y="1" width="12" height="2" fill="#6ee7b7"/>
    <rect x="1" y="3" width="2" height="10" fill="#34d399"/>
    <rect x="13" y="3" width="2" height="10" fill="#34d399"/>
    <rect x="2" y="13" width="12" height="2" fill="#6ee7b7"/>
    <rect x="3" y="3" width="10" height="10" fill="#10b981" opacity=".25"/>
    <rect x="5" y="5" width="6" height="2" fill="#6ee7b7" opacity=".7"/>
    <rect x="5" y="8" width="4" height="2" fill="#6ee7b7" opacity=".4"/>
  </svg>`,

  search: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="pixel-icon">
    <rect x="4" y="1" width="6" height="2" fill="#60a5fa"/>
    <rect x="2" y="3" width="2" height="2" fill="#3b82f6"/>
    <rect x="10" y="3" width="2" height="2" fill="#3b82f6"/>
    <rect x="1" y="5" width="2" height="4" fill="#3b82f6"/>
    <rect x="11" y="5" width="2" height="4" fill="#3b82f6"/>
    <rect x="2" y="9" width="2" height="2" fill="#3b82f6"/>
    <rect x="10" y="9" width="2" height="2" fill="#3b82f6"/>
    <rect x="4" y="11" width="6" height="2" fill="#60a5fa"/>
    <rect x="11" y="11" width="2" height="2" fill="#94a3b8"/>
    <rect x="13" y="13" width="2" height="2" fill="#94a3b8"/>
    <rect x="12" y="12" width="2" height="2" fill="#94a3b8"/>
    <rect x="5" y="5" width="4" height="4" fill="#93c5fd" opacity=".2"/>
  </svg>`
};
