class RepoPage {
    clickNewRepo() {
      cy.get('[data-testid="new-repo-button"]').click();
    }
  
    createRepo(name, description) {
      cy.get('#repo-name').type(name);
      cy.get('#repo-description').type(description);
      cy.get('[data-testid="create-repo-submit"]').click();
    }
  
    verifyRepoExists(name) {
      cy.url().should('include', `/${name}`);
      cy.contains(name).should('be.visible');
    }
  }
  export default RepoPage;