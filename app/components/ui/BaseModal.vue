<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" class="fixed inset-0 z-50 overflow-y-auto" @click="onBackdropClick">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>

        <!-- Modal container -->
        <div class="relative min-h-screen flex items-center justify-center p-4">
          <div
            ref="panel"
            class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            @click.stop
          >
            <!-- Header slot -->
            <div v-if="$slots.header" class="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
              <slot name="header" />
            </div>

            <!-- Body -->
            <div class="overflow-y-auto max-h-[calc(90vh-80px)]">
              <slot />
            </div>

            <!-- Footer slot -->
            <div v-if="$slots.footer" class="border-t border-gray-100 dark:border-gray-700 px-6 py-4">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'

const props = withDefaults(defineProps<{ modelValue: boolean }>(), { modelValue: false })
const emit = defineEmits<{ 'update:modelValue': [boolean]; close: [] }>()

const panel = ref<HTMLElement | null>(null)

const onBackdropClick = () => {
  emit('update:modelValue', false)
  emit('close')
}

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('update:modelValue', false)
    emit('close')
  }
}

watch(() => props.modelValue, async (open) => {
  if (process.client) {
    if (open) {
      document.body.style.overflow = 'hidden'
      await nextTick()
      // focus first focusable
      const el = panel.value?.querySelector<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      el?.focus()
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    document.body.style.overflow = ''
    window.removeEventListener('keydown', onKey)
  }
})
</script>
