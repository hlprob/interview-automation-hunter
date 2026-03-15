import { loginLocators } from '../locators/loginLocators';

export class LoginPage {
  visit() {
    cy.visit('/login');
  }

  login(email: string, password: string) {
    cy.get(loginLocators.emailInput).type(email);
    cy.get(loginLocators.passwordInput).type(password);
    cy.get(loginLocators.loginBtn).click();
  }

  logout() {
    cy.get(loginLocators.logoutBtn).click();
  }

  getReturnToLoginBtn() {
    return cy.get(loginLocators.returnToLoginBtn);
  }

  getErrorMessage() {
    return cy.get(loginLocators.errorMessage);
  }
}

export const loginPage = new LoginPage();
