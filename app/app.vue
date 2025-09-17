<template>
  <!-- Loading Screen -->
  <LoadingScreen 
    :is-visible="isLoading"
    :messages="loadingMessages"
    @complete="handleLoadingComplete"
  />

  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useLoading } from '~/composables/useLoading'
import LoadingScreen from '~/components/ui/LoadingScreen.vue'

// Loading state
const { isLoading, simulateLoading } = useLoading('app')

// Mensagens de loading
const loadingMessages = [
  'Inicializando portfólio...',
  'Carregando experiências...',
  'Preparando projetos...',
  'Configurando animações...',
  'Pronto!'
]

// Garantir que o color-mode seja inicializado
const colorMode = useColorMode()

// Handler para loading completo
const handleLoadingComplete = () => {
  // Loading finalizado, o componente já se esconde automaticamente
}

// Aplicar classes no elemento HTML
onMounted(() => {
  const applyTheme = () => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(colorMode.value)
  }
  
  // Aplicar tema inicial
  applyTheme()
  
  // Observar mudanças no tema
  watch(() => colorMode.value, applyTheme, { immediate: true })

  // Simular loading inicial (apenas na primeira visita)
  if (process.client) {
    const hasVisited = sessionStorage.getItem('portfolio-visited')
    if (!hasVisited) {
      simulateLoading(2500, loadingMessages)
      sessionStorage.setItem('portfolio-visited', 'true')
    }
  }
})
</script>
