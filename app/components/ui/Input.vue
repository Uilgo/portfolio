<template>
  <div class="relative">
    <div v-if="leftIcon" class="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none z-10">
      <Icon :name="leftIcon" class="w-5 h-5" />
    </div>

    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :autocomplete="autocomplete"
      :value="modelValue"
      @input="onInput"
      class="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors relative z-0"
      :class="inputPaddingClass"
    />

    <!-- right icon area -->
    <button
      v-if="clearable && modelValue"
      type="button"
      @click="clear"
      class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 z-10"
      aria-label="Limpar"
    >
      <Icon name="heroicons:x-mark" class="w-4 h-4" />
    </button>

    <div v-else-if="rightIcon" class="absolute inset-y-0 right-3 flex items-center text-gray-400 z-10">
      <Icon :name="rightIcon" class="w-5 h-5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  id: { type: String, default: '' },
  name: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
  autocomplete: { type: String, default: '' },
  leftIcon: { type: String, default: '' },
  rightIcon: { type: String, default: '' },
  clearable: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue'])

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const clear = () => {
  emit('update:modelValue', '')
}

const inputPaddingClass = computed(() => {
  const hasLeft = !!props.leftIcon
  const hasRight = props.clearable || !!props.rightIcon
  const pl = hasLeft ? 'pl-10' : 'pl-4'
  const pr = hasRight ? 'pr-10' : 'pr-4'
  return `${pl} ${pr}`
})
</script>

<style scoped>
/* nothing special */
</style>
