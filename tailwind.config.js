/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030304',
        surface: {
          card: '#0F1116',
          stroke: '#1E293B',
        },
        raiku: {
          green: '#00FFA3',
        },
        flow: {
          blue: '#3B82F6',
        },
        chaos: {
          red: '#FF4444',
        },
        warning: {
          orange: '#F59E0B',
        },
        text: {
          high: '#F8FAFC',
          low: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

