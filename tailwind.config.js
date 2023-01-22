/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        glovoGreen: "#00A182",
        glovoGrayLight: "#C1C1C1",
        glovoGrayDark: "#6E6E6E",
        glovoYellowLight: "#FFDE99"
      }
    }
  },
  plugins: [],
};
