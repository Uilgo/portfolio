<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 flex flex-col h-full">
    <!-- Imagem do Projeto -->
      <div class="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
        <ProjectImage :src="project.imagem" :alt="project.nome" />

        <!-- Overlay escuro para legibilidade -->
        <div class="absolute inset-0 bg-black/10"></div>

        <div class="absolute top-3 right-3">
          <ProjectStatus :status="project.status" />
        </div>
      </div>

    <!-- Conteúdo -->
    <div class="p-6 flex-1 flex flex-col">
      <div class="flex-1">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {{ project.nome }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {{ project.descricao }}
        </p>

        <!-- Tecnologias -->
        <div class="mb-4">
          <ProjectTechList :techs="project.tecnologias" />
        </div>
      </div>

      <!-- Footer com ações - Sempre no final -->
      <div class="flex gap-2 pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
        <ProjectActions :url="project.url" :github="project.github" :showDetails="true" @details="$emit('viewDetails', project)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'
import ProjectStatus from '~/components/projects/ProjectStatus.vue'
import ProjectImage from '~/components/projects/ProjectImage.vue'
import ProjectTechList from '~/components/projects/ProjectTechList.vue'
import ProjectActions from '~/components/projects/ProjectActions.vue'

interface Props {
  project: any
}

const props = defineProps<Props>()

defineEmits<{
  viewDetails: [project: any]
}>()

const openDemo = () => {
  if (props.project.url) {
    window.open(props.project.url, '_blank')
  }
}


</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>