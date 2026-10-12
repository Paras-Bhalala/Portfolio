<script setup>
import { profile } from '~/data/portfolio'
import { useIstClock } from '~/composables/use-ist-clock'

const isPaletteOpen = ref(false)
const isMobileMenuOpen = ref(false)
const colorMode = useColorMode()
const { timeString } = useIstClock()

const navSections = [
  { id: 'about', num: '01', label: 'PROFILE' },
  { id: 'experience', num: '02', label: 'SERVICE' },
  { id: 'skills', num: '03', label: 'ARSENAL' },
  { id: 'education', num: '04', label: 'TRAINING' },
  { id: 'projects', num: '05', label: 'MISSIONS' }
]

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const handleGlobalKeydown = (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    isPaletteOpen.value = !isPaletteOpen.value
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown)
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleGlobalKeydown)
  }
})
</script>

<template>
  <header class="app-header">
    <div class="dossier-container app-header__inner">
      <!-- Logo -->
      <a href="#hero" class="app-header__logo" data-cursor-label="RETURN">
        <span class="app-header__logo-name">PARAS BHALALA</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="app-header__nav" aria-label="Dossier Files Navigation">
        <a 
          v-for="item in navSections" 
          :key="item.id"
          :href="`#${item.id}`"
          class="app-header__nav-link"
          data-cursor-label="VIEW FILE"
        >
          <span class="app-header__nav-num">{{ item.num }}</span>
          <scramble-text :text="item.label" :trigger-on-hover="true" />
        </a>
      </nav>

      <!-- Right Controls -->
      <div class="app-header__controls">
        <!-- Command Palette Trigger -->
        <button 
          type="button" 
          class="app-header__cmd-btn"
          aria-label="Open command palette"
          data-cursor-label="CTRL+K"
          @click="isPaletteOpen = true"
        >
          <span class="cmd-icon">⌘</span>
          <span class="cmd-label">CTRL+K</span>
        </button>

        <!-- Night-Ops / Light Mode Toggle -->
        <button 
          type="button" 
          class="app-header__theme-btn"
          :aria-label="`Switch to ${colorMode.value === 'dark' ? 'Light Paper' : 'Night-Ops Phosphor'} theme`"
          data-cursor-label="THEME"
          @click="toggleTheme"
        >
          <span v-if="colorMode.value === 'dark'" class="theme-icon">◐ NIGHT-OPS</span>
          <span v-else class="theme-icon">◑ PAPER</span>
        </button>

        <!-- Resume CTA -->
        <a 
          :href="profile.resumeUrl" 
          target="_blank"
          class="tactical-btn app-header__resume-btn"
          data-cursor-label="RESUME"
        >
          <span>RESUME</span>
          <span class="btn-arrow">↓</span>
        </a>

        <!-- Mobile Menu Hamburger Button -->
        <button 
          type="button"
          class="app-header__hamburger"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle mobile directory"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="hamburger-bar" :class="{ 'hamburger-bar--open-1': isMobileMenuOpen }"></span>
          <span class="hamburger-bar" :class="{ 'hamburger-bar--open-2': isMobileMenuOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Tactical Navigation Overlay -->
    <div 
      v-if="isMobileMenuOpen" 
      class="mobile-drawer"
      role="dialog"
      aria-modal="true"
    >
      <div class="mobile-drawer__header">
        <div class="mobile-drawer__telemetry font-mono">
          <span>TIME: {{ timeString }}</span>
          <span>COORD: {{ profile.coordinates }}</span>
        </div>
        <button 
          type="button" 
          class="mobile-drawer__close"
          aria-label="Close directory"
          @click="isMobileMenuOpen = false"
        >
          [CLOSE ✕]
        </button>
      </div>

      <nav class="mobile-drawer__nav">
        <a 
          v-for="item in navSections" 
          :key="item.id"
          :href="`#${item.id}`"
          class="mobile-drawer__link"
          @click="isMobileMenuOpen = false"
        >
          <span class="mobile-drawer__num font-mono">FILE {{ item.num }}</span>
          <span class="mobile-drawer__title font-display">{{ item.label }}</span>
          <span class="mobile-drawer__arrow">→</span>
        </a>
      </nav>

      <div class="mobile-drawer__actions">
        <button 
          type="button" 
          class="tactical-btn tactical-btn--ghost w-full"
          @click="toggleTheme"
        >
          MODE: {{ colorMode.value === 'dark' ? 'NIGHT-OPS PHOSPHOR' : 'PAPER DOSSIER' }}
        </button>
        <a 
          :href="profile.resumeUrl" 
          target="_blank"
          class="tactical-btn w-full text-center"
          @click="isMobileMenuOpen = false"
        >
          RESUME (PDF)
        </a>
      </div>
    </div>

    <!-- Command Palette Dialog -->
    <command-palette 
      :is-open="isPaletteOpen" 
      @close="isPaletteOpen = false" 
    />
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--bg-overlay);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-subtle);
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.app-header__inner {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-header__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--ink-primary);
}

.app-header__logo-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent-signal);
  letter-spacing: 0.15em;
  font-weight: 700;
}

.app-header__logo-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  letter-spacing: 0.05em;
}

.app-header__nav {
  display: none;
  align-items: center;
  gap: 1.75rem;
}

@media (min-width: 960px) {
  .app-header__nav {
    display: flex;
  }
}

.app-header__nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--ink-secondary);
  transition: color 0.15s ease;
  padding: 0.25rem 0;
}

.app-header__nav-num {
  color: var(--accent-signal);
  font-weight: 700;
}

.app-header__nav-link:hover {
  color: var(--ink-primary);
}

.app-header__controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.app-header__cmd-btn {
  display: none;
  align-items: center;
  gap: 0.35rem;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-strong);
  color: var(--ink-secondary);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  padding: 0.4rem 0.65rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.15s ease;
}

@media (min-width: 768px) {
  .app-header__cmd-btn {
    display: inline-flex;
  }
}

.app-header__cmd-btn:hover {
  border-color: var(--accent-signal);
  color: var(--ink-primary);
}

.app-header__theme-btn {
  display: inline-flex;
  align-items: center;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--ink-primary);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  padding: 0.4rem 0.65rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.app-header__theme-btn:hover {
  border-color: var(--accent-phosphor);
}

.app-header__resume-btn {
  display: none;
  padding: 0.45rem 0.85rem;
  font-size: 0.75rem;
}

@media (min-width: 640px) {
  .app-header__resume-btn {
    display: inline-flex;
  }
}

.app-header__hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background: var(--bg-surface);
  border: 1px solid var(--border-strong);
  cursor: pointer;
  padding: 0;
  gap: 6px;
}

@media (min-width: 960px) {
  .app-header__hamburger {
    display: none;
  }
}

.hamburger-bar {
  width: 20px;
  height: 2px;
  background-color: var(--ink-primary);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.hamburger-bar--open-1 {
  transform: translateY(4px) rotate(45deg);
}

.hamburger-bar--open-2 {
  transform: translateY(-4px) rotate(-45deg);
}

/* Mobile Drawer */
.mobile-drawer {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 64px);
  background-color: var(--bg-primary);
  border-top: 1px solid var(--border-strong);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  z-index: 999;
}

.mobile-drawer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed var(--border-dash);
  padding-bottom: 1rem;
}

.mobile-drawer__telemetry {
  display: flex;
  flex-direction: column;
  font-size: 0.6875rem;
  color: var(--ink-muted);
}

.mobile-drawer__close {
  background: none;
  border: none;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent-signal);
  font-weight: 700;
  cursor: pointer;
}

.mobile-drawer__nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.mobile-drawer__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  text-decoration: none;
  color: var(--ink-primary);
  transition: border-color 0.15s ease;
}

.mobile-drawer__link:hover {
  border-color: var(--accent-signal);
}

.mobile-drawer__num {
  font-size: 0.75rem;
  color: var(--accent-signal);
  font-weight: 700;
}

.mobile-drawer__title {
  font-size: 1.5rem;
  flex: 1;
  margin-left: 1rem;
}

.mobile-drawer__arrow {
  font-family: var(--font-mono);
  color: var(--accent-signal);
}

.mobile-drawer__actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-dash);
}

.w-full {
  width: 100%;
}

.text-center {
  text-align: center;
}
</style>
