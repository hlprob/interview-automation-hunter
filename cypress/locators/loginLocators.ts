export const locators = {
  login: {
    emailInput: '[data-cy="email"]',
    passwordInput: '[data-cy="password"]',
    loginBtn: '[data-cy="login-btn"]',
    errorMessage: '[data-cy="error-message"]',
  },
  payment: {
    typeCc: '[data-cy="payment-type-cc"]',
    typeAch: '[data-cy="payment-type-ach"]',
    ccNumber: '[data-cy="cc-number"]',
    ccExpiration: '[data-cy="cc-expiration"]',
    ccCvv: '[data-cy="cc-cvv"]',
    routingNumber: '[data-cy="routing-number"]',
    accountNumber: '[data-cy="account-number"]',
    amount: '[data-cy="amount"]',
    submitBtn: '[data-cy="submit-btn"]',
    successMessage: '[data-cy="success-message"]',
  },
};
