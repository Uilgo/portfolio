class ParticleSystem {
  constructor() {
    this.canvas = document.getElementById("particles-canvas");
    if (!this.canvas) return;

    // Detectar dispositivos móveis e reduzir partículas
    this.isMobile = window.innerWidth < 768;
    this.isLowPerformance = this.isMobile || navigator.hardwareConcurrency <= 4;

    this.ctx = this.canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    this.particles = [];
    this.particleCount = this.isMobile ? 20 : 50;
    this.connectionDistance = this.isMobile ? 100 : 150;
    this.mouse = { x: null, y: null, radius: this.isMobile ? 100 : 150 };
    this.colorLight = "rgba(99, 102, 241, "; // Primary color for light mode (indigo-500)
    this.colorDark = "rgba(129, 140, 248, "; // Primary color for dark mode (indigo-400)

    this.init();
    this.animate();
    this.addEventListeners();
  }

  init() {
    this.resize();
    this.particles = [];

    // Create particles - reduzir em dispositivos móveis
    const baseCount = this.isMobile ? 20 : 50;
    const numberOfParticles = Math.floor(
      (this.canvas.width * this.canvas.height) /
        (this.isMobile ? 25000 : 15000),
    );
    this.particleCount = Math.min(numberOfParticles, baseCount);

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(new Particle(this));
    }
  }

  resize() {
    this.canvas.width = this.canvas.parentElement.offsetWidth;
    this.canvas.height = this.canvas.parentElement.offsetHeight;
  }

  addEventListeners() {
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.isMobile = window.innerWidth < 768;
        this.resize();
        this.init();
      }, 250);
    });

    // Desabilitar interação do mouse em mobile para melhor performance
    if (!this.isMobile) {
      this.canvas.parentElement.addEventListener("mousemove", (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      });

      this.canvas.parentElement.addEventListener("mouseleave", () => {
        this.mouse.x = null;
        this.mouse.y = null;
      });
    }
  }

  getCurrentThemeColor(alpha = 1) {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    return isDark
      ? `${this.colorDark}${alpha})`
      : `${this.colorLight}${alpha})`;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      this.particles[i].draw();
    }

    // Draw connections
    this.connectParticles();

    requestAnimationFrame(() => this.animate());
  }

  connectParticles() {
    // Reduzir conexões em mobile
    const maxConnections = this.isMobile ? 2 : 3;

    for (let a = 0; a < this.particles.length; a++) {
      let connections = 0;
      for (let b = a + 1; b < this.particles.length; b++) {
        if (connections >= maxConnections) break;

        const dx = this.particles[a].x - this.particles[b].x;
        const dy = this.particles[a].y - this.particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          const opacity = 1 - distance / this.connectionDistance;
          this.ctx.strokeStyle = this.getCurrentThemeColor(opacity * 0.3);
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
          this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
          this.ctx.stroke();
          connections++;
        }
      }
    }
  }
}

class Particle {
  constructor(system) {
    this.system = system;
    this.x = Math.random() * this.system.canvas.width;
    this.y = Math.random() * this.system.canvas.height;
    this.size = Math.random() * 2 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }

  update() {
    // Normal movement
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off edges
    if (this.x > this.system.canvas.width || this.x < 0)
      this.speedX = -this.speedX;
    if (this.y > this.system.canvas.height || this.y < 0)
      this.speedY = -this.speedY;

    // Mouse interaction
    if (this.system.mouse.x != null) {
      const dx = this.system.mouse.x - this.x;
      const dy = this.system.mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.system.mouse.radius) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force =
          (this.system.mouse.radius - distance) / this.system.mouse.radius;
        const directionX = forceDirectionX * force * this.density * 0.6;
        const directionY = forceDirectionY * force * this.density * 0.6;

        // Push particles away (negative) or pull them (positive)
        // Here we push them away
        this.x -= directionX;
        this.y -= directionY;
      }
    }
  }

  draw() {
    this.system.ctx.fillStyle = this.system.getCurrentThemeColor(0.6);
    this.system.ctx.beginPath();
    this.system.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.system.ctx.closePath();
    this.system.ctx.fill();
  }
}

// Initialize when DOM is completely loaded
document.addEventListener("DOMContentLoaded", () => {
  // Pequeno timeout para garantir que o layout rendeu para pegarmos os tamanhos corretos
  setTimeout(() => {
    new ParticleSystem();
  }, 100);
});
