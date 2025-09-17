<template>
  <div class="flex flex-col items-center">
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
      {{ text }}
    </p>
    
    <button 
      @click="handleScrollClick"
      class="group p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      :aria-label="ariaLabel"
    >
      <Icon 
        name="heroicons:chevron-down" 
        class="w-6 h-6 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 animate-bounce transition-colors" 
      />
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text?: string
  ariaLabel?: string
  scrollTarget?: string
}

// Props com valores padrão
const props = withDefaults(defineProps<Props>(), {
  text: 'Role para baixo',
  ariaLabel: 'Rolar para a próxima seção',
  scrollTarget: '#about'
})

// Emits para comunicação com o componente pai
const emit = defineEmits<{
  scrollClick: [target: string]
}>()

// Handler do clique no scroll
const handleScrollClick = () => {
  emit('scrollClick', props.scrollTarget)
}
</script>