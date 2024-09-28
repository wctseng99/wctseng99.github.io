/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Montserrat', 'Optimistic Text', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}