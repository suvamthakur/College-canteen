/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow" : "#ffb521",
        "blue" : "#1b7ebf",
        "secondary": "#1F2937",
        "primaryBG" : "#f7f7f7",
        "black" : "#000000"
      }
    },
  },
  plugins: [require("daisyui")],
}
