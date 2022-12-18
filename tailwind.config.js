/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 1s ease-out 1'
      },
    },
  },
  plugins: [],
}
