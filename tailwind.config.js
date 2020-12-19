const colors = require("tailwindcss/colors")

console.log(colors);

module.exports = {
  theme: {
    container: {
      padding: "2rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "900px",
        xl: "900px",
      },
    },
    fontFamily: {
      sans: ["Monsserat", "sans-serif"],
      serif: ["Bitter", "serif"],
    },
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.blue.600"),
              "&:hover": {
                color: theme("colors.blue.800"),
              },
            },
          },
        },
      }),
      colors: {
        amber: colors.orange,
        emerald: colors.emerald,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
