const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      gray: colors.gray,
      white: "#ffffff",
      primary: {
        DEFAULT: "#E14F4F",
        50: "#FCECEC",
        100: "#F9DADA",
        200: "#F3B8B8",
        300: "#ED9595",
        400: "#E77272",
        500: "#E14F4F",
        600: "#D42424",
        700: "#A41C1C",
        800: "#741414",
        900: "#440C0C",
      },
    },
    container: {
      screens: {
        sm: "320px",
        md: "744px",
        lg: "1008px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
};
