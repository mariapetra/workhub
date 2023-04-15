const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#4fc3f7',
        'secondary': '#7c4dff',
        'p-light': '#8bf6ff',
        'p-dark': '#0093c4',
        's-dark': '#3f1dcb',
        's-light': '#b47cff',
        'p-text': '#0e0e0e',
        's-text': '#f0f0f0',
      },
    },
  },
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}