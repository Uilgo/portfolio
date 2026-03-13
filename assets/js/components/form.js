// Form Component
const ContactForm = {
  init() {
    this.form = document.getElementById("contact-form");
    this.submitBtn = document.getElementById("submit-btn");
    this.successMessage = document.getElementById("form-success");
    this.charCount = document.getElementById("char-count");
    this.mensagemField = document.getElementById("mensagem");

    this.setupEventListeners();
  },

  setupEventListeners() {
    if (this.form) {
      this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    if (this.mensagemField && this.charCount) {
      this.mensagemField.addEventListener("input", () => {
        this.charCount.textContent = this.mensagemField.value.length;
      });
    }
  },

  async handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);

    // Show loading state
    this.submitBtn.disabled = true;
    this.submitBtn.querySelector(".btn-text").style.display = "none";
    this.submitBtn.querySelector(".btn-loading").style.display = "inline";

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success message
      this.showSuccess();

      // Reset form
      this.form.reset();
      this.charCount.textContent = "0";
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Erro ao enviar mensagem. Por favor, tente novamente.");
    } finally {
      // Reset button state
      this.submitBtn.disabled = false;
      this.submitBtn.querySelector(".btn-text").style.display = "inline";
      this.submitBtn.querySelector(".btn-loading").style.display = "none";
    }
  },

  showSuccess() {
    this.successMessage.style.display = "block";
    this.form.style.display = "none";

    setTimeout(() => {
      this.successMessage.style.display = "none";
      this.form.style.display = "flex";
    }, 5000);
  },
};

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  ContactForm.init();
});
