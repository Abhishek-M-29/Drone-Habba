/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        navy: {
          900: '#0A1628',
          800: '#0F1E32',
          700: '#152B45',
          600: '#1E3A5F',
        },
        // Accent Colors
        electric: {
          DEFAULT: '#00A3FF',
          50: '#E6F6FF',
          100: '#BAE6FF',
          200: '#7DD3FF',
          300: '#38BFFF',
          400: '#00A3FF',
          500: '#0088E6',
          600: '#006BB3',
        },
        cyan: {
          glow: '#00D4FF',
        },
        orange: {
          alert: '#FF6B35',
          hover: '#FF8255',
        },
        // Background
        space: {
          DEFAULT: '#030712',
          100: '#0A0F1A',
          200: '#111827',
        },
        // Neutrals
        slate: {
          card: '#1E293B',
          border: '#334155',
        },
        steel: {
          light: '#E2E8F0',
          DEFAULT: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 50%, #00A3FF 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(0,163,255,0.1) 0%, rgba(0,212,255,0.05) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(0,163,255,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 163, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 163, 255, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 40px -15px rgba(0, 163, 255, 0.3)',
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
