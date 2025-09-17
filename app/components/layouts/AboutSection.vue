<template>
  <section id="about" class="py-20 bg-gray-50 dark:bg-gray-900/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Sobre Mim
        </h2>
        <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Conheça um pouco mais sobre minha trajetória e experiência
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Main Content -->
        <div v-motion-slide-visible-once-left>
          <div class="space-y-6">
            <div class="prose prose-lg dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Sou <strong>Desenvolvedor Frontend</strong> com foco em soluções práticas e eficientes. Atuo também com No-Code/Low-Code (Bubble e Weweb) e utilizo IA para desenvolver sistemas de modo estruturado, componentizado e modularizado.
              </p> <br>

              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Tenho experiência no desenvolvimento de sistemas com Bubble, integrações API, e com <strong>Supabase</strong>, garantindo escalabilidade e segurança. Minha abordagem permite criar sistemas com organização e controle, aliando criatividade e planejamento para entregar experiências de usuário funcionais e sustentadas por arquiteturas bem estruturadas.
              </p> <br>

            </div>

            <!-- Values -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Icon name="heroicons:heart" class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Empatia</h4>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Sempre penso na experiência do usuário final
                </p>
              </div>
              
              <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-lg flex items-center justify-center">
                    <Icon name="heroicons:users" class="w-4 h-4 text-success-600 dark:text-success-400" />
                  </div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Colaboração</h4>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Trabalho em equipe para alcançar os melhores resultados
                </p>
              </div>

              <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                    <Icon name="heroicons:academic-cap" class="w-4 h-4 text-accent-600 dark:text-accent-400" />
                  </div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Aprendizado</h4>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Sempre em busca de novas tecnologias e conhecimentos
                </p>
              </div>

              <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 bg-warning-100 dark:bg-warning-900/30 rounded-lg flex items-center justify-center">
                    <Icon name="heroicons:star" class="w-4 h-4 text-warning-600 dark:text-warning-400" />
                  </div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Excelência</h4>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Compromisso com qualidade em cada linha de código
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Info Cards -->
        <div v-motion-slide-visible-once-right>
          <div class="space-y-6">
            <!-- Location & Availability -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:map-pin" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Localização & Trabalho</h3>
                  <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    📍 Brasil, Rio Grande do Norte<br>
                    🌍 Trabalho remoto<br>
                    🕒 Fuso horário: UTC-3
                  </p>
                  <div class="flex items-center gap-2 text-success-600 dark:text-success-400 text-sm">
                    <div class="w-2 h-2 bg-success-500 rounded-full animate-pulse" />
                    Disponível para novos projetos
                  </div>
                </div>
              </div>
            </div>

            <!-- Experience Timeline -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:clock" class="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Timeline de Carreira</h3>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">Principais marcos profissionais</p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="flex gap-3">
                  <div class="flex flex-col items-center">
                    <div class="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                    <div class="w-px h-8 bg-gray-200 dark:bg-gray-600 mt-1" />
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900 dark:text-gray-100">2025 - Presente</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">IA Estruturada, Componentizada e Modularizada</div>
                  </div>
                </div>

                <div class="flex gap-3">
                  <div class="flex flex-col items-center">
                    <div class="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                    <div class="w-px h-8 bg-gray-200 dark:bg-gray-600 mt-1" />
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900 dark:text-gray-100">2023</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Foco em No-Code/Low-Code</div>
                  </div>
                </div>

                <div class="flex gap-3">
                  <div class="flex flex-col items-center">
                    <div class="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900 dark:text-gray-100">2021</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Início com JavaScript, React e desenvolvimento Frontend</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Hobbies & Interests -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:face-smile" class="w-6 h-6 text-success-600 dark:text-success-400" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Interesses Pessoais</h3>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">O que me motiva além do código</p>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  🎮 Gaming
                </span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  📚 Leitura Técnica
                </span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  🎵 Música
                </span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  ☕ Café
                </span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  🚀 Tecnologia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component is self-contained, no additional logic needed
</script>