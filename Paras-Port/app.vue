<script setup>
<meta name="google-site-verification" content="ekc2NroT7hyYJnv92fLjkceBHEgSSXdBad7dU2rj0YA" />
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// SEO Metadata matching required specification
useSeoMeta({
  title: 'Paras Bhalala - Assistant Software Engineer | M.Sc IT Graduate',
  description: 'Assistant Software Engineer at 7Span and M.Sc IT Graduate based in Ahmedabad. Skilled in Vue, Nuxt, JavaScript, and modern web engineering.',
  robots: 'index, follow',
  ogTitle: 'Paras Bhalala - Assistant Software Engineer | M.Sc IT Graduate',
  ogDescription: 'Assistant Software Engineer at 7Span and M.Sc IT Graduate based in Ahmedabad. Skilled in Vue, Nuxt, JavaScript, and modern web engineering.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

let lenisInstance = null

onMounted(() => {
  if (typeof window === 'undefined') return

  // Check prefers-reduced-motion
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (isReducedMotion) return

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  // Initialize Lenis smooth momentum scrolling
  lenisInstance = new Lenis({
    lerp: 0.09,
    wheelMultiplier: 1,
    smoothWheel: true
  })

  // Synchronize Lenis with GSAP ScrollTrigger
  lenisInstance.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenisInstance.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})

onBeforeUnmount(() => {
  if (lenisInstance) {
    lenisInstance.destroy()
  }
})
</script>

<template>
  <div class="dossier-shell">
    <!-- Film Grain Overlay -->
    <grain-overlay />

    <!-- Tactical Crosshair Targeting Cursor (Client Only, Desktop Only) -->
    <ClientOnly>
      <custom-cursor />
    </ClientOnly>

    <!-- Main Navigation Header -->
    <app-header />

    <!-- Main Dossier Content -->
    <main id="main-content">
      <hero-section />
      <about-section />
      <experience-section />
      <skills-section />
      <education-section />
      <projects-section />
    </main>

    <!-- Dispatch & Comms Footer -->
    <app-footer />
  </div>
</template>

<style>
/* Global shell styles */
.dossier-shell {
  min-height: 100vh;
  position: relative;
  background-color: var(--bg-primary);
  color: var(--ink-primary);
  display: flex;
  flex-direction: column;
}

#main-content {
  flex: 1;
}
</style>
