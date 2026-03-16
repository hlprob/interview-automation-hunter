# Cypress Automation Skeleton

A starting point for building a Cypress end-to-end test suite from scratch using TypeScript. Includes a scalable folder structure with page objects, locators, fixtures, and spec files ready to be built out.

## Project Structure

```
cypress/
  specs/
    login.ts              # Login test skeleton
    payment.ts            # Payment test skeleton (CC and ACH)
  pages/
    loginPage.ts          # Login page object
  locators/
    loginLocators.ts      # Login element selectors
    paymentLocators.ts    # Payment element selectors
  fixtures/
    paymentData.json      # Dynamic fixture data (written/read between tests)
    generated/            # Gitignored — for data written during test runs.
                          # Contains a .gitkeep so the folder is present when cloning,
                          # but its contents are never committed
  testData/
    index.ts              # Static typed test data constants
  support/
    e2e.ts                # Global test setup
cypress.config.ts         # Cypress configuration
tsconfig.json             # TypeScript configuration
```

## Installation and How to Run

```
npm install
npx cypress install
npx cypress run --spec "cypress/specs/*"                    # Run all tests headlessly
npx cypress run --spec "cypress/specs/login.ts"             # Run a single spec headlessly
npx cypress open                                            # Open Cypress Test Runner
```

## Getting Started

This skeleton is ready to run once you swap in your application's real values:

1. Update `baseUrl` in `cypress.config.ts` to point to your application
2. Update `cy.visit()` paths in the spec files to match your real routes
3. Replace `data-cy` selectors in the locator files with your actual element selectors
4. Add page objects for additional pages
5. Fill in the `TODO` sections in the spec files with your test logic
6. Update `testData/index.ts` with your real static test data
7. Use `fixtures/paymentData.json` for data that needs to be shared between tests

## Auth State

Once your tests require authenticated pages, use [`cy.session()`](https://docs.cypress.io/api/commands/session) to cache and restore login state between tests — avoiding a full UI login in every test that needs an authenticated user.

## Network Interception

Use [`cy.intercept()`](https://docs.cypress.io/api/commands/intercept) to stub, spy on, or modify HTTP requests during tests — useful for controlling API responses, simulating error states, or testing loading behavior without a real backend.
