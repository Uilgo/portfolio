<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center">
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          © {{ currentYear }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useClientSideHydration } from '~/composables/useClientMount'

// Current year for footer - usando hidratação do lado do cliente para evitar mismatch
const { isClientMounted } = useClientSideHydration()
const currentYear = computed(() => {
  return isClientMounted.value ? new Date().getFullYear() : 2024
})
</script>