<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-700 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-105"
    >
      <div
        v-if="isVisible"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden"
        :class="{ 'pointer-events-none': !isVisible }"
      >
        <!-- Grid de fundo animado -->
        <div class="absolute inset-0 opacity-20">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse-grid" />
          <div 
            class="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(6,182,212,0.03)_25%,rgba(6,182,212,0.03)_26%,transparent_27%,transparent_74%,rgba(6,182,212,0.03)_75%,rgba(6,182,212,0.03)_76%,transparent_77%,transparent),linear-gradient(rgba(6,182,212,0.03)_50%,transparent_50%)]"
            style="background-size: 50px 50px;"
          />
        </div>

        <!-- Partículas flutuantes -->
        <div class="absolute inset-0 overflow-hidden">
          <div
            v-for="(particle, i) in particlePositions"
            :key="i"
            class="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float-particle"
            :style="{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }"
          />
        </div>

        <!-- Container principal -->
        <div class="relative z-10 flex flex-col items-center justify-center space-y-6 sm:space-y-8 px-4 sm:px-8">
          <!-- Anel rotativo -->
          <div class="relative w-24 h-24 sm:w-32 sm:h-32">
            <!-- Anel externo -->
            <div class="absolute inset-0 rounded-full border-2 sm:border-4 border-slate-700/50" />
            <div class="absolute inset-0 rounded-full border-2 sm:border-4 border-transparent border-t-cyan-400 border-r-blue-500 animate-spin-slow" />
            
            <!-- Logo central -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 animate-pulse-glow">
                <span class="text-white font-bold text-lg sm:text-2xl tracking-wider">IE</span>
              </div>
            </div>
          </div>

          <!-- Texto principal -->
          <div class="text-center space-y-2 sm:space-y-3">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              {{ currentText }}
            </h1>
            <p class="text-slate-400 text-base sm:text-lg font-medium">
              Carregando portfólio
            </p>
          </div>

          <!-- Barra de progresso ultra moderna -->
          <div class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-96 space-y-3 sm:space-y-4">
            <div class="flex justify-between items-center text-xs sm:text-sm">
              <span class="text-slate-300 font-semibold tracking-wide">Carregando</span>
              <div class="flex items-center space-x-1 sm:space-x-2">
                <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span class="text-cyan-400 font-bold text-base sm:text-lg tabular-nums">{{ Math.round(progress) }}%</span>
              </div>
            </div>
            
            <!-- Container da barra com glassmorphism -->
            <div class="relative p-0.5 sm:p-1 bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-slate-600/30 shadow-2xl">
              <div class="relative h-2 sm:h-3 bg-slate-900/80 rounded-lg sm:rounded-xl overflow-hidden">
                <!-- Efeito de reflexo no fundo -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent" />
                
                <!-- Barra de progresso principal -->
                <div
                  class="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-lg sm:rounded-xl"
                  :style="{ width: `${progress}%` }"
                >
                  <!-- Efeito de brilho animado -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-enhanced rounded-lg sm:rounded-xl" />
                  
                  <!-- Pontos de luz -->
                  <div class="absolute top-1/2 right-0.5 sm:right-1 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full transform -translate-y-1/2 animate-pulse" />
                </div>
                
                <!-- Efeito de partículas na barra -->
                <div 
                  v-if="progress > 10"
                  class="absolute top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-300 rounded-full animate-bounce"
                  :style="{ left: `${Math.max(0, progress - 2)}%` }"
                />
              </div>
            </div>
            
            <!-- Indicador de status -->
            <div class="text-center">
              <p class="text-slate-400 text-xs sm:text-sm font-medium">
                <span v-if="progress < 30">Inicializando sistema...</span>
                <span v-else-if="progress < 60">Carregando componentes...</span>
                <span v-else-if="progress < 90">Finalizando...</span>
                <span v-else>Quase pronto!</span>
              </p>
            </div>
          </div>

          <!-- Ícones das tecnologias com design aprimorado -->
          <div class="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 py-3 sm:py-4">
            <div
              v-for="(tech, index) in technologies"
              :key="tech.name"
              class="group flex flex-col items-center space-y-2 sm:space-y-3 animate-tech-appear flex-shrink-0"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <!-- Container do ícone com efeitos modernos -->
              <div class="relative">
                <!-- Anel de fundo animado -->
                <div class="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-700/30 to-slate-800/50 backdrop-blur-sm border border-slate-600/40 group-hover:border-slate-500/60 transition-all duration-500" />
                
                <!-- Anel de brilho -->
                <div 
                  class="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  :class="tech.bgClass"
                />
                
                <div class="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <!-- Usando ClientOnly para evitar problemas de hidratação com ícones -->
                  <ClientOnly>
                    <Icon 
                      :name="tech.iconName"
                      class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-all duration-500"
                      :class="[tech.iconClass, 'group-hover:scale-110 group-hover:drop-shadow-lg']"
                    />
                    <!-- Fallback para SSR -->
                    <template #fallback>
                      <div 
                        class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-all duration-500 bg-gray-600/50 rounded"
                        :class="'group-hover:scale-110 group-hover:drop-shadow-lg'"
                      />
                    </template>
                  </ClientOnly>
                  
                  <div 
                    v-if="isClientMounted"
                    class="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <div class="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-400 rounded-full animate-ping" />
                    <div class="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
              
              <!-- Nome da tecnologia -->
              <span class="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide group-hover:text-slate-300 transition-colors duration-300">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Efeito de luz ambiente -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-radial from-cyan-500/10 via-blue-500/5 to-transparent rounded-full animate-pulse-ambient" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface Props {
  /** Controla se o loading está visível */
  modelValue?: boolean
  /** Duração mínima do loading em ms */
  minDuration?: number
  /** Textos para o efeito typewriter */
  texts?: string[]
  /** Progresso manual (0-100) */
  manualProgress?: number
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'complete'): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
  minDuration: 2000,
  texts: () => ['Inicializando', 'Carregando', 'Quase pronto'],
  manualProgress: undefined
})

const emit = defineEmits<Emits>()

// Estados reativos
const isVisible = ref(props.modelValue)
const progress = ref(0)
const currentTextIndex = ref(0)
const startTime = ref(0)
const isClientMounted = ref(false)

// Posições fixas das partículas para evitar problemas de hidratação
const particlePositions = ref([
  { left: 10, top: 20, delay: 0, duration: 4 },
  { left: 85, top: 15, delay: 0.5, duration: 5 },
  { left: 25, top: 80, delay: 1, duration: 6 },
  { left: 70, top: 60, delay: 1.5, duration: 4.5 },
  { left: 45, top: 10, delay: 2, duration: 5.5 },
  { left: 90, top: 75, delay: 2.5, duration: 4.2 },
  { left: 15, top: 45, delay: 3, duration: 6.5 },
  { left: 60, top: 25, delay: 3.5, duration: 5.8 },
  { left: 35, top: 90, delay: 0.2, duration: 4.8 },
  { left: 80, top: 40, delay: 0.8, duration: 5.2 },
  { left: 5, top: 65, delay: 1.2, duration: 6.2 },
  { left: 55, top: 5, delay: 1.8, duration: 4.6 },
  { left: 75, top: 85, delay: 2.2, duration: 5.4 },
  { left: 20, top: 35, delay: 2.8, duration: 6.8 },
  { left: 95, top: 50, delay: 3.2, duration: 4.4 }
])

// Computed para texto atual
const currentText = computed(() => props.texts[currentTextIndex.value])

// Tecnologias principais com ícones da biblioteca simple-icons
const technologies = ref([
  {
    name: 'Next.js',
    iconName: 'simple-icons:nextdotjs',
    bgClass: 'bg-gray-500/20 border border-gray-500/30',
    iconClass: 'text-gray-300'
  },
  {
    name: 'Nuxt.js',
    iconName: 'simple-icons:nuxtdotjs',
    bgClass: 'bg-green-500/20 border border-green-500/30',
    iconClass: 'text-green-400'
  },
  {
    name: 'Supabase',
    iconName: 'simple-icons:supabase',
    bgClass: 'bg-emerald-500/20 border border-emerald-500/30',
    iconClass: 'text-emerald-400'
  }
])

// Intervalos
let progressInterval: NodeJS.Timeout | null = null
let textInterval: NodeJS.Timeout | null = null
let minDurationTimeout: NodeJS.Timeout | null = null

/**
 * Inicia a animação de progresso
 */
const startProgress = () => {
  startTime.value = Date.now()
  
  // Progresso automático se não for manual
  if (props.manualProgress === undefined) {
    progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime.value
      const targetProgress = Math.min((elapsed / props.minDuration) * 100, 95)
      
      // Progresso direto sem animação suave para evitar flutuações
      progress.value = targetProgress
      
      if (progress.value >= 95) {
        clearInterval(progressInterval!)
        progressInterval = null
      }
    }, 100) // Reduzido para 100ms para menos atualizações
  }
}

/**
 * Inicia a rotação de textos
 */
const startTextRotation = () => {
  textInterval = setInterval(() => {
    currentTextIndex.value = (currentTextIndex.value + 1) % props.texts.length
  }, 2000) // Aumentado para 2 segundos para reduzir piscadas
}

/**
 * Finaliza o loading
 */
const finishLoading = () => {
  // Completa o progresso diretamente
  progress.value = 100
  
  // Aguarda um pouco antes de esconder
  setTimeout(() => {
    isVisible.value = false
    emit('update:modelValue', false)
    emit('complete')
  }, 300)
}

/**
 * Limpa todos os intervalos
 */
const cleanup = () => {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
  if (textInterval) {
    clearInterval(textInterval)
    textInterval = null
  }
  if (minDurationTimeout) {
    clearTimeout(minDurationTimeout)
    minDurationTimeout = null
  }
}

// Watchers
watch(() => props.modelValue, (newValue) => {
  if (newValue && !isVisible.value) {
    // Reinicia o loading
    isVisible.value = true
    progress.value = 0
    currentTextIndex.value = 0
    startProgress()
    startTextRotation()
    
    // Garante duração mínima
    minDurationTimeout = setTimeout(() => {
      if (progress.value >= 95) {
        finishLoading()
      }
    }, props.minDuration)
  } else if (!newValue && isVisible.value) {
    finishLoading()
  }
})

watch(() => props.manualProgress, (newProgress) => {
  if (newProgress !== undefined) {
    progress.value = Math.max(0, Math.min(100, newProgress))
    
    if (newProgress >= 100) {
      finishLoading()
    }
  }
})

// Lifecycle
onMounted(() => {
  isClientMounted.value = true
  
  if (props.modelValue) {
    startProgress()
    startTextRotation()
    
    // Garante duração mínima
    minDurationTimeout = setTimeout(() => {
      if (progress.value >= 95) {
        finishLoading()
      }
    }, props.minDuration)
  }
})

onUnmounted(() => {
  cleanup()
})

// Expor métodos para controle externo
defineExpose({
  finish: finishLoading,
  setProgress: (value: number) => {
    progress.value = Math.max(0, Math.min(100, value))
  }
})
</script>

<style scoped>
/* Animações customizadas para o loading moderno */

/* Animação do grid de fundo */
@keyframes pulse-grid {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

.animate-pulse-grid {
  animation: pulse-grid 3s ease-in-out infinite;
}

/* Animação das partículas flutuantes */
@keyframes float-particle {
  0%, 100% {
    transform: translateY(0px) translateX(0px) scale(1);
    opacity: 0.4;
  }
  25% {
    transform: translateY(-20px) translateX(10px) scale(1.1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-10px) translateX(-15px) scale(0.9);
    opacity: 0.6;
  }
  75% {
    transform: translateY(-30px) translateX(5px) scale(1.05);
    opacity: 0.7;
  }
}

.animate-float-particle {
  animation: float-particle 6s ease-in-out infinite;
}

/* Animação do anel rotativo */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

/* Animação do logo com brilho */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.2);
    transform: scale(1.05);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Animações de fade in */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

@keyframes fade-in-delayed {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  60% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-delayed {
  animation: fade-in-delayed 1.2s ease-out forwards;
}

/* Animação dos ícones de tecnologia - mais rápida */
@keyframes tech-appear {
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-tech-appear {
  animation: tech-appear 0.6s ease-out forwards;
  opacity: 0;
}

/* Animação da barra de progresso com shimmer aprimorado */
@keyframes shimmer-enhanced {
  0% {
    transform: translateX(-100%) skewX(-15deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(200%) skewX(-15deg);
    opacity: 0;
  }
}

.animate-shimmer-enhanced {
  animation: shimmer-enhanced 2.5s ease-in-out infinite;
}

/* Animação dos pontos de loading */
@keyframes pulse-dot {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.animate-pulse-dot {
  animation: pulse-dot 1.5s ease-in-out infinite;
}

/* Animação da luz ambiente */
@keyframes pulse-ambient {
  0%, 100% {
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.2;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.animate-pulse-ambient {
  animation: pulse-ambient 4s ease-in-out infinite;
}

/* Gradiente radial customizado */
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}

/* Otimizações de performance */
.animate-float-particle,
.animate-spin-slow,
.animate-pulse-glow,
.animate-tech-appear,
.animate-shimmer-bar,
.animate-pulse-dot,
.animate-pulse-ambient {
  will-change: transform, opacity;
}

/* Garante que o loading fique sempre no topo */
.z-\[9999\] {
  z-index: 9999;
}

/* Melhora a renderização de texto com gradiente */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>