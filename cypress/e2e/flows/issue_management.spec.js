import IssuePage from '../pages/IssuePage';

describe('Issue Management', () => {
  const issuePage = new IssuePage();

  it('Creates and labels an issue', () => {
    issuePage.navigateToRepo('cypress-test-repo');
    issuePage.createIssue('Bug: Login fails', 'Steps to reproduce...');
    issuePage.addLabel('bug');
    issuePage.verifyLabelApplied('bug');
  });

  it('Creates an issue with labels', () => {
    issuePage.createIssue('Bug report', 'Critical bug found');
    issuePage.addLabel('bug');
    issuePage.addLabel('critical');
    issuePage.verifyLabelApplied('bug');
    issuePage.verifyLabelApplied('critical');
  });

  it('Comments on and closes an issue', () => {
    issuePage.createIssue('Feature request', 'New feature needed');
    issuePage.commentOnIssue('I agree this would be useful');
    issuePage.closeIssue();
    issuePage.verifyIssueClosed();
  });

  it('Prevents creating issue with empty title', () => {
    cy.get('[data-testid="new-issue-button"]').click();
    cy.get('#issue-description').type('Description without title');
    cy.get('[data-testid="submit-issue"]').should('be.disabled');
  });

  it('Handles long issue titles', () => {
    const longTitle = 'A'.repeat(256);
    issuePage.createIssue(longTitle, 'Testing length validation');
    cy.get('[data-testid="error-message"]').should('contain', 'Title is too long');
  });
});