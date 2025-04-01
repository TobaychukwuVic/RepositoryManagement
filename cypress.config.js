const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://github.com/TobaychukwuVic/RepositoryManagement",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
