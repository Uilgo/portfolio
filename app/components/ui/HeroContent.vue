<template>
  <div class="hero-content">
    <!-- Nome e Tagline -->
    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 md:mb-6">
      <span class="block mb-1 sm:mb-2 animate-slide-right animate-delay-100">{{ name }}</span>
      <div class="tagline-wrapper">
        <span class="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent animate-gradient-shift animate-delay-300 tagline-text">
          {{ displayTagline }}
        </span>
      </div>
    </h1>

    <!-- Descrição -->
    <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed animate-fade-in animate-delay-500 max-w-2xl">
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
  tagline: 'Desenvolvedor Frontend & No-Code/Low-Code',
  description: 'Desenvolvedor focado em No-Code, Front-End e IA Estruturada. Criando soluções modernas e escaláveis com as melhores tecnologias do mercado.'
})

const taglineVariations = [
  'Desenvolvedor Frontend',
  'Desenvolvedor No-Code',
  'Desenvolvedor Low-Code'
]

// Estado reativo para as taglines atuais
const currentTaglines = ref<string[]>([])

onMounted(() => {
  const checkMobile = () => {
    const isMobile = window.innerWidth < 768
    currentTaglines.value = taglineVariations
  }

  checkMobile() // Define o valor inicial
  window.addEventListener('resize', checkMobile)

  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })
})

// Usar o typewriter apenas se houver múltiplas variações
const { finalText: displayTagline } = useTypewriter(currentTaglines, {
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

/* Nome (primeiro span) - comportamento normal */
.hero-content h1 span:first-child {
  white-space: normal;
  display: block;
}

/* Wrapper da tagline - altura fixa absoluta */
.tagline-wrapper {
  display: block;
  height: 1.2em;
  overflow: hidden;
  position: relative;
}

/* Texto da tagline - sem quebra de linha */
.tagline-text {
  white-space: nowrap;
  display: inline-block;
  font-size: inherit;
  line-height: 1.2;
  position: absolute;
  top: 0;
  left: 0;
}

/* Ajuste responsivo para manter texto em uma linha */
@media (max-width: 640px) {
  .hero-content h1 {
    font-size: clamp(1rem, 6vw, 1.25rem);
    line-height: 1.2;
    text-align: center;
  }
  
  .tagline-wrapper {
    height: 1.25rem;
    text-align: center;
  }
  
  .tagline-text {
    font-size: clamp(1rem, 6vw, 1.25rem);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .hero-content p {
    font-size: clamp(0.875rem, 4vw, 1rem);
    line-height: 1.5;
    text-align: center;
  }
}

/* Ajustes específicos para tablets (768px-1024px) */
@media (min-width: 641px) and (max-width: 768px) {
  .hero-content h1 {
    font-size: clamp(1.75rem, 5.5vw, 2.25rem);
    line-height: 1.15;
  }
  
  .tagline-wrapper {
    height: 2.25rem;
    margin-bottom: 0.75rem;
    text-align: center;
  }
  
  .tagline-text {
    font-size: clamp(1.75rem, 5.5vw, 2.25rem);
    position: static;
    left: auto;
    transform: none;
  }
  
  .hero-content p {
    font-size: clamp(1rem, 2.5vw, 1.125rem);
    line-height: 1.6;
    max-width: 90%;
    margin: 0 auto;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .hero-content h1 {
    font-size: clamp(2.25rem, 4.5vw, 2.75rem);
    line-height: 1.1;
  }
  
  .tagline-wrapper {
    height: 2.75rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .tagline-text {
    font-size: clamp(2.25rem, 4.5vw, 2.75rem);
    position: static;
    left: auto;
    transform: none;
  }
  
  .hero-content p {
    font-size: clamp(1.125rem, 2.2vw, 1.25rem);
    line-height: 1.65;
    max-width: 85%;
    margin: 0 auto;
  }
}

@media (min-width: 1025px) {
  .hero-content h1 {
    font-size: clamp(2.5rem, 3.5vw, 3rem);
  }
  
  .tagline-wrapper {
    height: 2.5rem; /* Reduzido de 3rem para 2.5rem */
  }
  
  .tagline-text {
    font-size: clamp(2rem, 2.8vw, 2.5rem); /* Reduzido para evitar corte do texto */
  }
}
</style>