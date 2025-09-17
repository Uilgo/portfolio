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
  
  // Configurações de hidratação
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8'
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
