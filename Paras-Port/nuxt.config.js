
 // https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/fonts'
  ],

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
      title: 'Paras Bhalala - Assistant Software Engineer | M.Sc IT Graduate',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        {
          name: 'description',
          content: 'Assistant Software Engineer at 7Span and M.Sc IT Graduate based in Ahmedabad. Skilled in Vue, Nuxt, JavaScript, and modern web engineering.'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Paras Bhalala' },
        { property: 'og:title', content: 'Paras Bhalala - Assistant Software Engineer | M.Sc IT Graduate' },
        {
          property: 'og:description',
          content: 'Assistant Software Engineer at 7Span and M.Sc IT Graduate based in Ahmedabad. Skilled in Vue, Nuxt, JavaScript, and modern web engineering.'
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'theme-color', content: '#EDE8DC' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KM4ZQG3ZN8');
          `
        }
      ]
    }
  }
})
