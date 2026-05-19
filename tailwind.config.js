/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#030712',
        cardBg: 'rgba(3, 7, 18, 0.6)',
        neon: {
          cyan: '#00f0ff',
          gold: '#ffd700',
          pink: '#ff007f',
          green: '#39ff14',
          purple: '#b60ce8', // Keeping just in case
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 10px rgba(0, 240, 255, 0.3)',
        'glow-cyan-lg': '0 0 15px rgba(0, 240, 255, 0.4)',
        'glow-gold': '0 0 10px rgba(255, 215, 0, 0.3)',
        'glow-pink': '0 0 10px rgba(255, 0, 127, 0.3)',
        'glow-green': '0 0 10px rgba(57, 255, 20, 0.3)',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glitch: 'glitch 4s ease-out 1',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
        'scroll-progress': 'none',
      },
      keyframes: {
        glitch: {
          '0%, 10%': { textShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff' },
          '12%': { textShadow: '0.05em 0 0px #b60ce8, -0.03em -0.04em 0px #00ffff' },
          '14%': { textShadow: '-0.05em -0.025em 0px #b60ce8, 0.025em 0.035em 0px #00ffff' },
          '16%': { textShadow: '0.05em 0 0px #00ffff, -0.03em -0.04em 0px #b60ce8' },
          '18%': { textShadow: '-0.05em -0.025em 0px #00ffff, 0.025em 0.035em 0px #b60ce8' },
          '22%': { textShadow: '0.03em 0 2px #b60ce8, -0.02em -0.02em 2px #00ffff' },
          '24%': { textShadow: '-0.03em -0.01em 2px #b60ce8, 0.02em 0.02em 2px #00ffff' },
          '28%': { textShadow: '0.01em 0 4px #b60ce8, -0.01em -0.01em 4px #00ffff' },
          '30%': { textShadow: '-0.01em 0 4px #00ffff, 0.01em 0 4px #b60ce8' },
          '34%': { textShadow: '0.005em 0 5px #00f0ff, -0.005em 0 5px #b60ce8' },
          '45%, 100%': { textShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
