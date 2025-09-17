<template>
  <div 
    class="group bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 cursor-pointer hover-lift hover-glow animate-on-scroll"
    :class="hoverClasses"
  >
    <!-- Icon and Name -->
    <div class="flex flex-col items-center text-center space-y-3">
      <div 
        class="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200"
        :class="iconBgClasses"
      >
        <span 
          v-if="customLetter"
          class="text-lg font-bold transition-colors duration-200"
          :class="iconClasses"
        >
          {{ customLetter }}
        </span>
        <Icon 
          v-else
          :name="icon" 
          class="w-6 h-6 transition-colors duration-200"
          :class="iconClasses"
        />
      </div>
      
      <div>
        <h4 class="font-semibold text-gray-900 dark:text-gray-100 text-sm">
          {{ name }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
  icon: string
  color?: 'primary' | 'accent' | 'success' | 'warning'
  customLetter?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary'
})

// Dynamic classes based on color prop
const colorClasses = computed(() => {
  switch (props.color) {
    case 'primary':
      return {
        iconBg: 'bg-primary-50 dark:bg-primary-900/20 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40',
        icon: 'text-primary-600 dark:text-primary-400',
        hover: 'hover:border-primary-200 dark:hover:border-primary-700'
      }
    case 'accent':
      return {
        iconBg: 'bg-accent-50 dark:bg-accent-900/20 group-hover:bg-accent-100 dark:group-hover:bg-accent-900/40',
        icon: 'text-accent-600 dark:text-accent-400',
        hover: 'hover:border-accent-200 dark:hover:border-accent-700'
      }
    case 'success':
      return {
        iconBg: 'bg-success-50 dark:bg-success-900/20 group-hover:bg-success-100 dark:group-hover:bg-success-900/40',
        icon: 'text-success-600 dark:text-success-400',
        hover: 'hover:border-success-200 dark:hover:border-success-700'
      }
    case 'warning':
      return {
        iconBg: 'bg-warning-50 dark:bg-warning-900/20 group-hover:bg-warning-100 dark:group-hover:bg-warning-900/40',
        icon: 'text-warning-600 dark:text-warning-400',
        hover: 'hover:border-warning-200 dark:hover:border-warning-700'
      }
    default:
      return {
        iconBg: 'bg-gray-50 dark:bg-gray-900/20',
        icon: 'text-gray-600 dark:text-gray-400',
        hover: 'hover:border-gray-200 dark:hover:border-gray-700'
      }
  }
})

// Computed classes
const iconBgClasses = computed(() => colorClasses.value.iconBg)
const iconClasses = computed(() => colorClasses.value.icon)
const hoverClasses = computed(() => colorClasses.value.hover)
</script>