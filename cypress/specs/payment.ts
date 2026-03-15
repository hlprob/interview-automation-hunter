import { creditCard, ach } from '../testData/index';
import { paymentLocators } from '../locators/paymentLocators';

// NOTE: The CC and ACH tests are intentionally dependent — the CC test writes payerName
// to the fixture, and the ACH test reads it back. This is a skeleton example of the
// write/read fixture pattern. In a real project, tests should generally be independent.
//
// NOTE: This spec intentionally interacts with the page directly via locators rather than
// through a page object. This is an alternative pattern to the page object approach shown
// in login.ts — useful for simpler flows or when a page object would add unnecessary overhead.

describe('Payment', () => {
  beforeEach(() => {
    cy.visit('/pay/faker-national-bank');
  });

  it('should submit a CC payment successfully', () => {
    const payerName = 'Test User';

    // Read fixture and write payerName before test runs
    cy.readFile('cypress/fixtures/paymentData.json').then((data) => {
      cy.writeFile('cypress/fixtures/paymentData.json', { ...data, payerName });
    });

    // TODO: update selectors to match the payment form
    cy.get(paymentLocators.typeCc).click();
    cy.get(paymentLocators.payerName).type(payerName);
    cy.get(paymentLocators.ccNumber).type(creditCard.number);
    cy.get(paymentLocators.ccExpiration).type(creditCard.expirationDate);
    cy.get(paymentLocators.ccCvv).type(creditCard.cvv);
    cy.get(paymentLocators.amount).type('1.00');
    cy.get(paymentLocators.submitBtn).click();

    // TODO: assert successful payment submission
    cy.get(paymentLocators.successMessage).should('be.visible');
  });

  it('should submit an ACH payment successfully', () => {
    // cy.fixture is used here (vs cy.readFile above) to demonstrate both Cypress fixture
    // access patterns: cy.readFile/cy.writeFile for write operations, cy.fixture for reads.
    cy.fixture('paymentData').then((data) => {
      cy.get(paymentLocators.typeAch).click();
      cy.get(paymentLocators.payerName).type(data.payerName);
      cy.get(paymentLocators.routingNumber).type(ach.routingNumber);
      cy.get(paymentLocators.accountNumber).type(ach.accountNumber);
      cy.get(paymentLocators.amount).type('1.00');
      cy.get(paymentLocators.submitBtn).click();

      // TODO: assert successful payment submission
      cy.get(paymentLocators.successMessage).should('be.visible');
    });
  });
});
