const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 10000,
    responseTimeout: 10000,
    requestTimeout: 10000,
    chromeWebSecurity: false,
    projectId: 'r5o8qd'
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
  env: {
    viewportWidthBreakpoint: 768,
  },
})
