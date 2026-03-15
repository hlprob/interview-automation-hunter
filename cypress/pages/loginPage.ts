import { locators } from '../locators/loginLocators';

export class LoginPage {
  visit() {
    cy.visit('/login');
  }

  login(email: string, password: string) {
    cy.get(locators.login.emailInput).type(email);
    cy.get(locators.login.passwordInput).type(password);
    cy.get(locators.login.loginBtn).click();
  }

  getErrorMessage() {
    return cy.get(locators.login.errorMessage);
  }
}

export const loginPage = new LoginPage();
