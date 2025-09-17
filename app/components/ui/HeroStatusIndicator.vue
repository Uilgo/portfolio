<template>
  <div class="flex items-center justify-center gap-3 mb-8">
    <div class="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
      <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      <span class="text-sm font-medium text-green-700 dark:text-green-300">
        {{ statusText }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  status?: 'available' | 'busy' | 'away'
  customText?: string
}

// Props com valores padrão
const props = withDefaults(defineProps<Props>(), {
  status: 'available'
})

// Computed para o texto do status
const statusText = computed(() => {
  if (props.customText) return props.customText
  
  const statusTexts = {
    available: 'Disponível para projetos',
    busy: 'Ocupado no momento',
    away: 'Ausente temporariamente'
  }
  
  return statusTexts[props.status]
})
</script>