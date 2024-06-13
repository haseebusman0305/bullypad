/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'var(--Gray-24, #0A0A0A)',
      },
    },
  },
  variants: {},
  plugins: [],
}