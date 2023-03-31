const sharedConfig = require("tailwind-config/tailwind.config.cjs");

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  ...sharedConfig,
};
