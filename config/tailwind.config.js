const colors = require("tailwindcss/colors");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

const tailwindConfig = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  // important: '#app',
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      red: colors.red,
      blue: colors.blue,
      orange: colors.orange,
      teal: colors.teal,
      indigo: colors.indigo,
    },
    extend: {
      colors: {
        primary: withOpacityValue("--color-primary"), // Use classes like `bg-primary/75`
        secondary: withOpacityValue("--color-secondary"),
      },
    },
    fontFamily: {
      base: 'Roboto","Helvetica","Arial",sans-serif',
    },
  },
  corePlugins: {
    preflight: true,
  },
  variants: {},
  plugins: [],
};

module.exports = tailwindConfig;
