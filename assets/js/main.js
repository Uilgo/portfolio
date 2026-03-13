// Projects Data
const projects = [
  {
    id: "petbath",
    nome: "PetBath - Sistema de Agendamento",
    descricao:
      "Sistema completo para gerenciamento de serviços de banho e cuidados para pets com interface intuitiva e responsiva.",
    imagem: "assets/images/petbath.webp",
    tecnologias: ["Bubble", "Integração Assas", "API"],
    categoria: ["Bubble", "Sistema"],
    status: "Concluído",
    url: "https://petbath-75376.bubbleapps.io/version-test",
    github: null,
    metricas: {
      tipo: "Projeto de Portfólio",
      funcional: "Totalmente funcional",
      responsivo: "Design responsivo",
    },
    detalhes: {
      desafio:
        "Criar uma plataforma que facilitasse o agendamento de serviços para pets, integrando pagamentos online.",
      solucao:
        "Desenvolvimento de um sistema focado em agendamento e gerenciamento de serviços, com integração ao gateway de pagamento.",
      resultados: [
        "Sistema funcional para demonstração",
        "Interface responsiva e intuitiva",
        "Integração com meio de pagamento",
      ],
      funcionalidades: [
        "Agendamento de serviços (agenda básica)",
        "Gestão de serviços e preços",
        "Integração com Assas para pagamentos",
        "Design responsivo para dispositivos móveis",
      ],
    },
  },
  {
    id: "webiagenda",
    nome: "WebIAgenda - Sistema de Agendamento Inteligente",
    descricao:
      "Sistema moderno e intuitivo para gerenciamento de agendamentos com dashboard interativo.",
    imagem: "assets/images/webiagenda.webp",
    tecnologias: ["Nuxt 4", "TypeScript", "Supabase", "Tailwind CSS"],
    categoria: ["Vue", "Sistema"],
    status: "Concluído",
    url: "https://webiagenda.vercel.app/",
    github: "https://github.com/Uilgo/webiagenda",
    metricas: {
      tipo: "Projeto Fullstack",
      status: "Concluído",
      responsivo: "Mobile First",
    },
    detalhes: {
      desafio:
        "Desenvolver uma solução completa e moderna para gerenciamento de agendamentos, facilitando o controle de compromissos e eventos profissionais.",
      solucao:
        "Criação de um sistema robusto com Nuxt 4, priorizando performance e usabilidade com uma arquitetura escalável baseada em features.",
      resultados: [
        "Gestão completa de agendamentos",
        "Dashboard de métricas intuitivo",
        "Interface moderna e responsiva",
      ],
      funcionalidades: [
        "Criação, edição e exclusão de compromissos",
        "Dashboard com visão geral e estatísticas",
        "Sistema completo de autenticação e autorização",
        "Interface moderna com suporte a tema claro/escuro",
        "Totalmente otimizado para dispositivos móveis",
        "Sistema de alertas e relatórios em desenvolvimento",
      ],
    },
  },
  {
    id: "barbearia-landing",
    nome: "Landing Page - Barbearia Premium",
    descricao:
      "Landing page moderna e responsiva para barbearia com sistema de agendamento online e apresentação dos serviços.",
    imagem: "assets/images/lpbarber.webp",
    tecnologias: ["Bubble", "Design Responsivo", "Otimização SEO"],
    categoria: ["Bubble", "Landing Page"],
    status: "Concluído",
    url: "https://lp-barbearia-14851.bubbleapps.io/version-test",
    github: null,
    metricas: {
      tipo: "Projeto de Portfólio",
      funcional: "Totalmente funcional",
      responsivo: "Design responsivo",
    },
    detalhes: {
      desafio:
        "Criar uma landing page atrativa para uma barbearia, focando na apresentação dos serviços e facilidade de agendamento.",
      solucao:
        "Desenvolvimento de uma interface moderna com foco na experiência do usuário, destacando os serviços e facilitando o contato.",
      resultados: [
        "Landing page totalmente funcional",
        "Interface responsiva e atrativa",
        "Formulário de contato integrado",
      ],
      funcionalidades: [
        "Design responsivo e moderno",
        "Seção principal impactante",
        "Galeria de serviços oferecidos",
        "Formulário de contato integrado",
        "Seção sobre a equipe e história",
        "Otimização para dispositivos móveis",
      ],
    },
  },
];

// Render Projects
function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map((project) => {
      // Get translated title and description
      const title = window.I18n
        ? window.I18n.t(`projects.${project.id}.title`)
        : project.nome;
      const description = window.I18n
        ? window.I18n.t(`projects.${project.id}.description`)
        : project.descricao;
      const buttonText = window.I18n
        ? window.I18n.t("projects.button.access")
        : "Acessar Projeto";

      return `
        <div class="project-card" onclick="window.open('${project.url}', '_blank')">
          <!-- Imagem em destaque no topo -->
          <div class="project-image-wrapper">
            <img src="${project.imagem}" alt="${title}" class="project-image" width="400" height="210" loading="lazy">
            <div class="project-image-overlay"></div>
          </div>

          <!-- Conteúdo textual -->
          <div class="project-content">
            <h3 class="project-title">${title}</h3>
            <p class="project-description">${description}</p>
            <div class="project-tech">
              ${project.tecnologias.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
            </div>
            
            <div class="project-actions">
              <button class="btn-project">
                <span>${buttonText}</span>
                <i data-lucide="external-link"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  // Reinitialize icons after rendering projects
  if (typeof createIcons !== "undefined") {
    setTimeout(() => createIcons(), 50);
  }
}

// Download CV
function setupCVDownload() {
  const downloadBtn = document.getElementById("download-cv");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "assets/documents/curriculo.pdf";
      link.download = "Igor_Elias_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

// Update Footer Year
function updateFooterYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupCVDownload();
  updateFooterYear();

  // Initialize icons after everything is loaded
  if (typeof createIcons !== "undefined") {
    createIcons();
  }
});
