/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,svelte}"],
  darkMode: 'class',
  safelist: ["w-4", "h-4"],
  theme: {
    extend: {},
    zIndex: {
      none: 0,
      feature: 1,
      nav: 2,
      chat: 3,
      popover: 4,
      modal: 5,
      toast: 6,
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      black: "black",
      white: "white",
      transparent: "transparent",
      accent: "var(--accent)",
      warning: "var(--warning)",
      success: "var(--success)",
      "neutral-100": "var(--neutral-100)",
      "neutral-200": "var(--neutral-200)",
      "neutral-300": "var(--neutral-300)",
      "neutral-400": "var(--neutral-400)",
      "neutral-500": "var(--neutral-500)",
      "neutral-50": "var(--neutral-50)",
      "neutral-600": "var(--neutral-600)",
      "neutral-700": "var(--neutral-700)",
      "neutral-800": "var(--neutral-800)",
      "neutral-900": "var(--neutral-900)",
      "neutral-950": "var(--neutral-950)",
      "tinted-100": "var(--tinted-100)",
      "tinted-200": "var(--tinted-200)",
      "tinted-400": "var(--tinted-400)",
      "tinted-500": "var(--tinted-500)",
      "tinted-600": "var(--tinted-600)",
      "tinted-700": "var(--tinted-700)",
      "tinted-800": "var(--tinted-800)",
    },
  },
  plugins: [],
}

