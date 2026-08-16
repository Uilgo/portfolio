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
  setupCVDownload();
  updateFooterYear();

  // Initialize icons after everything is loaded
  if (typeof createIcons !== "undefined") {
    createIcons();
  }

  // Refresh ScrollTrigger após ícones serem renderizados
  // (ícones SVG alteram alturas dos elementos, deslocando o cálculo de pin do GSAP)
  if (typeof ScrollTrigger !== "undefined") {
    setTimeout(() => ScrollTrigger.refresh(true), 150);
  }
});

