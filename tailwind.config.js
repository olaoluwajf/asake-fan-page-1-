/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        bone: '#F5F5F5',
        mist: '#E8E8E8',
        stone: '#A0A0A0',
        graphite: '#333333',
        ink: '#111111',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.06em',
      },
      fontSize: {
        colossal: ['clamp(4.5rem, 16vw, 13rem)', { lineHeight: '0.86', letterSpacing: '-0.04em' }],
        huge: ['clamp(2.75rem, 8vw, 6rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
