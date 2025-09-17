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

// Meta tags para SEO
useHead({
  title: 'Igor Elias - Portfólio',
  meta: [
    {
      name: 'description',
      content: 'Portfólio de Igor Elias, especialista em No-Code, Front-End e IA Estruturada. Conheça meus projetos e entre em contato.'
    }
  ]
})
</script>