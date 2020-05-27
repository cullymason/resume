const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: [
    './src/*.vue',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'print': {'raw': 'print'},
      }
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}