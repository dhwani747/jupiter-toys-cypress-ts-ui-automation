import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://jupiter.cloud.planittesting.com",

    // Retry failed tests
    retries: {
      runMode: 2, // retries in CI mode
      openMode: 0, // retries in UI mode
    },

    // Auto-wait configuration (timeouts)
    defaultCommandTimeout: 10000, // wait for page elements to be actionable
    requestTimeout: 10000, // API request timeout
    responseTimeout: 10000, // API response timeout
    pageLoadTimeout: 30000, // page load timeout
    supportFile: false,
    allowCypressEnv: false, // Disable Cypress environment variables for security
    specPattern: "jupiter-cypress-ts-framework/e2e/**/*.cy.ts",
  },
});
