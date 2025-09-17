<template>
  <div class="hero-content">
    <!-- Nome e Tagline -->
    <h1 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
      <span class="block mb-2 animate-slide-right animate-delay-100">{{ name }}</span>
      <span class="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent animate-gradient-shift animate-delay-300 min-h-[1.2em] block whitespace-nowrap">
        {{ displayTagline }}
      </span>
    </h1>

    <!-- Descrição -->
    <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in animate-delay-500">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useTypewriter } from '~/composables/useTextAnimations'

interface Props {
  name?: string
  tagline?: string
  description?: string
}

// Props com valores padrão
const props = withDefaults(defineProps<Props>(), {
  name: 'Igor Elias',
  tagline: 'Especialista No-Code & Front-End',
  description: 'Desenvolvedor focado em No-Code, Front-End e IA Estruturada. Criando soluções modernas e escaláveis com as melhores tecnologias do mercado.'
})

// Diferentes variações da tagline para efeito typewriter
const taglineVariations = [
  'Desenvolvedor Front-End',
  'Desenvolvedor No-Code',
  'Desenvolvedor Low-Code',
  'IA Componentizada e Modular'
]

// Usar o typewriter apenas se houver múltiplas variações
const { finalText: displayTagline } = useTypewriter(taglineVariations, {
  speed: 120,
  deleteSpeed: 80,
  deleteDelay: 2500,
  delay: 800,
  loop: true
})
</script>

<style scoped>
/* Melhoramento do gradient text */
@supports (background-clip: text) {
  .bg-clip-text {
    background-clip: text;
    -webkit-background-clip: text;
  }
}

/* Garante que o texto nunca quebre linha */
.hero-content h1 {
  line-height: 1.1;
}

.hero-content h1 span {
  white-space: nowrap;
  overflow: visible;
}

/* Ajuste responsivo para manter texto em uma linha */
@media (max-width: 640px) {
  .hero-content h1 {
    font-size: clamp(1rem, 6vw, 1.25rem);
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .hero-content h1 {
    font-size: clamp(1.25rem, 4vw, 1.5rem);
  }
}

@media (min-width: 1025px) {
  .hero-content h1 {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
  }
}
</style>