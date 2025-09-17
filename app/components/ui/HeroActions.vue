<template>
  <div class="flex flex-col sm:flex-row gap-4 w-full hero-actions">
    <Button 
      variant="primary" 
      size="lg" 
      icon="heroicons:rocket-launch"
      class="flex-1 sm:flex-none sm:min-w-[180px] shadow-lg hover:shadow-xl hover-lift animate-slide-up animate-delay-100"
      @click="handleProjectsClick"
    >
      Ver Projetos
    </Button>
    
    <Button 
      variant="outline" 
      size="lg" 
      icon="heroicons:document-arrow-down"
      class="flex-1 sm:flex-none sm:min-w-[180px] hover-lift animate-slide-up animate-delay-200"
      @click="downloadCVDirect"
    >
      Baixar CV
    </Button>
    
    <Button 
      variant="ghost" 
      size="lg" 
      icon="heroicons:chat-bubble-left-right"
      class="flex-1 sm:flex-none hover-lift animate-slide-up animate-delay-300"
      @click="handleContactClick"
    >
      Contato
    </Button>
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