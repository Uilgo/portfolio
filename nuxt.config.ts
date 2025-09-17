// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  // Configurações experimentais
  experimental: {
    asyncContext: false,
    // Melhora a hidratação
    payloadExtraction: false
  },

  // SSR configuration
  ssr: true,
  
  // Configurações de hidratação e SEO
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
      title: 'Igor Elias | Desenvolvedor Frontend',
      titleTemplate: '%s - Igor Elias',
      meta: [
        {
          name: 'description',
          content: 'Igor Elias - Desenvolvedor Frontend especializado em No-Code, Low-Code e tecnologias modernas. Criando soluções digitais inovadoras e experiências de usuário excepcionais.'
        },
        {
          name: 'keywords',
          content: 'Igor Elias, Desenvolvedor Frontend, No-Code, Low-Code, Vue.js, Nuxt.js, JavaScript, TypeScript, Tailwind CSS, Desenvolvedor Web'
        },
        {
          name: 'author',
          content: 'Igor Elias'
        },
        {
          property: 'og:title',
          content: 'Igor Elias | Desenvolvedor Frontend'
        },
        {
          property: 'og:description',
          content: 'Desenvolvedor Frontend especializado em No-Code, Low-Code e tecnologias modernas. Criando soluções digitais inovadoras.'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:locale',
          content: 'pt_BR'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Igor Elias | Desenvolvedor Frontend'
        },
        {
          name: 'twitter:description',
          content: 'Desenvolvedor Frontend especializado em No-Code, Low-Code e tecnologias modernas.'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon.svg'
        }
      ]
    }
  },

  // Configurações do Vue para reduzir warnings
  vue: {
    compilerOptions: {
      // Remove warnings de hidratação em desenvolvimento
      isCustomElement: (tag) => false
    }
  },

  // Módulos essenciais
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/motion/nuxt",
    "@nuxtjs/seo",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],

  // Configurações de SEO
  seo: {
    redirectToCanonicalSiteUrl: true
  },

  // Configurações do Nuxt Image
  image: {
    quality: 80,
    format: ['webp', 'avif', 'png', 'jpg']
  },

  // Configurações de estilo
  css: ["./app/assets/css/main.css", "./app/assets/css/animations.css"],

  // Configuração do color-mode
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },

  // Runtime config públicos (ex.: WhatsApp number)
  runtimeConfig: {
    public: {
      whatsappNumber: process.env.WHATSAPP_NUMBER || '5584996551792'
    }
  }
});
