/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--orbitron-font)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
