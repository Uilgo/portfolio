/**
 * Composable para gerenciar estados de loading
 */

import { ref, computed } from 'vue'

interface LoadingState {
  id: string
  message?: string
  progress?: number
}

const globalLoadingStates = ref<Map<string, LoadingState>>(new Map())

export const useLoading = (id?: string) => {
  const loadingId = id || 'default'
  const isLoading = ref(false)
  const message = ref('')
  const progress = ref(0)

  // Computed para verificar se qualquer loading está ativo
  const hasAnyLoading = computed(() => {
    return Array.from(globalLoadingStates.value.values()).length > 0 || isLoading.value
  })

  // Computed para o loading atual
  const currentLoading = computed(() => {
    return globalLoadingStates.value.get(loadingId) || {
      id: loadingId,
      message: message.value,
      progress: progress.value
    }
  })

  // Iniciar loading
  const startLoading = (loadingMessage?: string, initialProgress = 0) => {
    isLoading.value = true
    message.value = loadingMessage || 'Carregando...'
    progress.value = initialProgress

    globalLoadingStates.value.set(loadingId, {
      id: loadingId,
      message: message.value,
      progress: progress.value
    })
  }

  // Parar loading
  const stopLoading = () => {
    isLoading.value = false
    globalLoadingStates.value.delete(loadingId)
  }

  // Atualizar progress
  const setProgress = (value: number, newMessage?: string) => {
    progress.value = Math.max(0, Math.min(100, value))
    
    if (newMessage) {
      message.value = newMessage
    }

    if (globalLoadingStates.value.has(loadingId)) {
      globalLoadingStates.value.set(loadingId, {
        id: loadingId,
        message: message.value,
        progress: progress.value
      })
    }

    // Auto-stop quando chegar a 100%
    if (value >= 100) {
      setTimeout(() => {
        stopLoading()
      }, 500)
    }
  }

  // Loading com promise
  const withLoading = async <T>(
    promise: Promise<T>, 
    loadingMessage = 'Processando...'
  ): Promise<T> => {
    startLoading(loadingMessage)
    try {
      const result = await promise
      return result
    } finally {
      stopLoading()
    }
  }

  // Loading com steps
  const withSteps = async (
    steps: Array<{ 
      fn: () => Promise<any>
      message: string
      weight?: number 
    }>
  ) => {
    startLoading(steps[0]?.message || 'Iniciando...')
    
    const totalWeight = steps.reduce((sum, step) => sum + (step.weight || 1), 0)
    let completedWeight = 0

    try {
      for (const step of steps) {
        setProgress((completedWeight / totalWeight) * 100, step.message)
        await step.fn()
        completedWeight += step.weight || 1
      }
      
      setProgress(100, 'Concluído!')
    } catch (error) {
      stopLoading()
      throw error
    }
  }

  // Simular loading com delay
  const simulateLoading = async (
    duration = 2000, 
    steps?: string[],
    onComplete?: () => void
  ) => {
    const messages = steps || [
      'Preparando...',
      'Processando...',
      'Finalizando...',
      'Concluído!'
    ]

    startLoading(messages[0])
    
    const stepDuration = duration / messages.length
    
    for (let i = 0; i < messages.length; i++) {
      const progressValue = ((i + 1) / messages.length) * 100
      setProgress(progressValue, messages[i])
      
      if (i < messages.length - 1) {
        await new Promise(resolve => setTimeout(resolve, stepDuration))
      }
    }

    if (onComplete) {
      onComplete()
    }
  }

  return {
    // State
    isLoading: readonly(isLoading),
    message: readonly(message),
    progress: readonly(progress),
    hasAnyLoading,
    currentLoading,

    // Actions
    startLoading,
    stopLoading,
    setProgress,
    withLoading,
    withSteps,
    simulateLoading
  }
}

/**
 * Composable para loading de recursos (imagens, scripts, etc.)
 */
export const useResourceLoading = () => {
  const { startLoading, stopLoading, setProgress } = useLoading('resources')

  // Carregar imagem
  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = src
    })
  }

  // Carregar múltiplas imagens
  const loadImages = async (sources: string[]): Promise<HTMLImageElement[]> => {
    startLoading('Carregando imagens...', 0)

    const images: HTMLImageElement[] = []
    
    for (let i = 0; i < sources.length; i++) {
      const src = sources[i]
      if (!src) continue
      
      try {
        const img = await loadImage(src)
        images.push(img)
        setProgress(((i + 1) / sources.length) * 100)
      } catch (error) {
        console.warn(`Falha ao carregar imagem: ${src}`, error)
      }
    }

    stopLoading()
    return images
  }

  // Preload de fonte
  const loadFont = (fontFamily: string, fontWeight = '400'): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (typeof document === 'undefined') {
        resolve()
        return
      }

      const font = new FontFace(fontFamily, `url(path/to/font.woff2)`, {
        weight: fontWeight
      })

      font.load().then(() => {
        if (process.client) {
          document.fonts.add(font)
        }
        resolve()
      }).catch(reject)
    })
  }

  // Carregar script dinamicamente
  const loadScript = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!process.client) {
        resolve()
        return
      }

      const script = document.createElement('script')
      script.src = src
      script.onload = () => resolve()
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  return {
    loadImage,
    loadImages,
    loadFont,
    loadScript
  }
}

/**
 * Composable para loading de dados de API
 */
export const useApiLoading = () => {
  const loadingStates = ref<Map<string, boolean>>(new Map())

  const isApiLoading = (endpoint?: string) => {
    if (endpoint) {
      return loadingStates.value.get(endpoint) || false
    }
    return Array.from(loadingStates.value.values()).some(loading => loading)
  }

  const setApiLoading = (endpoint: string, loading: boolean) => {
    if (loading) {
      loadingStates.value.set(endpoint, true)
    } else {
      loadingStates.value.delete(endpoint)
    }
  }

  const withApiLoading = async <T>(
    endpoint: string,
    apiCall: () => Promise<T>
  ): Promise<T> => {
    setApiLoading(endpoint, true)
    try {
      const result = await apiCall()
      return result
    } finally {
      setApiLoading(endpoint, false)
    }
  }

  return {
    isApiLoading,
    setApiLoading,
    withApiLoading,
    loadingStates: readonly(loadingStates)
  }
}