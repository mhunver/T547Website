/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A",
          emerald: "#10B981",
          amber: "#F59E0B",
          light: "#F8FAFC",
        }
      }
    },
  },
  plugins: [],
}