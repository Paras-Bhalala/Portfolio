<script setup>
import { profile } from '~/data/portfolio'
import { useScramble } from '~/composables/use-scramble'

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
  <section id="hero" class="hero-section">
    <!-- Corner HUD Marks -->
    <div class="hud-corner hud-corner--tl" aria-hidden="true">┌ 23.02°N</div>
    <div class="hud-corner hud-corner--tr" aria-hidden="true">72.57°E ┐</div>
    <div class="hud-corner hud-corner--bl" aria-hidden="true">└ LIVE HUD</div>
    <div class="hud-corner hud-corner--br" aria-hidden="true">SECTOR 07 ┘</div>

    <div class="dossier-container hero-section__inner">

      <!-- Main Heading Display: PARAS BHALALA -->
      <div class="hero-display">
        <div class="hero-classification font-mono">
          <span>CLASSIFICATION // UNRESTRICTED DOSSIER</span>
          <stamp-badge text="ACTIVE DUTY - 7SPAN" variant="signal" :angle="2" />
        </div>

        <h1 class="hero-name font-display" aria-label="Paras Bhalala">
          <span class="hero-name__row">{{ firstName }}</span>
          <span class="hero-name__row hero-name__row--accent">{{ lastName }}</span>
        </h1>

        <div class="hero-subline">
          <div class="hero-subline__role font-mono">
            <span class="role-tag">ROLE:</span>
            <span>ASSISTANT SOFTWARE ENGINEER // 7SPAN</span>
          </div>
          <div class="hero-subline__origin font-mono">
            <span>ORIGIN: SAINIK SCHOOL BALACHADI // NCC CADET</span>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="hero-actions">
        <div class="hero-actions__btns">
          <a href="#about" class="tactical-btn" data-cursor-label="INSPECT">
            <span>OPEN FILE 01</span>
            <span>↓</span>
          </a>
          <a href="#projects" class="tactical-btn tactical-btn--ghost" data-cursor-label="MISSIONS">
            <span>TACTICAL MISSIONS</span>
            <span>→</span>
          </a>
        </div>

        <div class="hero-actions__note font-mono">
          <span>// DISPATCH PROTOCOL: AUTONOMOUS & ADAPTIVE</span>
        </div>
      </div>
    </div>

    <!-- Integrated Rotating Marquee -->
    <marquee-ticker :items="profile.marqueeItems" />
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5rem;
  overflow: hidden;
  border-bottom: 2px solid var(--ink-primary);
}

@media (min-width: 1024px) {
  .hero-section {
    height: 100vh;
    max-height: 100vh;
    padding-top: 4.5rem;
    box-sizing: border-box;
  }
}

.hero-section__inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 3rem;
}

@media (min-width: 1024px) {
  .hero-section__inner {
    padding-top: 1rem;
    padding-bottom: 1.25rem;
  }
}

/* Corner Marks */
.hud-corner {
  position: absolute;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--ink-muted);
  user-select: none;
  pointer-events: none;
  opacity: 0.6;
}

.hud-corner--tl { top: 76px; left: 1.5rem; }
.hud-corner--tr { top: 76px; right: 1.5rem; }
.hud-corner--bl { bottom: 3.5rem; left: 1.5rem; }
.hud-corner--br { bottom: 3.5rem; right: 1.5rem; }

@media (max-width: 768px) {
  .hud-corner { display: none; }
}
/* Display Stack */
.hero-display {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto 0;
}

.hero-classification {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.75rem;
  color: var(--ink-muted);
  letter-spacing: 0.15em;
}

.hero-name {
  font-size: clamp(3.25rem, 13vw, 12.5rem);
  line-height: 0.88;
  letter-spacing: -0.02em;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  user-select: none;
}

.hero-name__row {
  color: var(--ink-primary);
}

.hero-name__row--accent {
  color: var(--accent-signal);
}

.dark .hero-name__row--accent {
  color: var(--accent-phosphor);
}

.hero-subline {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-dash);
}

@media (min-width: 768px) {
  .hero-subline {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.hero-subline__role {
  font-size: 0.875rem;
  color: var(--ink-primary);
  font-weight: 700;
  letter-spacing: 0.08em;
}

.role-tag {
  color: var(--accent-signal);
  margin-right: 0.5rem;
}

.hero-subline__origin {
  font-size: 0.8125rem;
  color: var(--ink-muted);
  letter-spacing: 0.1em;
}

/* Actions Footer */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 2rem;
}

.hero-actions__btns {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.hero-actions__note {
  font-size: 0.75rem;
  color: var(--ink-muted);
  letter-spacing: 0.1em;
}

@media (max-width: 640px) {
  .hero-classification {
    font-size: 0.6875rem;
    gap: 0.5rem;
  }
  .hero-subline__role {
    font-size: 0.75rem;
  }
  .hero-subline__origin {
    font-size: 0.6875rem;
  }
  .hero-actions__btns {
    width: 100%;
  }
  .hero-actions__btns .tactical-btn {
    width: 100%;
    justify-content: center;
  }
  .hero-actions__note {
    font-size: 0.6875rem;
  }
}

@keyframes beaconPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.6; }
}
</style>
