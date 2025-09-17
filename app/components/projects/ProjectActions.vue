<template>
  <div class="flex gap-3">
    <button
      v-if="url"
      @click="openDemo"
      class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md transition-colors flex items-center justify-center gap-2"
    >
      <Icon name="heroicons:eye" class="w-4 h-4" />
      <slot name="demo">Ver Demo</slot>
    </button>

    <button
      v-if="github"
      @click="openGithub"
      class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors flex items-center justify-center gap-2"
    >
      <Icon name="simple-icons:github" class="w-4 h-4" />
      <slot name="github">GitHub</slot>
    </button>

    <button
      v-if="showDetails"
      @click="$emit('details')"
      class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors flex items-center justify-center gap-2"
    >
      <Icon name="heroicons:information-circle" class="w-4 h-4" />
      <slot name="details">Detalhes</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  url?: string | null
  github?: string | null
  showDetails?: boolean
}>()

const emit = defineEmits<{ details: [] }>()

const openDemo = () => {
  if (props.url) window.open(props.url, '_blank')
}

const openGithub = () => {
  if (props.github) window.open(props.github, '_blank')
}
</script>
