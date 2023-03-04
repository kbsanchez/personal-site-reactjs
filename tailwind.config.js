/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,html}",
    "./src/**/*.{js,html}"
  ],
  theme: {
    colors: {
      'red-bean': '#3C0000',
      'pale-pink': '#F5D0C5',
      'raw-umber': '#916953',
      'caribbean-blue': '#026C7C',
      'onyx': '#2E3532',
      'white': '#FFFFFF'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
