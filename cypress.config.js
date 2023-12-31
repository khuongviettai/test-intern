const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8heccg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },
});
