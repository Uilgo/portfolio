<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Partículas flutuantes -->
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="absolute rounded-full opacity-20 dark:opacity-10 animate-float"
      :class="particle.colorClass"
      :style="{
        left: particle.left + '%',
        top: particle.top + '%',
        width: particle.size + 'px',
        height: particle.size + 'px',
        animationDelay: particle.delay + 's',
        animationDuration: particle.duration + 's'
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Particle {
  id: number
  left: number
  top: number
  size: number
  colorClass: string
  delay: number
  duration: number
}



const particles = ref<Particle[]>([])

// Cores disponíveis para partículas
const particleColors = [
  'bg-primary-300',
  'bg-primary-400',
  'bg-accent-300',
  'bg-accent-400',
  'bg-blue-300',
  'bg-blue-400',
  'bg-indigo-300',
  'bg-indigo-400'
]

// Cores para bordas dos círculos
const circleBorders = [
  'border-primary-200',
  'border-accent-200',
  'border-blue-200',
  'border-indigo-200'
]

// Gerar partículas aleatórias
const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 8 + 4, // 4-12px
    colorClass: particleColors[Math.floor(Math.random() * particleColors.length)] || 'bg-primary-300',
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10 // 10-20s
  }))
}

// Regenerar elementos periodicamente para dinamismo
const regenerateElements = () => {
  // Regenerar algumas partículas
  const particlesToRegenerate = Math.floor(particles.value.length * 0.3)
  for (let i = 0; i < particlesToRegenerate; i++) {
    const randomIndex = Math.floor(Math.random() * particles.value.length)
    if (particles.value[randomIndex]) {
      particles.value[randomIndex].left = Math.random() * 100
      particles.value[randomIndex].top = Math.random() * 100
      particles.value[randomIndex].delay = Math.random() * 5
    }
  }
}

onMounted(() => {
  // Gerar partículas apenas
  particles.value = generateParticles(12)

  // Regenerar elementos a cada 30 segundos para manter o dinamismo
  const interval = setInterval(regenerateElements, 30000)

  // Cleanup no unmount
  onUnmounted(() => {
    clearInterval(interval)
  })
})
</script>

<style scoped>
/* Animação float personalizada para partículas */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(-20px) translateX(-5px);
  }
  75% {
    transform: translateY(-10px) translateX(5px);
  }
}

.animate-float {
  animation: float 15s ease-in-out infinite;
}

/* Animação de pulso mais suave */
@keyframes soft-pulse {
  0%, 100% {
    opacity: 0.05;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
    transform: scale(1.1);
  }
}

.animate-pulse {
  animation: soft-pulse 8s ease-in-out infinite;
}
</style>