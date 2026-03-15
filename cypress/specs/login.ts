import { loginPage } from '../pages/loginPage';

describe('Authentication', () => {
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

  it('should log out successfully', () => {
    // TODO: update selectors to match the login form
    loginPage.login('test@example.com', 'password123');
    loginPage.logout();

    // TODO: assert logout page URL
    cy.url().should('include', '/logout');

    // TODO: assert return to login button is visible
    loginPage.getReturnToLoginBtn().should('be.visible');
  });
});
