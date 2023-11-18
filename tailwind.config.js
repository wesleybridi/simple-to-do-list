/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter'
      },
      colors: {
        purple: '#8284FA',
        'purple-dark': '#5E60CE',
        blue: '#4EA8DE',
        'blue-dark': '#1E6F9F',
        'gray-700': '#0D0D0D',
        'gray-600': '#1A1A1A',
        'gray-500': '#262626',
        'gray-400': '#333333',
        'gray-300': '#808080'
      }
    }
  },
  plugins: []
}
