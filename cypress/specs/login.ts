import { loginPage } from '../pages/loginPage';

describe('Login', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('should log in successfully with valid credentials', () => {
    // TODO: update selectors to match the login form
    loginPage.login('test@example.com', 'password123');

    // TODO: assert successful login (e.g. redirect, welcome message)
    cy.url().should('not.include', '/login');
  });

  it('should show an error with invalid credentials', () => {
    // TODO: update selectors to match the login form
    loginPage.login('invalid@example.com', 'wrongpassword');

    // TODO: assert error message
    loginPage.getErrorMessage().should('be.visible');
  });
});
