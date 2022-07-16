const postcssConfig = require("../config/postcss.config");

module.exports = (customizePostcssConfig) => {
  return {
    ...postcssConfig,
    ...customizePostcssConfig,
  };
};
