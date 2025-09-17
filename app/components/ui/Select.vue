<template>
  <div class="relative">
    <select
      :id="id"
      :name="name"
      :value="modelValue"
      @change="onChange"
      class="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors appearance-none relative z-0"
      :class="selectPaddingClass"
    >
      <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
    </select>

    <div class="absolute inset-y-0 right-3 flex items-center text-gray-400 pointer-events-none">
      <Icon name="heroicons:chevron-down" class="w-4 h-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

type Option = { value: string | number; label: string }

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  id: { type: String, default: '' },
  name: { type: String, default: '' },
  options: { type: Array as PropType<Option[]>, default: () => [] },
  leftIcon: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue'])

const onChange = (e: Event) => {
  const t = e.target as HTMLSelectElement
  emit('update:modelValue', t.value)
}

const selectPaddingClass = computed(() => 'pl-4 pr-10')
</script>

<style scoped>
</style>
