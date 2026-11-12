/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#87966A',
          light: '#A3B189',
          dark: '#6D7C53',
        },
        forest: {
          DEFAULT: '#344735',
          deep: '#243426',
          light: '#4A614B',
        },
        cream: {
          DEFAULT: '#F5F0E3',
          dark: '#EAE2CC',
        },
        pistachio: {
          DEFAULT: '#C7D2A3',
          light: '#DDE4C4',
        },
        coffee: {
          DEFAULT: '#8B684D',
          dark: '#6E5039',
          light: '#A98A6E',
        },
        softwhite: '#FFFEF8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
    },
  },
  plugins: [],
};
