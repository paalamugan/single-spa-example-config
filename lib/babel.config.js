const babelConfig = require("../config/babel.config");

module.exports = (customizeBabelConfig) => {
  return {
    ...babelConfig,
    ...customizeBabelConfig,
  };
};
