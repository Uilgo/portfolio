<template>
  <span 
    :class="[
      'px-3 py-1 text-xs font-semibold rounded-full',
      statusClasses
    ]"
  >
    {{ status }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  status: string
}

const props = defineProps<Props>()

const statusClasses = computed(() => {
  switch (props.status.toLowerCase()) {
    case 'concluído':
    case 'completed':
      return 'bg-green-700 text-white shadow-sm'
    case 'em andamento':
    case 'in progress':
      return 'bg-yellow-600 text-white shadow-sm'
    case 'arquivado':
    case 'archived':
      return 'bg-gray-800 text-white shadow-sm'
    default:
      return 'bg-blue-700 text-white shadow-sm'
  }
})
</script>