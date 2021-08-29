// cypress/integration/app.spec.ts

describe('Example Spec', () => {
  it('should find page title', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('title').contains('Create Next App')
  })
})

export {}
