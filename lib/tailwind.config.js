const tailwindConfig = require("../config/tailwind.config");

module.exports = (customizeTailwindConfig) => {
  return {
    ...tailwindConfig,
    ...customizeTailwindConfig,
  };
};
