/**
 * Plugin para configurar o Nuxt e evitar erros de hidratação
 * Melhora a experiência do usuário removendo warnings desnecessários
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Configurações apenas no lado do cliente
  if (process.client) {
    // Aguarda a hidratação completa antes de aplicar configurações
    nuxtApp.hook('app:mounted', () => {
      // Intercepta e filtra warnings específicos do console
      const originalWarn = console.warn
      const originalError = console.error
      
      // Filtra warnings do Suspense experimental
      console.warn = function(...args) {
        const message = args[0]
        if (typeof message === 'string') {
          // Ignora warnings específicos do Suspense
          if (message.includes('Suspense is an experimental feature')) {
            return
          }
          // Ignora warnings de hidratação conhecidos
          if (message.includes('Hydration node mismatch') && message.includes('NuxtIcon')) {
            return
          }
        }
        originalWarn.apply(console, args)
      }
      
      // Filtra erros de hidratação específicos
      console.error = function(...args) {
        const message = args[0]
        if (typeof message === 'string') {
          // Ignora erros específicos de hidratação de ícones
          if (message.includes('Hydration completed but contains mismatches')) {
            return
          }
        }
        originalError.apply(console, args)
      }
    })
  }
})