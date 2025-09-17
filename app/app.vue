<template>
  <!-- Loading Screen - Aparece antes da renderização -->
  <LoadingScreen 
    v-model="isLoading" 
    :min-duration="1500"
    :texts="['Carregando Portfólio', 'Inicializando', 'Quase pronto']"
    @complete="onLoadingComplete"
  />
  
  <!-- Conteúdo principal - Sempre presente para o Nuxt detectar -->
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <!-- Conteúdo só aparece após o loading -->
    <Transition
      enter-active-class="transition-opacity duration-700 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <div v-if="!isLoading" class="min-h-screen">
        <NuxtPage />
      </div>
    </Transition>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { watch, onMounted, ref } from 'vue'
import LoadingScreen from '~/components/ui/LoadingScreen.vue'

// Estado do loading
const isLoading = ref(true)

// Garantir que o color-mode seja inicializado
const colorMode = useColorMode()

/**
 * Callback executado quando o loading é concluído
 */
const onLoadingComplete = () => {
  isLoading.value = false
}

/**
 * Simula o carregamento de recursos da aplicação
 */
const simulateAppLoading = async () => {
  try {
    // Simula carregamento de recursos críticos
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Aguarda que o DOM esteja pronto
    await nextTick()
    
    // Simula carregamento de imagens e outros recursos
    if (process.client) {
      // Aguarda que as fontes estejam carregadas
      await document.fonts.ready
      
      // Pequeno delay adicional para garantir que tudo esteja pronto
      await new Promise(resolve => setTimeout(resolve, 200))
    }
    
    // Finaliza o loading após o carregamento dos recursos
    // O LoadingScreen tem duração mínima de 1500ms, então respeitamos isso
    setTimeout(() => {
      isLoading.value = false
    }, Math.max(0, 1500 - (Date.now() - startTime)))
  } catch (error) {
    console.error('Erro durante o carregamento:', error)
    // Em caso de erro, finaliza o loading após a duração mínima
    setTimeout(() => {
      isLoading.value = false
    }, 1500)
  }
}

// Tempo de início para calcular duração
let startTime = Date.now()

// Aplicar classes no elemento HTML e configurar scroll suave
onMounted(async () => {
  // Registrar o tempo de início
  startTime = Date.now()
  
  const applyTheme = () => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(colorMode.value)
  }
  
  // Aplicar tema inicial
  applyTheme()
  
  // Observar mudanças no tema
  watch(() => colorMode.value, applyTheme, { immediate: true })

  // Configurar scroll suave aprimorado para toda a aplicação
  if (process.client) {
    // Interceptar todos os links de âncora para scroll suave
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (link) {
        e.preventDefault()
        const targetId = link.getAttribute('href')
        const targetElement = targetId ? document.querySelector(targetId) : null
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
        }
      }
    })
  }

  // Inicia o processo de carregamento simulado
  await simulateAppLoading()
})
</script>

<style>
/* Configurações globais de scroll suave */
html {
  scroll-behavior: smooth !important;
}

/* Scroll suave para elementos específicos */
* {
  scroll-behavior: smooth;
}

/* Melhorar performance do scroll em dispositivos móveis */
body {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
</style>
