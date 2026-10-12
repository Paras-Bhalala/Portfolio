<script setup>
import { profile } from '~/data/portfolio'
</script>

<template>
  <section id="about" class="dossier-section">
    <div class="dossier-container">
      <!-- Section Dossier Header -->
      <div class="dossier-section__header">
        <div>
          <div class="dossier-section__meta">
            <span>FILE 01 // DOSSIER</span>
            <span>● DECLASSIFIED</span>
          </div>
          <h2 class="dossier-section__title">
            ENGINEER <span class="text-accent">PROFILE</span>
          </h2>
        </div>
        <div class="dossier-section__tag">
          RECORD ID: {{ profile.callsign }}
        </div>
      </div>

      <!-- Main Profile Layout -->
      <div class="about-grid">
        <!-- Left: ID Badge Physical Dossier Frame -->
        <div class="about-grid__badge-col">
          <div class="id-badge">
            <div class="id-badge__clip" aria-hidden="true">
              <div class="id-badge__slot"></div>
            </div>

            <!-- Profile Photo: Black shade default, original on hover -->
            <div class="id-badge__photo-wrap">
              <img 
                :src="profile.photoUrl" 
                :alt="profile.name" 
                class="id-badge__photo"
                loading="lazy"
                width="280"
                height="350"
              />
            </div>

            <!-- Stamped Qualification -->
            <div class="id-badge__stamp-row">
              <stamp-badge text="NCC CERTIFIED" variant="red" :angle="-4" />
              <stamp-badge text="TOP RANK" variant="signal" :angle="3" />
            </div>

            <!-- ID Metadata -->
            <div class="id-badge__meta font-mono">
              <div class="id-badge__meta-row">
                <span class="meta-label">NAME:</span>
                <span class="meta-val">{{ profile.name }}</span>
              </div>
              <div class="id-badge__meta-row">
                <span class="meta-label">ROLE:</span>
                <span class="meta-val">ASST. SOFTWARE ENGINEER</span>
              </div>
              <div class="id-badge__meta-row">
                <span class="meta-label">BASE:</span>
                <span class="meta-val">{{ profile.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Classified Service Bio -->
        <div class="about-grid__content-col">
          <div class="tactical-frame bio-dossier">
            <!-- Status (Commented out: not currently looking for opportunities)
            <div v-if="profile.status" class="bio-dossier__status font-mono">
              <span>STATUS: {{ profile.status }}</span>
              <span class="status-dot"></span>
            </div>
            -->

            <h3 class="bio-dossier__heading font-display">
              DISCIPLINED ENGINEERING FOR COMPLEX DIGITAL SYSTEMS
            </h3>

            <div class="bio-dossier__body font-body">
              <p 
                v-for="(paragraph, index) in profile.bio" 
                :key="index"
                class="bio-paragraph"
              >
                {{ paragraph }}
              </p>
            </div>

            <!-- Key Intel Grid -->
            <div class="bio-intel-grid font-mono">
              <div class="intel-block">
                <span class="intel-label">ACADEMIC INSTITUTION:</span>
                <span class="intel-val">GLS UNIVERSITY, AHMEDABAD</span>
              </div>
              <div class="intel-block">
                <span class="intel-label">DEGREE:</span>
                <span class="intel-val">M.SC IN INFORMATION TECHNOLOGY (COMPLETED)</span>
              </div>
              <div class="intel-block">
                <span class="intel-label">FOUNDATIONAL TRAINING:</span>
                <span class="intel-val">SAINIK SCHOOL BALACHADI</span>
              </div>
              <div class="intel-block">
                <span class="intel-label">CORPS CLEARANCE:</span>
                <span class="intel-val">NCC 'A' & 'B' CERTIFICATES</span>
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

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 960px) {
  .about-grid {
    grid-template-columns: 300px 1fr;
    gap: 2.5rem;
  }
}

.about-grid__badge-col {
  display: flex;
  justify-content: center;
}

.id-badge__stamp-row {
  display: flex;
  justify-content: space-around;
  padding: 0.35rem 0;
}

.meta-label {
  color: var(--ink-muted);
}

.meta-val {
  color: var(--ink-primary);
  font-weight: 700;
}

.id-badge__meta {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.75rem;
  border-top: 1px dashed var(--border-dash);
  padding-top: 0.5rem;
}

.id-badge__meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Bio Dossier Column */
.bio-dossier {
  background-color: var(--bg-surface);
  padding: 1.5rem 1.75rem;
}

.bio-dossier__status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--accent-signal);
  letter-spacing: 0.15em;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: var(--accent-signal);
  border-radius: 50%;
}

.bio-dossier__heading {
  font-size: clamp(1.5rem, 2.4vw, 2.15rem);
  line-height: 1.05;
  letter-spacing: 0.02em;
  color: var(--ink-primary);
  margin-bottom: 0.85rem;
}

.bio-dossier__body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.bio-paragraph {
  font-family: var(--font-body);
  font-size: 1.0625rem;
  line-height: 1.7;
  letter-spacing: -0.01em;
  color: var(--ink-secondary);
}

.bio-intel-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  padding: 0.85rem 1.25rem;
  background-color: var(--bg-surface-elevated);
  border: 1px dashed var(--border-dash);
  margin-bottom: 0;
}

@media (min-width: 640px) {
  .bio-intel-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.intel-block {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.intel-label {
  font-size: 0.6875rem;
  color: var(--ink-muted);
  letter-spacing: 0.1em;
}

.intel-val {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--ink-primary);
}

@media (max-width: 640px) {
  .bio-dossier {
    padding: 1.15rem 1rem;
  }
  .bio-intel-grid {
    padding: 0.75rem 0.85rem;
  }
  .bio-dossier__heading {
    font-size: 1.45rem;
  }
  .bio-paragraph {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}
</style>
