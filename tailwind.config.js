const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#c4c8ea",
            foreground: "#181f5c",
          },
          default: {
            DEFAULT: "#fbfbfb",
            foreground: "#1c1c1c",
          }
        }
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#181f5c",
            foreground: "#fbfbfb",
          },
          default: {
            DEFAULT: "#1c1c1c",
            foreground: "#fbfbfb",
          }
        }
      }
    }
  })]
}