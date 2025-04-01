import LoginPage from '../pages/LoginPage';
import RepoPage from '../pages/RepoPage';

describe('Repository Creation', () => {
  const loginPage = new LoginPage();
  const repoPage = new RepoPage();

  before(() => {
    loginPage.visit();
    loginPage.fillCredentials('testuser', 'password123');
    loginPage.submit();
  });

  it('Creates a public repository', () => {
    repoPage.clickNewRepo();
    repoPage.createRepo('cypress-test-repo', 'Automated with POM');
    repoPage.verifyRepoExists('cypress-test-repo');
  });

  it('Creates private repo with README', () => {
    repoPage.createRepoWithOptions('private-with-readme', {
      private: true,
      addReadme: true,
      description: 'Test private repository'
    });
    
    cy.contains('private-with-readme').should('be.visible');
    cy.get('[data-testid="lock-icon"]').should('exist');
    cy.contains('README.md').should('exist');
  });

  it('Blocks invalid repository names', () => {
    cy.get('[data-testid="new-repo-button"]').click();
    cy.get('#repo-name').type('invalid@name');
    cy.get('[data-testid="name-validation-error"]')
      .should('contain', 'Invalid characters');
    cy.get('[data-testid="create-repo-submit"]')
      .should('be.disabled');
  });
});