const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-gray': '#E5E5E5',
        'dark-gray': '#141413',
        'p-gray' : '#888888',
        'blue-gray' : '#6C757D',
        'vibrant-orange' : '#E78A00',
      },
      fontFamily: {
        'roboto': ["roboto", "sans-serif"],
        'roboto-mono': ["roboto-mono", "monospace"]
      },
      fontSize: {
        'massive': ['16rem', {
          lineHeight: 1
        }],
        dynamic: "clamp(2rem, 5vw, 5rem)",
        'dynamic-small': "clamp(1rem, 3vw, 2rem)",
      },
      letterSpacing: {
        logo: '0.4rem',
      },
      boxShadow: {
        'container': '0 0 50px rgba(0, 0, 0, 0.5)',
      },
      blur: {
        xs: '2px',
      },
      zIndex: {
        '100': '100',
      },
      animation: {
        'spin-slow': 'spin 100s linear infinite',
        'spin-slow-1': 'spin 110s linear infinite',
        'spin-slow-2': 'spin 125s linear infinite',
        'spin-slow-3': 'spin 140s linear infinite',
        'reverse-spin': 'reverse-spin 100s linear infinite',
        'reverse-spin-1': 'reverse-spin 110s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    }),
  ],
};
