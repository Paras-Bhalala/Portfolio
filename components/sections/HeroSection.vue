<script setup>
import { profile } from '~/data/portfolio'
import { useScramble } from '~/composables/useScramble'

const { scramble } = useScramble()

const firstName = ref('PARAS')
const lastName = ref('BHALALA')

onMounted(() => {
  // Scramble reveal on load
  scramble('PARAS', (val) => {
    firstName.value = val
  }, 1100)

  scramble('BHALALA', (val) => {
    lastName.value = val
  }, 1400)
})
</script>

<template>
  <section id="hero" class="relative min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between pt-20 lg:pt-[4.5rem] overflow-hidden border-b-2 border-ink-primary box-border">
    <div class="dossier-container flex-1 flex flex-col justify-between pt-8 pb-12 lg:pt-4 lg:pb-5">

      <!-- Main Heading Display: PARAS BHALALA -->
      <div class="flex flex-col gap-4 my-auto">
        <h1 class="font-display text-[clamp(3.25rem,13vw,12.5rem)] leading-[0.88] tracking-[-0.02em] my-2 flex flex-col select-none" aria-label="Paras Bhalala">
          <span class="text-ink-primary">{{ firstName }}</span>
          <span class="text-accent-signal dark:text-accent-phosphor">{{ lastName }}</span>
        </h1>

        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-2 pt-4 border-t border-dashed border-border-dash">
          <div class="font-mono text-xs sm:text-sm text-ink-primary font-bold tracking-[0.08em]">
            <span class="text-accent-signal mr-2">ROLE:</span>
            <span>ASSISTANT SOFTWARE ENGINEER // 7SPAN</span>
          </div>
          <div class="font-mono text-[0.6875rem] sm:text-[0.8125rem] text-ink-muted tracking-[0.1em]">
            <span>ORIGIN: SAINIK SCHOOL BALACHADI // NCC CADET</span>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="flex flex-wrap items-center gap-6 pt-8">
        <div class="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <a href="#about" class="tactical-btn w-full sm:w-auto justify-center" data-cursor-label="INSPECT">
            <span>OPEN FILE 01</span>
            <span>↓</span>
          </a>
          <a href="#projects" class="tactical-btn tactical-btn--ghost w-full sm:w-auto justify-center" data-cursor-label="PROJECTS">
            <span>FEATURED PROJECTS</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Integrated Rotating Marquee -->
    <MarqueeTicker :items="profile.marqueeItems" />
  </section>
</template>
