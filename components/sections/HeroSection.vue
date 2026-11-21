<script setup>
import { profile } from '~/data/portfolio'
import { useScramble } from '~/composables/useScramble'

const { scramble } = useScramble()

const firstName = ref('PARAS')
const lastName = ref('BHALALA')

// Rotating live developer workspace feeds
const feeds = [
  {
    id: 'night-ops',
    label: 'NIGHT CODING OPS',
    badge: 'SYS // ACTIVE BUILD',
    status: 'ACTIVE',
    src: '/animated/night-developer.gif',
    sub: 'Deep focus architecture & modular components'
  },
  {
    id: 'focus-sprint',
    label: 'FOCUS WORKSTATION',
    badge: 'ENV // PRODUCTION',
    status: 'ACTIVE',
    src: '/animated/workstation.gif',
    sub: 'Frontend architecture & responsive systems'
  },
  {
    id: 'sprint-ops',
    label: 'CORE SPRINT OPS',
    badge: 'CORE // SPRINT OPS',
    status: 'ACTIVE',
    src: '/animated/productive.gif',
    sub: 'Vue 3, Nuxt 3 & high-velocity architecture sprints'
  }
]

const currentFeedIndex = ref(0)
const currentFeed = computed(() => feeds[currentFeedIndex.value])
const isPaused = ref(false)
let rotationTimer = null

const startRotation = () => {
  stopRotation()
  rotationTimer = setInterval(() => {
    if (!isPaused.value) {
      currentFeedIndex.value = (currentFeedIndex.value + 1) % feeds.length
    }
  }, 4500)
}

const stopRotation = () => {
  if (rotationTimer) {
    clearInterval(rotationTimer)
    rotationTimer = null
  }
}

const selectFeed = (idx) => {
  currentFeedIndex.value = idx
}

onMounted(() => {
  // Scramble reveal on load
  scramble('PARAS', (val) => {
    firstName.value = val
  }, 1100)

  scramble('BHALALA', (val) => {
    lastName.value = val
  }, 1400)

  // Start auto-changing feed rotation
  startRotation()
})

onBeforeUnmount(() => {
  stopRotation()
})
</script>

<template>
  <section id="hero" class="relative flex flex-col justify-between pt-16 sm:pt-20 lg:pt-[4.5rem] lg:min-h-screen lg:h-screen lg:max-h-screen overflow-x-clip border-b-2 border-ink-primary box-border">
    <div class="dossier-container flex-1 flex flex-col pt-3 pb-5 sm:pt-6 sm:pb-8 lg:justify-between lg:pt-4 lg:pb-5">

      <!-- Main Display Layout: Name on Left, Single Night Coding Ops Image on Right -->
      <div class="my-0 lg:my-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 lg:gap-10 xl:gap-12">
        
        <!-- Left: Name Stack & Role (Original Style Preserved) -->
        <div class="flex-1 flex flex-col gap-2.5 sm:gap-4 max-w-[760px] min-w-0">
          <h1 
            class="font-display text-[clamp(3.75rem,15vw,5.5rem)] sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[8.5rem] 2xl:text-[190px] leading-[0.88] tracking-[-0.02em] my-1 sm:my-2 flex flex-col select-none break-words" 
            aria-label="Paras Bhalala"
          >
            <span class="text-ink-primary">{{ firstName }}</span>
            <span class="text-accent-signal dark:text-accent-phosphor">{{ lastName }}</span>
          </h1>

          <div class="pt-2.5 sm:pt-4 border-t border-dashed border-border-dash">
            <div class="font-mono text-xs sm:text-sm text-ink-primary font-bold tracking-[0.08em] flex flex-wrap items-center gap-x-2 gap-y-1">
              <span class="text-accent-signal">ROLE:</span>
              <span>ASSISTANT SOFTWARE ENGINEER // 7SPAN</span>
            </div>
          </div>
        </div>

        <!-- Right: Animated Multi-Feed Stage (Auto Rotating) -->
        <div 
          class="tactical-frame bg-bg-surface p-3 sm:p-5 w-full max-w-[420px] sm:max-w-[460px] mx-auto lg:mx-0 lg:w-[420px] xl:w-[460px] shrink-0 border border-border-strong shadow-tactical flex flex-col gap-2.5 sm:gap-3 relative overflow-hidden group"
          @mouseenter="isPaused = true"
          @mouseleave="isPaused = false"
        >
          
          <!-- Subtle Dot Grid Background Texture -->
          <div class="absolute inset-0 bg-[radial-gradient(rgba(17,17,17,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(124,255,107,0.08)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" aria-hidden="true"></div>

          <!-- Top Status Strip -->
          <div class="flex items-center justify-between border-b border-dashed border-border-dash pb-2 font-mono text-xs relative z-10">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-accent-signal animate-pulse"></span>
              <span class="font-bold text-accent-signal uppercase tracking-wider text-[0.6875rem] sm:text-xs">LIVE // WORKSPACE FEED</span>
            </div>
          </div>

          <!-- Central Animated Image Viewport with Smooth Transition -->
          <div class="relative bg-[#0B0D0A] border border-border-strong rounded-[2px] overflow-hidden group/stage">
            <!-- Scanlines & Ambient Glare -->
            <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.18)_0px,rgba(0,0,0,0.18)_1px,transparent_1px,transparent_3px)] pointer-events-none z-10" aria-hidden="true"></div>

            <!-- The Animated Image Viewport with Fade Transition -->
            <div class="w-full aspect-[16/10] sm:aspect-[16/10] relative overflow-hidden bg-black flex items-center justify-center">
              <Transition name="feed-fade" mode="out-in">
                <img 
                  :key="currentFeed.id"
                  :src="currentFeed.src" 
                  :alt="currentFeed.label"
                  class="w-full h-full object-cover object-center transition-all duration-500 group-hover/stage:scale-105"
                  loading="eager"
                  width="500"
                  height="320"
                />
              </Transition>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Integrated Rotating Marquee -->
    <MarqueeTicker :items="profile.marqueeItems" />
  </section>
</template>
