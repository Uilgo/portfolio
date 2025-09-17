<template>
  <div :class="['flex items-center gap-4 p-4 rounded-lg transition-colors', containerBg]">
    <div :class="['w-12 h-12 rounded-lg flex items-center justify-center', badgeBg]">
      <Icon :name="icon" :class="['w-6 h-6', iconColor]" />
    </div>

    <div>
      <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ title }}</p>
      <div>
        <!-- Link externo -->
        <a 
          v-if="href"
          :href="href"
          target="_blank"
          rel="noopener"
          class="text-gray-900 dark:text-white font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <slot>{{ subtitle }}</slot>
        </a>
        <!-- Texto simples -->
        <div v-else>
          <p class="text-gray-900 dark:text-white font-semibold">
            {{ subtitle }}
          </p>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  href: { type: String, default: '' },
  variant: { type: String as PropType<'blue'|'green'|'purple'|'gray'>, default: 'blue' }
})

const variantMap: Record<string, { badgeBg: string; containerBg: string; iconColor: string }> = {
  blue: { badgeBg: 'bg-blue-100 dark:bg-blue-900/30', containerBg: 'bg-gray-50 dark:bg-gray-800', iconColor: 'text-blue-600 dark:text-blue-400' },
  green: { badgeBg: 'bg-green-100 dark:bg-green-900/30', containerBg: 'bg-gray-50 dark:bg-gray-800', iconColor: 'text-green-600 dark:text-green-400' },
  purple: { badgeBg: 'bg-purple-100 dark:bg-purple-900/30', containerBg: 'bg-gray-50 dark:bg-gray-800', iconColor: 'text-purple-600 dark:text-purple-400' },
  gray: { badgeBg: 'bg-gray-100 dark:bg-gray-900/10', containerBg: 'bg-gray-50 dark:bg-gray-800', iconColor: 'text-gray-700 dark:text-gray-300' }
}

const variant = props.variant in variantMap ? props.variant : 'blue'
const resolved = (variantMap[variant] ?? variantMap.blue) as NonNullable<typeof variantMap[keyof typeof variantMap]>
const badgeBg = resolved.badgeBg
const containerBg = resolved.containerBg
const iconColor = resolved.iconColor
</script>

<style scoped>
</style>
