<template>
  <component
    :is="tag"
    :class="itemClasses"
    :disabled="disabled"
    v-bind="$attrs"
    @click="handleClick"
    role="menuitem"
    :tabindex="disabled ? -1 : 0"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="iconClasses"
    />
    
    <span class="flex-1">
      <slot />
    </span>
    
    <Icon
      v-if="selected"
      name="heroicons:check"
      class="h-4 w-4 text-primary-600 dark:text-primary-400"
    />
    
    <kbd
      v-if="shortcut"
      class="ml-auto text-xs tracking-widest text-gray-500 dark:text-gray-400"
    >
      {{ shortcut }}
    </kbd>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  icon?: string
  selected?: boolean
  disabled?: boolean
  destructive?: boolean
  shortcut?: string
  tag?: string
}

interface Emits {
  (e: 'click', event: Event): void
}

const props = withDefaults(defineProps<Props>(), {
  selected: false,
  disabled: false,
  destructive: false,
  tag: 'button'
})

const emit = defineEmits<Emits>()

const itemClasses = computed(() => [
  // Base classes
  'relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
  // State classes
  {
    // Normal state
    'text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700': !props.destructive && !props.disabled,
    // Destructive state
    'text-error-600 hover:bg-error-50 focus:bg-error-50 dark:text-error-400 dark:hover:bg-error-950/50 dark:focus:bg-error-950/50': props.destructive && !props.disabled,
    // Disabled state
    'pointer-events-none opacity-50': props.disabled,
    // Selected state
    'bg-primary-100 text-primary-900 dark:bg-primary-900/80 dark:text-white': props.selected && !props.destructive
  }
])

const iconClasses = computed(() => [
  'mr-2 h-4 w-4 shrink-0',
  {
    'text-gray-500 dark:text-gray-400': !props.destructive && !props.selected,
    'text-error-600 dark:text-error-400': props.destructive,
    'text-primary-600 dark:text-primary-400': props.selected && !props.destructive
  }
])

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>