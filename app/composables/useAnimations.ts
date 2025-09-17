/**
 * Composable para gerenciar animações baseadas no scroll
 * Utiliza Intersection Observer para detectar quando elementos entram na viewport
 */

import { ref, onMounted, onUnmounted } from 'vue'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true,
    delay = 0
  } = options

  const isVisible = ref(false)
  const observer = ref<IntersectionObserver | null>(null)
  const targetRef = ref<HTMLElement | null>(null)

  const initObserver = () => {
    if (!process.client) return

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                isVisible.value = true
                entry.target.classList.add('animate')
              }, delay)
            } else {
              isVisible.value = true
              entry.target.classList.add('animate')
            }

            // Se configurado para animar apenas uma vez, para de observar
            if (once && observer.value) {
              observer.value.unobserve(entry.target)
            }
          } else if (!once) {
            isVisible.value = false
            entry.target.classList.remove('animate')
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )
  }

  const observe = (element: HTMLElement) => {
    if (!observer.value) initObserver()
    if (observer.value && element) {
      targetRef.value = element
      element.classList.add('animate-on-scroll')
      observer.value.observe(element)
    }
  }

  const unobserve = () => {
    if (observer.value && targetRef.value) {
      observer.value.unobserve(targetRef.value)
    }
  }

  const disconnect = () => {
    if (observer.value) {
      observer.value.disconnect()
      observer.value = null
    }
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    disconnect()
  })

  return {
    isVisible: readonly(isVisible),
    observe,
    unobserve,
    disconnect,
    targetRef: readonly(targetRef)
  }
}

/**
 * Composable simplificado para animação de entrada de listas
 * Anima cada item da lista com um delay progressivo
 */
export const useStaggeredAnimation = (itemCount: number, baseDelay = 100) => {
  const animatedItems = ref<boolean[]>(new Array(itemCount).fill(false))

  const triggerAnimation = () => {
    animatedItems.value.forEach((_, index) => {
      setTimeout(() => {
        animatedItems.value[index] = true
      }, index * baseDelay)
    })
  }

  const resetAnimation = () => {
    animatedItems.value.fill(false)
  }

  return {
    animatedItems: readonly(animatedItems),
    triggerAnimation,
    resetAnimation
  }
}

/**
 * Composable para animações de hover com throttle
 * Evita animações muito frequentes em elementos sensíveis
 */
export const useThrottledHover = (delay = 100) => {
  const isHovered = ref(false)
  const canAnimate = ref(true)

  const handleMouseEnter = () => {
    if (!canAnimate.value) return
    
    isHovered.value = true
    canAnimate.value = false
    
    setTimeout(() => {
      canAnimate.value = true
    }, delay)
  }

  const handleMouseLeave = () => {
    isHovered.value = false
  }

  return {
    isHovered: readonly(isHovered),
    handleMouseEnter,
    handleMouseLeave
  }
}

/**
 * Composable para animações de loading/esqueleto
 */
export const useSkeletonAnimation = () => {
  const isLoading = ref(true)
  const hasError = ref(false)

  const startLoading = () => {
    isLoading.value = true
    hasError.value = false
  }

  const stopLoading = () => {
    isLoading.value = false
  }

  const setError = () => {
    isLoading.value = false
    hasError.value = true
  }

  return {
    isLoading: readonly(isLoading),
    hasError: readonly(hasError),
    startLoading,
    stopLoading,
    setError
  }
}

/**
 * Composable para animações de números/contadores
 */
export const useCounterAnimation = (
  target: number, 
  duration = 2000, 
  startValue = 0
) => {
  const currentValue = ref(startValue)
  const isAnimating = ref(false)

  const animateToTarget = () => {
    if (isAnimating.value) return

    isAnimating.value = true
    const startTime = performance.now()
    const difference = target - startValue

    const updateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Função de easing (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      
      currentValue.value = Math.round(startValue + (difference * easedProgress))

      if (progress < 1) {
        requestAnimationFrame(updateValue)
      } else {
        isAnimating.value = false
      }
    }

    requestAnimationFrame(updateValue)
  }

  const reset = () => {
    currentValue.value = startValue
    isAnimating.value = false
  }

  return {
    currentValue: readonly(currentValue),
    isAnimating: readonly(isAnimating),
    animateToTarget,
    reset
  }
}

// Note: useReducedMotion is provided by @vueuse/motion, so we don't need to duplicate it here