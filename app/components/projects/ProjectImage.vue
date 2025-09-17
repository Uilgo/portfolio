<template>
  <div class="w-full h-full flex items-center justify-center overflow-hidden">
    <template v-if="src">
      <img
        :src="src"
        :alt="alt"
        loading="lazy"
        decoding="async"
        :class="imgClass"
      />
    </template>

    <div v-else :class="placeholderClass" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src?: string | null
  alt?: string
  variant?: 'card' | 'modal'
}>()

const imgClass = computed(() => {
  return props.variant === 'modal'
    ? 'max-w-full max-h-full object-contain'
    : 'absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105'
})

const placeholderClass = computed(() => {
  return props.variant === 'modal'
    ? 'w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg'
    : 'absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600'
})
</script>

<style scoped>
.absolute {
  position: absolute;
}
</style>
