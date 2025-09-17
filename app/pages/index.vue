<template>
  <div class="animate-fade-in">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Skills Section -->
    <SkillsSection />
    
    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/layouts/HeroSection.vue'
import AboutSection from '~/components/layouts/AboutSection.vue'
import SkillsSection from '~/components/layouts/SkillsSection.vue'
import ProjectsSection from '~/components/layouts/ProjectsSection.vue'
import ContactSection from '~/components/layouts/ContactSection.vue'

// Meta tags para SEO - página inicial
useHead({
  title: 'Portfólio',
  meta: [
    {
      name: 'description',
      content: 'Conheça o portfólio de Igor Elias, desenvolvedor frontend especializado em No-Code, Low-Code e tecnologias modernas como Vue.js, Nuxt.js e Tailwind CSS. Veja meus projetos e entre em contato.'
    },
    {
      property: 'og:url',
      content: 'https://igorelias.dev'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})
</script>