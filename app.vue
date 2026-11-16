<script setup>
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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
