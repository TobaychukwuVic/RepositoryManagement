class LoginPage {
    visit() {
      cy.visit('/login');
    }
  
    fillCredentials(username, password) {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
    }
  
    submit() {
      cy.get('[data-testid="login-submit"]').click();
    }
  }
  export default LoginPage;