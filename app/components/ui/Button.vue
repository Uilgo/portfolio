<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled"
    :type="type"
    v-bind="$attrs"
    @click="handleClick"
  >
    <Icon
      v-if="icon && iconPosition === 'left'"
      :name="icon"
      :class="iconClasses"
    />
    
    <span v-if="$slots.default" :class="contentClasses">
      <slot />
    </span>
    
    <Icon
      v-if="icon && iconPosition === 'right'"
      :name="icon"
      :class="iconClasses"
    />
    
    <!-- Loading spinner -->
    <Icon
      v-if="loading"
      name="heroicons:arrow-path"
      :class="[iconClasses, 'animate-spin']"
    />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  disabled?: boolean
  loading?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
  tag?: string
  type?: 'button' | 'submit' | 'reset'
}

interface Emits {
  (e: 'click', event: Event): void
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  iconPosition: 'left',
  tag: 'button',
  type: 'button'
})

const emit = defineEmits<Emits>()

// Variantes do botão baseadas no design system
const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-button hover:shadow-button-hover dark:bg-primary-500 dark:hover:bg-primary-600',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 shadow-button hover:shadow-button-hover dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100',
    ghost: 'hover:bg-gray-50 text-gray-700 dark:hover:bg-gray-800 dark:text-gray-300',
    outline: 'border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-button hover:shadow-button-hover dark:border-gray-700 dark:hover:bg-gray-800 dark:text-gray-300',
    destructive: 'bg-error-600 hover:bg-error-700 text-white shadow-button hover:shadow-button-hover dark:bg-error-500 dark:hover:bg-error-600'
  }
  return variants[props.variant]
})

// Tamanhos baseados no design system
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
    icon: 'h-10 w-10'
  }
  return sizes[props.size]
})

// Classes do ícone
const iconClasses = computed(() => {
  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
    icon: 'h-4 w-4'
  }
  return iconSizes[props.size]
})

// Classes do conteúdo (texto)
const contentClasses = computed(() => {
  if (props.size === 'icon') return 'sr-only'
  if (props.icon && props.iconPosition === 'left') return 'ml-2'
  if (props.icon && props.iconPosition === 'right') return 'mr-2'
  return ''
})

// Classes principais do botão
const buttonClasses = computed(() => {
  return [
    // Base classes
    'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-ring transform hover:scale-[1.02] active:scale-[0.98]',
    // Variant classes
    variantClasses.value,
    // Size classes
    sizeClasses.value,
    // State classes
    {
      'opacity-50 cursor-not-allowed': props.disabled || props.loading,
      'pointer-events-none': props.disabled || props.loading,
      'hover:scale-100': props.disabled || props.loading // Remove scale no disabled/loading
    }
  ]
})

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>