<script setup>
import { education } from '~/data/portfolio'
</script>

<template>
  <section id="education" class="dossier-section relative lg:min-h-screen lg:pt-[4.5rem] lg:pb-12 lg:flex lg:flex-col lg:justify-center box-border">
    <div class="dossier-container">
      <!-- Section Header -->
      <div class="dossier-section__header lg:mb-6 pb-3">
        <div>
          <h2 class="dossier-section__title">
            EDUCATION & <span class="text-accent-signal">CREDENTIALS</span>
          </h2>
        </div>
      </div>

      <!-- Compact Education Cards Grid (4 cols on lg, 2 on sm) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <article 
          v-for="(item, index) in education" 
          :key="index"
          class="tactical-frame bg-bg-surface p-3.5 sm:p-4 flex flex-col justify-between gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-accent-signal hover:shadow-card group relative"
        >
          <!-- Top Section -->
          <div>
            <!-- Header Row: Level & Period + Metric Pill -->
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-border-dash pb-2 mb-2.5">
              <div class="flex items-center gap-1.5 font-mono text-[0.625rem]">
                <span class="font-bold text-accent-signal uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] bg-accent-signal/10 border border-accent-signal/30">
                  {{ item.level }}
                </span>
                <span class="text-ink-muted">•</span>
                <span class="text-accent-phosphor font-bold tracking-wider">
                  {{ item.period }}
                </span>
              </div>

              <!-- Metric Pill -->
              <div class="inline-flex items-center gap-1 px-1.5 py-0.5 bg-bg-surface-elevated border border-border-strong text-[0.6875rem] font-mono shrink-0">
                <span class="text-ink-muted text-[0.5625rem]">{{ item.metricLabel }}:</span>
                <span class="text-accent-signal font-bold">{{ item.metricValue }}</span>
              </div>
            </div>

            <!-- Degree Title -->
            <h3 class="font-display text-lg sm:text-xl text-ink-primary tracking-wide leading-snug mb-1 group-hover:text-accent-signal transition-colors">
              {{ item.degree }}
            </h3>

            <!-- Institution & Location -->
            <div class="flex items-center gap-1.5 font-mono text-xs text-ink-muted mb-2.5">
              <span class="text-ink-primary font-bold">{{ item.institution }}</span>
              <span>//</span>
              <span>{{ item.location }}</span>
            </div>

            <!-- Compact Stamp Badges -->
            <div v-if="item.stamps?.length" class="flex flex-wrap gap-1 mb-2">
              <span 
                v-for="(stamp, sIdx) in item.stamps" 
                :key="sIdx"
                class="font-mono text-[0.5625rem] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] border select-none"
                :class="sIdx === 0 ? 'border-accent-stamp text-accent-stamp bg-accent-stamp/5' : 'border-accent-signal text-accent-signal bg-accent-signal/5'"
              >
                {{ stamp }}
              </span>
            </div>
          </div>

          <!-- Bottom: Key Academic Highlights -->
          <div class="pt-2 border-t border-dashed border-border-dash">
            <span class="block font-mono text-[0.5625rem] text-ink-muted uppercase tracking-wider font-bold mb-1">
              HIGHLIGHTS:
            </span>
            <ul class="list-none flex flex-col gap-1 font-mono text-[0.6875rem] text-ink-secondary">
              <li 
                v-for="(ach, aIdx) in item.achievements" 
                :key="aIdx"
                class="flex items-start gap-1.5 leading-snug"
              >
                <span class="text-accent-signal text-[0.625rem] font-bold shrink-0 mt-0.5">✦</span>
                <span>{{ ach }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
