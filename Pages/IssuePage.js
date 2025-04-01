class IssuePage {
    navigateToRepo(repoName) {
      cy.visit(`/${repoName}`);
      cy.get('[data-testid="issues-tab"]').click();
    }
  
    createIssue(title, description) {
      cy.get('[data-testid="new-issue-button"]').click();
      cy.get('#issue-title').type(title);
      cy.get('#issue-description').type(description);
      cy.get('[data-testid="submit-issue"]').click();
    }
  
    addLabel(labelName) {
      cy.get('[data-testid="add-labels-button"]').click();
      cy.contains(labelName).click();
      cy.get('body').click(); // Close dropdown
    }
  
    verifyLabelApplied(labelName) {
      cy.get('[data-testid="issue-labels"]').should('contain', labelName);
    }
  
    commentOnIssue(commentText) {
      cy.get('[data-testid="issue-comment"]').type(commentText);
      cy.get('[data-testid="submit-comment"]').click();
    }
  
    closeIssue() {
      cy.get('[data-testid="close-issue-button"]').click();
    }
  
    verifyIssueClosed() {
      cy.get('[data-testid="issue-state"]').should('contain', 'closed');
    }
  }
  
  export default IssuePage;