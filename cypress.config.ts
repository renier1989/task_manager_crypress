import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/',
    testIsolation: false,
    viewportWidth: 1200,
    viewportHeight: 1200,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
