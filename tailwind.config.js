module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
