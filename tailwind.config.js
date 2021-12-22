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
      }
    }
  },
  variants: {},
  plugins: [],
};
