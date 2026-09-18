/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6f6',
          100: '#e6f0f4',
          200: '#cfe7ee',
          300: '#b0dde8',
          400: '#98d5e6',
          500: '#81d0e3',
          600: '#5db8cf',
          700: '#4298b0',
          800: '#357a8f',
          900: '#2d6476',
          950: '#1a4350',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'gradient-pan': 'gradientPan 12s ease infinite',
        'heat-blur': 'heatBlur 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        heatBlur: {
          '0%, 100%': { filter: 'blur(0px)', transform: 'scale(1)', opacity: '1' },
          '40%': { filter: 'blur(4px)', transform: 'scale(1.05)', opacity: '0.7' },
          '50%': { filter: 'blur(6px)', transform: 'scale(1.08)', opacity: '0.5' },
          '60%': { filter: 'blur(4px)', transform: 'scale(1.05)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
