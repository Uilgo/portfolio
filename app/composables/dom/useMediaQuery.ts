import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Composable para detectar media queries e breakpoints responsivos
 * Útil para alternar comportamentos entre mobile e desktop
 */
export function useMediaQuery(query: string) {
  const matches = ref(false)
  let mediaQuery: MediaQueryList | null = null

  const updateMatches = () => {
    if (mediaQuery) {
      matches.value = mediaQuery.matches
    }
  }

  onMounted(() => {
    if (process.client && window.matchMedia) {
      mediaQuery = window.matchMedia(query)
      matches.value = mediaQuery.matches
      
      // Adiciona listener para mudanças
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', updateMatches)
      } else {
        // Fallback para browsers mais antigos
        mediaQuery.addListener(updateMatches)
      }
    }
  })

  onBeforeUnmount(() => {
    if (mediaQuery) {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateMatches)
      } else {
        // Fallback para browsers mais antigos
        mediaQuery.removeListener(updateMatches)
      }
    }
  })

  return matches
}

/**
 * Composables pré-configurados para breakpoints comuns do Tailwind
 */
export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)')
}

export function useIsTablet() {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
}

export function useIsDesktop() {
  return useMediaQuery('(min-width: 1024px)')
}

export function useIsSmallScreen() {
  return useMediaQuery('(max-width: 639px)')
}

export function useIsMediumScreen() {
  return useMediaQuery('(min-width: 640px) and (max-width: 1023px)')
}

export function useIsLargeScreen() {
  return useMediaQuery('(min-width: 1024px)')
}

/**
 * Composable para detectar orientação do dispositivo
 */
export function useIsPortrait() {
  return useMediaQuery('(orientation: portrait)')
}

export function useIsLandscape() {
  return useMediaQuery('(orientation: landscape)')
}

/**
 * Composable para detectar preferência de tema do sistema
 */
export function usePrefersDark() {
  return useMediaQuery('(prefers-color-scheme: dark)')
}

export function usePrefersLight() {
  return useMediaQuery('(prefers-color-scheme: light)')
}

/**
 * Composable para detectar se o usuário prefere movimento reduzido
 */
export function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}