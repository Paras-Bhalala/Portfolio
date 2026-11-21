// https://nuxt.com/docs/api/configuration/nuxt-config
const gtagId = process.env.NUXT_PUBLIC_GTAG_ID || process.env.GTAG_ID 

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      gtagId
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/fonts'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  imports: {
    dirs: ['data']
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'dossier-color-mode'
  },

  fonts: {
    families: [
      { name: 'Anton', provider: 'google' },
      { name: 'JetBrains Mono', provider: 'google' },
      { name: 'Space Grotesk', provider: 'google' },
      { name: 'Instrument Serif', provider: 'google' }
    ]
  },

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Paras Bhalala | Assistant Software Engineer ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        {
          name: 'description',
          content: 'Assistant Software Engineer at 7Span & M.Sc IT Graduate based in Ahmedabad. Specializing in Vue 3, Nuxt 3, JavaScript, and high-performance web engineering.'
        },
        { name: 'keywords', content: 'Paras Bhalala, Software Engineer, Frontend Developer, Vue.js, Nuxt.js, JavaScript, Ahmedabad, 7Span, Web Developer' },
        { name: 'author', content: 'Paras Bhalala' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { property: 'og:site_name', content: 'Paras Bhalala Portfolio' },
        { property: 'og:title', content: 'Paras Bhalala | Assistant Software Engineer & Frontend Developer' },
        {
          property: 'og:description',
          content: 'Assistant Software Engineer at 7Span & M.Sc IT Graduate based in Ahmedabad. Specializing in Vue 3, Nuxt 3, and high-performance web applications.'
        },
        { property: 'og:type', content: 'profile' },
        { property: 'og:url', content: 'https://paras-bhalala.vercel.app/' },
        { property: 'og:image', content: 'https://paras-bhalala.vercel.app/profile.png' },
        { property: 'og:image:alt', content: 'Paras Bhalala - Assistant Software Engineer' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Paras Bhalala | Assistant Software Engineer & Frontend Developer' },
        {
          name: 'twitter:description',
          content: 'Assistant Software Engineer at 7Span & M.Sc IT Graduate based in Ahmedabad. Specializing in Vue 3, Nuxt 3, and modern web applications.'
        },
        { name: 'twitter:image', content: 'https://paras-bhalala.vercel.app/profile.png' },
        { name: 'google-site-verification', content: 'google55b3ba2f7c9467ca' },
        { name: 'geo.region', content: 'IN-GJ' },
        { name: 'geo.placename', content: 'Ahmedabad' },
        { name: 'theme-color', content: '#EDE8DC' }
      ],
      link: [
        { rel: 'canonical', href: 'https://paras-bhalala.vercel.app/' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      script: [
        {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagId}');
          `
        }
      ]
    }
  }
})
