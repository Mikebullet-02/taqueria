/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {

    extend: {
      fontFamily: {
        custom: ["BrickShapers", "sans-serif"],
      },
    },
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};