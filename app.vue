<script setup>
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const siteUrl = 'https://paras-bhalala.vercel.app'

// Synchronized SEO Metadata
useSeoMeta({
  title: 'Paras Bhalala | Assistant Software Engineer & Frontend Developer',
  description: 'Assistant Software Engineer at 7Span and M.Sc IT Graduate based in Ahmedabad. Skilled in Vue 3, Nuxt 3, JavaScript, and modern web engineering.',
  robots: 'index, follow, max-image-preview:large',
  ogTitle: 'Paras Bhalala | Assistant Software Engineer & Frontend Developer',
  ogDescription: 'Assistant Software Engineer at 7Span and M.Sc IT Graduate based in Ahmedabad. Skilled in Vue 3, Nuxt 3, JavaScript, and modern web engineering.',
  ogType: 'profile',
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/profile.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Paras Bhalala | Assistant Software Engineer & Frontend Developer',
  twitterDescription: 'Assistant Software Engineer at 7Span and M.Sc IT Graduate based in Ahmedabad. Skilled in Vue 3, Nuxt 3, JavaScript, and modern web engineering.',
  twitterImage: `${siteUrl}/profile.png`
})

// Schema.org Structured Data (Person + ProfilePage)
useHead({
  link: [
    { rel: 'canonical', href: siteUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: 'Paras Bhalala',
            givenName: 'Paras',
            familyName: 'Bhalala',
            jobTitle: 'Assistant Software Engineer',
            worksFor: {
              '@type': 'Organization',
              name: '7Span',
              url: 'https://7span.com'
            },
            alumniOf: [
              {
                '@type': 'EducationalOrganization',
                name: 'GLS University',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Ahmedabad',
                  addressRegion: 'Gujarat',
                  addressCountry: 'IN'
                }
              },
              {
                '@type': 'EducationalOrganization',
                name: 'Sainik School Balachadi'
              }
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Ahmedabad',
              addressRegion: 'Gujarat',
              addressCountry: 'IN'
            },
            email: 'mailto:parasbhalala04@gmail.com',
            url: siteUrl,
            image: `${siteUrl}/profile.png`,
            sameAs: [
              'https://www.linkedin.com/in/paras-bhalala-954b3b247/',
              'https://github.com/Paras-Bhalala'
            ],
            knowsAbout: [
              'Vue.js',
              'Nuxt.js',
              'JavaScript (ES6+)',
              'Tailwind CSS',
              'Frontend Engineering',
              'Directus CMS',
              'HTML5 & Modern CSS',
              'Web Performance Optimization'
            ]
          },
          {
            '@type': 'ProfilePage',
            '@id': `${siteUrl}/#webpage`,
            url: siteUrl,
            name: 'Paras Bhalala - Portfolio & Technical Dossier',
            isPartOf: {
              '@type': 'WebSite',
              '@id': `${siteUrl}/#website`,
              url: siteUrl,
              name: 'Paras Bhalala Portfolio'
            },
            mainEntity: {
              '@id': `${siteUrl}/#person`
            }
          }
        ]
      })
    }
  ]
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
