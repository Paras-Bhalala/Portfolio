<script setup>
import { profile } from '~/data/portfolio'
import { useIstClock } from '~/composables/useIstClock'

const currentYear = new Date().getFullYear()
const { timeString } = useIstClock()
const copied = ref(false)

const copyEmail = async () => {
  const email = profile.socials?.find(s => s.name === 'Email')?.address || 'parasbhalala04@gmail.com'
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(email)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2500)
    } catch {
      // clipboard write failed silently
    }
  }
}

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer id="contact" class="relative bg-bg-surface border-t-2 border-ink-primary pt-16 pb-12 overflow-hidden box-border">
    <div class="dossier-container">
      
      <!-- Top Section: Status & Display Heading -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 border-b border-dashed border-border-dash mb-10">
        <div class="max-w-[760px]">
          <!-- Active Availability Pill -->
          <div class="inline-flex items-center gap-2 font-mono text-xs text-accent-phosphor font-bold uppercase tracking-wider px-3 py-1 rounded-[2px] bg-accent-phosphor/10 border border-accent-phosphor/30 mb-4">
            <span class="w-2 h-2 rounded-full bg-accent-phosphor animate-pulse"></span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <!-- Main Title -->
          <h2 class="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.02em] text-ink-primary mb-3">
            LET'S <span class="text-accent-signal">CONNECT</span>
          </h2>

          <p class="font-body text-base sm:text-lg text-ink-secondary leading-relaxed max-w-[620px]">
            Have an exciting role, a project to collaborate on, or just want to chat about modern frontend engineering? Feel free to reach out directly.
          </p>
        </div>

        <!-- Location & IST Clock Live Widget -->
        <div class="tactical-frame bg-bg-surface-elevated p-4 sm:p-5 flex flex-col gap-2 shrink-0 border border-border-strong w-full sm:w-auto sm:min-w-[260px]">
          <div class="flex items-center justify-between text-xs font-mono text-ink-muted">
            <span class="uppercase font-bold tracking-wider">CURRENT BASE</span>
            <span class="text-accent-signal">● LIVE</span>
          </div>
          <div class="font-mono text-sm font-bold text-ink-primary">
            Ahmedabad, Gujarat, India
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-dashed border-border-dash font-mono text-xs">
            <span class="text-ink-muted">LOCAL TIME:</span>
            <span class="text-accent-phosphor font-bold tracking-wider">{{ timeString }}</span>
          </div>
        </div>
      </div>

      <!-- Contact Channels 3-Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        
        <!-- 1. Direct Email Card -->
        <div class="tactical-frame bg-bg-surface-elevated p-5 sm:p-6 flex flex-col justify-between gap-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent-signal hover:shadow-card group relative">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-[2px] bg-accent-signal/10 border border-accent-signal/30 flex items-center justify-center text-accent-signal group-hover:bg-accent-signal group-hover:text-white transition-colors">
                <!-- Mail Icon -->
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <span class="font-mono text-xs text-ink-muted uppercase tracking-wider font-bold">PRIMARY CHANNEL</span>
            </div>

            <span class="block font-mono text-xs text-accent-signal font-bold uppercase tracking-wider mb-1">DIRECT EMAIL</span>
            <div class="font-mono text-sm sm:text-[0.9375rem] font-bold text-ink-primary break-all leading-snug mb-2">
              parasbhalala04@gmail.com
            </div>
            <p class="font-body text-xs sm:text-sm text-ink-secondary leading-relaxed">
              Fastest way to get in touch. Typically replying within 24 hours.
            </p>
          </div>

          <!-- Email Action Buttons: Mailto + Copy -->
          <div class="flex flex-wrap items-center gap-2 pt-3 border-t border-dashed border-border-dash">
            <a 
              href="mailto:parasbhalala04@gmail.com" 
              class="tactical-btn py-2 px-3 text-xs flex-1 justify-center"
              data-cursor-label="SEND EMAIL"
            >
              <span>SEND EMAIL</span>
              <span>↗</span>
            </a>
            <button 
              type="button" 
              class="tactical-btn tactical-btn--ghost py-2 px-3 text-xs justify-center transition-all"
              :class="{ '!bg-accent-phosphor !text-black !border-accent-phosphor': copied }"
              :aria-label="copied ? 'Email Copied' : 'Copy Email Address'"
              @click="copyEmail"
            >
              <span v-if="copied">COPIED! ✓</span>
              <span v-else>COPY</span>
            </button>
          </div>
        </div>

        <!-- 2. LinkedIn Card -->
        <div class="tactical-frame bg-bg-surface-elevated p-5 sm:p-6 flex flex-col justify-between gap-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent-signal hover:shadow-card group relative">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-[2px] bg-[#0A66C2]/10 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                <!-- LinkedIn Icon -->
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <span class="font-mono text-xs text-ink-muted uppercase tracking-wider font-bold">PROFESSIONAL</span>
            </div>

            <span class="block font-mono text-xs text-accent-signal font-bold uppercase tracking-wider mb-1">LINKEDIN NETWORK</span>
            <div class="font-mono text-sm sm:text-[0.9375rem] font-bold text-ink-primary break-all leading-snug mb-2">
              in/paras-bhalala
            </div>
            <p class="font-body text-xs sm:text-sm text-ink-secondary leading-relaxed">
              Professional history, verified credentials, and networking updates.
            </p>
          </div>

          <div class="pt-3 border-t border-dashed border-border-dash">
            <a 
              href="https://www.linkedin.com/in/paras-bhalala-954b3b247/" 
              target="_blank"
              rel="noopener noreferrer me"
              class="tactical-btn py-2 px-3 text-xs w-full justify-center"
              data-cursor-label="LINKEDIN"
            >
              <span>CONNECT ON LINKEDIN</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <!-- 3. GitHub Card -->
        <div class="tactical-frame bg-bg-surface-elevated p-5 sm:p-6 flex flex-col justify-between gap-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent-signal hover:shadow-card group relative">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-[2px] bg-ink-primary/10 border border-ink-primary/30 flex items-center justify-center text-ink-primary group-hover:bg-ink-primary group-hover:text-ink-inverse transition-colors">
                <!-- GitHub Icon -->
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </div>
              <span class="font-mono text-xs text-ink-muted uppercase tracking-wider font-bold">SOURCE CODE</span>
            </div>

            <span class="block font-mono text-xs text-accent-signal font-bold uppercase tracking-wider mb-1">GITHUB REPOSITORIES</span>
            <div class="font-mono text-sm sm:text-[0.9375rem] font-bold text-ink-primary break-all leading-snug mb-2">
              @Paras-Bhalala
            </div>
            <p class="font-body text-xs sm:text-sm text-ink-secondary leading-relaxed">
              Explore open-source repositories, experiments, and commit logs.
            </p>
          </div>

          <div class="pt-3 border-t border-dashed border-border-dash">
            <a 
              href="https://github.com/Paras-Bhalala" 
              target="_blank"
              rel="noopener noreferrer me"
              class="tactical-btn py-2 px-3 text-xs w-full justify-center"
              data-cursor-label="GITHUB"
            >
              <span>EXPLORE GITHUB</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Quick Resume Bar -->
      <div class="tactical-frame bg-bg-surface-elevated p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-dashed border-border-dash mb-10">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-[2px] bg-accent-signal/10 border border-accent-signal flex items-center justify-center text-accent-signal shrink-0">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="12" y1="18" x2="12" y2="12"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
          </div>
          <div>
            <div class="font-display text-base sm:text-lg text-ink-primary tracking-wide">
              LOOKING FOR MY FULL RESUME & CREDENTIALS?
            </div>
            <span class="font-mono text-xs text-ink-muted">
              PDF FORMAT • UPDATED M.SC IT & EXPERIENCE PROFILE
            </span>
          </div>
        </div>

        <a 
          :href="profile.resumeUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="tactical-btn py-2 px-4 text-xs whitespace-nowrap shrink-0 w-full sm:w-auto justify-center"
          data-cursor-label="RESUME"
        >
          <span>DOWNLOAD RESUME (PDF)</span>
          <span>↓</span>
        </a>
      </div>

      <!-- Copyright, System Meta & Return to Top -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-ink-muted border-t border-border-subtle pt-6">
        <div>
          © {{ currentYear }} PARAS BHALALA. ALL RIGHTS RESERVED. • BUILT WITH NUXT 3 & TAILWIND CSS
        </div>

        <!-- Back to Top Button -->
        <button 
          type="button" 
          class="tactical-btn tactical-btn--ghost py-1.5 px-3 text-xs w-full sm:w-auto justify-center"
          data-cursor-label="TOP"
          @click="scrollToTop"
        >
          <span>BACK TO TOP ↑</span>
        </button>
      </div>

    </div>
  </footer>
</template>
