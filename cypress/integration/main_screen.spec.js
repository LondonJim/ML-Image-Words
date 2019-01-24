describe('Main screen', () => {

  beforeEach(() => {

    cy.visit('/index.html')

  })

  it('contains a capture image button', () => {
    cy.get('button').contains('Capture Image')
  })

  it('contains a text input box', () => {
    cy.get('input').should('have.id', 'word')
    cy.get('input').should('have.value', '')
  })

})
