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
import { ref, onMounted, onUnmounted } from 'vue'

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

// Gerar partículas com valores fixos para evitar problemas de hidratação
const generateParticles = (count: number) => {
  // Valores fixos para SSR/Client consistency
  const fixedPositions = [
    { left: 10, top: 20, size: 6, delay: 0, duration: 15 },
    { left: 85, top: 15, size: 8, delay: 1, duration: 18 },
    { left: 20, top: 80, size: 4, delay: 2, duration: 12 },
    { left: 70, top: 70, size: 10, delay: 0.5, duration: 20 },
    { left: 50, top: 30, size: 5, delay: 1.5, duration: 16 },
    { left: 30, top: 60, size: 7, delay: 2.5, duration: 14 },
    { left: 90, top: 50, size: 6, delay: 3, duration: 17 },
    { left: 15, top: 45, size: 9, delay: 0.8, duration: 13 },
    { left: 60, top: 85, size: 4, delay: 1.8, duration: 19 },
    { left: 40, top: 10, size: 8, delay: 2.2, duration: 15 },
    { left: 75, top: 35, size: 5, delay: 3.5, duration: 16 },
    { left: 25, top: 75, size: 7, delay: 1.2, duration: 18 }
  ]

  return Array.from({ length: Math.min(count, fixedPositions.length) }, (_, i) => {
    const position = fixedPositions[i]
    if (!position) {
      // Fallback para posição padrão se não existir
      return {
        id: i,
        left: 50,
        top: 50,
        size: 6,
        colorClass: particleColors[i % particleColors.length] || 'bg-primary-300',
        delay: 0,
        duration: 15
      }
    }
    
    return {
      id: i,
      left: position.left,
      top: position.top,
      size: position.size,
      colorClass: particleColors[i % particleColors.length] || 'bg-primary-300',
      delay: position.delay,
      duration: position.duration
    }
  })
}

// Regenerar elementos periodicamente para dinamismo (apenas no cliente)
const regenerateElements = () => {
  if (!process.client) return
  
  // Regenerar algumas partículas com valores fixos
  const particlesToRegenerate = Math.floor(particles.value.length * 0.3)
  const newPositions = [
    { left: 15, top: 25 }, { left: 80, top: 60 }, { left: 45, top: 15 },
    { left: 65, top: 80 }, { left: 25, top: 55 }
  ]
  
  for (let i = 0; i < particlesToRegenerate; i++) {
    const randomIndex = Math.floor(Math.random() * particles.value.length)
    const newPos = newPositions[i % newPositions.length]
    const particle = particles.value[randomIndex]
    
    // Verificar se a partícula e nova posição existem antes de atualizar
    if (particle && newPos) {
      particle.left = newPos.left
      particle.top = newPos.top
      particle.delay = i * 0.5
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