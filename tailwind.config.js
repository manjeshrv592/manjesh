const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        dark: '#0D0D0D',
        'mj-grey': {
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        },
        'mj-orange': {
          100: '#F8FBD8',
          200: '#F1F7B1',
          300: '#EAF48B',
          400: '#E3F064',
          500: '#DCEC3D',
          600: '#B0BD31',
          700: '#848E25',
          800: '#585E18',
          900: '#2C2F0C',
        },
        'mj-blue': {
          100: '#E9E7FD',
          200: '#D2CFFA',
          300: '#A69EF5',
          400: '#796EF1',
          500: '#4D3DEC',
          600: '#200DE7',
          700: '#1A0AB9',
          800: '#13088B',
          900: '#0D055C',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
