<template>
  <BaseModal :modelValue="isOpen" @update:modelValue="$emit('close')" @close="$emit('close')">
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ project.nome }}
          </h2>
          <ProjectStatus :status="project.status" />
        </div>
        <button
          @click="$emit('close')"
          class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <Icon name="heroicons:x-mark" class="w-6 h-6" />
        </button>
      </div>
    </template>

    <!-- Content -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Imagem -->
        <div class="h-64 lg:h-80 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <ProjectImage :src="project.imagem" :alt="project.nome" variant="modal" />
        </div>

        <!-- Info -->
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Descrição
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ project.descricao }}
            </p>
          </div>

          <!-- Tecnologias -->
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Tecnologias
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tecnologias"
                :key="tech"
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Actions -->
          <ProjectActions :url="project.url" :github="project.github" />
        </div>
      </div>
    </div>

    <!-- Detalhes do Projeto -->
    <div v-if="project.detalhes" class="p-6 space-y-6">
      <!-- Desafio -->
      <div v-if="project.detalhes.desafio">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <Icon name="heroicons:exclamation-triangle" class="w-5 h-5 text-orange-500" />
          Desafio
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          {{ project.detalhes.desafio }}
        </p>
      </div>

      <!-- Solução -->
      <div v-if="project.detalhes.solucao">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <Icon name="heroicons:light-bulb" class="w-5 h-5 text-yellow-500" />
          Solução
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          {{ project.detalhes.solucao }}
        </p>
      </div>

      <!-- Resultados -->
      <div v-if="project.detalhes.resultados">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <Icon name="heroicons:chart-bar" class="w-5 h-5 text-green-500" />
          Resultados
        </h3>
        <ul class="space-y-2">
          <li 
            v-for="resultado in project.detalhes.resultados" 
            :key="resultado"
            class="flex items-start gap-2 text-gray-600 dark:text-gray-300"
          >
            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            {{ resultado }}
          </li>
        </ul>
      </div>

      <!-- Funcionalidades -->
      <div v-if="project.detalhes.funcionalidades">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <Icon name="heroicons:cog-6-tooth" class="w-5 h-5 text-blue-500" />
          Funcionalidades
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div 
            v-for="funcionalidade in project.detalhes.funcionalidades" 
            :key="funcionalidade"
            class="flex items-start gap-2 text-gray-600 dark:text-gray-300"
          >
            <Icon name="heroicons:check" class="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
            {{ funcionalidade }}
          </div>
        </div>
      </div>
    </div>

  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '~/components/ui/BaseModal.vue'
import ProjectStatus from '~/components/projects/ProjectStatus.vue'
import ProjectImage from '~/components/projects/ProjectImage.vue'
import ProjectActions from '~/components/projects/ProjectActions.vue'

interface Props {
  project: any
  isOpen: boolean
}

const props = defineProps<Props>()

defineEmits<{
  close: []
}>()

// BaseModal cuida de: foco, ESC, backdrop e prevenção de scroll.
</script>