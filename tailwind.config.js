/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff8ff',
          100: '#dff0ff',
          200: '#b9e3ff',
          300: '#7aceff',
          400: '#34b5f5',
          500: '#0d9bdd',
          600: '#007cbd',
          700: '#066397',
          800: '#0b537d',
          900: '#0e4668'
        }
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
