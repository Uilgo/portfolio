<template>
  <ClientOnly>
    <Dropdown placement="bottom-end">
      <template #trigger="{ isOpen }">
        <Button
          variant="ghost"
          size="icon"
          :icon="currentThemeIcon"
          aria-label="Alterar tema"
        >
          <span class="sr-only">Alterar tema</span>
        </Button>
      </template>

      <template #default="{ close }">
        <DropdownItem
          icon="heroicons:sun"
          :selected="colorMode.preference === 'light'"
          @click="setTheme('light', close)"
        >
          Claro
        </DropdownItem>
        
        <DropdownItem
          icon="heroicons:moon"
          :selected="colorMode.preference === 'dark'"
          @click="setTheme('dark', close)"
        >
          Escuro
        </DropdownItem>
        
        <DropdownItem
          icon="heroicons:computer-desktop"
          :selected="colorMode.preference === 'system'"
          @click="setTheme('system', close)"
        >
          Sistema
        </DropdownItem>
      </template>
    </Dropdown>
    
    <template #fallback>
      <!-- Fallback simples para SSR -->
      <Button
        variant="ghost"
        size="icon"
        icon="heroicons:sun"
        aria-label="Alterar tema"
      >
        <span class="sr-only">Alterar tema</span>
      </Button>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import Button from './Button.vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

// Usar o composable nativo do @nuxtjs/color-mode
const colorMode = useColorMode()

// Computed para o ícone atual baseado no tema
const currentThemeIcon = computed(() => {
  if (!process.client) return 'heroicons:sun' // Fallback para SSR
  
  switch (colorMode.preference) {
    case 'light':
      return 'heroicons:sun'
    case 'dark':
      return 'heroicons:moon'
    case 'system':
      return 'heroicons:computer-desktop'
    default:
      return 'heroicons:sun'
  }
})

// Função para definir o tema
const setTheme = (theme: 'light' | 'dark' | 'system', closeDropdown: () => void) => {
  console.log('Setting theme:', theme)
  colorMode.preference = theme
  console.log('Color mode after set:', colorMode.preference, colorMode.value)
  closeDropdown()
}

// Adicionar animação de transição suave
watch(() => colorMode.value, (newTheme, oldTheme) => {
  if (newTheme !== oldTheme && process.client) {
    // Adiciona uma classe temporária para animação suave
    document.documentElement.classList.add('theme-transitioning')
    
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning')
    }, 300)
  }
})
</script>

<style>
/* Animação suave para transição de tema */
.theme-transitioning *,
.theme-transitioning *::before,
.theme-transitioning *::after {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease !important;
}
</style>