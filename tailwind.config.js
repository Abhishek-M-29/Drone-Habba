/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Aerospace Blue
        navy: {
          900: '#020408',
          800: '#0B1221',
          700: '#162032',
          600: '#1F2E48',
        },
        // Accent Colors - Aerospace Theme
        electric: {
          DEFAULT: '#0070f3',
          50: '#F0F7FF',
          100: '#E0F0FF',
          200: '#BAE0FF',
          300: '#7CC4FF',
          400: '#36A8FF',
          500: '#0070f3',
          600: '#0058C6',
          700: '#003E8A',
          light: '#36A8FF',
        },
        // Acharya Brand Orange
        orange: {
          alert: '#F36F21',
          hover: '#D95D15',
        },
        // Aerospace gradient palette
        aero: {
          deep: '#020B18',
          blue: '#0B2447',
          cyan: '#0E4D64',
          teal: '#14b8a6',
        },
        // Background - Deep Space
        space: {
          DEFAULT: '#020B18',
          100: '#071226',
          200: '#0B1A30',
        },
        // Neutrals
        slate: {
          card: '#0B1A30',
          border: '#1E3A5F',
        },
        steel: {
          light: '#EDEDED',
          DEFAULT: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #020B18 0%, #0B2447 40%, #0E4D64 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(14,116,144,0.08) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-lg': '0 0 40px rgba(14, 165, 233, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 40px -15px rgba(14, 165, 233, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 163, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 163, 255, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
