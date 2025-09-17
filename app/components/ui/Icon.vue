<template>
  <!-- Usando ClientOnly para evitar mismatch de hidratação -->
  <ClientOnly>
    <NuxtIcon 
      :name="name" 
      :class="iconClasses"
      v-bind="$attrs"
    />
    <!-- Fallback para SSR - elemento vazio com mesma estrutura -->
    <template #fallback>
      <span 
        :class="iconClasses"
        :aria-hidden="true"
        style="display: inline-block; width: 1em; height: 1em;"
      />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
  class?: string
}

const props = defineProps<Props>()

// Classes do ícone - mantém consistência entre servidor e cliente
const iconClasses = computed(() => props.class || '')
</script>