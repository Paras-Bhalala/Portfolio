<script setup>
import { experience } from '~/data/portfolio'
</script>

<template>
  <section id="experience" class="dossier-section experience-section">
    <div class="dossier-container">
      <!-- Section Header -->
      <div class="dossier-section__header experience-header">
        <div>
          <div class="dossier-section__meta">
            <span>FILE 02 // LOGS</span>
            <span>● ACTIVE ENGAGEMENT</span>
          </div>
          <h2 class="dossier-section__title">
            SERVICE <span class="text-accent">RECORD</span>
          </h2>
        </div>
        <div class="dossier-section__tag">
          COMMAND: 7SPAN HQ // AHMEDABAD
        </div>
      </div>

      <!-- Service Record Log Entries (Compact) -->
      <div class="experience-list">
        <article 
          v-for="(job, index) in experience" 
          :key="index"
          class="tactical-frame service-record-card"
        >
          <!-- Header Bar -->
          <div class="service-record-card__header">
            <div class="service-role-block">
              <span class="service-num font-mono">RECORD #0{{ index + 1 }}</span>
              <h3 class="service-role font-display">{{ job.role }}</h3>
              <div class="service-org font-mono">
                <span class="org-name">{{ job.organization }}</span>
                <span class="org-sep">•</span>
                <span class="org-loc">{{ job.location }}</span>
              </div>
            </div>

            <div class="service-badge-block">
              <stamp-badge :text="job.badge" variant="signal" :angle="1" />
              <span class="service-period font-mono">{{ job.period }}</span>
            </div>
          </div>

          <!-- Description Brief -->
          <p class="service-desc font-body">
            {{ job.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-accent {
  color: var(--accent-signal);
}

.experience-section {
  position: relative;
}

@media (min-width: 1024px) {
  .experience-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
  }

  .experience-header {
    margin-bottom: 1.25rem;
  }
}

.experience-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 960px) {
  .experience-list {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}

.service-record-card {
  padding: 1.25rem 1.35rem;
  background-color: var(--bg-surface);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.85rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.service-record-card:hover {
  border-color: var(--accent-signal);
  transform: translateY(-2px);
}

.service-record-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 1px dashed var(--border-dash);
  padding-bottom: 0.75rem;
}

.service-num {
  font-size: 0.6875rem;
  color: var(--accent-signal);
  letter-spacing: 0.12em;
  font-weight: 700;
  display: block;
  margin-bottom: 0.2rem;
}

.service-role {
  font-size: clamp(1.4rem, 2.2vw, 1.85rem);
  line-height: 1.05;
  color: var(--ink-primary);
  margin-bottom: 0.35rem;
}

.service-org {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: var(--ink-muted);
}

.org-name {
  color: var(--ink-primary);
  font-weight: 700;
}

.service-badge-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  flex-shrink: 0;
}

.service-period {
  font-size: 0.75rem;
  color: var(--accent-phosphor);
  letter-spacing: 0.08em;
  font-weight: 700;
  white-space: nowrap;
}

.service-desc {
  font-family: var(--font-body);
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--ink-secondary);
}

@media (max-width: 640px) {
  .service-record-card {
    padding: 1rem;
    gap: 0.75rem;
  }

  .service-record-card__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.65rem;
  }

  .service-badge-block {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .service-role {
    font-size: 1.35rem;
  }
}
</style>
