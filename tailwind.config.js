/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#A9B388",
        secondary: "#F0EAD2",
        accent: "#6C584C",
        text: "#333333",
        footer: "#A98467",
      }
    }
  },
  plugins: [],
}
