import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://your-app-url.com',
    specPattern: 'cypress/specs/**/*.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
});
