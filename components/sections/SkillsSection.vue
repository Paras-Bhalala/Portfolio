<script setup>
import { skills } from '~/data/portfolio'

const selectedCategory = ref('ALL')
const categories = ['ALL', 'FRAMEWORKS', 'STYLING', 'CORE & CMS']

// Enrich portfolio skills with official brand icons and meta
const skillMeta = {
  vue: {
    categoryGroup: 'FRAMEWORKS',
    level: 'CORE SPECIALIZATION',
    featured: true
  },
  nuxt: {
    categoryGroup: 'FRAMEWORKS',
    level: 'PRODUCTION PROVEN',
    featured: true
  },
  js: {
    categoryGroup: 'CORE & CMS',
    level: 'ADVANCED ES6+',
    featured: true
  },
  tailwind: {
    categoryGroup: 'STYLING',
    level: 'MODERN ARCHITECTURE',
    featured: true
  },
  directus: {
    categoryGroup: 'CORE & CMS',
    level: 'HEADLESS API & CMS',
    featured: false
  },
  'html-css': {
    categoryGroup: 'STYLING',
    level: 'SEMANTIC FOUNDATIONS',
    featured: false
  },
  bootstrap: {
    categoryGroup: 'STYLING',
    level: 'RAPID UI SCAFFOLDING',
    featured: false
  }
}

const enrichedSkills = computed(() => {
  return skills.map(s => ({
    ...s,
    ...(skillMeta[s.id] || { categoryGroup: 'OTHER', level: 'PROFICIENT', featured: false })
  }))
})

const filteredSkills = computed(() => {
  if (selectedCategory.value === 'ALL') return enrichedSkills.value
  if (selectedCategory.value === 'FRAMEWORKS') {
    return enrichedSkills.value.filter(s => ['vue', 'nuxt', 'bootstrap'].includes(s.id))
  }
  if (selectedCategory.value === 'STYLING') {
    return enrichedSkills.value.filter(s => ['tailwind', 'bootstrap', 'html-css'].includes(s.id))
  }
  if (selectedCategory.value === 'CORE & CMS') {
    return enrichedSkills.value.filter(s => ['js', 'directus', 'html-css'].includes(s.id))
  }
  return enrichedSkills.value
})
</script>

<template>
  <section id="skills" class="dossier-section relative lg:min-h-screen lg:pt-[4.5rem] lg:pb-12 lg:flex lg:flex-col lg:justify-center box-border">
    <div class="dossier-container">
      <!-- Section Header & Filter Tabs -->
      <div class="dossier-section__header lg:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-4">
        <div>
          <h2 class="dossier-section__title">
            TECHNICAL <span class="text-accent-signal">SKILLS</span>
          </h2>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap items-center gap-2 font-mono">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            class="px-3.5 py-1.5 border text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer"
            :class="selectedCategory === cat 
              ? 'bg-ink-primary text-ink-inverse border-ink-primary shadow-[2px_2px_0px_var(--accent-signal)]' 
              : 'bg-bg-surface text-ink-muted border-border-subtle hover:border-accent-signal hover:text-ink-primary'"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Skills Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <div 
          v-for="skill in filteredSkills" 
          :key="skill.id"
          class="tactical-frame bg-bg-surface p-5 sm:p-6 flex flex-col justify-between gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-accent-signal hover:shadow-card group relative"
        >
          <!-- Card Top: Tech Logo + Name + Category + Level -->
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <div class="flex items-center gap-3.5">
                <!-- SVG Tech Logo -->
                <div class="w-12 h-12 rounded-[2px] bg-bg-surface-elevated border border-border-subtle flex items-center justify-center p-2.5 transition-transform duration-200 group-hover:scale-105 shrink-0 shadow-sm">
                  <!-- Vue -->
                  <svg v-if="skill.id === 'vue'" viewBox="0 0 261 226" class="w-full h-full" fill="none">
                    <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#42B883"/>
                    <path d="M161.096.001l-30.225 52.351L100.647.001H52.246l78.626 136.181L209.497.001z" fill="#35495E"/>
                  </svg>

                  <!-- Nuxt -->
                  <svg v-else-if="skill.id === 'nuxt'" viewBox="0 0 520 400" class="w-full h-full" fill="none">
                    <path d="M358.5 288.5L257.5 113.5L156.5 288.5H358.5Z" stroke="#00DC82" stroke-width="40" stroke-linejoin="round"/>
                    <path d="M473.5 288.5L343.5 63.5L245.5 233.5" stroke="#00DC82" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M46.5 288.5H230.5" stroke="#00DC82" stroke-width="40" stroke-linecap="round"/>
                  </svg>

                  <!-- JavaScript -->
                  <svg v-else-if="skill.id === 'js'" viewBox="0 0 100 100" class="w-full h-full" fill="none">
                    <rect width="100" height="100" rx="8" fill="#F7DF1E"/>
                    <path d="M28 72c1.5 2.5 4.5 4 8 4 4.5 0 7.5-2.5 7.5-6.5V40h-8v29.5c0 2-1 3-3 3-1.5 0-2.5-.5-3.5-1.5L28 72zm40.5-1c-2.5 2.5-6.5 4-11 4-7.5 0-12.5-5-12.5-12.5 0-8 5-12.5 13-12.5 4 0 7.5 1.5 9.5 3.5l-4 4.5c-1.5-1.5-3.5-2.5-5.5-2.5-4.5 0-7 2.5-7 6.5s2.5 6.5 7 6.5c3 0 5-1 6.5-2v-4h-7V52h14v19z" fill="#000000"/>
                  </svg>

                  <!-- Tailwind CSS -->
                  <svg v-else-if="skill.id === 'tailwind'" viewBox="0 0 100 60" class="w-full h-full" fill="none">
                    <path d="M25 15c7-9 14.5-9 22.5 0 6 7 11 9 17.5 9 10 0 16-8 17.5-11.5-7 9-14.5 9-22.5 0-6-7-11-9-17.5-9-10 0-16 8-17.5 11.5zm-15 22c7-9 14.5-9 22.5 0 6 7 11 9 17.5 9 10 0 16-8 17.5-11.5-7 9-14.5 9-22.5 0-6-7-11-9-17.5-9-10 0-16 8-17.5 11.5z" fill="#06B6D4"/>
                  </svg>

                  <!-- Directus -->
                  <svg v-else-if="skill.id === 'directus'" viewBox="0 0 100 100" class="w-full h-full" fill="none">
                    <rect width="100" height="100" rx="10" fill="#6644FF"/>
                    <path d="M30 25h20c15 0 25 10 25 25s-10 25-25 25H30V25zm16 36h4c7 0 11-4 11-11s-4-11-11-11h-4v22z" fill="#FFFFFF"/>
                  </svg>

                  <!-- HTML & CSS -->
                  <svg v-else-if="skill.id === 'html-css'" viewBox="0 0 100 100" class="w-full h-full" fill="none">
                    <rect width="100" height="100" rx="10" fill="#E44D26"/>
                    <path d="M35 32L18 50l17 18 5-5-13-13 13-13-5-5zm30 0l-5 5 13 13-13 13 5 5 17-18-17-18zm-22 41l14-46h-6L37 73h6z" fill="#FFFFFF"/>
                  </svg>

                  <!-- Bootstrap -->
                  <svg v-else-if="skill.id === 'bootstrap'" viewBox="0 0 100 100" class="w-full h-full" fill="none">
                    <rect width="100" height="100" rx="10" fill="#7952B3"/>
                    <path d="M32 25h22c8 0 14 3.5 14 10 0 4-2.5 7.5-6.5 8.5 5 1.5 8.5 5.5 8.5 11 0 7.5-6 11.5-15 11.5H32V25zm14 18h7c3.5 0 6-1.5 6-4.5s-2.5-4.5-6-4.5h-7v9zm0 14v10h8c4 0 7-1.5 7-5s-3-5-7-5h-8z" fill="#FFFFFF"/>
                  </svg>
                </div>

                <div>
                  <h3 class="font-display text-xl sm:text-2xl text-ink-primary tracking-wide leading-none">
                    {{ skill.name }}
                  </h3>
                  <span class="font-mono text-[0.6875rem] text-accent-signal font-bold uppercase tracking-wider block mt-1">
                    {{ skill.category }}
                  </span>
                </div>
              </div>

              <!-- Featured badge -->
              <span 
                v-if="skill.featured" 
                class="font-mono text-[0.625rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-accent-signal/10 border border-accent-signal text-accent-signal shrink-0"
              >
                CORE
              </span>
            </div>

            <!-- Description -->
            <p class="font-body text-sm text-ink-secondary leading-relaxed mb-4">
              {{ skill.desc }}
            </p>
          </div>

          <!-- Capabilities Tags -->
          <div class="pt-3 border-t border-dashed border-border-dash">
            <span class="block font-mono text-[0.625rem] text-ink-muted uppercase tracking-wider mb-2 font-bold">
              KEY CAPABILITIES:
            </span>
            <div class="flex flex-wrap gap-1.5 font-mono">
              <span 
                v-for="(spec, sIdx) in skill.specs" 
                :key="sIdx"
                class="text-[0.6875rem] px-2 py-1 bg-bg-surface-elevated border border-border-subtle text-ink-primary font-medium rounded-[2px] transition-colors group-hover:border-accent-signal/30"
              >
                {{ spec }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
