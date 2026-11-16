<script setup>
import { experience } from '~/data/portfolio'
</script>

<template>
  <section id="experience" class="dossier-section relative lg:min-h-screen lg:flex lg:flex-col lg:justify-center box-border">
    <div class="dossier-container">
      <!-- Section Header -->
      <div class="dossier-section__header lg:mb-5">
        <h2 class="dossier-section__title">
          SERVICE <span class="text-accent-signal">RECORD</span>
        </h2>
      </div>

      <!-- Service Record Log Entries (Compact) -->
      <div class="grid grid-cols-1 min-[960px]:grid-cols-2 gap-5 min-[960px]:gap-6">
        <article 
          v-for="(job, index) in experience" 
          :key="index"
          class="tactical-frame p-4 sm:p-5 bg-bg-surface flex flex-col justify-between gap-3 sm:gap-3.5 transition-all duration-200 hover:border-accent-signal hover:-translate-y-0.5"
        >
          <!-- Header Bar -->
          <div class="flex flex-col sm:flex-row justify-between items-start gap-2.5 sm:gap-4 border-b border-dashed border-border-dash pb-3">
            <div class="flex-1">
              <span class="font-mono text-[0.6875rem] text-accent-signal tracking-[0.12em] font-bold block mb-1">RECORD #0{{ index + 1 }}</span>
              <h3 class="font-display text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.05] text-ink-primary mb-1.5">{{ job.role }}</h3>
              <div class="flex items-center gap-2 font-mono text-[0.8125rem] text-ink-muted">
                <span class="text-ink-primary font-bold">{{ job.organization }}</span>
                <span>•</span>
                <span>{{ job.location }}</span>
              </div>
            </div>

            <div class="flex flex-row sm:flex-col flex-wrap sm:flex-nowrap items-start sm:items-end gap-2 shrink-0">
              <StampBadge :text="job.badge" variant="signal" :angle="1" />
              <span class="font-mono text-xs text-accent-phosphor tracking-[0.08em] font-bold whitespace-nowrap">{{ job.period }}</span>
            </div>
          </div>

          <!-- Description Brief -->
          <p class="font-body text-[0.9375rem] leading-[1.6] text-ink-secondary">
            {{ job.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
