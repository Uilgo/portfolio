/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/app.vue",
    "./app/**/*.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Paleta de Cores do Design System
      colors: {
        // Light Mode Colors
        background: {
          DEFAULT: "#F9FAFB",
          card: "#FFFFFF",
        },
        foreground: {
          DEFAULT: "#111827",
          secondary: "#4B5563",
        },
        border: {
          DEFAULT: "#E5E7EB",
          light: "#F3F4F6",
        },

        // Dark Mode Colors
        dark: {
          background: "#0F172A",
          card: "#1E293B",
          foreground: "#F9FAFB",
          "foreground-secondary": "#94A3B8",
          border: "#334155",
        },

        // Brand Colors
        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          "dark-default": "#3B82F6",
          "dark-hover": "#2563EB",
        },

        // Accent Color
        accent: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
          DEFAULT: "#8B5CF6",
        },

        // Success Colors
        success: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          DEFAULT: "#16A34A",
          dark: "#22C55E",
        },

        // Warning Colors
        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          DEFAULT: "#D97706",
          dark: "#F59E0B",
        },

        // Error Colors
        error: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          DEFAULT: "#DC2626",
          dark: "#EF4444",
        },

        // Status Indicator Colors
        status: {
          available: "#22C55E",
          busy: "#EF4444",
          away: "#F59E0B",
        },
      },

      // Typography Scale
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Monaco", "Consolas", "monospace"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],

        // Custom heading sizes for mobile responsiveness
        "heading-1": ["2rem", { lineHeight: "2.5rem" }], // Mobile H1
        "heading-1-desktop": ["3rem", { lineHeight: "3.5rem" }], // Desktop H1
        "heading-2": ["1.5rem", { lineHeight: "2rem" }], // Mobile H2
        "heading-2-desktop": ["2rem", { lineHeight: "2.5rem" }], // Desktop H2
        "heading-3": ["1.25rem", { lineHeight: "1.75rem" }], // Mobile H3
        "heading-3-desktop": ["1.5rem", { lineHeight: "2rem" }], // Desktop H3
      },

      // Spacing System
      spacing: {
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "9.5": "2.375rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "21": "5.25rem",
        "22": "5.5rem",
        "25": "6.25rem",
        "26": "6.5rem",
        "28": "7rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "35": "8.75rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "44": "11rem",
        "46": "11.5rem",
        "50": "12.5rem",
        "54": "13.5rem",
        "58": "14.5rem",
        "62": "15.5rem",
        "66": "16.5rem",
        "70": "17.5rem",
        "74": "18.5rem",
        "78": "19.5rem",
        "82": "20.5rem",
        "86": "21.5rem",
        "90": "22.5rem",
        "94": "23.5rem",
        "98": "24.5rem",
        "102": "25.5rem",
        "106": "26.5rem",
        "110": "27.5rem",
        "114": "28.5rem",
        "118": "29.5rem",
        "122": "30.5rem",
        "126": "31.5rem",
        "130": "32.5rem",
      },

      // Border Radius System
      borderRadius: {
        xs: "0.125rem",
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },

      // Box Shadow System
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",

        // Custom shadows for components
        card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "card-hover":
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        button: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "button-hover":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        modal: "0 25px 50px -12px rgb(0 0 0 / 0.25)",

        // Dark mode shadows
        "dark-xs": "0 1px 2px 0 rgb(0 0 0 / 0.3)",
        "dark-sm": "0 1px 2px 0 rgb(0 0 0 / 0.3)",
        dark: "0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)",
        "dark-md":
          "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
        "dark-lg":
          "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)",
        "dark-xl":
          "0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)",
      },

      // Animation System
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-subtle": "bounceSubtle 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 2.5s linear infinite",
        typing:
          "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
        "stagger-1": "fadeInUp 0.6s ease-out 0.1s both",
        "stagger-2": "fadeInUp 0.6s ease-out 0.2s both",
        "stagger-3": "fadeInUp 0.6s ease-out 0.3s both",
        "stagger-4": "fadeInUp 0.6s ease-out 0.4s both",
        "stagger-5": "fadeInUp 0.6s ease-out 0.5s both",
        "rotate-slow": "rotateSlow 20s linear infinite",
        "gradient-x": "gradientX 3s ease infinite",
        "gradient-y": "gradientY 3s ease infinite", 
        "wiggle": "wiggle 1s ease-in-out infinite",
        "bounce-in": "bounceIn 0.6s ease-out",
        "flip": "flip 1s ease-in-out",
        "rubber-band": "rubberBand 1s ease-out",
      },

      // Keyframes for animations
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceSubtle: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-5px)" },
          "60%": { transform: "translateY(-3px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgb(59 130 246 / 0.5)" },
          "100%": {
            boxShadow:
              "0 0 20px rgb(59 130 246 / 0.8), 0 0 30px rgb(59 130 246 / 0.4)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#3B82F6" },
        },
        rotateSlow: {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gradientY: {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        flip: {
          "0%": { transform: "rotateY(0)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        rubberBand: {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scaleX(1.25) scaleY(0.75)" },
          "40%": { transform: "scaleX(0.75) scaleY(1.25)" },
          "50%": { transform: "scaleX(1.15) scaleY(0.85)" },
          "65%": { transform: "scaleX(0.95) scaleY(1.05)" },
          "75%": { transform: "scaleX(1.05) scaleY(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },

      // Gradient System
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2563EB, #3B82F6)",
        "gradient-primary-dark": "linear-gradient(135deg, #3B82F6, #60A5FA)",
        "gradient-accent": "linear-gradient(135deg, #8B5CF6, #A78BFA)",
        "gradient-success": "linear-gradient(135deg, #16A34A, #22C55E)",
        "gradient-card-light": "linear-gradient(135deg, #FFFFFF, #F9FAFB)",
        "gradient-card-dark": "linear-gradient(135deg, #1E293B, #0F172A)",
        "gradient-hero":
          "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)",
        "shimmer-gradient":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
      },

      // Backdrop Blur
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },

      // Z-Index Scale
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
        modal: "1000",
        popup: "1010",
        overlay: "1020",
        tooltip: "1030",
      },

      // Container Sizes
      maxWidth: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "container-sm": "640px",
        "container-md": "768px",
        "container-lg": "1024px",
        "container-xl": "1280px",
        "container-2xl": "1536px",
      },

      // Screen Breakpoints (extending defaults)
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",

        // Max width breakpoints
        "max-sm": { max: "639px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1279px" },
        "max-2xl": { max: "1535px" },

        // Height breakpoints
        "h-sm": { raw: "(min-height: 640px)" },
        "h-md": { raw: "(min-height: 768px)" },
        "h-lg": { raw: "(min-height: 1024px)" },
      },

      // Aspect Ratios
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
        "3/4": "3 / 4",
        "1/2": "1 / 2",
        "2/1": "2 / 1",
      },

      // Transform Scale
      scale: {
        "102": "1.02",
        "103": "1.03",
        "104": "1.04",
        "108": "1.08",
      },

      // Transition Durations
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "900": "900ms",
        "1200": "1200ms",
        "1500": "1500ms",
        "2000": "2000ms",
      },

      // Transition Timing Functions
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [
    // Plugin para variáveis CSS customizadas
    function ({ addBase, theme }: { addBase: Function; theme: Function }) {
      addBase({
        ":root": {
          // Light mode CSS variables
          "--color-background": theme("colors.background.DEFAULT"),
          "--color-background-card": theme("colors.background.card"),
          "--color-foreground": theme("colors.foreground.DEFAULT"),
          "--color-foreground-secondary": theme("colors.foreground.secondary"),
          "--color-border": theme("colors.border.DEFAULT"),
          "--color-primary": theme("colors.primary.DEFAULT"),
          "--color-primary-hover": theme("colors.primary.hover"),
          "--color-accent": theme("colors.accent.DEFAULT"),
          "--color-success": theme("colors.success.DEFAULT"),
          "--color-warning": theme("colors.warning.DEFAULT"),
          "--color-error": theme("colors.error.DEFAULT"),

          // Typography variables
          "--font-family-sans": theme("fontFamily.sans"),
          "--font-family-mono": theme("fontFamily.mono"),

          // Spacing variables
          "--space-xs": theme("spacing.1"),
          "--space-sm": theme("spacing.2"),
          "--space-md": theme("spacing.4"),
          "--space-lg": theme("spacing.6"),
          "--space-xl": theme("spacing.8"),
          "--space-2xl": theme("spacing.12"),
          "--space-3xl": theme("spacing.16"),

          // Border radius variables
          "--radius-xs": theme("borderRadius.xs"),
          "--radius-sm": theme("borderRadius.sm"),
          "--radius-md": theme("borderRadius.md"),
          "--radius-lg": theme("borderRadius.lg"),
          "--radius-xl": theme("borderRadius.xl"),

          // Shadow variables
          "--shadow-sm": theme("boxShadow.sm"),
          "--shadow-md": theme("boxShadow.md"),
          "--shadow-lg": theme("boxShadow.lg"),
          "--shadow-card": theme("boxShadow.card"),
          "--shadow-card-hover": theme("boxShadow.card-hover"),
        },
        ".dark": {
          // Dark mode CSS variables
          "--color-background": theme("colors.dark.background"),
          "--color-background-card": theme("colors.dark.card"),
          "--color-foreground": theme("colors.dark.foreground"),
          "--color-foreground-secondary": theme(
            "colors.dark.foreground-secondary"
          ),
          "--color-border": theme("colors.dark.border"),
          "--color-primary": theme("colors.primary.dark-default"),
          "--color-primary-hover": theme("colors.primary.dark-hover"),
          "--color-success": theme("colors.success.dark"),
          "--color-warning": theme("colors.warning.dark"),
          "--color-error": theme("colors.error.dark"),

          // Dark mode shadows
          "--shadow-sm": theme("boxShadow.dark-sm"),
          "--shadow-md": theme("boxShadow.dark-md"),
          "--shadow-lg": theme("boxShadow.dark-lg"),
          "--shadow-card": theme("boxShadow.dark"),
          "--shadow-card-hover": theme("boxShadow.dark-md"),
        },
      });
    },

    // Plugin para utilitários customizados
    function ({ addUtilities, theme }: { addUtilities: Function; theme: Function }) {
      addUtilities({
        // Text gradients
        ".text-gradient-primary": {
          background: theme("backgroundImage.gradient-primary"),
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
        ".text-gradient-accent": {
          background: theme("backgroundImage.gradient-accent"),
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },

        // Glassmorphism
        ".glass": {
          background: "rgba(255, 255, 255, 0.1)",
          "backdrop-filter": "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
        ".glass-dark": {
          background: "rgba(0, 0, 0, 0.2)",
          "backdrop-filter": "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },

        // Scroll behavior
        ".scroll-smooth": {
          "scroll-behavior": "smooth",
        },

        // Custom containers
        ".container-padding": {
          "padding-left": theme("spacing.4"),
          "padding-right": theme("spacing.4"),
          "@screen sm": {
            "padding-left": theme("spacing.6"),
            "padding-right": theme("spacing.6"),
          },
          "@screen lg": {
            "padding-left": theme("spacing.8"),
            "padding-right": theme("spacing.8"),
          },
        },

        // Focus states
        ".focus-ring": {
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "box-shadow": `0 0 0 2px ${theme("colors.primary.DEFAULT")}`,
          },
        },

        // Button states
        ".btn-hover-lift": {
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            "box-shadow": theme("boxShadow.button-hover"),
          },
        },
      });
    },
  ],
};

export default config;
