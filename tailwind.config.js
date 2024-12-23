/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--exo2-font)", "sans-serif"],
        orbitron: ["var(--orbitron-font)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
