<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" class="fixed inset-0 z-50" @click="onBackdropClick">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>

        <!-- BottomSheet container -->
        <div class="fixed inset-x-0 bottom-0 flex justify-center">
          <Transition
            enter-active-class="transition-transform duration-300 ease-out"
            leave-active-class="transition-transform duration-300 ease-in"
            enter-from-class="translate-y-full"
            leave-to-class="translate-y-full"
          >
            <div
              v-if="modelValue"
              ref="panel"
              class="bg-white dark:bg-gray-800 rounded-t-3xl shadow-2xl w-full max-h-[90vh] overflow-hidden"
              @click.stop
              @touchstart="onTouchStart"
              @touchmove="onTouchMove"
              @touchend="onTouchEnd"
            >
              <!-- Drag Handle -->
              <div class="flex justify-center py-3 px-4 border-b border-gray-100 dark:border-gray-700">
                <div class="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer" @click="close"></div>
              </div>

              <!-- Header slot -->
              <div v-if="$slots.header" class="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
                <slot name="header" />
              </div>

              <!-- Body -->
              <div class="overflow-y-auto max-h-[calc(90vh-120px)] overscroll-contain">
                <slot />
              </div>

              <!-- Footer slot -->
              <div v-if="$slots.footer" class="border-t border-gray-100 dark:border-gray-700 px-4 py-3">
                <slot name="footer" />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onBeforeUnmount } from 'vue'

// Props e emits
const props = withDefaults(defineProps<{ modelValue: boolean }>(), { modelValue: false })
const emit = defineEmits<{ 'update:modelValue': [boolean]; close: [] }>()

// Refs
const panel = ref<HTMLElement | null>(null)

// Estado para controle de gestos
const touchStartY = ref(0)
const touchCurrentY = ref(0)
const isDragging = ref(false)
const dragThreshold = 100 // pixels para fechar

// Funções de controle
const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const onBackdropClick = () => {
  close()
}

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    close()
  }
}

// Controle de gestos touch
const onTouchStart = (e: TouchEvent) => {
  if (e.touches.length === 1) {
    touchStartY.value = e.touches[0]?.clientY || 0
    isDragging.value = true
    // Não previne o evento aqui para permitir scroll interno
  }
}

const onTouchMove = (e: TouchEvent) => {
  if (!isDragging.value || e.touches.length !== 1) return
  
  touchCurrentY.value = e.touches[0]?.clientY || 0
  const deltaY = touchCurrentY.value - touchStartY.value
  
  // Só aplica drag se estiver arrastando para baixo e se o conteúdo não estiver sendo scrollado
  const bodyElement = panel.value?.querySelector('.overflow-y-auto')
  const isAtTop = bodyElement ? bodyElement.scrollTop === 0 : true
  
  // Só permite arrastar para baixo e apenas se estiver no topo do scroll
  if (deltaY > 0 && isAtTop && panel.value) {
    // Previne o scroll da página principal apenas durante o drag do BottomSheet
    e.preventDefault()
    
    // Aplica transformação suave durante o drag
    const transform = Math.min(deltaY, 200) // Limita o drag
    panel.value.style.transform = `translateY(${transform}px)`
    panel.value.style.transition = 'none'
  }
}

const onTouchEnd = () => {
  if (!isDragging.value || !panel.value) return
  
  const deltaY = touchCurrentY.value - touchStartY.value
  
  // Remove a transformação e restaura a transição
  panel.value.style.transform = ''
  panel.value.style.transition = ''
  
  // Se arrastou mais que o threshold, fecha o modal
  if (deltaY > dragThreshold) {
    close()
  }
  
  // Reset do estado
  isDragging.value = false
  touchStartY.value = 0
  touchCurrentY.value = 0
}

// Watchers e lifecycle
watch(() => props.modelValue, async (open) => {
  if (process.client) {
    if (open) {
      document.body.style.overflow = 'hidden'
      await nextTick()
      // Foca no primeiro elemento focável
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

<style scoped>
/* Garante que o scroll funcione corretamente no mobile */
.overscroll-contain {
  overscroll-behavior: contain;
}
</style>