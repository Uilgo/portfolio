// Theme Management
const ThemeManager = {
  init() {
    this.themeToggle = document.getElementById("theme-toggle");
    this.currentTheme = localStorage.getItem("theme") || "dark";

    this.applyTheme(this.currentTheme);
    this.setupEventListeners();
  },

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    this.currentTheme = theme;
  },

  toggleTheme() {
    const newTheme = this.currentTheme === "light" ? "dark" : "light";
    this.applyTheme(newTheme);

    // Reinitialize Lucide icons after theme change
    if (typeof lucide !== "undefined") {
      setTimeout(() => lucide.createIcons(), 50);
    }
  },

  setupEventListeners() {
    if (this.themeToggle) {
      this.themeToggle.addEventListener("click", () => this.toggleTheme());
    }
  },
};

// Initialize on DOM load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => ThemeManager.init());
} else {
  ThemeManager.init();
}
