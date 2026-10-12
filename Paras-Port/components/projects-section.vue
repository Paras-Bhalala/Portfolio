<script setup>
import { projects } from '~/data/portfolio'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref(null)
const trackRef = ref(null)
let ctx = null

onMounted(() => {
  if (typeof window === 'undefined') return

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger)

  // Only engage horizontal pin on screens >= 1024px and if reduced motion is false
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isDesktop = window.matchMedia('(min-width: 1024px)').matches

  if (isDesktop && !isReducedMotion && sectionRef.value && trackRef.value) {
    ctx = gsap.context(() => {
      const track = trackRef.value
      const totalWidth = track.scrollWidth - window.innerWidth + 120

      gsap.to(track, {
        x: () => -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.value,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true
        }
      })
    }, sectionRef.value)
  }
})

onBeforeUnmount(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <section 
    id="projects" 
    ref="sectionRef" 
    class="projects-pinned-section"
  >
    <div class="dossier-container projects-pinned-section__intro">
      <div class="dossier-section__header">
        <div>
          <div class="dossier-section__meta">
            <span>FILE 05 // DEPLOYMENTS</span>
            <span>● {{ projects.length }} MISSIONS</span>
          </div>
          <h2 class="dossier-section__title">
            TACTICAL <span class="text-accent">MISSIONS</span>
          </h2>
        </div>
        <div class="dossier-section__tag">
          PINNED HUD // HORIZONTAL RECON BRIEFINGS
        </div>
      </div>
    </div>

    <!-- Horizontal Track for Missions -->
    <div class="projects-track-viewport">
      <div ref="trackRef" class="projects-track">
        <project-briefing
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
          :total="projects.length"
        />

        <!-- Final Recon Card: More on GitHub -->
        <div class="tactical-frame mission-outro-card">
          <div class="outro-header font-mono">
            <span>TRANSMISSION TERMINAL</span>
            <stamp-badge text="CLASSIFIED" variant="red" :angle="2" />
          </div>

          <h3 class="outro-title font-display">MORE MISSIONS IN PROGRESS</h3>
          <p class="outro-desc font-body">
            Active repositories, experimental full-stack applications, and Directus/Nuxt prototypes are maintained on GitHub.
          </p>

          <div class="outro-action">
            <a 
              href="https://github.com/Paras-Bhalala" 
              target="_blank"
              class="tactical-btn"
              data-cursor-label="RECON GITHUB"
            >
              <span>ACCESS GITHUB ARCHIVES</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-accent {
  color: var(--accent-signal);
}

.projects-pinned-section {
  position: relative;
  background-color: var(--bg-primary);
  border-bottom: 2px solid var(--ink-primary);
  overflow: hidden;
  padding-top: 5rem;
  padding-bottom: 4rem;
}

@media (min-width: 1024px) {
  .projects-pinned-section {
    height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 4.5rem;
    padding-bottom: 1.5rem;
    box-sizing: border-box;
  }
}

.projects-pinned-section__intro {
  margin-bottom: 0.75rem;
  flex-shrink: 0;
}

.projects-pinned-section__intro .dossier-section__header {
  margin-bottom: 0;
  padding-bottom: 0.5rem;
}

.projects-pinned-section__intro .dossier-section__title {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1;
}

.projects-track-viewport {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 0;
}

@media (min-width: 1024px) {
  .projects-track-viewport {
    overflow: visible;
  }
}

.projects-track {
  display: flex;
  gap: 2rem;
  padding: 0.5rem 1.5rem;
  width: max-content;
  align-items: stretch;
}

@media (min-width: 768px) {
  .projects-track {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    gap: 2.5rem;
  }
}

/* Outro Terminal Card */
.mission-outro-card {
  width: 75vw;
  max-width: 380px;
  max-height: calc(100vh - 165px);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: var(--bg-surface);
  border: 1px dashed var(--border-dash);
}

.outro-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.6875rem;
  color: var(--ink-muted);
  border-bottom: 1px dashed var(--border-dash);
  padding-bottom: 0.75rem;
}

.outro-title {
  font-size: clamp(1.75rem, 2.5vw, 2.25rem);
  line-height: 1.05;
  color: var(--ink-primary);
  margin: 1rem 0 0.75rem;
}

.outro-desc {
  font-size: 1.05rem;
  line-height: 1.5;
  color: var(--ink-secondary);
  margin-bottom: 1.5rem;
}

.outro-action {
  margin-top: auto;
}
</style>
