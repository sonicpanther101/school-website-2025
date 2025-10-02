import { heroui } from "@heroui/theme";
import { flavors, flavorEntries } from "@catppuccin/palette";

const { latte, mocha } = flavors;

// const getScheme(flavor) {
//   return {
    
//   }
// }

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        // Catppuccin Latte
        colors: {
          background: latte.colors.base.hex, // Base
          foreground: latte.colors.text.hex, // Text
          primary: {
            DEFAULT: latte.colors.green.hex, // Blue
            foreground: latte.colors.base.hex, // 
          },
          secondary: {
            DEFAULT: latte.colors.blue.hex,// Red or could use Mauve/Pink
            foreground: latte.colors.base.hex,// 
          },
          divider: latte.colors.overlay0.hex,// Overlay 0 / subtle border
          overlay: latte.colors.overlay1.hex,// Overlay 1
          focus: latte.colors.lavender.hex,// Lavender (focus ring)
          content1: latte.colors.surface0.hex,// Surface 0
          content2: latte.colors.surface1.hex,// Surface 1
          content3: latte.colors.surface2.hex,// Surface 2
          content4: latte.colors.overlay0.hex,// Overlay 0/1 fallback
          warning: latte.colors.yellow.hex,// Yellow
          danger: latte.colors.red.hex,// Red
          success: latte.colors.green.hex,// Green
        },
      },
      dark: {
        // Catppuccin Mocha
        colors: {
          background: mocha.colors.base.hex, // Base
          foreground: mocha.colors.text.hex, // Text
          primary: {
            DEFAULT: mocha.colors.green.hex, // Blue
            // foreground: mocha.colors.text.hex, // 
          },
          secondary: {
            DEFAULT: mocha.colors.red.hex,// Red or could use Mauve/Pink
            // foreground: mocha.colors.text.hex,// 
          },
          divider: mocha.colors.overlay0.hex,// Overlay 0 / subtle border
          overlay: mocha.colors.overlay1.hex,// Overlay 1
          focus: mocha.colors.lavender.hex,// Lavender (focus ring)
          content1: mocha.colors.surface0.hex,// Surface 0
          content2: mocha.colors.surface1.hex,// Surface 1
          content3: mocha.colors.surface2.hex,// Surface 2
          content4: mocha.colors.overlay0.hex,// Overlay 0/1 fallback
          warning: mocha.colors.yellow.hex,// Yellow
          danger: mocha.colors.red.hex,// Red
          success: mocha.colors.green.hex,// Green
        },
      },
    },
  })],
};

export default config;