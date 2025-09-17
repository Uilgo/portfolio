<template>
  <section
    id="projetos"
    class="min-h-screen bg-gray-50 dark:bg-gray-900/50 py-20"
  >
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Meus Projetos
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Uma seleção dos meus principais trabalhos em desenvolvimento No-Code e Front-End,
          mostrando soluções criativas e técnicas para diferentes desafios.
        </p>
      </div>

      <!-- Grid de projetos -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @view-details="openProjectModal"
        />
      </div>
    </div>

    <!-- Modal de detalhes do projeto -->
    <ProjectModal
      :project="selectedProject"
      :is-open="isModalOpen"
      @close="closeProjectModal"
    />
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../projects/ProjectCard.vue'
import ProjectModal from '../projects/ProjectModal.vue'

// Estado do modal
const isModalOpen = ref(false)
const selectedProject = ref(null)

// Dados dos projetos baseados no currículo
const projects = [
  {
    id: 'petbath',
    nome: 'PetBath - Sistema de Agendamento',
    descricao: 'Sistema completo para gerenciamento de serviços de banho e cuidados para pets com interface intuitiva e responsiva.',
  imagem: '/images/petbath.png',
    tecnologias: ['Bubble', 'Integração Assas', 'API'],
    categoria: ['Bubble', 'Sistema'],
    status: 'Concluído',
    url: 'https://petbath-75376.bubbleapps.io/version-test',
    github: null,
    metricas: {
      tipo: 'Projeto de Portfólio',
      funcional: 'Totalmente funcional',
      responsivo: 'Design responsivo'
    },
    detalhes: {
      desafio: 'Criar uma plataforma que facilitasse o agendamento de serviços para pets, integrando pagamentos online.',
      solucao: 'Desenvolvimento de um sistema focado em agendamento e gerenciamento de serviços, com integração ao gateway de pagamento.',
      resultados: [
        'Sistema funcional para demonstração',
        'Interface responsiva e intuitiva',
        'Integração com meio de pagamento'
      ],
      funcionalidades: [
        'Agendamento de serviços (agenda básica)',
        'Gestão de serviços e preços',
        'Integração com Assas para pagamentos',
        'Design responsivo para dispositivos móveis'
      ]
    }
  },
  {
    id: 'delivery-system',
    nome: 'Sistema de Gerenciamento de Delivery',
    descricao: 'Aplicação web para gerenciamento de pedidos de comida com sistema de autenticação multi-tenant e cardápio online interativo.',
  imagem: '/images/delivery.png',
    tecnologias: ['Bubble', 'Arquitetura Multi-tenant', 'Atualizações em Tempo Real'],
    categoria: ['Bubble', 'Sistema'],
    status: 'Em Desenvolvimento',
    url: 'https://webidelivery-43558.bubbleapps.io/version-test',
    github: null,
    metricas: {
      tipo: 'Projeto de Portfólio',
      status: 'Em desenvolvimento',
      funcional: 'Parcialmente funcional'
    },
    detalhes: {
      desafio: 'Desenvolver uma plataforma multi-tenant que permitisse múltiplos restaurantes gerenciarem seus pedidos.',
      solucao: 'Criação de uma arquitetura escalável com separação de dados por tenant e interface intuitiva.',
      resultados: [
        'Arquitetura multi-tenant implementada',
        'Sistema de pedidos básico funcional',
        'Interface responsiva em desenvolvimento'
      ],
      funcionalidades: [
        'Arquitetura multi-tenant',
        'Cardápio dinâmico e interativo',
        'Sistema de pedidos em tempo real',
        'Gestão de categorias e produtos',
        'Painel de controle para restaurantes',
        'Relatórios de vendas (em desenvolvimento)'
      ]
    }
  },
  {
    id: 'barbearia-landing',
    nome: 'Landing Page - Barbearia Premium',
    descricao: 'Landing page moderna e responsiva para barbearia com sistema de agendamento online e apresentação dos serviços.',
  imagem: '/images/lpbarber.png',
    tecnologias: ['Bubble', 'Design Responsivo', 'Otimização SEO'],
    categoria: ['Bubble', 'Landing Page'],
    status: 'Concluído',
  url: 'https://lp-barbearia-14851.bubbleapps.io/version-test',
    github: null,
    metricas: {
      tipo: 'Projeto de Portfólio',
      funcional: 'Totalmente funcional',
      responsivo: 'Design responsivo'
    },
    detalhes: {
      desafio: 'Criar uma landing page atrativa para uma barbearia, focando na apresentação dos serviços e facilidade de agendamento.',
      solucao: 'Desenvolvimento de uma interface moderna com foco na experiência do usuário, destacando os serviços e facilitando o contato.',
      resultados: [
        'Landing page totalmente funcional',
        'Interface responsiva e atrativa',
        'Formulário de contato integrado'
      ],
      funcionalidades: [
        'Design responsivo e moderno',
        'Seção principal impactante',
        'Galeria de serviços oferecidos',
        'Formulário de contato integrado',
        'Seção sobre a equipe e história',
        'Otimização para dispositivos móveis'
      ]
    }
  }
]

// Funções do modal
const openProjectModal = (project: any) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeProjectModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>