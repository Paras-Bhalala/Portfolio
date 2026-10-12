<script setup>
import { education } from '~/data/portfolio'
</script>

<template>
  <section id="education" class="dossier-section">
    <div class="dossier-container">
      <!-- Section Header -->
      <div class="dossier-section__header">
        <div>
          <div class="dossier-section__meta">
            <span>FILE 04 // ACADEMICS</span>
            <span>● TRAINING RECORD</span>
          </div>
          <h2 class="dossier-section__title">
            CADET <span class="text-accent">TRAINING</span>
          </h2>
        </div>
        <div class="dossier-section__tag">
          INSTITUTIONAL SERVICE CHRONOLOGY
        </div>
      </div>

      <!-- Vertical Military Service Record Timeline -->
      <div class="timeline-container">
        <div class="timeline-spine" aria-hidden="true"></div>

        <div class="timeline-entries">
          <article 
            v-for="(item, index) in education" 
            :key="index"
            class="timeline-card-wrap"
          >
            <!-- Timeline Pin Indicator -->
            <div class="timeline-node" aria-hidden="true">
              <span class="node-dot"></span>
              <span class="node-crosshair">+</span>
            </div>

            <!-- Card Body -->
            <div class="tactical-frame timeline-card">
              <div class="timeline-card__top">
                <div class="timeline-card__telemetry font-mono">
                  <span class="timeline-callsign">{{ item.callsign }}</span>
                  <span class="timeline-period">{{ item.period }}</span>
                </div>

                <!-- Stamps Row -->
                <div class="timeline-card__stamps">
                  <stamp-badge 
                    v-for="(stamp, sIdx) in item.stamps" 
                    :key="sIdx"
                    :text="stamp"
                    :variant="sIdx === 0 ? 'red' : 'signal'"
                    :angle="sIdx % 2 === 0 ? -3.5 : 2.5"
                  />
                </div>
              </div>

              <!-- Degree & Institution -->
              <h3 class="timeline-degree font-display">{{ item.degree }}</h3>
              <div class="timeline-inst font-mono">
                <span class="inst-name">{{ item.institution }}</span>
                <span class="inst-sep">//</span>
                <span class="inst-loc">{{ item.location }}</span>
              </div>

              <!-- Performance Metric Pill -->
              <div class="timeline-metric font-mono">
                <span class="metric-label">{{ item.metricLabel }}:</span>
                <span class="metric-value">{{ item.metricValue }}</span>
              </div>

              <!-- Achievements / Honor Roll -->
              <div class="timeline-achievements">
                <span class="achievements-heading font-mono">HONORS & MERIT LOG:</span>
                <ul class="achievements-list font-mono">
                  <li 
                    v-for="(ach, aIdx) in item.achievements" 
                    :key="aIdx"
                    class="achievement-item"
                  >
                    <span class="ach-bullet">✦</span>
                    <span>{{ ach }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-accent {
  color: var(--accent-signal);
}

.timeline-container {
  position: relative;
  padding-left: 1.25rem;
}

@media (min-width: 640px) {
  .timeline-container {
    padding-left: 2rem;
  }
}

@media (min-width: 768px) {
  .timeline-container {
    padding-left: 3rem;
  }
}

@media (min-width: 1024px) {
  .timeline-container {
    padding-left: 0;
  }
}

.timeline-spine {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.35rem;
  width: 2px;
  background: repeating-linear-gradient(
    180deg,
    var(--accent-signal) 0px,
    var(--accent-signal) 6px,
    transparent 6px,
    transparent 12px
  );
}

@media (min-width: 640px) {
  .timeline-spine {
    left: 0.5rem;
  }
}

@media (min-width: 768px) {
  .timeline-spine {
    left: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .timeline-spine {
    display: none;
  }
}

.timeline-entries {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .timeline-entries {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }
}

.timeline-card-wrap {
  position: relative;
}

.timeline-node {
  position: absolute;
  top: 1.75rem;
  left: -0.9rem;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  pointer-events: none;
}

@media (min-width: 640px) {
  .timeline-node {
    left: -2rem;
  }
}

@media (min-width: 768px) {
  .timeline-node {
    left: -1.75rem;
  }
}

@media (min-width: 1024px) {
  .timeline-node {
    display: none;
  }
}

.node-dot {
  width: 10px;
  height: 10px;
  background-color: var(--accent-signal);
  border: 2px solid var(--bg-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--accent-signal);
}

.node-crosshair {
  position: absolute;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent-signal);
  display: none;
}

.timeline-card {
  padding: 1rem 0.85rem;
  background-color: var(--bg-surface);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 640px) {
  .timeline-card {
    padding: 1.25rem 1.5rem;
  }
}

.timeline-card__top {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  border-bottom: 1px dashed var(--border-dash);
  padding-bottom: 0.65rem;
  margin-bottom: 0.75rem;
}

@media (min-width: 640px) {
  .timeline-card__top {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.timeline-card__telemetry {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
}

.timeline-callsign {
  color: var(--accent-signal);
  font-weight: 700;
  letter-spacing: 0.1em;
}

.timeline-period {
  color: var(--accent-phosphor);
  font-weight: 700;
}

.timeline-card__stamps {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.timeline-degree {
  font-size: clamp(1.35rem, 1.85vw, 1.75rem);
  line-height: 1.1;
  color: var(--ink-primary);
  margin-bottom: 0.35rem;
}

.timeline-inst {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8125rem;
  color: var(--ink-muted);
  margin-bottom: 0.65rem;
}

.inst-name {
  color: var(--ink-primary);
  font-weight: 700;
}

.timeline-metric {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.65rem;
  background-color: var(--bg-surface-elevated);
  border: 1px solid var(--border-strong);
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
}

.metric-label {
  color: var(--ink-muted);
}

.metric-value {
  color: var(--accent-signal);
  font-weight: 700;
}

.timeline-achievements {
  background-color: var(--bg-surface-elevated);
  padding: 0.65rem 0.85rem;
  border: 1px dashed var(--border-dash);
}

.achievements-heading {
  display: block;
  font-size: 0.625rem;
  color: var(--ink-muted);
  letter-spacing: 0.12em;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.achievements-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.achievement-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--ink-primary);
}

.ach-bullet {
  color: var(--accent-signal);
  font-size: 0.625rem;
}
</style>
