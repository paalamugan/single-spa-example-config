const commitlintConfig = require("../config/commitlint.config");

module.exports = (customizeCommitlintConfig) => {
  return {
    ...commitlintConfig,
    ...customizeCommitlintConfig,
  };
};
