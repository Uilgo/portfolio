<template>
  <section id="contato" class="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header da Seção -->
      <div class="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          Vamos Conversar?
        </h2>
        <p class="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
          Estou sempre aberto a novas oportunidades e projetos interessantes
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
        <!-- Informações de Contato -->
        <div class="space-y-6 sm:space-y-8">
          <div>
            <h3 class="text-center text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Informações de Contato
            </h3>
            
            <!-- Cards de Contato -->
            <div class="space-y-3 sm:space-y-4">
              <ContactCard
                icon="heroicons:envelope"
                title="Email"
                href="mailto:igorelias.pro@gmail.com"
                subtitle="igorelias.pro@gmail.com"
                variant="blue"
              />

              <ContactCard
                icon="heroicons:device-phone-mobile"
                title="WhatsApp"
                href="https://wa.me/5584996551792"
                subtitle="(84) 99655-1792"
                variant="green"
              />

              <ContactCard
                icon="heroicons:user-group"
                title="LinkedIn"
                href="https://www.linkedin.com/in/igor-elias-de-lima/"
                subtitle="/in/igor-elias-de-lima"
                variant="blue"
              />

              <ContactCard
                icon="heroicons:map-pin"
                title="Localização"
                subtitle="Santa Maria - RN, Brasil"
                variant="purple"
              >
                <p class="text-xs text-gray-500 dark:text-gray-400">Disponível para trabalho remoto</p>
              </ContactCard>
            </div>
          </div>

          <!-- Status de Disponibilidade -->
          <div class="p-4 sm:p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <div class="flex items-center gap-3 mb-2 sm:mb-3">
              <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p class="text-green-800 dark:text-green-300 font-semibold text-sm sm:text-base">
                Disponível para novos projetos
              </p>
            </div>
            <p class="text-green-700 dark:text-green-400 text-xs sm:text-sm">
              Atualmente aceitando freelances e oportunidades de trabalho em desenvolvimento No-Code e Frontend.
            </p>
          </div>
        </div>

        <!-- Formulário de Contato -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8">
          <h3 class="text-center text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Envie uma Mensagem
          </h3>
          
          <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-6">
            <!-- Nome -->
            <div>
              <label for="nome" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nome *
              </label>
              <Input
                id="nome"
                v-model="form.nome"
                placeholder="Seu nome completo"
                required
                autocomplete="name"
                :left-icon="'heroicons:user'"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <Input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="seu.email@exemplo.com"
                required
                autocomplete="email"
                :left-icon="'heroicons:envelope'"
                :clearable="true"
              />
            </div>

            <!-- Tipo de Projeto -->
            <div>
              <label for="tipo" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tipo de Projeto
              </label>
              <Select
                id="tipo"
                v-model="form.tipo"
                :options="[
                  { value: '', label: 'Selecione o tipo de projeto' },
                  { value: 'bubble', label: 'Desenvolvimento em Bubble' },
                  { value: 'frontend', label: 'Desenvolvimento Frontend' },
                  { value: 'outro', label: 'Outro' }
                ]"
                :left-icon="'heroicons:selector'"
              />
            </div>

            <!-- Mensagem -->
            <div>
              <label for="mensagem" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensagem *
              </label>
              <Textarea
                id="mensagem"
                v-model="form.mensagem"
                :rows="4"
                placeholder="Descreva seu projeto ou dúvida..."
                required
                autocomplete="off"
                :left-icon="'heroicons:chat-bubble-left-right'"
                :show-count="true"
                :max-length="1000"
              />
            </div>

            <!-- Botões -->
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Icon v-if="isSubmitting" name="heroicons:arrow-path" class="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                <Icon v-else name="heroicons:paper-airplane" class="w-4 h-4 sm:w-5 sm:h-5" />
                {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
              </button>
              
              <a
                href="https://wa.me/5584996551792?text=Olá%20Igor,%20vim%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto"
                target="_blank"
                class="px-4 sm:px-6 py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base sm:flex-shrink-0"
              >
                <Icon name="heroicons:chat-bubble-left-right" class="w-4 h-4 sm:w-5 sm:h-5" />
                WhatsApp
              </a>
            </div>
          </form>

          <!-- Mensagem de Sucesso -->
          <div v-if="showSuccess" class="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
            <div class="flex items-center gap-2">
              <Icon name="heroicons:check-circle" class="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
              <p class="text-green-800 dark:text-green-300 font-medium text-sm sm:text-base">
                Mensagem enviada com sucesso!
              </p>
            </div>
            <p class="text-green-700 dark:text-green-400 text-xs sm:text-sm mt-1">
              Retornarei o contato em breve. Obrigado!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Input from '~/components/ui/Input.vue'
import Textarea from '~/components/ui/Textarea.vue'
import Select from '~/components/ui/Select.vue'
import ContactCard from '~/components/ui/ContactCard.vue'
// Estado do formulário
const form = ref({
  nome: '',
  email: '',
  tipo: '',
  mensagem: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

// Função para enviar formulário
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulação de envio (aqui você pode integrar com um serviço de email)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mostrar sucesso
    showSuccess.value = true
    
    // Limpar formulário
    form.value = {
      nome: '',
      email: '',
      tipo: '',
      mensagem: ''
    }
    
    // Esconder mensagem de sucesso após 5 segundos
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>