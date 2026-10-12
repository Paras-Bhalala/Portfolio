<script setup>
import { skills } from '~/data/portfolio'

const activeSkillId = ref('vue')

const selectSkill = (id) => {
  activeSkillId.value = id
}

const activeSkill = computed(() => {
  return skills.find(s => s.id === activeSkillId.value) || skills[0]
})

// Calculate SVG coordinate positions for radar blips (center 200, 200, max-radius 160)
const getBlipCoords = (angleDeg, distancePct) => {
  const rad = (angleDeg - 90) * (Math.PI / 180)
  const r = (distancePct / 100) * 150
  const x = 200 + r * Math.cos(rad)
  const y = 200 + r * Math.sin(rad)
  return { x, y }
}
</script>

<template>
  <section id="skills" class="dossier-section skills-section">
    <div class="dossier-container skills-container">
      <!-- Section Header -->
      <div class="dossier-section__header skills-header">
        <div>
          <div class="dossier-section__meta">
            <span>FILE 03 // ARSENAL</span>
            <span>● COMBAT SPECS</span>
          </div>
          <h2 class="dossier-section__title">
            TECHNICAL <span class="text-accent">ARSENAL</span>
          </h2>
        </div>
        <div class="dossier-section__tag">
          RADAR LOCK: ACTIVE SWEEP 360°
        </div>
      </div>

      <!-- Tactical Split Layout: Radar HUD + Specification Dossier -->
      <div class="arsenal-grid">
        <!-- Left: Interactive Tactical Radar -->
        <div class="tactical-frame radar-frame">
          <div class="radar-header font-mono">
            <span>TARGET ACQUISITION HUD</span>
            <span class="radar-status">SWEEPING // AZIMUTH 360</span>
          </div>

          <!-- Radar SVG Canvas -->
          <div class="radar-canvas-wrap">
            <svg 
              class="radar-svg" 
              viewBox="0 0 400 400" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <!-- Radar sweep gradient beam -->
                <radialGradient id="radarSweep" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="var(--accent-phosphor)" stop-opacity="0.35"/>
                  <stop offset="100%" stop-color="var(--accent-phosphor)" stop-opacity="0"/>
                </radialGradient>
              </defs>

              <!-- Range Circles -->
              <circle cx="200" cy="200" r="150" fill="none" stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="4 6"/>
              <circle cx="200" cy="200" r="110" fill="none" stroke="var(--border-subtle)" stroke-width="1"/>
              <circle cx="200" cy="200" r="70" fill="none" stroke="var(--border-subtle)" stroke-width="1"/>
              <circle cx="200" cy="200" r="30" fill="none" stroke="var(--border-subtle)" stroke-width="1"/>

              <!-- Azimuth Axes -->
              <line x1="200" y1="20" x2="200" y2="380" stroke="var(--border-subtle)" stroke-width="1" stroke-dasharray="3 3"/>
              <line x1="20" y1="200" x2="380" y2="200" stroke="var(--border-subtle)" stroke-width="1" stroke-dasharray="3 3"/>
              <line x1="72" y1="72" x2="328" y2="328" stroke="var(--border-subtle)" stroke-width="0.5" stroke-dasharray="2 4"/>
              <line x1="72" y1="328" x2="328" y2="72" stroke="var(--border-subtle)" stroke-width="0.5" stroke-dasharray="2 4"/>

              <!-- Range Labels -->
              <text x="204" y="58" fill="var(--ink-muted)" font-family="monospace" font-size="9">RANGE: 100%</text>
              <text x="204" y="98" fill="var(--ink-muted)" font-family="monospace" font-size="9">75%</text>
              <text x="204" y="138" fill="var(--ink-muted)" font-family="monospace" font-size="9">50%</text>

              <!-- Rotating Radar Sweep Wedge -->
              <g class="radar-sweeper">
                <path d="M 200 200 L 200 50 A 150 150 0 0 1 340 140 Z" fill="url(#radarSweep)"/>
                <line x1="200" y1="200" x2="340" y2="140" stroke="var(--accent-phosphor)" stroke-width="2"/>
              </g>

              <!-- Tactical Blips -->
              <g 
                v-for="skill in skills" 
                :key="skill.id"
                class="radar-blip-group"
                :class="{ 'radar-blip-group--active': skill.id === activeSkillId }"
                @click="selectSkill(skill.id)"
              >
                <!-- Position calculated from angle & distance -->
                <circle 
                  :cx="getBlipCoords(skill.angle, skill.distance).x" 
                  :cy="getBlipCoords(skill.angle, skill.distance).y" 
                  r="7" 
                  class="blip-core"
                />
                <circle 
                  :cx="getBlipCoords(skill.angle, skill.distance).x" 
                  :cy="getBlipCoords(skill.angle, skill.distance).y" 
                  r="15" 
                  class="blip-ring"
                />
                <!-- Label next to blip -->
                <text 
                  :x="getBlipCoords(skill.angle, skill.distance).x + 12" 
                  :y="getBlipCoords(skill.angle, skill.distance).y + 4" 
                  class="blip-label font-mono"
                >
                  {{ skill.name }}
                </text>
              </g>

              <!-- Center Reticle -->
              <circle cx="200" cy="200" r="4" fill="var(--accent-signal)"/>
              <circle cx="200" cy="200" r="10" fill="none" stroke="var(--accent-signal)" stroke-width="1"/>
            </svg>
          </div>

          <!-- Radar Footer Legend -->
          <div class="radar-legend font-mono">
            <span>● TARGET BLIP</span>
            <span>CLICK TO ENGAGE</span>
          </div>
        </div>

        <!-- Right: Technical Specification Dossier List -->
        <div class="arsenal-specs">
          <!-- Active Target Card -->
          <div class="tactical-frame target-detail-card">
            <div class="target-detail-card__header font-mono">
              <span class="target-callsign">TARGET LOCK // {{ activeSkill.category }}</span>
              <span class="target-azimuth">BEARING: {{ activeSkill.angle }}° / RNG: {{ activeSkill.distance }}%</span>
            </div>

            <h3 class="target-title font-display">{{ activeSkill.name }}</h3>
            <p class="target-desc font-body">{{ activeSkill.desc }}</p>

            <div class="target-subspecs font-mono">
              <span class="subspecs-label">ARSENAL CAPABILITIES:</span>
              <div class="subspecs-tags">
                <span 
                  v-for="(spec, sIdx) in activeSkill.specs" 
                  :key="sIdx"
                  class="subspec-pill"
                >
                  [✓ {{ spec }}]
                </span>
              </div>
            </div>
          </div>

          <!-- All Weapons Monospace List -->
          <div class="arsenal-list">
            <div 
              v-for="skill in skills" 
              :key="skill.id"
              class="arsenal-row font-mono"
              :class="{ 'arsenal-row--active': skill.id === activeSkillId }"
              @click="selectSkill(skill.id)"
              data-cursor-label="SELECT"
            >
              <div class="arsenal-row__index">
                <span class="row-num">#{{ skill.angle.toString().padStart(3, '0') }}°</span>
                <span class="row-category">[{{ skill.category }}]</span>
              </div>

              <div class="arsenal-row__name">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-meta">{{ skill.desc }}</span>
              </div>

              <div class="arsenal-row__action">
                <span class="lock-indicator">
                  {{ skill.id === activeSkillId ? 'ENGAGED ◄' : 'ACQUIRE →' }}
                </span>
              </div>
            </div>
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

.skills-section {
  position: relative;
}

@media (min-width: 1024px) {
  .skills-section {
    min-height: 100vh;
    padding-top: 4.5rem;
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .skills-header {
    margin-bottom: 0.6rem;
  }
}

.arsenal-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .arsenal-grid {
    grid-template-columns: 240px 1fr;
    gap: 1.5rem;
    align-items: center;
  }
}

/* Radar Frame */
.radar-frame {
  background-color: var(--bg-surface);
  padding: 0.6rem 0.85rem;
}

.radar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.625rem;
  color: var(--ink-muted);
  border-bottom: 1px dashed var(--border-dash);
  padding-bottom: 0.35rem;
  margin-bottom: 0.45rem;
}

.radar-status {
  color: var(--accent-signal);
  font-weight: 700;
}

.radar-canvas-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 200px;
  margin: 0 auto;
}

.radar-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.radar-sweeper {
  transform-origin: 200px 200px;
  animation: radarSweepAnim 7s linear infinite;
}

.radar-blip-group {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.blip-core {
  fill: var(--accent-signal);
  transition: transform 0.2s ease, fill 0.2s ease;
}

.blip-ring {
  fill: none;
  stroke: var(--accent-signal);
  stroke-width: 1;
  stroke-dasharray: 2 3;
  animation: blipPulse 2s infinite;
}

.blip-label {
  fill: var(--ink-primary);
  font-size: 9px;
  letter-spacing: 0.05em;
  font-weight: 700;
  pointer-events: none;
  user-select: none;
}

.radar-blip-group--active .blip-core {
  fill: var(--accent-phosphor);
  transform: scale(1.3);
  transform-origin: center;
}

.radar-blip-group--active .blip-ring {
  stroke: var(--accent-phosphor);
  stroke-width: 2;
  stroke-dasharray: none;
}

.radar-blip-group--active .blip-label {
  fill: var(--accent-signal);
  font-size: 10px;
}

.radar-legend {
  display: flex;
  justify-content: space-between;
  font-size: 0.5625rem;
  color: var(--ink-muted);
  border-top: 1px dashed var(--border-dash);
  padding-top: 0.35rem;
  margin-top: 0.45rem;
}

/* Right Column: Active Specs */
.arsenal-specs {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.target-detail-card {
  padding: 0.5rem 1rem;
  background-color: var(--bg-surface-elevated);
}

.target-detail-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.625rem;
  color: var(--accent-signal);
  border-bottom: 1px dashed var(--border-dash);
  padding-bottom: 0.3rem;
  margin-bottom: 0.35rem;
}

.target-title {
  font-size: clamp(1.2rem, 1.8vw, 1.45rem);
  color: var(--ink-primary);
  line-height: 1;
  margin-bottom: 0.15rem;
}

.target-desc {
  font-size: 0.8125rem;
  color: var(--ink-secondary);
  margin-bottom: 0.35rem;
  line-height: 1.3;
}

.target-subspecs {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.subspecs-label {
  font-size: 0.6rem;
  color: var(--ink-muted);
  letter-spacing: 0.1em;
}

.subspecs-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.subspec-pill {
  font-size: 0.6rem;
  background-color: var(--ink-primary);
  color: var(--ink-inverse);
  padding: 0.1rem 0.45rem;
  border-radius: 2px;
}

/* Monospace Weapon List */
.arsenal-list {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.arsenal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
  padding: 0.28rem 0.75rem;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  cursor: pointer;
  transition: all 0.15s ease;
}

.arsenal-row:hover {
  border-color: var(--accent-signal);
  transform: translateX(3px);
}

.arsenal-row--active {
  border-color: var(--accent-signal);
  background-color: var(--bg-surface-elevated);
  box-shadow: 2px 2px 0px var(--accent-signal);
}

.arsenal-row__index {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.6875rem;
}

.row-num {
  color: var(--accent-signal);
  font-weight: 700;
}

.row-category {
  color: var(--ink-muted);
  font-size: 0.625rem;
}

.arsenal-row__name {
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
  flex: 1;
  min-width: 0;
}

.skill-name {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--ink-primary);
  white-space: nowrap;
}

.skill-meta {
  font-size: 0.6875rem;
  color: var(--ink-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.arsenal-row__action {
  font-size: 0.6875rem;
  font-weight: 700;
  color: var(--accent-phosphor);
  white-space: nowrap;
}

.arsenal-row--active .lock-indicator {
  color: var(--accent-signal);
}

@media (max-width: 640px) {
  .arsenal-row {
    padding: 0.35rem 0.6rem;
    gap: 0.5rem;
  }
  .row-category {
    display: none;
  }
  .arsenal-row__action {
    display: none;
  }
  .skill-meta {
    display: none;
  }
  .radar-canvas-wrap {
    max-width: 180px;
  }
  .radar-legend {
    font-size: 0.5rem;
  }
}

@keyframes radarSweepAnim {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes blipPulse {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.2); }
}

@media (prefers-reduced-motion: reduce) {
  .radar-sweeper {
    animation: none;
  }
}
</style>
