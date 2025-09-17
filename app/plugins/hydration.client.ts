/**
 * Plugin para configurar o Nuxt para evitar erros de hidratação
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Configurações para evitar warnings do Suspense
  if (process.client) {
    // Aguarda a hidratação completa antes de renderizar elementos dinâmicos
    nuxtApp.hook('app:mounted', () => {
      // Remove qualquer warnings do console relacionados ao Suspense
      const originalWarn = console.warn
      console.warn = function(...args) {
        const message = args[0]
        if (typeof message === 'string' && message.includes('Suspense is an experimental feature')) {
          return // Ignora este warning específico
        }
        originalWarn.apply(console, args)
      }
    })
  }
})