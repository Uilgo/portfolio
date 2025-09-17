<template>
  <transition
    name="loading"
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950"
      :class="{ 'pointer-events-none': !isVisible }"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div
          v-for="i in 20"
          :key="`dot-${i}`"
          class="absolute w-2 h-2 bg-primary-500 rounded-full animate-pulse"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }"
        />
      </div>

      <!-- Main Loading Content -->
      <div class="text-center space-y-8">
        <!-- Animated Logo/Icon -->
        <div class="relative">
          <!-- Central Circle -->
          <div class="w-20 h-20 mx-auto relative">
            <!-- Outer Ring -->
            <div class="absolute inset-0 rounded-full border-4 border-primary-200 dark:border-primary-800" />
            
            <!-- Animated Ring -->
            <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-600 animate-spin" />
            
            <!-- Inner Pulse -->
            <div class="absolute inset-2 rounded-full bg-primary-100 dark:bg-primary-900 animate-pulse" />
            
            <!-- Center Icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <Icon
                name="heroicons:rocket-launch"
                class="w-8 h-8 text-primary-600 animate-bounce-subtle"
              />
            </div>

            <!-- Orbiting Dots -->
            <div
              v-for="(dot, index) in orbitDots"
              :key="`orbit-${index}`"
              class="absolute w-3 h-3 bg-primary-500 rounded-full animate-spin"
              :style="{
                left: '50%',
                top: '50%',
                transformOrigin: '0 40px',
                animationDuration: `${2 + index * 0.5}s`,
                animationDelay: `${index * 0.2}s`
              }"
            />
          </div>

          <!-- Floating Particles -->
          <div
            v-for="particle in particles"
            :key="`particle-${particle.id}`"
            class="absolute w-1 h-1 bg-primary-400 rounded-full animate-float opacity-60"
            :style="{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }"
          />
        </div>

        <!-- Loading Text -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 animate-pulse">
            {{ messages[currentMessageIndex] }}
          </h2>
          
          <!-- Progress Bar -->
          <div class="w-64 mx-auto">
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                class="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-300 ease-out relative"
                :style="{ width: `${progress}%` }"
              >
                <!-- Shimmer Effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
            
            <!-- Progress Text -->
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 animate-fade-in">
              {{ Math.round(progress) }}%
            </p>
          </div>
        </div>

        <!-- Tech Stack Icons (optional) -->
        <div v-if="showTechStack" class="flex justify-center gap-4 mt-8">
          <div
            v-for="(tech, index) in techStack"
            :key="tech.name"
            class="flex flex-col items-center gap-2 opacity-0 animate-stagger-1"
            :class="`animate-stagger-${index + 1}`"
          >
            <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover-glow">
              <Icon :name="tech.icon" class="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface Props {
  isVisible?: boolean
  messages?: string[]
  duration?: number
  showTechStack?: boolean
  autoProgress?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isVisible: true,
  messages: () => [
    'Carregando portfólio...',
    'Preparando experiências...',
    'Organizando projetos...',
    'Finalizando detalhes...',
    'Quase pronto!'
  ],
  duration: 3000,
  showTechStack: true,
  autoProgress: true
})

const emit = defineEmits<{
  complete: []
}>()

// Estado do loading
const progress = ref(0)
const currentMessageIndex = ref(0)

// Elementos decorativos
const orbitDots = ref(Array.from({ length: 3 }, (_, i) => i))
const particles = ref(
  Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }))
)

// Tech stack icons
const techStack = [
  { name: 'Vue', icon: 'simple-icons:vuedotjs' },
  { name: 'React', icon: 'simple-icons:react' },
  { name: 'Node', icon: 'simple-icons:nodedotjs' },
  { name: 'TS', icon: 'simple-icons:typescript' }
]

// Intervalos
let progressInterval: NodeJS.Timeout | null = null
let messageInterval: NodeJS.Timeout | null = null

// Iniciar animações
const startLoading = () => {
  if (!props.autoProgress) return

  const progressStep = 100 / (props.duration / 50) // Atualiza a cada 50ms
  const messageStep = props.duration / props.messages.length

  // Progress bar
  progressInterval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += progressStep
    } else {
      if (progressInterval) {
        clearInterval(progressInterval)
        progressInterval = null
      }
      // Pequeno delay antes de finalizar
      setTimeout(() => {
        emit('complete')
      }, 500)
    }
  }, 50)

  // Trocar mensagens
  messageInterval = setInterval(() => {
    if (currentMessageIndex.value < props.messages.length - 1) {
      currentMessageIndex.value++
    }
  }, messageStep)
}

// Parar animações
const stopLoading = () => {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
  if (messageInterval) {
    clearInterval(messageInterval)
    messageInterval = null
  }
}

// Controle manual do progress
const setProgress = (value: number) => {
  progress.value = Math.max(0, Math.min(100, value))
  
  // Atualizar mensagem baseada no progresso
  const messageIndex = Math.floor((value / 100) * (props.messages.length - 1))
  currentMessageIndex.value = Math.min(messageIndex, props.messages.length - 1)
  
  if (value >= 100) {
    setTimeout(() => {
      emit('complete')
    }, 500)
  }
}

onMounted(() => {
  if (props.isVisible) {
    startLoading()
  }
})

onUnmounted(() => {
  stopLoading()
})

// Watch para mudanças na visibilidade
watch(() => props.isVisible, (newVisible) => {
  if (newVisible) {
    startLoading()
  } else {
    stopLoading()
  }
})

// Expor métodos para controle externo
defineExpose({
  setProgress,
  startLoading,
  stopLoading
})
</script>

<style scoped>
/* Animação customizada para shimmer */
.animate-shimmer {
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Animação customizada para orbiting dots */
@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(40px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(40px) rotate(-360deg);
  }
}
</style>