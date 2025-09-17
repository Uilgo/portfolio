/**
 * Composable para efeito de máquina de escrever (typewriter)
 */
import { ref, onMounted, onUnmounted, computed, watch, isRef, readonly, type Ref } from 'vue'

interface UseTypewriterOptions {
  speed?: number
  delay?: number
  deleteSpeed?: number
  deleteDelay?: number
  loop?: boolean
  cursor?: boolean
  cursorChar?: string
}

export const useTypewriter = (
  texts: string | string[] | Ref<string[]>,
  options: UseTypewriterOptions = {}
) => {
  const {
    speed = 100,
    delay = 1000,
    deleteSpeed = 50,
    deleteDelay = 2000,
    loop = false,
    cursor = true,
    cursorChar = '|'
  } = options

  const displayText = ref('')
  const isTyping = ref(false)
  const isDeleting = ref(false)
  const currentIndex = ref(0)
  const showCursor = ref(true)

  let timeoutId: NodeJS.Timeout | null = null
  let cursorIntervalId: NodeJS.Timeout | null = null

  const textArray = computed(() => {
    const value = isRef(texts) ? texts.value : texts
    const arr = Array.isArray(value) ? value : [value]
    // Garante que o array nunca esteja vazio para evitar erros
    return arr.length > 0 ? arr : ['']
  })

  const startCursorBlink = () => {
    if (!cursor || cursorIntervalId) return
    cursorIntervalId = setInterval(() => {
      showCursor.value = !showCursor.value
    }, 500)
  }

  const stopCursorBlink = () => {
    if (cursorIntervalId) {
      clearInterval(cursorIntervalId)
      cursorIntervalId = null
      showCursor.value = true
    }
  }

  const typeText = () => {
    // Garante que o array de texto não está vazio
    if (!textArray.value || textArray.value.length === 0 || textArray.value[0] === '') return

    // Garante que o índice atual é válido
    if (currentIndex.value >= textArray.value.length) {
      currentIndex.value = 0
    }

    const currentText = textArray.value[currentIndex.value]
    if (typeof currentText !== 'string') return

    if (!isDeleting.value) {
      // Digitando
      if (displayText.value.length < currentText.length) {
        isTyping.value = true
        displayText.value = currentText.slice(0, displayText.value.length + 1)
        timeoutId = setTimeout(typeText, speed)
      } else {
        // Texto completo
        isTyping.value = false
        if (textArray.value.length > 1 && loop) {
          timeoutId = setTimeout(() => {
            isDeleting.value = true
            typeText()
          }, deleteDelay)
        }
      }
    } else {
      // Deletando
      if (displayText.value.length > 0) {
        displayText.value = displayText.value.slice(0, -1)
        timeoutId = setTimeout(typeText, deleteSpeed)
      } else {
        // Deletado por completo
        isDeleting.value = false
        currentIndex.value = (currentIndex.value + 1) % textArray.value.length
        timeoutId = setTimeout(typeText, delay)
      }
    }
  }

  const start = () => {
    stop() // Previne múltiplas instâncias
    if (cursor) startCursorBlink()
    typeText()
  }

  const stop = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    stopCursorBlink()
    isTyping.value = false
    isDeleting.value = false
  }

  const reset = () => {
    stop()
    displayText.value = ''
    currentIndex.value = 0
    isDeleting.value = false
  }

  const restart = () => {
    reset()
    // Pequeno delay para garantir que o DOM está pronto
    setTimeout(start, 50)
  }

  // Computed para o texto final com cursor
  const finalText = computed(() => {
    if (!cursor) return displayText.value
    return displayText.value + (showCursor.value ? cursorChar : ' ')
  })

  watch(textArray, (newVal, oldVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
      restart()
    }
  }, { deep: true })

  onMounted(() => {
    // Delay inicial
    timeoutId = setTimeout(start, 500)
  })

  onUnmounted(() => {
    stop()
  })

  return {
    displayText: readonly(displayText),
    finalText: readonly(finalText),
    isTyping: readonly(isTyping),
    isDeleting: readonly(isDeleting),
    currentIndex: readonly(currentIndex),
    start,
    stop,
    reset,
    restart
  }
}

/**
 * Composable para animação de texto que se revela gradualmente
 */
export const useTextReveal = (text: string, options: { delay?: number; speed?: number } = {}) => {
  const { delay = 0, speed = 50 } = options
  
  const revealedText = ref('')
  const isRevealing = ref(false)

  let timeoutId: NodeJS.Timeout | null = null

  const reveal = () => {
    if (isRevealing.value) return

    isRevealing.value = true
    let currentLength = 0

    const revealNextChar = () => {
      if (currentLength <= text.length) {
        revealedText.value = text.slice(0, currentLength)
        currentLength++
        timeoutId = setTimeout(revealNextChar, speed)
      } else {
        isRevealing.value = false
      }
    }

    timeoutId = setTimeout(revealNextChar, delay)
  }

  const reset = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    revealedText.value = ''
    isRevealing.value = false
  }

  onUnmounted(() => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  })

  return {
    revealedText: readonly(revealedText),
    isRevealing: readonly(isRevealing),
    reveal,
    reset
  }
}

/**
 * Composable para animação de texto com efeito de scramble/glitch
 */
export const useTextScramble = (finalText: string, options: { chars?: string; speed?: number; iterations?: number } = {}) => {
  const {
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?',
    speed = 50,
    iterations = 10
  } = options

  const scrambledText = ref('')
  const isScrambling = ref(false)

  let animationId: number | null = null

  const scramble = () => {
    if (isScrambling.value) return

    isScrambling.value = true
    let frame = 0

    const animate = () => {
      let output = ''
      
      for (let i = 0; i < finalText.length; i++) {
        if (frame >= iterations + i) {
          output += finalText[i]
        } else {
          output += chars[Math.floor(Math.random() * chars.length)]
        }
      }

      scrambledText.value = output
      
      if (frame >= finalText.length + iterations) {
        isScrambling.value = false
        return
      }

      frame++
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
  }

  const stop = () => {
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
    isScrambling.value = false
    scrambledText.value = finalText
  }

  const reset = () => {
    stop()
    scrambledText.value = ''
  }

  onUnmounted(() => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  })

  return {
    scrambledText: readonly(scrambledText),
    isScrambling: readonly(isScrambling),
    scramble,
    stop,
    reset
  }
}