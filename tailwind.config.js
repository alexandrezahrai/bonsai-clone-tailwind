/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green-dark": "#003c2f",
        "green-bright": "#22ad01",
        "green-light": "#f0f5f0",
        "grey-green": "#B2BFB5",
        "orangeish": "#ee8146", 
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      }
    },
  },
  plugins: [],
};
