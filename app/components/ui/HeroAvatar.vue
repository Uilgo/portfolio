<template>
  <div class="hero-avatar">
    <div class="relative inline-block">
      <!-- Avatar Principal -->
      <div class="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 shadow-2xl transition-all duration-300 hover:shadow-3xl">
        <div class="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <!-- Foto do usuário (se fornecida) -->
          <NuxtImg 
            v-if="avatarImage" 
            :src="avatarImage" 
            :alt="`Foto de ${name || 'perfil'}`"
            class="w-full h-full object-cover rounded-full"
            width="256"
            height="256"
            loading="lazy"
          />
          <!-- Fallback com iniciais -->
          <span 
            v-else 
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-600 dark:text-primary-400"
          >
            {{ initials }}
          </span>
        </div>
      </div>
      
      <!-- Ícones Flutuantes (Estáticos) -->
      <div class="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110">
        <Icon name="heroicons:code-bracket" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-600" />
      </div>
      <div class="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110">
        <Icon name="heroicons:rocket-launch" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent-600" />
      </div>
      
      <!-- Círculo Decorativo Sutil (Apenas um) -->
      <div class="absolute -inset-4 sm:-inset-6 md:-inset-8 rounded-full border border-primary-200/30 dark:border-primary-800/30"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  initials?: string
  avatarImage?: string
  name?: string
}

// Props com valores padrão
const props = withDefaults(defineProps<Props>(), {
  initials: 'IE',
  avatarImage: undefined,
  name: undefined
})

// Configuração dos ícones flutuantes
const floatingIcons = [
  {
    position: '-top-2 -right-2',
    icon: 'heroicons:code-bracket',
    iconClass: 'w-4 h-4 text-primary-600',
    delay: ''
  },
  {
    position: '-bottom-2 -left-2',
    icon: 'heroicons:sparkles',
    iconClass: 'w-4 h-4 text-accent-600',
    delay: 'animation-delay-1000'
  }
]
</script>

<style scoped>
.animation-delay-1000 {
  animation-delay: 1s;
}
</style>