import { creditCard, ach } from '../testData/index';
import { locators } from '../locators/paymentLocators';

// NOTE: The CC and ACH tests are intentionally dependent — the CC test writes payerName
// to the fixture, and the ACH test reads it back. This is a skeleton example of the
// write/read fixture pattern. In a real project, tests should generally be independent.
//
// NOTE: This spec intentionally interacts with the page directly via locators rather than
// through a page object. This is an alternative pattern to the page object approach shown
// in login.ts — useful for simpler flows or when a page object would add unnecessary overhead.

describe('Payment Form', () => {
  beforeEach(() => {
    cy.visit('/pay/faker-national-bank');
  });

  describe('Credit Card Payment', () => {
    it('should submit a CC payment successfully', () => {
      const payerName = 'Test User';

      // Read fixture and write payerName before test runs
      cy.readFile('cypress/fixtures/paymentData.json').then((data) => {
        cy.writeFile('cypress/fixtures/paymentData.json', { ...data, payerName });
      });

      // TODO: update selectors to match the payment form
      cy.get(locators.typeCc).click();
      cy.get(locators.payerName).type(payerName);
      cy.get(locators.ccNumber).type(creditCard.number);
      cy.get(locators.ccExpiration).type(creditCard.expirationDate);
      cy.get(locators.ccCvv).type(creditCard.cvv);
      cy.get(locators.amount).type('1.00');
      cy.get(locators.submitBtn).click();

      // TODO: assert successful payment submission
      cy.get(locators.successMessage).should('be.visible');
    });
  });

  describe('ACH Payment', () => {
    it('should submit an ACH payment successfully', () => {
      // Read payerName written during CC test
      cy.fixture('paymentData').then((data) => {
        cy.get(locators.typeAch).click();
        cy.get(locators.payerName).type(data.payerName);
        cy.get(locators.routingNumber).type(ach.routingNumber);
        cy.get(locators.accountNumber).type(ach.accountNumber);
        cy.get(locators.amount).type('1.00');
        cy.get(locators.submitBtn).click();

        // TODO: assert successful payment submission
        cy.get(locators.successMessage).should('be.visible');
      });
    });
  });
});
