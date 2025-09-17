import { ref, onMounted } from 'vue'

/**
 * Composable para gerenciar estado de hidratação
 * Evita problemas de mismatch entre servidor e cliente
 */
export const useClientSideHydration = () => {
  const isClientMounted = ref(false)

  onMounted(() => {
    // Marca como hidratado apenas no cliente
    isClientMounted.value = true
  })

  return {
    isClientMounted
  }
}