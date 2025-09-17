<template>
  <div class="flex flex-col gap-4 w-full hero-actions max-w-md sm:max-w-none mx-auto lg:mx-0 mb-6 md:mb-8 lg:mb-6">
    <!-- Primeira linha: Ver Projetos e Baixar CV -->
    <div class="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-4 justify-center lg:justify-start">
      <Button 
        variant="primary" 
        size="md" 
        icon="heroicons:rocket-launch"
        class="w-full sm:flex-1 sm:max-w-[180px] md:max-w-[200px] lg:max-w-[180px] shadow-lg hover:shadow-xl hover-lift animate-slide-up animate-delay-100"
        @click="handleProjectsClick"
      >
        Ver Projetos
      </Button>
      
      <Button 
        variant="outline" 
        size="md" 
        icon="heroicons:document-arrow-down"
        class="w-full sm:flex-1 sm:max-w-[180px] md:max-w-[200px] lg:max-w-[180px] hover-lift animate-slide-up animate-delay-200"
        @click="downloadCVDirect"
      >
        Baixar CV
      </Button>
    </div>
    
    <!-- Segunda linha: Botão Contato sozinho -->
    <div class="flex justify-center lg:justify-start">
      <Button 
        variant="ghost" 
        size="md" 
        icon="heroicons:chat-bubble-left-right"
        class="w-full sm:w-auto sm:min-w-[160px] md:min-w-[180px] lg:min-w-[160px] max-w-[200px] hover-lift animate-slide-up animate-delay-300"
        @click="handleContactClick"
      >
        Contato
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'

// Props
interface Props {
  isDownloading?: boolean
}

withDefaults(defineProps<Props>(), {
  isDownloading: false
})

// Emits para comunicação com o componente pai
const emit = defineEmits<{
  projectsClick: []
  downloadCV: []
  contactClick: []
}>()

// Handlers dos eventos
const handleProjectsClick = () => {
  emit('projectsClick')
}

const handleDownloadCV = () => {
  emit('downloadCV')
}

const downloadCVDirect = () => {
  if (!process.client) return
  
  try {
    const link = document.createElement('a')
    link.href = '/curriculo.pdf'
    link.download = 'Igor_Elias_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    window.open('/curriculo.pdf', '_blank')
  }
}

const handleContactClick = () => {
  emit('contactClick')
}
</script>