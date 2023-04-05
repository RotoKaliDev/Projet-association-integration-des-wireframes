/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors :{
      gris : "#2A2E32",
      gristransparent : "rgba(23, 25, 27, 0.83)",
      },
      space: {
      "300px":"40rem",
      }
    },
  },
  plugins: [],
}

