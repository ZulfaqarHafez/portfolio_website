/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a', // Deep luxury black
        secondary: '#1a1a1a', // Rich black
        accent: '#c9a960', // Refined gold (better contrast)
        luxury: {
          gold: '#c9a960',
          'gold-light': '#e6c882',
          'gold-dark': '#9a7b3a',
          cream: '#faf8f3',
          'cream-dark': '#f5f0e8',
          charcoal: '#2c2c2c',
          platinum: '#e8e6e1',
          slate: '#64625c',
        },
        dark: '#0a0a0a',
        light: '#faf8f3',
        neutral: {
          50: '#faf8f3',
          100: '#f5f0e8',
          200: '#e8e3d8',
          300: '#d4cdc0',
          400: '#a8a095',
          500: '#7d746a',
          600: '#64625c',
          700: '#48453f',
          800: '#2c2c2c',
          900: '#1a1a1a',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2c2c2c 100%)',
        'gold-gradient': 'linear-gradient(135deg, #c9a960 0%, #e6c882 100%)',
        'gold-shine': 'linear-gradient(135deg, #c9a960 0%, #e6c882 50%, #c9a960 100%)',
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(201, 169, 96, 0.15)',
        'luxury-lg': '0 10px 40px rgba(201, 169, 96, 0.2)',
      },
    },
  },
  plugins: [],
}
