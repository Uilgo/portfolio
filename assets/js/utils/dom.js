// DOM Utilities
const DOM = {
  // Smooth scroll to element
  scrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },

  // Add class with animation
  addClass(element, className) {
    if (element) {
      element.classList.add(className);
    }
  },

  // Remove class
  removeClass(element, className) {
    if (element) {
      element.classList.remove(className);
    }
  },

  // Toggle class
  toggleClass(element, className) {
    if (element) {
      element.classList.toggle(className);
    }
  },

  // Create element with attributes
  createElement(tag, attributes = {}, content = "") {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
    if (content) {
      element.innerHTML = content;
    }
    return element;
  },
};
