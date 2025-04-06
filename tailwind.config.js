/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5067E7',
        secondary: '#3E54D3',
        'btn-start': '#fbd95d',
        'btn-end': '#ff851c',
        'btn-final': '#ff9417',
      },
    },
  },
  plugins: [],
}
