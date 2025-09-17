/**
 * Composable para gerenciar ícones de forma consistente
 * Evita problemas de hidratação entre servidor e cliente
 */
import { ref, onMounted } from 'vue'

export const useClientIcon = () => {
  // Estado de montagem no cliente
  const isClientMounted = ref(false)

  // Marca como montado quando o componente é montado no cliente
  onMounted(() => {
    isClientMounted.value = true
  })

  /**
   * Renderiza um ícone de forma segura para hidratação
   * @param iconName Nome do ícone
   * @param classes Classes CSS para o ícone
   * @returns Objeto com propriedades para renderização
   */
  const renderIcon = (iconName: string, classes: string = '') => {
    return {
      name: iconName,
      classes,
      isReady: isClientMounted.value
    }
  }

  /**
   * Cria um placeholder para ícones durante SSR
   * @param classes Classes CSS para manter layout consistente
   * @returns Objeto com propriedades do placeholder
   */
  const createPlaceholder = (classes: string = '') => {
    return {
      classes: `${classes} bg-gray-300/20 dark:bg-gray-600/20 rounded animate-pulse`,
      style: 'display: inline-block; width: 1em; height: 1em;'
    }
  }

  return {
    isClientMounted,
    renderIcon,
    createPlaceholder
  }
}