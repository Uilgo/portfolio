<template>
  <header class="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/"
            class="flex items-center"
            aria-label="Ir para a página inicial"
            title="Igor Elias"
          >
            <span class="w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-900 text-white dark:text-white flex items-center justify-center text-sm font-bold tracking-wide shadow-sm">
              IE
            </span>
          </NuxtLink>
        </div>
        
        <!-- Navigation & Actions -->
        <div class="flex items-center space-x-4">
          <!-- Theme Toggle -->
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from '~/components/ui/ThemeToggle.vue'
</script>