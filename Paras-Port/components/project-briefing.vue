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
  <div class="project-briefing tactical-frame">
    <!-- Huge Mission Serial Watermark -->
    <div class="mission-watermark font-display" aria-hidden="true">
      0{{ index + 1 }}
    </div>

    <!-- Header Telemetry Strip -->
    <div class="project-briefing__header font-mono">
      <div class="briefing-callsign">
        <span class="briefing-tag">MISSION //</span>
        <span class="briefing-code">{{ project.callsign }}</span>
      </div>

      <div class="briefing-status">
        <stamp-badge 
          :text="project.status" 
          :variant="project.statusType === 'success' ? 'green' : 'signal'" 
          :angle="-2" 
        />
        <span class="briefing-seq">[{{ index + 1 }} / {{ total }}]</span>
      </div>
    </div>

    <!-- Split Content: Left Technical Spec, Right Abstract Vector Graphic -->
    <div class="project-briefing__grid">
      <!-- Left Column: Objectives & Specs -->
      <div class="project-briefing__info">
        <h3 class="mission-name font-display">{{ project.name }}</h3>
        
        <p class="mission-summary font-body">
          {{ project.summary }}
        </p>

        <!-- Tech Stack Badges -->
        <div class="mission-stack font-mono">
          <span class="stack-label">STACK:</span>
          <div class="stack-pills">
            <span 
              v-for="(tech, tIdx) in project.stack" 
              :key="tIdx"
              class="stack-pill"
            >
              [{{ tech }}]
            </span>
          </div>
        </div>

        <!-- Objectives Checklist -->
        <div class="mission-objectives font-mono">
          <span class="objectives-title">MISSION OBJECTIVES:</span>
          <ul class="objectives-list">
            <li 
              v-for="(obj, oIdx) in project.objectives" 
              :key="oIdx"
              class="objective-item"
            >
              <span class="obj-check">✓</span>
              <span>{{ obj }}</span>
            </li>
          </ul>
        </div>

        <!-- CTA Debrief Link -->
        <div class="mission-actions">
          <a 
            :href="project.debriefUrl" 
            target="_blank"
            class="tactical-btn briefing-btn"
            data-cursor-label="DEBRIEF"
          >
            <span>VIEW DEBRIEF</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <!-- Right Column: Abstract Tactical Blueprint -->
      <div class="project-briefing__visual">
        <div class="blueprint-frame">
          <div class="blueprint-scanline" aria-hidden="true"></div>
          <img 
            :src="project.graphic || `/projects/${project.id === 'd2c-guru' ? 'd2cguru' : project.id === 'used-cars-platform' ? 'usedcars' : project.id === 'ani-help' ? 'anihelp' : 'blog'}.svg`" 
            :alt="`${project.name} technical blueprint`" 
            class="blueprint-img"
            loading="lazy"
            width="600"
            height="380"
          />
          <div class="blueprint-telemetry font-mono">
            <span>SYS: {{ project.graphicCode || 'ARCH-ENG-01' }}</span>
            <span>VECTOR HUD ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-briefing {
  position: relative;
  width: 82vw;
  max-width: 960px;
  flex-shrink: 0;
  padding: 1.25rem 1.75rem;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-strong);
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 1024px) {
  .project-briefing {
    max-height: calc(100vh - 160px);
  }
}

@media (max-width: 768px) {
  .project-briefing {
    width: 90vw;
    padding: 1.25rem;
  }
}

.mission-watermark {
  position: absolute;
  right: 1.25rem;
  bottom: 0.25rem;
  font-size: clamp(6rem, 15vw, 11rem);
  line-height: 0.8;
  color: var(--ink-primary);
  opacity: 0.035;
  user-select: none;
  pointer-events: none;
}

.dark .mission-watermark {
  opacity: 0.055;
}

.project-briefing__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px dashed var(--border-dash);
  padding-bottom: 0.5rem;
  margin-bottom: 0.75rem;
}

.briefing-callsign {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
}

.briefing-tag {
  color: var(--ink-muted);
}

.briefing-code {
  color: var(--accent-signal);
  font-weight: 700;
}

.briefing-status {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.briefing-seq {
  font-size: 0.6875rem;
  color: var(--ink-muted);
}

.project-briefing__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  position: relative;
  z-index: 2;
  align-items: center;
}

@media (min-width: 860px) {
  .project-briefing__grid {
    grid-template-columns: 1.1fr 1fr;
    gap: 1.5rem;
  }
}

.mission-name {
  font-size: clamp(1.65rem, 2.75vw, 2.35rem);
  line-height: 1;
  color: var(--ink-primary);
  margin-bottom: 0.4rem;
}

.mission-summary {
  font-size: 0.95rem;
  line-height: 1.45;
  color: var(--ink-secondary);
  margin-bottom: 0.65rem;
}

.mission-stack {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.65rem;
}

.stack-label {
  font-size: 0.625rem;
  color: var(--ink-muted);
  letter-spacing: 0.12em;
}

.stack-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.stack-pill {
  font-size: 0.6875rem;
  background-color: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--ink-primary);
  padding: 0.2rem 0.5rem;
  font-weight: 700;
}

.mission-objectives {
  background-color: var(--bg-surface-elevated);
  padding: 0.65rem 0.85rem;
  border: 1px dashed var(--border-dash);
  margin-bottom: 0.75rem;
}

.objectives-title {
  display: block;
  font-size: 0.625rem;
  color: var(--ink-muted);
  letter-spacing: 0.12em;
  margin-bottom: 0.4rem;
}

.objectives-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.objective-item {
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  font-size: 0.75rem;
  line-height: 1.35;
  color: var(--ink-primary);
}

.obj-check {
  color: var(--accent-phosphor);
  font-weight: 700;
  flex-shrink: 0;
}

.briefing-btn {
  padding: 0.5rem 1.15rem;
  font-size: 0.75rem;
}

/* Blueprint Visual Frame */
.blueprint-frame {
  position: relative;
  background-color: #0B0D0A;
  border: 1px solid var(--border-strong);
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

.blueprint-img {
  width: 100%;
  height: auto;
  max-height: 230px;
  object-fit: contain;
  display: block;
  background-color: #0B0D0A;
}

.blueprint-scanline {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0px,
    rgba(0, 0, 0, 0.2) 1px,
    transparent 1px,
    transparent 3px
  );
  pointer-events: none;
}

.blueprint-telemetry {
  display: flex;
  justify-content: space-between;
  padding: 0.35rem 0.65rem;
  background-color: #141712;
  border-top: 1px solid rgba(124, 255, 107, 0.2);
  font-size: 0.625rem;
  color: #7CFF6B;
}

@media (max-width: 768px) {
  .project-briefing {
    width: 88vw;
    padding: 1rem;
    gap: 0.75rem;
  }

  .mission-name {
    font-size: clamp(1.35rem, 4.5vw, 1.85rem);
  }

  .mission-summary {
    font-size: 0.875rem;
    line-height: 1.4;
  }

  .blueprint-img {
    max-height: 160px;
  }
}
</style>
