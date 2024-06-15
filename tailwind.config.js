/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(to right, #d16ba5, #ba83ca, #9a9ae1, #69bff8, #52cffe, #5ffbf1)",
      },
      colors: {
        customGray: 'var(--Gray-24, #0A0A0A)',
      },
      // Adding custom utilities for text gradient
      textFillColor: theme => theme('colors'),
      backgroundClip: {
        text: 'text',
      },
    },
  },
  plugins: [
    // Plugin for text fill color
    function({ addUtilities, theme }) {
      addUtilities({
        '.text-fill-transparent': { '-webkit-text-fill-color': 'transparent' },
        '.bg-clip-text': { 'background-clip': 'text' },
      });
    },
  ],
}