describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should log in successfully with valid credentials', () => {
    // TODO: update selectors to match the login form
    cy.get('[data-cy="email"]').type('test@example.com');
    cy.get('[data-cy="password"]').type('password123');
    cy.get('[data-cy="login-btn"]').click();

    // TODO: assert successful login (e.g. redirect, welcome message)
    cy.url().should('not.include', '/login');
  });

  it('should show an error with invalid credentials', () => {
    // TODO: update selectors to match the login form
    cy.get('[data-cy="email"]').type('invalid@example.com');
    cy.get('[data-cy="password"]').type('wrongpassword');
    cy.get('[data-cy="login-btn"]').click();

    // TODO: assert error message
    cy.get('[data-cy="error-message"]').should('be.visible');
  });
});
