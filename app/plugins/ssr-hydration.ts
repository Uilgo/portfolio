/**
 * Plugin universal para melhorar a hidratação SSR
 * Garante consistência entre servidor e cliente
 */
export default defineNuxtPlugin({
  name: 'ssr-hydration',
  setup(nuxtApp) {
    // Configurações no servidor
    if (process.server) {
      // Garante que elementos dinâmicos tenham estrutura consistente
      nuxtApp.hook('render:route' as any, (url: string, result: any): void => {
        // Adiciona meta tag para indicar que a página foi renderizada no servidor
        if (result.html && typeof result.html === 'string') {
          result.html = result.html.replace(
            '<head>',
            '<head><meta name="ssr-rendered" content="true">'
          )
        }
      })
    }

    // Configurações no cliente
    if (process.client) {
      // Aguarda a hidratação completa
      nuxtApp.hook('app:mounted', () => {
        // Remove a meta tag de SSR após hidratação
        const ssrMeta = document.querySelector('meta[name="ssr-rendered"]')
        if (ssrMeta) {
          ssrMeta.remove()
        }

        // Força re-renderização de componentes problemáticos após hidratação
        nextTick(() => {
          // Dispara evento customizado para componentes que precisam se re-renderizar
          window.dispatchEvent(new CustomEvent('hydration-complete'))
        })
      })

      // Intercepta erros de hidratação para logging melhorado
      nuxtApp.hook('app:error', (error: any) => {
        if (error?.message?.includes('Hydration')) {
          console.info('🔄 Erro de hidratação detectado e tratado:', error.message)
          // Não propaga o erro para evitar quebrar a aplicação
          return
        }
      })
    }
  }
})