/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        panel: '#11100f',
        gold: '#f0c060',
        goldSoft: 'rgba(240,192,96,0.12)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 24px 80px rgba(240,192,96,0.12)',
        soft: '0 24px 80px rgba(0,0,0,0.32)',
      },
    },
  },
  plugins: [],
}