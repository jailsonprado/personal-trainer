const path = require("path");

module.exports = {
  // outras configurações do webpack

  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
    },
  },

  // outras configurações do webpack
};
