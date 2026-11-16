<script setup>
import { projects } from '~/data/portfolio'
</script>

<template>
  <section 
    id="projects" 
    class="dossier-section relative py-16 md:py-20 lg:py-24 border-b border-dashed border-border-dash box-border"
  >
    <div class="dossier-container">
      <!-- Section Header -->
      <div class="dossier-section__header lg:mb-8 pb-3">
        <div>
          <h2 class="dossier-section__title">
            FEATURED <span class="text-accent-signal">PROJECTS</span>
          </h2>
        </div>
        <div class="font-mono text-xs text-ink-muted">
          <span>SELECTED WORK // 4 PRODUCTION DEPLOYS</span>
        </div>
      </div>

      <!-- Modern 2-Column Responsive Showcase Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
        <ProjectBriefing
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
          :total="projects.length"
        />
      </div>

      <!-- GitHub Code Vault Banner -->
      <div class="tactical-frame bg-bg-surface p-5 sm:p-7 mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border border-dashed border-border-dash">
        <div>
          <div class="flex items-center gap-2 font-mono text-xs text-accent-signal font-bold mb-1.5">
            <span class="w-2 h-2 rounded-full bg-accent-signal animate-pulse"></span>
            <span>OPEN SOURCE & CODE ARCHIVES</span>
          </div>
          <h3 class="font-display text-2xl sm:text-3xl text-ink-primary">EXPLORE MORE ON GITHUB</h3>
          <p class="font-body text-sm sm:text-base text-ink-secondary mt-1.5 max-w-[640px]">
            Active repositories, experimental full-stack applications, and Directus/Nuxt prototypes are maintained and publicly documented on GitHub.
          </p>
        </div>

        <a 
          href="https://github.com/Paras-Bhalala" 
          target="_blank"
          class="tactical-btn py-3 px-6 whitespace-nowrap shrink-0 w-full sm:w-auto justify-center"
          data-cursor-label="GITHUB"
        >
          <span>ACCESS GITHUB ARCHIVES</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </section>
</template>
