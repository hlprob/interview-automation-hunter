import { locators } from '../locators/loginLocators';

export class LoginPage {
  visit() {
    cy.visit('/login');
  }

  login(email: string, password: string) {
    cy.get(locators.emailInput).type(email);
    cy.get(locators.passwordInput).type(password);
    cy.get(locators.loginBtn).click();
  }

  logout() {
    cy.get(locators.logoutBtn).click();
  }

  getReturnToLoginBtn() {
    return cy.get(locators.returnToLoginBtn);
  }

  getErrorMessage() {
    return cy.get(locators.errorMessage);
  }
}

export const loginPage = new LoginPage();
