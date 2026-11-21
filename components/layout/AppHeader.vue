<script setup>
import { profile } from '~/data/portfolio'
import { useIstClock } from '~/composables/useIstClock'

const isMobileMenuOpen = ref(false)
const colorMode = useColorMode()
const { timeString } = useIstClock()

const navSections = [
  { id: 'about', label: 'PROFILE' },
  { id: 'experience', label: 'SERVICE' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'projects', label: 'PROJECTS' }
]

const activeSection = ref('')

const updateActiveSection = () => {
  if (typeof window === 'undefined') return

  const windowHeight = window.innerHeight
  const scrollY = window.scrollY
  const docHeight = document.documentElement.scrollHeight

  // Check if scrolled near bottom of page -> last section
  if (windowHeight + scrollY >= docHeight - 80) {
    activeSection.value = navSections[navSections.length - 1].id
    return
  }

  // Top of page (Hero) -> clear active
  const firstSection = document.getElementById(navSections[0].id)
  if (firstSection) {
    const firstRect = firstSection.getBoundingClientRect()
    if (firstRect.top > windowHeight * 0.45) {
      activeSection.value = ''
      return
    }
  }

  // Determine which section occupies the current reading zone
  let current = ''
  for (const item of navSections) {
    const el = document.getElementById(item.id)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (rect.top <= windowHeight * 0.45 && rect.bottom >= 100) {
      current = item.id
    }
  }

  if (current) {
    activeSection.value = current
  }
}

let ticking = false
const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateActiveSection()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  if (typeof window === 'undefined') return

  const hash = window.location.hash.replace('#', '')
  if (hash && navSections.some(s => s.id === hash)) {
    activeSection.value = hash
  } else {
    updateActiveSection()
  }

  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', onScroll)
  }
})

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-[1000] bg-bg-overlay backdrop-blur-md border-b border-border-subtle transition-colors duration-250">
    <div class="dossier-container h-16 flex items-center justify-between">
      <!-- Logo -->
      <a 
        href="#hero" 
        class="flex items-center gap-2 no-underline text-ink-primary min-w-0" 
        data-cursor-label="RETURN"
        @click="activeSection = ''"
      >
        <span class="font-display text-lg sm:text-xl tracking-[0.05em] truncate">PARAS BHALALA</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden min-[960px]:flex items-center gap-7" aria-label="Dossier Files Navigation">
        <a 
          v-for="item in navSections" 
          :key="item.id"
          :href="`#${item.id}`"
          class="inline-flex items-center gap-1.5 no-underline font-mono text-xs tracking-[0.1em] transition-colors duration-150 py-1"
          :class="activeSection === item.id 
            ? 'text-accent-signal dark:text-accent-phosphor font-bold' 
            : 'text-ink-secondary hover:text-ink-primary'"
          :aria-current="activeSection === item.id ? 'true' : undefined"
          data-cursor-label="VIEW FILE"
          @click="activeSection = item.id"
        >
          <span 
            v-if="activeSection === item.id" 
            class="w-1.5 h-1.5 rounded-full bg-accent-signal dark:bg-accent-phosphor shrink-0 animate-pulse"
            aria-hidden="true"
          ></span>
          <ScrambleText :text="item.label" :trigger-on-hover="true" />
        </a>
      </nav>

      <!-- Right Controls -->
      <div class="flex items-center gap-3">
        <!-- Night-Ops / Light Mode Toggle -->
        <button 
          type="button" 
          class="inline-flex items-center bg-bg-surface border border-border-subtle hover:border-accent-phosphor text-ink-primary font-mono text-[0.6875rem] tracking-[0.1em] px-2.5 py-1.5 rounded-[2px] cursor-pointer transition-all duration-150"
          :aria-label="`Switch to ${colorMode.value === 'dark' ? 'Light Paper' : 'Night-Ops Phosphor'} theme`"
          data-cursor-label="THEME"
          @click="toggleTheme"
        >
          <span v-if="colorMode.value === 'dark'">◐ NIGHT-OPS</span>
          <span v-else>◑ PAPER</span>
        </button>

        <!-- Resume CTA -->
        <a 
          :href="profile.resumeUrl" 
          target="_blank"
          rel="noopener noreferrer"
          class="tactical-btn hidden sm:inline-flex px-3.5 py-2 text-xs"
          data-cursor-label="RESUME"
        >
          <span>RESUME</span>
          <span>↓</span>
        </a>

        <!-- Mobile Menu Hamburger Button -->
        <button 
          type="button"
          class="flex min-[960px]:hidden flex-col justify-center items-center w-[38px] h-[38px] bg-bg-surface border border-border-strong cursor-pointer p-0 gap-1.5"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle mobile directory"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span 
            class="w-5 h-0.5 bg-ink-primary transition-all duration-200" 
            :class="{ 'translate-y-1 rotate-45': isMobileMenuOpen }"
          ></span>
          <span 
            class="w-5 h-0.5 bg-ink-primary transition-all duration-200" 
            :class="{ '-translate-y-1 -rotate-45': isMobileMenuOpen }"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile Tactical Navigation Overlay -->
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-bg-primary border-t border-border-strong p-6 flex flex-col justify-between overflow-y-auto z-[999]"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex justify-between items-center border-b border-dashed border-border-dash pb-4">
        <div class="flex flex-col text-[0.6875rem] text-ink-muted font-mono">
          <span>TIME: {{ timeString }}</span>
          <span>COORD: {{ profile.coordinates }}</span>
        </div>
        <button 
          type="button" 
          class="bg-transparent border-none font-mono text-xs text-accent-signal font-bold cursor-pointer"
          aria-label="Close directory"
          @click="isMobileMenuOpen = false"
        >
          [CLOSE ✕]
        </button>
      </div>

      <nav class="flex flex-col gap-4 my-8">
        <a 
          v-for="item in navSections" 
          :key="item.id"
          :href="`#${item.id}`"
          class="flex items-center justify-between p-4 bg-bg-surface border no-underline transition-all duration-150"
          :class="activeSection === item.id 
            ? 'border-accent-signal dark:border-accent-phosphor bg-accent-signal/5 dark:bg-accent-phosphor/5 text-accent-signal dark:text-accent-phosphor font-bold shadow-tactical' 
            : 'border-border-subtle hover:border-accent-signal text-ink-primary'"
          :aria-current="activeSection === item.id ? 'true' : undefined"
          @click="activeSection = item.id; isMobileMenuOpen = false"
        >
          <span class="text-2xl flex-1 font-display">{{ item.label }}</span>
          <span v-if="activeSection === item.id" class="font-mono text-xs text-accent-signal dark:text-accent-phosphor font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-accent-signal dark:bg-accent-phosphor animate-pulse"></span>
            ACTIVE
          </span>
          <span v-else class="font-mono text-accent-signal dark:text-accent-phosphor">→</span>
        </a>
      </nav>

      <div class="flex flex-col gap-3 pt-4 border-t border-dashed border-border-dash">
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
          rel="noopener noreferrer"
          class="tactical-btn w-full text-center"
          @click="isMobileMenuOpen = false"
        >
          RESUME (PDF)
        </a>
      </div>
    </div>
  </header>
</template>
