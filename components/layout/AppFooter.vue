<script setup>
import { profile } from '~/data/portfolio'

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer id="contact" class="relative bg-bg-surface border-t-2 border-ink-primary pt-16 pb-8 lg:min-h-screen lg:flex lg:flex-col lg:justify-center lg:py-14 overflow-hidden box-border">
    <div class="dossier-container">
      <!-- Giant Display Heading -->
      <div class="mb-8">
        <h2 class="font-display text-[clamp(2.35rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.02em] text-ink-primary mb-2">
          LET'S CONNECT
        </h2>
        <p class="font-body text-base sm:text-[clamp(1.1rem,2vw,1.45rem)] text-ink-secondary max-w-[720px]">
          Open for technical discussions, frontend architecture, and mission-critical collaborations.
        </p>
      </div>

      <!-- Contact Dispatch Channels -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <a 
          :href="profile.socials[2].url"
          class="tactical-frame flex flex-col justify-between p-4 sm:p-5 md:p-6 bg-bg-surface-elevated no-underline min-h-0 sm:min-h-[135px] gap-3 sm:gap-0 transition-all duration-200 hover:-translate-y-1 hover:border-accent-signal group"
          data-cursor-label="EMAIL"
        >
          <div class="flex justify-between text-[0.6875rem] text-ink-muted font-mono">
            <span class="text-accent-signal font-bold">[COMM-01]</span>
            <span>DIRECT DISPATCH</span>
          </div>
          <span class="font-mono text-[0.8125rem] sm:text-sm font-bold text-ink-primary break-all my-1.5 sm:my-4">{{ profile.socials[2].address }}</span>
          <span class="font-mono text-xs text-accent-phosphor font-bold group-hover:text-accent-signal">TRANSMIT COMMS →</span>
        </a>

        <a 
          :href="profile.socials[0].url" 
          target="_blank"
          class="tactical-frame flex flex-col justify-between p-4 sm:p-5 md:p-6 bg-bg-surface-elevated no-underline min-h-0 sm:min-h-[135px] gap-3 sm:gap-0 transition-all duration-200 hover:-translate-y-1 hover:border-accent-signal group"
          data-cursor-label="LINKEDIN"
        >
          <div class="flex justify-between text-[0.6875rem] text-ink-muted font-mono">
            <span class="text-accent-signal font-bold">[LNKD-02]</span>
            <span>PROFESSIONAL INTEL</span>
          </div>
          <span class="font-mono text-[0.8125rem] sm:text-sm font-bold text-ink-primary break-all my-1.5 sm:my-4">linkedin.com/in/paras-bhalala</span>
          <span class="font-mono text-xs text-accent-phosphor font-bold group-hover:text-accent-signal">VIEW PROFILE →</span>
        </a>

        <a 
          :href="profile.socials[1].url" 
          target="_blank"
          class="tactical-frame flex flex-col justify-between p-4 sm:p-5 md:p-6 bg-bg-surface-elevated no-underline min-h-0 sm:min-h-[135px] gap-3 sm:gap-0 transition-all duration-200 hover:-translate-y-1 hover:border-accent-signal group"
          data-cursor-label="GITHUB"
        >
          <div class="flex justify-between text-[0.6875rem] text-ink-muted font-mono">
            <span class="text-accent-signal font-bold">[GTHB-03]</span>
            <span>CODE VAULT</span>
          </div>
          <span class="font-mono text-[0.8125rem] sm:text-sm font-bold text-ink-primary break-all my-1.5 sm:my-4">github.com/Paras-Bhalala</span>
          <span class="font-mono text-xs text-accent-phosphor font-bold group-hover:text-accent-signal">RECON REPOSITORIES →</span>
        </a>
      </div>

      <!-- Barcode Graphic & Return Navigation -->
      <div class="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center gap-5 sm:gap-8 border-t border-dashed border-border-dash pt-6 sm:pt-8 mb-8">
        <div class="text-ink-primary flex flex-col gap-2" aria-hidden="true">
          <svg class="h-[38px] sm:h-12 max-w-full sm:max-w-[320px]" viewBox="0 0 520 70" xmlns="http://www.w3.org/2000/svg">
            <!-- Authentic tactical barcode pattern -->
            <rect x="0" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="8" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="14" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="24" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="30" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="42" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="48" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="56" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="66" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="72" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="84" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="92" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="98" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="108" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="116" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="122" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="134" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="140" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="150" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="158" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="164" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="176" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="184" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="190" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="200" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="208" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="214" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="226" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="232" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="242" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="250" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="256" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="268" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="276" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="282" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="292" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="300" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="306" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="318" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="324" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="334" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="342" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="348" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="360" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="368" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="374" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="384" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="392" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="398" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="410" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="416" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="426" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="434" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="440" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="452" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="460" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="466" y="0" width="6" height="60" fill="currentColor"/>
            <rect x="476" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="484" y="0" width="2" height="60" fill="currentColor"/>
            <rect x="490" y="0" width="8" height="60" fill="currentColor"/>
            <rect x="502" y="0" width="4" height="60" fill="currentColor"/>
            <rect x="510" y="0" width="6" height="60" fill="currentColor"/>
          </svg>
          <span class="font-mono text-[0.6875rem] tracking-[0.2em] text-ink-muted">PB-2024-0089-010006 // CADET DOSSIER</span>
        </div>

        <button 
          type="button" 
          class="tactical-btn tactical-btn--ghost w-full sm:w-auto justify-center"
          data-cursor-label="TOP"
          @click="scrollToTop"
        >
          <span>RETURN TO APEX [↑]</span>
        </button>
      </div>

      <!-- Copyright Legal strip -->
      <div class="flex flex-wrap justify-between gap-4 font-mono text-[0.6875rem] text-ink-muted border-t border-border-subtle pt-5">
        <span>© {{ currentYear }} PARAS BHALALA. ALL RIGHTS RESERVED.</span>
        <span>LOCATION: AHMEDABAD, GUJARAT, IN [23.02°N 72.57°E]</span>
      </div>
    </div>
  </footer>
</template>
