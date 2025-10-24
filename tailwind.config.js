/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        'steel-gray': '#1E1E1E',
        'steel-gray-darker': '#111111',
        'electric-blue': '#007BFF',
        'champagne-gold': '#C6A664',
        'metallic-silver': '#C0C0C0',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A3A3A3',
        'border-color': '#2A2A2A',
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
        serif: ['"Playfair Display"', ...fontFamily.serif],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
