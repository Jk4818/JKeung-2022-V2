const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
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
        dynamic: "clamp(1.5rem, 5vw, 5rem)",
      },
      letterSpacing: {
        logo: '0.4rem',
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
    plugin(function({ addUtilities, theme, variants }) {
      const newUtilities = {
        '.flip-horizontal': {
          '--transform-scale-x': '-1',
        },
        '.flip-vertical': {
          '--transform-scale-y': '-1',
        },
      }
      addUtilities(newUtilities, variants('flip'))
    }),
  ],
};
