/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - True Black
        navy: {
          900: '#050505',
          800: '#0E0E0E',
          700: '#1A1A1A',
          600: '#262626',
        },
        // Accent Colors - Silver/Grey
        electric: {
          DEFAULT: '#C0C0C0',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          light: '#D4D4D4',
        },
        // Acharya Brand Orange (sole warm accent)
        orange: {
          alert: '#F36F21',
          hover: '#D95D15',
        },
        // Aero palette - dark greys
        aero: {
          deep: '#050505',
          blue: '#111111',
          cyan: '#1A1A1A',
          teal: '#333333',
        },
        // Background - Pure Black
        space: {
          DEFAULT: '#0A0A0A',
          100: '#111111',
          200: '#161616',
        },
        // Neutrals
        slate: {
          card: '#141414',
          border: '#2A2A2A',
        },
        steel: {
          light: '#E5E7EB',
          DEFAULT: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #050505 0%, #111111 40%, #1A1A1A 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.1), 0 0 60px rgba(255, 255, 255, 0.04)',
        'glow-lg': '0 0 40px rgba(255, 255, 255, 0.15), 0 0 80px rgba(255, 255, 255, 0.06), 0 0 120px rgba(255, 255, 255, 0.02)',
        'glow-orange': '0 0 30px rgba(243, 111, 33, 0.3), 0 0 60px rgba(243, 111, 33, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -2px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 40px -15px rgba(255, 255, 255, 0.08), 0 0 60px rgba(255, 255, 255, 0.03)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.1), 0 0 60px rgba(255, 255, 255, 0.03)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 255, 255, 0.2), 0 0 80px rgba(255, 255, 255, 0.06)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
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
