/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#020C0A",
          100: "#03100E",
          200: "#041411",
          300: "#051814",
          400: "#051B17",
          500: "#061f1a",
          600: "#41594E",
          700: "#7E9184",
          800: "#BDC8BD",
          900: "#FDFDFC",
        },
        secondary: {
          50: "#566356",
          100: "#738070",
          200: "#919E8A",
          300: "#B1BBA4",
          400: "#D1D8BE",
          500: "#F2F5D8",
          600: "#FAF6DF",
          700: "#FEF5E8",
          800: "#FFF7F2",
          900: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
