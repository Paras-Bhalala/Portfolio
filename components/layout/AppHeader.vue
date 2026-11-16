<script setup>
import { profile } from '~/data/portfolio'
import { useIstClock } from '~/composables/useIstClock'

const isMobileMenuOpen = ref(false)
const colorMode = useColorMode()
const { timeString } = useIstClock()

const navSections = [
  { id: 'about', num: '01', label: 'PROFILE' },
  { id: 'experience', num: '02', label: 'SERVICE' },
  { id: 'skills', num: '03', label: 'SKILLS' },
  { id: 'education', num: '04', label: 'EDUCATION' },
  { id: 'projects', num: '05', label: 'PROJECTS' }
]

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-[1000] bg-bg-overlay backdrop-blur-md border-b border-border-subtle transition-colors duration-250">
    <div class="dossier-container h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="flex items-center gap-2 no-underline text-ink-primary" data-cursor-label="RETURN">
        <span class="font-display text-xl tracking-[0.05em]">PARAS BHALALA</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden min-[960px]:flex items-center gap-7" aria-label="Dossier Files Navigation">
        <a 
          v-for="item in navSections" 
          :key="item.id"
          :href="`#${item.id}`"
          class="inline-flex items-center gap-1.5 no-underline font-mono text-xs tracking-[0.1em] text-ink-secondary hover:text-ink-primary transition-colors duration-150 py-1"
          data-cursor-label="VIEW FILE"
        >
          <span class="text-accent-signal font-bold">{{ item.num }}</span>
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
      class="fixed top-16 left-0 w-screen h-[calc(100vh-64px)] bg-bg-primary border-t border-border-strong p-6 flex flex-col justify-between overflow-y-auto z-[999]"
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
          class="flex items-center justify-between p-4 bg-bg-surface border border-border-subtle hover:border-accent-signal text-ink-primary no-underline transition-colors duration-150"
          @click="isMobileMenuOpen = false"
        >
          <span class="text-xs text-accent-signal font-bold font-mono">FILE {{ item.num }}</span>
          <span class="text-2xl flex-1 ml-4 font-display">{{ item.label }}</span>
          <span class="font-mono text-accent-signal">→</span>
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
          class="tactical-btn w-full text-center"
          @click="isMobileMenuOpen = false"
        >
          RESUME (PDF)
        </a>
      </div>
    </div>
  </header>
</template>
