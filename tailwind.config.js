/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-surface': 'var(--bg-surface)',
        'bg-surface-elevated': 'var(--bg-surface-elevated)',
        'bg-overlay': 'var(--bg-overlay)',
        'ink-primary': 'var(--ink-primary)',
        'ink-secondary': 'var(--ink-secondary)',
        'ink-muted': 'var(--ink-muted)',
        'ink-inverse': 'var(--ink-inverse)',
        'accent-signal': 'var(--accent-signal)',
        'accent-phosphor': 'var(--accent-phosphor)',
        'accent-olive': 'var(--accent-olive)',
        'accent-stamp': 'var(--accent-stamp)',
        'border-subtle': 'var(--border-subtle)',
        'border-strong': 'var(--border-strong)',
        'border-dash': 'var(--border-dash)',
        'hud-line': 'var(--hud-line)',
      },
      fontFamily: {
        display: ['Anton', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace', 'ui-monospace'],
        body: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'Roboto', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        'badge': 'var(--badge-shadow)',
        'tactical': '2px 2px 0px var(--accent-signal)',
        'tactical-hover': '4px 4px 0px var(--accent-signal)',
        'tactical-active': '1px 1px 0px var(--accent-signal)',
        'tactical-ghost': '2px 2px 0px var(--accent-phosphor)',
        'card': '0 16px 36px rgba(0, 0, 0, 0.08)',
        'modal': '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--border-strong)',
      },
      scale: {
        '102': '1.02',
        '115': '1.15',
        '130': '1.30',
      },
      animation: {
        'radar-sweep': 'radarSweepAnim 7s linear infinite',
        'blip-pulse': 'blipPulse 2s infinite',
        'radar-rotate': 'radarRotate 12s linear infinite',
        'marquee': 'marqueeScroll 32s linear infinite',
        'beacon': 'beaconPulse 1.5s infinite',
        'fade-in': 'fadeIn 0.15s ease-out',
        'pulse-dot': 'pulseDot 1.5s infinite',
      },
      keyframes: {
        radarSweepAnim: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        blipPulse: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(1.2)' },
        },
        radarRotate: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        marqueeScroll: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-25%)' },
        },
        beaconPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.6' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
