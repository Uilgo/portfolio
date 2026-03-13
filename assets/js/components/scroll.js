// Scroll Animations
const ScrollAnimations = {
  init() {
    this.setupSmoothScroll();
    this.setupScrollReveal();
    this.setupHeaderScroll();
  },

  setupSmoothScroll() {
    // Scroll nativo suave e direto, sem atraso
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        
        const target = document.querySelector(targetId);
        if (target) {
          // Calcula a posição do alvo descontando a altura do menu fixo (aprox 80px)
          const headerOffset = 80;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        }
      });
    });
  },

  setupScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });
  },

  setupHeaderScroll() {
    const header = document.getElementById("header");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.style.boxShadow = "var(--shadow-md)";
      } else {
        header.style.boxShadow = "none";
      }

      lastScroll = currentScroll;
    });
  },
};

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  ScrollAnimations.init();
});
