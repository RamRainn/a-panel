module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#3AA1FF',
        bg: '#F5F6FA',
        white: '#FFFFFF',
        border: '#C0C0C0',
        green: '#3AE05E',
        text: {
          gray: '#3D3D3D',
          black: '#37394E',
          main: '#3AA1FF',
        }
      }
    },
  },
  plugins: [],
}
