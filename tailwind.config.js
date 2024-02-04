/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Great Vibes', 'cursive'],
        serif: ['Lora', 'serif'],
      },
      borderRadius: {
        'large' : '2rem'
      },
    },
  },
  plugins: [],
}