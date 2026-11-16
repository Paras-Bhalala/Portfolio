<script setup>
import { profile } from '~/data/portfolio'
</script>

<template>
  <section id="about" class="dossier-section">
    <div class="dossier-container">
      <!-- Section Dossier Header -->
      <div class="dossier-section__header">
        <h2 class="dossier-section__title">
          ENGINEER <span class="text-accent-signal">PROFILE</span>
        </h2>
      </div>

      <!-- Main Profile Layout -->
      <div class="grid grid-cols-1 min-[960px]:grid-cols-[300px_1fr] gap-8 min-[960px]:gap-10 items-center">
        <!-- Left: ID Badge Physical Dossier Frame -->
        <div class="flex justify-center">
          <div class="relative bg-bg-surface-elevated border-2 border-ink-primary p-3 sm:p-4 pb-4 shadow-badge flex flex-col gap-3 max-w-[320px] mx-auto group">
            <div class="w-12 h-3 bg-ink-primary mx-auto -mb-2.5 rounded-[2px] relative -top-5.5 shadow-[0_2px_4px_rgba(0,0,0,0.2)]" aria-hidden="true">
              <div class="w-8 h-1 bg-bg-primary mx-auto mt-1 rounded-[2px]"></div>
            </div>

            <!-- Profile Photo: Black shade default, original on hover -->
            <div class="relative w-full aspect-[4/5] overflow-hidden border border-border-strong bg-black cursor-pointer">
              <img 
                :src="profile.photoUrl" 
                :alt="profile.name" 
                class="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-102 transition-all duration-350"
                loading="lazy"
                width="280"
                height="350"
              />
            </div>

            <!-- Stamped Qualification -->
            <div class="flex justify-around py-1.5">
              <StampBadge text="NCC CERTIFIED" variant="red" :angle="-4" />
              <StampBadge text="TOP RANK" variant="signal" :angle="3" />
            </div>

            <!-- ID Metadata -->
            <div class="flex flex-col gap-1.5 text-xs border-t border-dashed border-border-dash pt-2 font-mono">
              <div class="flex justify-between items-center text-xs">
                <span class="text-ink-muted">NAME:</span>
                <span class="text-ink-primary font-bold">{{ profile.name }}</span>
              </div>
              <div class="flex justify-between items-center text-xs">
                <span class="text-ink-muted">ROLE:</span>
                <span class="text-ink-primary font-bold">ASST. SOFTWARE ENGINEER</span>
              </div>
              <div class="flex justify-between items-center text-xs">
                <span class="text-ink-muted">BASE:</span>
                <span class="text-ink-primary font-bold">{{ profile.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Classified Service Bio -->
        <div>
          <div class="tactical-frame bg-bg-surface p-4 sm:p-6 md:p-7">
            <h3 class="font-display text-[clamp(1.45rem,2.4vw,2.15rem)] leading-[1.05] tracking-[0.02em] text-ink-primary mb-3.5">
              DISCIPLINED ENGINEERING FOR COMPLEX DIGITAL SYSTEMS
            </h3>

            <div class="flex flex-col gap-3 mb-5">
              <p 
                v-for="(paragraph, index) in profile.bio" 
                :key="index"
                class="font-body text-[0.95rem] sm:text-[1.0625rem] leading-[1.6] sm:leading-[1.7] tracking-[-0.01em] text-ink-secondary"
              >
                {{ paragraph }}
              </p>
            </div>

            <!-- Key Intel Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 sm:px-5 sm:py-3.5 bg-bg-surface-elevated border border-dashed border-border-dash mb-0 font-mono">
              <div class="flex flex-col gap-1">
                <span class="text-[0.6875rem] text-ink-muted tracking-[0.1em]">ACADEMIC INSTITUTION:</span>
                <span class="text-[0.8125rem] font-bold text-ink-primary">GLS UNIVERSITY, AHMEDABAD</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-[0.6875rem] text-ink-muted tracking-[0.1em]">DEGREE:</span>
                <span class="text-[0.8125rem] font-bold text-ink-primary">M.SC IN INFORMATION TECHNOLOGY (COMPLETED)</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-[0.6875rem] text-ink-muted tracking-[0.1em]">FOUNDATIONAL TRAINING:</span>
                <span class="text-[0.8125rem] font-bold text-ink-primary">SAINIK SCHOOL BALACHADI</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-[0.6875rem] text-ink-muted tracking-[0.1em]">CORPS CLEARANCE:</span>
                <span class="text-[0.8125rem] font-bold text-ink-primary">NCC 'A' & 'B' CERTIFICATES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
