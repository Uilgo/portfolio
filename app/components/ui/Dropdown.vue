<template>
  <div class="relative" ref="dropdownRef">
    <!-- Trigger -->
    <div @click="toggle" ref="triggerRef">
      <slot name="trigger" :isOpen="isOpen" :toggle="toggle" />
    </div>

    <!-- Dropdown Content -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        :class="[
          'absolute z-30 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-950 shadow-dropdown dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100',
          positionClasses
        ]"
        :style="dropdownStyle"
        ref="contentRef"
      >
        <slot :close="close" />
      </div>
    </Teleport>

    <!-- Backdrop for mobile -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
      @click="close"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch, onUnmounted } from 'vue'

interface Props {
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'bottom' | 'top'
  offset?: number
  disabled?: boolean
}

interface Emits {
  (e: 'open'): void
  (e: 'close'): void
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'bottom-start',
  offset: 4,
  disabled: false
})

const emit = defineEmits<Emits>()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement>()
const triggerRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()
const dropdownStyle = ref({})

// Compute position classes based on placement
const positionClasses = computed(() => {
  const positions = {
    'bottom-start': 'origin-top-left',
    'bottom-end': 'origin-top-right',
    'top-start': 'origin-bottom-left', 
    'top-end': 'origin-bottom-right',
    'bottom': 'origin-top',
    'top': 'origin-bottom'
  }
  return positions[props.placement]
})

const toggle = () => {
  if (props.disabled) return
  
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}

const open = () => {
  if (props.disabled) return
  
  isOpen.value = true
  emit('open')
  
  nextTick(() => {
    calculatePosition()
    if (process.client) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleKeydown)
    }
  })
}

const close = () => {
  isOpen.value = false
  emit('close')
  if (process.client) {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleKeydown)
  }
}

const calculatePosition = () => {
  if (!triggerRef.value || !contentRef.value || !process.client) return

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const contentRect = contentRef.value.getBoundingClientRect()
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  let top = 0
  let left = 0

  // Calculate position based on placement
  switch (props.placement) {
    case 'bottom-start':
      top = triggerRect.bottom + props.offset
      left = triggerRect.left
      break
    case 'bottom-end':
      top = triggerRect.bottom + props.offset
      left = triggerRect.right - contentRect.width
      break
    case 'top-start':
      top = triggerRect.top - contentRect.height - props.offset
      left = triggerRect.left
      break
    case 'top-end':
      top = triggerRect.top - contentRect.height - props.offset
      left = triggerRect.right - contentRect.width
      break
    case 'bottom':
      top = triggerRect.bottom + props.offset
      left = triggerRect.left + (triggerRect.width - contentRect.width) / 2
      break
    case 'top':
      top = triggerRect.top - contentRect.height - props.offset
      left = triggerRect.left + (triggerRect.width - contentRect.width) / 2
      break
  }

  // Adjust for viewport boundaries
  if (left < 8) left = 8
  if (left + contentRect.width > viewport.width - 8) {
    left = viewport.width - contentRect.width - 8
  }
  
  if (top < 8) top = 8
  if (top + contentRect.height > viewport.height - 8) {
    top = viewport.height - contentRect.height - 8
  }

  dropdownStyle.value = {
    position: 'fixed',
    top: `${top}px`,
    left: `${left}px`,
    zIndex: 30
  }
}

const handleClickOutside = (event: Event) => {
  if (!dropdownRef.value?.contains(event.target as Node) &&
      !contentRef.value?.contains(event.target as Node)) {
    close()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close()
  }
}

// Close on route change
watch(() => isOpen.value, (newValue) => {
  if (!newValue) {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleKeydown)
  }
})

// Cleanup on unmount
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>