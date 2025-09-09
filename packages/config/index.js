// Config package exports - shared configs for monorepo
const eslintConfig = require('./eslint.config.mjs');
const prettierConfig = require('./prettier.config.js');

module.exports = {
  eslintConfig,
  prettierConfig,
};
