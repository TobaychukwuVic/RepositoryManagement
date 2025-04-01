### How to run the automated test script:

Install Node.js
npm install cypress --save-dev
npx cypress open
Select the test file you want to run



## Automation Approach
Describe which test you would automate and why?

Automated Tests:

-Smoke tests (login, repo creation).
-Regression tests (issue workflows, PR merges).
-API tests (backend validation).

Why Automate?

-Faster execution.
-Consistent results.
-Early bug detection in CI/CD.


## Choice of Automation Framework & Considerations for Maintainability

Framework Selected: Cypress (JavaScript)
Why Cypress?
✅ Fast execution & automatic waiting for elements.
✅ Excellent debugging with time travel snapshots.
✅ Built-in API testing capabilities.
✅ Easy integration with CI/CD pipelines (GitHub Actions, Jenkins, CircleCI).
✅ Modern JavaScript-based framework, ideal for web applications.

Maintainability Considerations:
🔹 Use the Page Object Model (POM) for reusable locators and all selectors being updated in one place when UI changes..
🔹 Parameterize tests to cover multiple scenarios.
🔹 Integrate with CI/CD to run tests automatically before deployment.
🔹 Generate reports for better visibility (e.g., Allure, Mochawesome).

## Discuss how you would incorporate CI/CD into your QA process.

Continuous Integration (CI) in QA
🔹 Automated Testing in CI Pipelines
-Integrate unit tests, API tests, and UI automation tests into the CI pipeline.
-Use frameworks like JUnit, TestNG, Selenium, Cypress, or Playwright to ensure all code changes pass automated test cases before merging.
-Run static code analysis (e.g., SonarQube, ESLint) to catch issues early.

🔹 Parallel & Containerized Testing
-Use Dockerized test environments to eliminate inconsistencies between development and testing.
-Leverage cloud-based test execution (e.g., Selenium Grid, LambdaTest, BrowserStack) for cross-browser testing.

🔹 Shift-Left Testing
-Automate smoke testing to ensure stability before further testing.
-Perform API contract testing (e.g., Postman, Pact) to validate microservices in early stages.

2️⃣ Continuous Deployment (CD) in QA
🔹 Automated Deployments & Smoke Tests
-Use Jenkins, GitHub Actions, GitLab CI/CD, or Azure DevOps to automate deployment pipelines.
-After deployment, trigger sanity tests to confirm the app is functioning properly.

🔹 Staging & Canary Releases
-Implement staging environments for UAT (User Acceptance Testing) before production.
-Use Canary deployments to release changes gradually, monitoring impact before full rollout.

🔹 Post-Deployment Monitoring & Alerts
-Set up real-time monitoring (e.g., Prometheus, Grafana, New Relic) to detect issues early.
-Use automated rollback mechanisms if issues arise in production.

## Outline how you would manage tests for new features versus regression tests.

-New features: Manual + automation (exploratory first).
-Regression: Automated (prioritize critical paths).

## Mention any performance or security testing strategies you consider important for this application.
-Performance: Load test with 100+ concurrent users and also perform stress test.
-Security: OWASP ZAP scans, SQL injection tests.
-Security: Authentication & Authorization Testing: Verify role-based access control (RBAC) to prevent unauthorized access.

Below is the link to the test plan, bug reporting approach and testcase documents;

https://docs.google.com/document/d/1KBV5_kdx7jQHDdqJSDJ0WUwAgCcZzlXSq0uLDiWQskA/edit?usp=sharing

https://docs.google.com/spreadsheets/d/1eXaMy6XSWoXpdhc9RnNpuyroXz730WX2b0knHABMKWY/edit?gid=209743717#gid=209743717