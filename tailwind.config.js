/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#78BE20',
        'primary-dark': '#5fa015',
        forest: '#355E3B',
        'dark-green': '#214B2F',
        accent: '#FFD54A',
        'light-gray': '#F7F8FA',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        numbers: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 30px 60px -15px rgba(33, 75, 47, 0.25)',
        soft: '0 10px 40px -10px rgba(33, 75, 47, 0.18)',
        glow: '0 0 40px rgba(120, 190, 32, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(33,75,47,0.15) 0%, rgba(33,75,47,0.55) 60%, rgba(33,75,47,0.85) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
