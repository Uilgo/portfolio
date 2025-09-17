<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'

// Garantir que o color-mode seja inicializado
const colorMode = useColorMode()

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
})
</script>
