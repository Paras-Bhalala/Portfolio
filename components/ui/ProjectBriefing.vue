<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <article class="tactical-frame bg-bg-surface p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-accent-signal hover:shadow-card group relative">
    <div>
      <!-- Blueprint Preview Banner -->
      <div class="relative bg-[#0B0D0A] border border-border-strong overflow-hidden mb-4 rounded-[2px] h-48 sm:h-56 flex items-center justify-center">
        <!-- Subtle Scanline Effect -->
        <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.18)_0px,rgba(0,0,0,0.18)_1px,transparent_1px,transparent_3px)] pointer-events-none z-10" aria-hidden="true"></div>

        <!-- Technical SVG Illustration -->
        <img 
          :src="project.graphic || `/projects/${project.id === 'd2c-guru' ? 'd2cguru' : project.id === 'used-cars-platform' ? 'usedcars' : project.id === 'ani-help' ? 'anihelp' : 'blog'}.svg`" 
          :alt="`${project.name} technical preview`" 
          class="w-full h-full object-contain p-2.5 group-hover:scale-105 transition-transform duration-500 ease-out relative z-0"
          loading="lazy"
          width="600"
          height="380"
        />

        <!-- Top Corner Floating Badges -->
        <span class="absolute top-2.5 left-2.5 z-20 font-mono text-[0.625rem] font-bold text-[#7CFF6B] bg-[#0B0D0A]/90 px-2 py-0.5 border border-[#7CFF6B]/40 rounded-[2px] backdrop-blur-sm">
          SYS // {{ project.graphicCode || 'ENG-01' }}
        </span>

        <span 
          class="absolute top-2.5 right-2.5 z-20 font-mono text-[0.625rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[2px] backdrop-blur-sm"
          :class="project.status === 'PRODUCTION' ? 'text-[#7CFF6B] bg-[#0B0D0A]/90 border border-[#7CFF6B]/50' : 'text-accent-signal bg-[#0B0D0A]/90 border border-accent-signal/50'"
        >
          ● {{ project.status }}
        </span>
      </div>

      <!-- Category & Serial -->
      <div class="flex items-center justify-between font-mono text-xs text-ink-muted mb-1.5">
        <span class="text-accent-signal font-bold uppercase tracking-wider">{{ project.callsign }}</span>
        <span class="text-ink-muted font-bold">#0{{ index + 1 }}</span>
      </div>

      <!-- Project Name -->
      <h3 class="font-display text-2xl sm:text-3xl text-ink-primary tracking-wide leading-tight mb-2 group-hover:text-accent-signal transition-colors">
        {{ project.name }}
      </h3>

      <!-- Project Summary -->
      <p class="font-body text-sm sm:text-[0.9375rem] text-ink-secondary leading-relaxed mb-3.5">
        {{ project.summary }}
      </p>

      <!-- Tech Stack Badges -->
      <div class="flex flex-wrap gap-1.5 mb-4 font-mono">
        <span 
          v-for="(tech, tIdx) in project.stack" 
          :key="tIdx"
          class="text-[0.6875rem] px-2 py-0.5 bg-bg-surface-elevated border border-border-subtle text-ink-primary font-medium rounded-[2px] transition-colors group-hover:border-accent-signal/30"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Key Highlights / Architecture Specs -->
      <div class="pt-3 border-t border-dashed border-border-dash mb-4">
        <span class="block font-mono text-[0.5625rem] text-ink-muted uppercase tracking-wider font-bold mb-1.5">
          KEY HIGHLIGHTS:
        </span>
        <ul class="list-none flex flex-col gap-1.5 font-mono text-xs text-ink-secondary">
          <li 
            v-for="(obj, oIdx) in project.objectives" 
            :key="oIdx"
            class="flex items-start gap-2 leading-snug"
          >
            <span class="text-accent-phosphor font-bold shrink-0 mt-0.5">✓</span>
            <span class="text-[0.75rem] sm:text-xs">{{ obj }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Action Link -->
    <div class="pt-3 border-t border-dashed border-border-dash flex items-center justify-between mt-auto">
      <span class="font-mono text-xs text-ink-muted">
        SOURCE REPOSITORY
      </span>
      <a 
        :href="project.debriefUrl" 
        target="_blank"
        rel="noopener noreferrer"
        class="tactical-btn py-1.5 px-3.5 text-xs inline-flex items-center gap-1.5"
        data-cursor-label="GITHUB"
      >
        <span>EXPLORE CODE</span>
        <span>→</span>
      </a>
    </div>
  </article>
</template>
