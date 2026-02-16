/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Tech Blue
        navy: {
          900: '#020408', // Ultra Dark
          800: '#0B1221', // Card BG
          700: '#162032', // Hover BG
          600: '#1F2E48', // Border/Divider
        },
        // Accent Colors - Acharya Tech Habba Theme
        electric: {
          DEFAULT: '#0070f3', // Tech Blue (Vercel-like / Modern Web)
          50: '#F0F7FF',
          100: '#E0F0FF',
          200: '#BAE0FF',
          300: '#7CC4FF',
          400: '#36A8FF',
          500: '#0070f3', // Main Brand Color 
          600: '#0058C6',
          700: '#003E8A',
        },
        // Acharya Brand Orange
        orange: {
          alert: '#F36F21', // Acharya Orange
          hover: '#D95D15',
        },
        // Background - Pure & Deep
        space: {
          DEFAULT: '#000000', // Deep Black
          100: '#0A0A0A',     // Soft Black
          200: '#111111',     // Card Background
        },
        // Neutrals
        slate: {
          card: '#0A0A0A',    // Matching space-100
          border: '#333333',  // Subtle borders
        },
        steel: {
          light: '#EDEDED',   // High contrast text
          DEFAULT: '#888888', // Muted text
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
