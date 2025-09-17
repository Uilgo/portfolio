export const useCVDownload = () => {
  const isDownloading = ref(false)

  // Função para download do PDF existente
  const downloadCV = () => {
    if (!process.client) return

    isDownloading.value = true
    
    // Usar setTimeout para garantir que seja executado no próximo tick
    setTimeout(() => {
      try {
        // Método mais direto - apenas abrir o link
        const link = document.createElement('a')
        link.href = '/curriculo.pdf'
        link.download = 'Igor_Elias_CV.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
      } catch (error) {
        // Fallback simples
        window.open('/curriculo.pdf', '_blank')
      } finally {
        isDownloading.value = false
      }
    }, 0)
  }

  // Função para visualizar o CV (abrir em nova aba)
  const viewCV = () => {
    if (process.client) {
      window.open('/curriculo.pdf', '_blank')
    }
  }

  // Função para verificar se o PDF existe
  const checkPDFExists = async () => {
    if (!process.client) return false
    
    try {
      const response = await fetch('/curriculo.pdf', { method: 'HEAD' })
      return response.ok
    } catch {
      return false
    }
  }

  return {
    isDownloading: readonly(isDownloading),
    downloadCV,
    viewCV,
    checkPDFExists
  }
}