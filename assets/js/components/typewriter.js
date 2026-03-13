// Typewriter Effect
class Typewriter {
  constructor(element, texts, options = {}) {
    this.element = element;
    this.texts = texts;
    this.speed = options.speed || 100;
    this.deleteSpeed = options.deleteSpeed || 50;
    this.deleteDelay = options.deleteDelay || 2000;
    this.delay = options.delay || 500;
    this.loop = options.loop !== false;

    this.currentIndex = 0;
    this.currentText = "";
    this.isDeleting = false;

    this.start();
  }

  start() {
    setTimeout(() => this.type(), this.delay);
  }

  updateTexts(newTexts) {
    this.texts = newTexts;
    this.currentIndex = 0;
    this.currentText = "";
    this.isDeleting = false;
  }

  type() {
    const fullText = this.texts[this.currentIndex];

    if (!this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    }

    this.element.textContent = this.currentText;

    let typeSpeed = this.isDeleting ? this.deleteSpeed : this.speed;

    if (!this.isDeleting && this.currentText === fullText) {
      typeSpeed = this.deleteDelay;
      if (this.loop && this.texts.length > 1) {
        this.isDeleting = true;
      } else {
        return;
      }
    } else if (this.isDeleting && this.currentText === "") {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      typeSpeed = this.delay;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize typewriter
document.addEventListener("DOMContentLoaded", () => {
  const typewriterElement = document.getElementById("typewriter");
  if (typewriterElement) {
    // Get initial texts from I18n if available
    const texts = window.I18n
      ? window.I18n.getTypewriterTexts()
      : [
          "Desenvolvedor Frontend",
          "Desenvolvedor Fullstack",
          "Desenvolvedor React & Vue",
        ];

    window.typewriterInstance = new Typewriter(typewriterElement, texts, {
      speed: 120,
      deleteSpeed: 80,
      deleteDelay: 2500,
      delay: 800,
      loop: true,
    });
  }
});
