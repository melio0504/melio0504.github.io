/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'dark-maroon': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#6b1d1d',
          950: '#4a0e0e',
        },
        'maroon': {
          DEFAULT: '#800020',
          dark: '#5a0016',
          darker: '#3d000f',
        },
      },
    },
  },
  plugins: [],
}
