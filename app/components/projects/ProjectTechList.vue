<template>
  <div class="flex flex-wrap gap-2">
    <span
      v-for="tech in visibleTechs"
      :key="tech"
      class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
    >
      {{ tech }}
    </span>

    <span
      v-if="hiddenCount > 0"
      class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded"
    >
      +{{ hiddenCount }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  techs?: string[]
  limit?: number
}>()

const limit = props.limit ?? 3

const visibleTechs = computed(() => (props.techs || []).slice(0, limit))
const hiddenCount = computed(() => Math.max(0, (props.techs || []).length - limit))
</script>
