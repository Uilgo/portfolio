<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12 lg:py-0">
    <!-- Background Component -->
    <HeroBackground />

    <!-- Status Indicator Component - Alinhado com o header -->
    <div class="absolute top-6 sm:top-8 left-0 right-0 z-20 pointer-events-none">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <HeroStatusIndicator 
          status="available" 
          custom-text="Disponível para projetos"
        />
      </div>
    </div>

    <!-- Content Container - Alinhado com o header -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Content - Mobile First: Avatar no topo, conteúdo embaixo -->
      <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-6rem)] lg:min-h-[70vh]">
        
        <!-- Avatar Section - Mobile: Topo | Desktop: Direita -->
        <div class="flex flex-col items-center justify-center relative order-1 lg:order-2 mb-8 md:mb-12 lg:mb-0 pt-16 md:pt-24 lg:pt-0">
          <div class="relative">
            <HeroAvatar 
              :initials="heroData.initials"
              :avatar-image="heroData.avatarImage"
              :name="heroData.name"
            />
          </div>
          
          <!-- Tech Stack Preview - Melhor espaçamento para tablet -->
          <div class="mt-8 md:mt-12 lg:mt-16 flex flex-wrap gap-3 md:gap-4 justify-center max-w-md md:max-w-lg">
            <div class="tech-badge px-3 py-2 md:px-4 md:py-2.5 lg:px-3 lg:py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10 flex items-center gap-2 md:gap-3 lg:gap-2 transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/10">
              <Icon name="simple-icons:nextdotjs" class="w-4 h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 text-white" />
              <span class="text-sm md:text-base lg:text-sm text-gray-600 dark:text-gray-300 font-medium">Next.js</span>
            </div>
            <div class="tech-badge px-3 py-2 md:px-4 md:py-2.5 lg:px-3 lg:py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10 flex items-center gap-2 md:gap-3 lg:gap-2 transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/10">
              <Icon name="simple-icons:nuxtdotjs" class="w-4 h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 text-green-400" />
              <span class="text-sm md:text-base lg:text-sm text-gray-600 dark:text-gray-300 font-medium">Nuxt.js</span>
            </div>
            <div class="tech-badge px-3 py-2 md:px-4 md:py-2.5 lg:px-3 lg:py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10 flex items-center gap-2 md:gap-3 lg:gap-2 transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/10">
              <Icon name="simple-icons:supabase" class="w-4 h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 text-green-500" />
              <span class="text-sm md:text-base lg:text-sm text-gray-600 dark:text-gray-300 font-medium">Supabase</span>
            </div>
          </div>
        </div>

        <!-- Content Section - Mobile: Embaixo | Desktop: Esquerda -->
        <div class="flex flex-col justify-center text-center lg:text-left space-y-6 md:space-y-8 lg:space-y-8 order-2 lg:order-1 px-2 sm:px-0">
          <!-- Hero Content -->
          <HeroContent 
            :name="heroData.name"
            :tagline="heroData.tagline"
            :description="heroData.description"
          />

          <!-- Action Buttons -->
          <HeroActions 
            :is-downloading="false"
            @projects-click="scrollToSection('#projetos')"
            @download-cv="downloadCV"
            @contact-click="scrollToSection('#contato')"
          />

          <!-- Social Links -->
          <HeroSocialLinks 
            :links="heroData.socialLinks"
            class="justify-center lg:justify-start"
          />
        </div>
      </div>
    </div>

    <!-- Scroll Indicator Component -->
    <HeroScrollIndicator 
      text="Role para baixo"
      scroll-target="#about"
      @scroll-click="scrollToSection"
      class="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block"
    />
  </section>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'
import HeroBackground from '~/components/ui/HeroBackground.vue'
import HeroStatusIndicator from '~/components/ui/HeroStatusIndicator.vue'
import HeroAvatar from '~/components/ui/HeroAvatar.vue'
import HeroContent from '~/components/ui/HeroContent.vue'
import HeroActions from '~/components/ui/HeroActions.vue'
import HeroSocialLinks from '~/components/ui/HeroSocialLinks.vue'
import HeroScrollIndicator from '~/components/ui/HeroScrollIndicator.vue'

// Dados da hero section centralizados
const heroData = {
  initials: 'IE',
  name: 'Igor Elias',
  tagline: 'Desenvolvedor Frontend & No-Code/Low-Code',
  description: 'Transformo ideias em soluções digitais com Frontend moderno e desenvolvimento No-Code/Low-Code. Experiência em criar interfaces que conectam tecnologia e experiência do usuário. 🚀',
  avatarImage: '/images/igor-profiles.jpeg', // Usando o arquivo que existe
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/Uilgo',
      icon: 'simple-icons:github',
      external: true
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/igor-elias-de-lima/',
      icon: 'simple-icons:linkedin',
      external: true
    },
    {
      name: 'E-mail',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=igorelias.pro@gmail.com&su=Contato%20via%20Portf%C3%B3lio&body=Ol%C3%A1%20Igor%21%0A%0AGostaria%20de%20conversar%20sobre%20um%20projeto.',
      icon: 'heroicons:envelope',
      external: true
    }
  ]
}

// Função para scroll suave para seções
const scrollToSection = (target: string) => {
  if (process.client) {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}

// Estado do download
const isDownloading = ref(false)

// Função para download do CV
const downloadCV = () => {
  if (!process.client) return
  
  isDownloading.value = true
  
  try {
    const link = document.createElement('a')
    link.href = '/curriculo.pdf'
    link.download = 'Igor_Elias_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    window.open('/curriculo.pdf', '_blank')
  } finally {
    setTimeout(() => {
      isDownloading.value = false
    }, 500)
  }
}
</script>

<style scoped>
/* Estilos específicos da HeroSection se necessário */
</style>