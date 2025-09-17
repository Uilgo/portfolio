<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
    <!-- Skip to main content (accessibility) -->
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50 focus-ring"
    >
      Pular para o conteúdo principal
    </a>

    <!-- Header Global -->
    <Header />

    <!-- Main Content -->
    <main id="main-content" class="flex-1 overflow-x-hidden">
      <slot />
    </main>

    <!-- Footer Global -->
    <Footer />

    <!-- Loading Overlay - Client Only -->
    <ClientOnly>
      <Teleport to="body">
        <Transition
          enter-active-class="transition-opacity duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div 
            v-if="isLoading && isClientMounted" 
            class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div class="flex items-center space-x-3">
                <Icon name="heroicons:arrow-path" class="h-6 w-6 animate-spin text-primary-600" />
                <span class="text-gray-900 dark:text-gray-100 font-medium">Carregando...</span>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>

    <!-- Floating Buttons - Only render on client side -->
    <ClientOnly>
      <!-- Scroll to Top Button -->
      <Teleport to="body">
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-2"
        >
          <button
            v-if="showScrollToTop && showFloatingButtons && isClientMounted"
            @click="scrollToTop"
            class="fixed bottom-6 left-6 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus-ring group z-40"
            aria-label="Voltar ao topo"
          >
            <!-- Ícone maior em desktop, menor em mobile -->
            <Icon name="heroicons:chevron-up" class="h-5 w-5 md:h-6 md:w-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />

            <!-- Tooltip acessível - compacto -->
            <span role="tooltip" class="pointer-events-none absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
              Topo
            </span>
          </button>
        </Transition>
      </Teleport>

      <!-- WhatsApp Button -->
      <Teleport to="body">
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-2"
        >
          <a
            v-if="showFloatingButtons && isClientMounted"
            :href="whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
            class="fixed bottom-6 right-6 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus-ring group z-40"
            aria-label="Entrar em contato via WhatsApp"
          >
            <Icon name="simple-icons:whatsapp" class="h-5 w-5 md:h-6 md:w-6 text-white transition-transform group-hover:scale-110" />

            <!-- Tooltip acessível - compacto -->
            <span role="tooltip" class="pointer-events-none absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
              WhatsApp
            </span>
          </a>
        </Transition>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from '#imports'
import { useRuntimeConfig } from '#imports'
import Header from '~/components/layouts/Header.vue'
import Footer from '~/components/layouts/Footer.vue'
import { useClientSideHydration } from '~/composables/useClientMount'

// Loading state
const isLoading = ref(false)

// Client-side hydration state
const { isClientMounted } = useClientSideHydration()

// Scroll to top functionality
const scrollY = ref(0)
const showScrollToTop = computed(() => scrollY.value > 300)

// Floating buttons visibility - sempre visíveis por padrão
const showFloatingButtons = ref(true)

// Scroll event handler
const updateScrollY = () => {
  if (process.client) {
    scrollY.value = window.scrollY
  }
}

// Scroll to top function
const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

// WhatsApp runtime config
const config = useRuntimeConfig()
const whatsappNumber = config.public?.whatsappNumber || '5511999999999'
const whatsappMessage = encodeURIComponent('Olá Igor! Gostaria de conversar sobre um projeto.')
const whatsappHref = computed(() => `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`)

// Lifecycle
onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', updateScrollY, { passive: true })
    updateScrollY()
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', updateScrollY)
  }
})

// Global loading state management
const setLoading = (loading: boolean) => {
  isLoading.value = loading
}

// Expose loading function for pages to use
provide('setLoading', setLoading)

// Show global loading overlay during client-side route navigation
if (process.client) {
  const router = useRouter()

  // before each route, enable loading
  router.beforeEach((to, from, next) => {
    setLoading(true)
    next()
  })

  // after navigation finished, disable loading
  router.afterEach(() => {
    // small delay to avoid flicker on very fast navigations
    setTimeout(() => setLoading(false), 80)
  })
}
</script>

<style scoped>
/* Accessibility classes */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

/* Smooth scrolling enhancement */
html {
  scroll-behavior: smooth;
}

/* Focus ring utility */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900;
}
</style>