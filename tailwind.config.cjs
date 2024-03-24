/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#F2FFA0",
      },
      fontFamily: {
        sysfont: "Sysfont",
        "pixel-bold": "PixelOperator8-Bold",
        pixel: "PixelOperator8",
        m6x11plus: "M6x11plus",
      },
    },
  },
  safelist: [
    "left-0",
    "right-0",
    "top-0",
    "bottom-0",
    "-left-1",
    "-right-1",
    "-top-1",
    "-bottom-1",
  ],
  plugins: [],
}