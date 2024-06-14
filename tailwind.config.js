/** @type {import('tailwindcss').Config} */
export default {
  important: true,
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
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.border-custom-gradient': {
          'border-image': `${theme('backgroundImage.custom-gradient')} 1`,
          
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}