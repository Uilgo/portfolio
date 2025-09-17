<template>
  <div class="relative">
    <div v-if="leftIcon" class="absolute left-3 top-3 text-gray-400 pointer-events-none">
      <Icon :name="leftIcon" class="w-5 h-5" />
    </div>

    <textarea
      :id="id"
      :name="name"
      :rows="rows"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      class="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
      :class="textareaPaddingClass"
    />

    <div v-if="showCount" class="absolute right-3 bottom-2 text-xs text-gray-400">
      {{ (modelValue || '').length }} / {{ maxLength }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  id: { type: String, default: '' },
  name: { type: String, default: '' },
  rows: { type: Number, default: 5 },
  placeholder: { type: String, default: '' },
  leftIcon: { type: String, default: '' },
  showCount: { type: Boolean, default: false },
  maxLength: { type: Number, default: 1000 }
})

const emit = defineEmits(['update:modelValue'])

const onInput = (e: Event) => {
  const t = e.target as HTMLTextAreaElement
  emit('update:modelValue', t.value)
}

const textareaPaddingClass = computed(() => {
  return props.leftIcon ? 'pl-10' : 'pl-4'
})
</script>

<style scoped>
</style>
