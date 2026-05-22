import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#020617',
          900: '#07111f',
          800: '#0b172a',
        },
      },
      boxShadow: {
        glow: '0 0 60px rgba(34, 211, 238, 0.18)',
      },
      backgroundImage: {
        'premium-radial':
          'radial-gradient(circle at top left, rgba(34, 211, 238, 0.18), transparent 34%), radial-gradient(circle at 78% 12%, rgba(124, 58, 237, 0.18), transparent 28%)',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('light', '.light &');
    }),
  ],
} satisfies Config;
