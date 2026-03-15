import { creditCard, ach } from '../testData/index';

// NOTE: The CC and ACH tests are intentionally dependent — the CC test writes payerName
// to the fixture, and the ACH test reads it back. This is a skeleton example of the
// write/read fixture pattern. In a real project, tests should generally be independent.

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
      cy.get('[data-cy="payment-type-cc"]').click();
      cy.get('[data-cy="payer-name"]').type(payerName);
      cy.get('[data-cy="cc-number"]').type(creditCard.number);
      cy.get('[data-cy="cc-expiration"]').type(creditCard.expirationDate);
      cy.get('[data-cy="cc-cvv"]').type(creditCard.cvv);
      cy.get('[data-cy="amount"]').type('1.00');
      cy.get('[data-cy="submit-btn"]').click();

      // TODO: assert successful payment submission
      cy.get('[data-cy="success-message"]').should('be.visible');
    });
  });

  describe('ACH Payment', () => {
    it('should submit an ACH payment successfully', () => {
      // Read payerName written during CC test
      cy.fixture('paymentData').then((data) => {
        cy.get('[data-cy="payment-type-ach"]').click();
        cy.get('[data-cy="payer-name"]').type(data.payerName);
        cy.get('[data-cy="routing-number"]').type(ach.routingNumber);
        cy.get('[data-cy="account-number"]').type(ach.accountNumber);
        cy.get('[data-cy="amount"]').type('1.00');
        cy.get('[data-cy="submit-btn"]').click();

        // TODO: assert successful payment submission
        cy.get('[data-cy="success-message"]').should('be.visible');
      });
    });
  });
});
