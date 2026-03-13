// Internationalization System
const translations = {
  "pt-BR": {
    // Header
    "header.logo": "IE",
    "header.theme.light": "Tema claro",
    "header.theme.dark": "Tema escuro",

    // Nav
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero Section
    "hero.status": "Disponível para projetos",
    "hero.name": "Igor Elias",
    "hero.tagline.1": "Desenvolvedor Frontend",
    "hero.tagline.2": "Desenvolvedor Fullstack",
    "hero.tagline.3": "Desenvolvedor React & Vue",
    "hero.description":
      "Transformo ideias em soluções digitais com Frontend moderno, Backend com Supabase e desenvolvimento assistido por IA. Experiência em criar interfaces e sistemas completos que conectam tecnologia e experiência do usuário. 🚀",
    "hero.btn.projects": "Ver Projetos",
    "hero.btn.cv": "Baixar CV",
    "hero.btn.contact": "Contato",
    "hero.social.github": "GitHub",
    "hero.social.linkedin": "LinkedIn",
    "hero.social.email": "Email",
    "hero.scroll": "Role para baixo",

    // About Section
    "about.title": "Sobre Mim",
    "about.subtitle":
      "Conheça um pouco mais sobre minha trajetória e experiência",
    "about.text.1":
      "Sou <strong>Desenvolvedor Fullstack</strong> com foco em soluções práticas e eficientes. Utilizo IA como ferramenta de apoio para desenvolver sistemas de modo estruturado, componentizado e modularizado.",
    "about.text.2":
      "Tenho experiência prévia com plataformas No-Code (Bubble, WeWeb) e hoje foco exclusivamente em desenvolvimento high-code com <strong>React</strong>, <strong>Vue</strong>, <strong>Node.js</strong> e <strong>Supabase</strong>, garantindo escalabilidade e segurança. Minha abordagem permite criar sistemas completos com organização e controle, aliando criatividade e planejamento para entregar experiências de usuário funcionais e sustentadas por arquiteturas bem estruturadas.",
    "about.value.empathy": "Empatia",
    "about.value.empathy.desc": "Sempre penso na experiência do usuário final",
    "about.value.collaboration": "Colaboração",
    "about.value.collaboration.desc":
      "Trabalho em equipe para alcançar os melhores resultados",
    "about.value.learning": "Aprendizado",
    "about.value.learning.desc": "Sempre em busca de novas tecnologias e conhecimentos",
    "about.value.excellence": "Excelência",
    "about.value.excellence.desc":
      "Compromisso com qualidade em cada linha de código",
    "about.location.title": "Localização & Trabalho",
    "about.location.country": "Brasil, Rio Grande do Norte",
    "about.location.remote": "Trabalho remoto",
    "about.location.timezone": "Fuso horário: UTC-3",
    "about.location.available": "Disponível para novos projetos",
    "about.timeline.title": "Timeline de Carreira",
    "about.timeline.subtitle": "Principais marcos profissionais",
    "about.timeline.2025": "2025 - Presente",
    "about.timeline.2025.text":
      "Desenvolvimento Fullstack escalável com auxílio de Inteligência Artificial",
    "about.timeline.2023": "2023",
    "about.timeline.2023.text":
      "Foco no desenvolvimento ágil utilizando No-Code e Low-Code",
    "about.timeline.2021": "2021",
    "about.timeline.2021.text":
      "Início da trajetória tecnológica com JavaScript e o desenvolvimento Frontend",
    "about.hobbies.title": "Interesses Pessoais",
    "about.hobby.gaming": "Gaming",
    "about.hobby.reading": "Leitura Técnica",
    "about.hobby.music": "Música",
    "about.hobby.coffee": "Café",
    "about.hobby.tech": "Tecnologia",

    // Skills Section
    "skills.title": "Habilidades & Tecnologias",
    "skills.subtitle":
      "Tecnologias e ferramentas que utilizo para criar soluções modernas",
    "skills.ia.title": "IA Estruturada",
    "skills.ia.badge": "Diferencial",
    "skills.ia.description":
      "Desenvolvimento de software com suporte de inteligência artificial",
    "skills.ia.text":
      "<strong>Abordagem única:</strong> Utilizo IA como copiloto para estruturar sistemas modulares, escaláveis e bem arquitetados.",
    "skills.ia.feature.1": "Arquitetura Componentizada",
    "skills.ia.feature.1.desc": "Estruturação modular e escalável",
    "skills.ia.feature.2": "Aprendizado Contínuo",
    "skills.ia.feature.2.desc": "Crescimento técnico constante",
    "skills.ia.feature.3": "Code Review Assistido",
    "skills.ia.feature.3.desc": "Refatoração com suporte de IA",
    "skills.ia.feature.4": "Workflow Integrado",
    "skills.ia.feature.4.desc": "IA no processo de desenvolvimento",
    "skills.frontend.title": "Desenvolvimento Frontend",
    "skills.frontend.desc": "Interfaces modernas e responsivas",
    "skills.backend.title": "Backend & BaaS",
    "skills.backend.desc": "APIs, banco de dados e infraestrutura",
    "skills.tools.title": "Ferramentas Essenciais",
    "skills.tools.desc": "Workflow otimizado",
    "skills.learning.title": "Aprendendo Atualmente",
    "skills.learning.desc": "Sempre em evolução, explorando novas tecnologias",

    // Projects Section
    "projects.title": "Meus Projetos",
    "projects.subtitle":
      "Alguns dos projetos que desenvolvi utilizando as mais modernas tecnologias",
    "projects.status.completed": "Concluído",
    "projects.status.development": "Em Desenvolvimento",
    "projects.modal.challenge": "Desafio",
    "projects.modal.solution": "Solução",
    "projects.modal.results": "Resultados",
    "projects.modal.features": "Funcionalidades",
    "projects.modal.view": "Ver Projeto",
    "projects.modal.github": "GitHub",

    // Contact Section
    "contact.title": "Vamos Conversar?",
    "contact.subtitle":
      "Estou sempre aberto a novas oportunidades e projetos interessantes",
    "contact.info.title": "Informações de Contato",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.linkedin": "LinkedIn",
    "contact.location": "Localização",
    "contact.location.city": "Santa Maria - RN, Brasil",
    "contact.location.remote": "Disponível para trabalho remoto",
    "contact.available": "Disponível para novos projetos",
    "contact.available.text":
      "Atualmente aceitando freelances e oportunidades de trabalho em desenvolvimento Frontend e Fullstack.",
    "contact.form.title": "Envie uma Mensagem",
    "contact.form.name": "Nome",
    "contact.form.name.placeholder": "Seu nome completo",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "seu.email@exemplo.com",
    "contact.form.type": "Tipo de Projeto",
    "contact.form.type.placeholder": "Selecione o tipo de projeto",
    "contact.form.type.fullstack": "Aplicação Web Fullstack",
    "contact.form.type.frontend": "Desenvolvimento Frontend",
    "contact.form.type.other": "Outro",
    "contact.form.message": "Mensagem",
    "contact.form.message.placeholder": "Descreva seu projeto ou dúvida...",
    "contact.form.submit": "Enviar Mensagem",
    "contact.form.sending": "Enviando...",
    "contact.form.whatsapp": "WhatsApp",
    "contact.form.success.title": "Mensagem enviada com sucesso!",
    "contact.form.success.text": "Retornarei o contato em breve. Obrigado!",

    // Footer
    "footer.rights": "Todos os direitos reservados.",

    // Projects
    "projects.petbath.title": "PetBath - Sistema de Agendamento",
    "projects.petbath.description":
      "Sistema completo para gerenciamento de serviços de banho e cuidados para pets com interface intuitiva e responsiva.",
    "projects.webiagenda.title":
      "WebiAgenda - Sistema de Agendamento Inteligente",
    "projects.webiagenda.description":
      "Sistema moderno e intuitivo para gerenciamento de agendamentos com dashboard interativo.",
    "projects.barbearia-landing.title": "Landing Page - Barbearia Premium",
    "projects.barbearia-landing.description":
      "Landing page moderna e responsiva para barbearia com sistema de agendamento online e apresentação dos serviços.",
    "projects.button.access": "Acessar Projeto",
  },

  en: {
    // Header
    "header.logo": "IE",
    "header.theme.light": "Light theme",
    "header.theme.dark": "Dark theme",

    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.status": "Available for projects",
    "hero.name": "Igor Elias",
    "hero.tagline.1": "Frontend Developer",
    "hero.tagline.2": "Fullstack Developer",
    "hero.tagline.3": "React & Vue Developer",
    "hero.description":
      "I transform ideas into digital solutions with modern Frontend, Supabase Backend and AI-assisted development. Experience in creating interfaces and complete systems that connect technology and user experience. 🚀",
    "hero.btn.projects": "View Projects",
    "hero.btn.cv": "Download CV",
    "hero.btn.contact": "Contact",
    "hero.social.github": "GitHub",
    "hero.social.linkedin": "LinkedIn",
    "hero.social.email": "Email",
    "hero.scroll": "Scroll down",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "Learn more about my journey and experience",
    "about.text.1":
      "I am a <strong>Fullstack Developer</strong> focused on practical and efficient solutions. I use AI as a support tool to develop systems in a structured, componentized, and modularized way.",
    "about.text.2":
      "I have previous experience with No-Code platforms (Bubble, WeWeb) and today I focus exclusively on high-code development with <strong>React</strong>, <strong>Vue</strong>, <strong>Node.js</strong> and <strong>Supabase</strong>, ensuring scalability and security. My approach allows for creating complete systems with organization and control, combining creativity and planning to deliver functional and well-structured user experiences.",
    "about.value.empathy": "Empathy",
    "about.value.empathy.desc": "Always thinking about the end user experience",
    "about.value.collaboration": "Collaboration",
    "about.value.collaboration.desc": "Teamwork to achieve the best results",
    "about.value.learning": "Learning",
    "about.value.learning.desc": "Always seeking new technologies and knowledge",
    "about.value.excellence": "Excellence",
    "about.value.excellence.desc":
      "Commitment to quality in every line of code",
    "about.location.title": "Location & Work",
    "about.location.country": "Brazil, Rio Grande do Norte",
    "about.location.remote": "Remote work",
    "about.location.timezone": "Timezone: UTC-3",
    "about.location.available": "Available for new projects",
    "about.timeline.title": "Career Timeline",
    "about.timeline.subtitle": "Key professional milestones",
    "about.timeline.2025": "2025 - Present",
    "about.timeline.2025.text":
      "Scalable Fullstack development with Artificial Intelligence support",
    "about.timeline.2023": "2023",
    "about.timeline.2023.text":
      "Focus on agile development using No-Code and Low-Code",
    "about.timeline.2021": "2021",
    "about.timeline.2021.text":
      "Beginning of the tech journey with JavaScript and Frontend",
    "about.hobbies.title": "Personal Interests",
    "about.hobby.gaming": "Gaming",
    "about.hobby.reading": "Technical Reading",
    "about.hobby.music": "Music",
    "about.hobby.coffee": "Coffee",
    "about.hobby.tech": "Technology",

    // Skills Section
    "skills.title": "Skills & Technologies",
    "skills.subtitle":
      "Technologies and tools I use to create modern solutions",
    "skills.ia.title": "Structured AI",
    "skills.ia.badge": "Differentiator",
    "skills.ia.description": "AI-assisted development",
    "skills.ia.text":
      "<strong>Unique approach:</strong> I structure projects correctly using AI as a support tool in componentized and modular development.",
    "skills.ia.feature.1": "Componentized Architecture",
    "skills.ia.feature.1.desc": "Modular and scalable structuring",
    "skills.ia.feature.2": "Continuous Learning",
    "skills.ia.feature.2.desc": "Constant technical growth",
    "skills.ia.feature.3": "Assisted Code Review",
    "skills.ia.feature.3.desc": "Refactoring with AI support",
    "skills.ia.feature.4": "Integrated Workflow",
    "skills.ia.feature.4.desc": "AI in the development process",
    "skills.frontend.title": "Frontend Development",
    "skills.frontend.desc": "Modern and responsive interfaces",
    "skills.backend.title": "Backend & BaaS",
    "skills.backend.desc": "APIs, databases and infrastructure",
    "skills.tools.title": "Essential Tools",
    "skills.tools.desc": "Optimized workflow",
    "skills.learning.title": "Currently Learning",
    "skills.learning.desc": "Always evolving, exploring new technologies",

    // Projects Section
    "projects.title": "My Projects",
    "projects.subtitle":
      "Some of the projects I developed using the most modern technologies",
    "projects.status.completed": "Completed",
    "projects.status.development": "In Development",
    "projects.modal.challenge": "Challenge",
    "projects.modal.solution": "Solution",
    "projects.modal.results": "Results",
    "projects.modal.features": "Features",
    "projects.modal.view": "View Project",
    "projects.modal.github": "GitHub",

    // Contact Section
    "contact.title": "Let's Talk?",
    "contact.subtitle":
      "I am always open to new opportunities and interesting projects",
    "contact.info.title": "Contact Information",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.linkedin": "LinkedIn",
    "contact.location": "Location",
    "contact.location.city": "Santa Maria - RN, Brazil",
    "contact.location.remote": "Available for remote work",
    "contact.available": "Available for new projects",
    "contact.available.text":
      "Currently accepting freelance and job opportunities in Frontend and Fullstack development.",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your full name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your.email@example.com",
    "contact.form.type": "Project Type",
    "contact.form.type.placeholder": "Select project type",
    "contact.form.type.fullstack": "Fullstack Web Application",
    "contact.form.type.frontend": "Frontend Development",
    "contact.form.type.other": "Other",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Describe your project or question...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.whatsapp": "WhatsApp",
    "contact.form.success.title": "Message sent successfully!",
    "contact.form.success.text": "I will get back to you soon. Thank you!",

    // Footer
    "footer.rights": "All rights reserved.",

    // Projects
    "projects.petbath.title": "PetBath - Scheduling System",
    "projects.petbath.description":
      "Complete system for managing pet grooming and care services with intuitive and responsive interface.",
    "projects.webiagenda.title": "WebiAgenda - Smart Scheduling System",
    "projects.webiagenda.description":
      "Modern and intuitive system for appointment management with interactive dashboard.",
    "projects.barbearia-landing.title": "Landing Page - Premium Barbershop",
    "projects.barbearia-landing.description":
      "Modern and responsive landing page for barbershop with online booking system and service presentation.",
    "projects.button.access": "Access Project",
  },
};

// I18n Manager
const I18n = {
  currentLang: "en",

  init() {
    this.detectLanguage();
    this.setupLanguageToggle();
    this.translate();
  },

  detectLanguage() {
    // Check if language is saved in localStorage
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      this.currentLang = savedLang;
      console.log("Idioma carregado do localStorage:", savedLang);
      return;
    }

    // Detect user's location/language
    const userLang = navigator.language || navigator.userLanguage;
    console.log("Idioma do navegador:", userLang);

    // If Brazilian Portuguese, use pt-BR, otherwise use English
    if (userLang.startsWith("pt-BR") || userLang.startsWith("pt")) {
      this.currentLang = "pt-BR";
    } else {
      this.currentLang = "en";
    }

    console.log("Idioma definido:", this.currentLang);
    localStorage.setItem("language", this.currentLang);
  },

  setLanguage(lang) {
    console.log("Trocando idioma para:", lang);
    this.currentLang = lang;
    localStorage.setItem("language", lang);
    this.translate();

    // Update typewriter
    if (window.typewriterInstance) {
      window.typewriterInstance.updateTexts(this.getTypewriterTexts());
    }

    // Re-render projects with new language
    if (typeof renderProjects === "function") {
      renderProjects();
    }

    // Reinitialize Lucide icons after language change
    if (typeof lucide !== "undefined") {
      setTimeout(() => lucide.createIcons(), 50);
    }
  },

  t(key) {
    return translations[this.currentLang][key] || key;
  },

  getTypewriterTexts() {
    return [
      this.t("hero.tagline.1"),
      this.t("hero.tagline.2"),
      this.t("hero.tagline.3"),
    ];
  },

  translate() {
    console.log("Traduzindo para:", this.currentLang);

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang;

    // Translate all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.t(key);

      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        if (element.placeholder !== translation) element.placeholder = translation;
      } else if (element.tagName === "OPTION") {
        if (element.textContent.trim() !== translation.trim()) element.textContent = translation;
      } else if (element.hasAttribute("data-i18n-html")) {
        // Para HTML, comparamos de forma mais flexível ou apenas aplicamos se necessário
        if (element.innerHTML.trim() !== translation.trim()) element.innerHTML = translation;
      } else {
        // O ponto chave: comparar usando .trim() para ignorar espaços do HTML
        if (element.textContent.trim() !== translation.trim()) {
          element.textContent = translation;
        }
      }
    });

    // Update language toggle button
    this.updateLanguageToggle();
  },

  setupLanguageToggle() {
    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      langToggle.addEventListener("click", () => {
        const newLang = this.currentLang === "pt-BR" ? "en" : "pt-BR";
        this.setLanguage(newLang);
      });
    }
  },

  updateLanguageToggle() {
    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      // Mostra o idioma ATUAL (não o próximo)
      langToggle.textContent = this.currentLang === "pt-BR" ? "PT" : "EN";
      langToggle.setAttribute(
        "aria-label",
        this.currentLang === "pt-BR"
          ? "Mudar para Inglês"
          : "Switch to Portuguese",
      );
    }
  },
};

// Initialize on DOM load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => I18n.init());
} else {
  I18n.init();
}

// Export for use in other modules
window.I18n = I18n;
