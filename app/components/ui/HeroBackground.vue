<template>
  <div class="absolute inset-0">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500" />
    
    <!-- Animated Particles -->
    <AnimatedParticles />
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div 
        v-for="(blob, index) in blobs" 
        :key="index"
        :class="[
          'absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob',
          blob.position,
          blob.color,
          blob.delay
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimatedParticles from '~/components/ui/AnimatedParticles.vue'

// Configuração dos blobs animados para o background
const blobs = [
  {
    position: '-top-4 -right-4',
    color: 'bg-primary-200/20 dark:bg-primary-800/20',
    delay: ''
  },
  {
    position: '-bottom-8 -left-4',
    color: 'bg-accent-200/20 dark:bg-accent-800/20',
    delay: 'animation-delay-2000'
  },
  {
    position: '-bottom-4 right-20',
    color: 'bg-success-200/20 dark:bg-success-800/20',
    delay: 'animation-delay-4000'
  }
]
</script>

<style scoped>
/* Animação dos blobs flutuantes */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>