<template>
  <section id="skills" class="py-20 bg-white dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 animate-on-scroll" ref="headerRef">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 animate-slide-up">
          Habilidades & Tecnologias
        </h2>
        <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in animate-delay-200">
          Tecnologias e ferramentas que utilizo para criar soluções modernas e eficientes
        </p>
      </div>

      <!-- IA Estruturada - Diferencial -->
      <div v-motion-slide-visible-once-bottom class="mb-12 sm:mb-16">
        <div class="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-orange-200 dark:border-orange-800/50">
          <!-- Header Section -->
          <div class="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <!-- Ícone - oculto no mobile -->
            <div class="hidden sm:flex w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-2xl items-center justify-center flex-shrink-0">
              <Icon name="heroicons:cpu-chip" class="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div class="flex-1 w-full">
              <!-- Título e Badge - sempre na mesma linha -->
              <div class="flex items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-6">
                <h3 class="text-base sm:text-2xl font-bold text-gray-900 dark:text-gray-100 flex-shrink-0">IA Estruturada</h3>
                <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs sm:text-sm rounded-full font-medium flex-shrink-0">
                  🚀 Diferencial
                </span>
              </div>
              <p class="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Desenvolvimento assistido por inteligência artificial
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                <strong>Abordagem única:</strong> Não utilizo ferramentas automáticas, mas sim estruturo projetos 
                corretamente utilizando IA como ferramenta de apoio no desenvolvimento componentizado e modular.
              </p>
            </div>
          </div>
          
          <!-- Mini Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div class="flex items-start gap-3 sm:gap-3 p-3 sm:p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl">
              <div class="w-8 h-8 sm:w-8 sm:h-8 bg-orange-100 dark:bg-orange-900/50 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="heroicons:puzzle-piece" class="w-4 h-4 sm:w-4 sm:h-4 text-orange-600 dark:text-orange-400" />
              </div>
              <div class="min-w-0 flex-1">
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-sm mb-1 sm:mb-1">Arquitetura Componentizada</h4>
                <p class="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">Estruturação modular e escalável de projetos</p>
              </div>
            </div>

            <div class="flex items-start gap-3 sm:gap-3 p-3 sm:p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl">
              <div class="w-8 h-8 sm:w-8 sm:h-8 bg-orange-100 dark:bg-orange-900/50 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="heroicons:academic-cap" class="w-4 h-4 sm:w-4 sm:h-4 text-orange-600 dark:text-orange-400" />
              </div>
              <div class="min-w-0 flex-1">
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-sm mb-1 sm:mb-1">Aprendizado Contínuo</h4>
                <p class="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">Crescimento técnico constante e metodológico</p>
              </div>
            </div>

            <div class="flex items-start gap-3 sm:gap-3 p-3 sm:p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl">
              <div class="w-8 h-8 sm:w-8 sm:h-8 bg-orange-100 dark:bg-orange-900/50 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="heroicons:code-bracket" class="w-4 h-4 sm:w-4 sm:h-4 text-orange-600 dark:text-orange-400" />
              </div>
              <div class="min-w-0 flex-1">
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-sm mb-1 sm:mb-1">Code Review Assistido</h4>
                <p class="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">Refatoração e otimização com suporte de IA</p>
              </div>
            </div>

            <div class="flex items-start gap-3 sm:gap-3 p-3 sm:p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl">
              <div class="w-8 h-8 sm:w-8 sm:h-8 bg-orange-100 dark:bg-orange-900/50 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="heroicons:arrow-path" class="w-4 h-4 sm:w-4 sm:h-4 text-orange-600 dark:text-orange-400" />
              </div>
              <div class="min-w-0 flex-1">
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-sm mb-1 sm:mb-1">Workflow Integrado</h4>
                <p class="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">IA como ferramenta no processo de desenvolvimento</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Categories -->
      <div class="space-y-12">
        <!-- Front-End Development -->
        <div v-motion-slide-visible-once-right>
          <div class="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-accent-200 dark:border-accent-800">
            <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div class="hidden sm:flex w-12 sm:h-12 bg-accent-600 rounded-xl flex items-center justify-center">
                <Icon name="heroicons:code-bracket" class="w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">Desenvolvimento Frontend</h3>
                <p class="text-accent-600 dark:text-accent-400 text-xs sm:text-sm font-medium">Interfaces modernas e responsivas</p>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              <SkillItem
                name="React"
                icon="simple-icons:react"
                color="accent"
              />
              <SkillItem
                name="Vue 3"
                icon="simple-icons:vuedotjs"
                color="accent"
              />
              <SkillItem
                name="Next.js"
                icon="simple-icons:nextdotjs"
                color="accent"
              />
              <SkillItem
                name="Nuxt 4"
                icon="simple-icons:nuxtdotjs"
                color="accent"
              />
              <SkillItem
                name="Tailwind CSS"
                icon="simple-icons:tailwindcss"
                color="accent"
              />
              <SkillItem
                name="TypeScript"
                icon="simple-icons:typescript"
                color="accent"
              />
            </div>
          </div>
        </div>

        <!-- No-Code/Low-Code -->
        <div v-motion-slide-visible-once-left>
          <div class="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-primary-200 dark:border-primary-800">
            <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div class="hidden sm:flex w-12 sm:h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <Icon name="heroicons:rocket-launch" class="w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">Desenvolvimento No-Code/Low-Code</h3>
                <p class="text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-medium">Desenvolvimento rápido e escalável</p>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              <SkillItem
                name="Bubble"
                icon="heroicons:rectangle-stack"
                custom-letter="B"
                color="primary"
              />
              <SkillItem
                name="WeWeb"
                icon="heroicons:globe-alt"
                custom-letter="W"
                color="primary"
              />
              <SkillItem
                name="FlutterFlow"
                icon="simple-icons:flutter"
                color="primary"
              />
              <SkillItem
                name="Supabase"
                icon="simple-icons:supabase"
                color="primary"
              />
              <SkillItem
                name="Firebase"
                icon="simple-icons:firebase"
                color="primary"
              />
            </div>
          </div>
        </div>

        <!-- Tools & DevOps -->
        <div v-motion-slide-visible-once-left>
          <div class="bg-gradient-to-br from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-success-200 dark:border-success-800">
            <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div class="hidden sm:flex w-12 sm:h-12 bg-success-600 rounded-xl flex items-center justify-center">
                <Icon name="heroicons:wrench-screwdriver" class="w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">Ferramentas & DevOps</h3>
                <p class="text-success-600 dark:text-success-400 text-xs sm:text-sm font-medium">Workflow otimizado e produtivo</p>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              <SkillItem
                name="Git/GitHub"
                icon="simple-icons:github"
                color="success"
              />
              <SkillItem
                name="Vercel"
                icon="simple-icons:vercel"
                color="success"
              />
              <SkillItem
                name="Figma"
                icon="simple-icons:figma"
                color="success"
              />
              <SkillItem
                name="VS Code"
                icon="simple-icons:visualstudiocode"
                color="success"
              />
              <SkillItem
                name="Biome"
                icon="heroicons:sparkles"
                color="success"
              />
            </div>
          </div>
        </div>

        <!-- Currently Learning -->
        <div v-motion-slide-visible-once-bottom>
          <div class="bg-gray-50 dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-800">
            <div class="text-center mb-6 sm:mb-8">
              <div class="hidden sm:flex w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:academic-cap" class="w-8 sm:h-8 text-white" />
              </div>
              <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Aprendendo Atualmente</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Sempre em evolução, explorando novas tecnologias</p>
            </div>

            <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div class="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <Icon name="simple-icons:vuedotjs" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                <span class="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Vue.js</span>
              </div>

              <div class="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div class="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                <Icon name="simple-icons:nuxtdotjs" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                <span class="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Nuxt 4</span>
              </div>

              <div class="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div class="w-2 h-2 bg-success-500 rounded-full animate-pulse" />
                <Icon name="simple-icons:openai" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                <span class="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">IA (Automações)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useScrollAnimation } from '~/composables/useAnimations'
import SkillItem from '~/components/layouts/SkillItem.vue'

// Configurar animações de scroll
const headerRef = ref<HTMLElement>()
const { observe } = useScrollAnimation({ threshold: 0.2 })

onMounted(() => {
  if (headerRef.value) {
    observe(headerRef.value)
  }

  // Observar todos os skill items para animação sequencial
  if (process.client) {
    const skillItems = document.querySelectorAll('.animate-on-scroll')
    skillItems.forEach((item, index) => {
      const { observe: observeItem } = useScrollAnimation({ 
        threshold: 0.1, 
        delay: index * 100 
      })
      observeItem(item as HTMLElement)
    })
  }
})
</script>