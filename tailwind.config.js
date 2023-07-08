/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#113046",
          secondary: "#212529",
          accent: "#2E3839",
          neutral: "#374151"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

