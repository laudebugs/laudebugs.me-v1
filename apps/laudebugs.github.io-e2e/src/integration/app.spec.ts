describe('laudebugs', () => {
  beforeEach(() => cy.visit('/'))

  it('should Website name', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href="dev"]').click()

    cy.url().should('include', '/dev')
  })
})
