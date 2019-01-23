describe('Main screen', () => {

  beforeEach(() => {

    cy.visit('/index.html')

  })

  it('contains a capture image button', () => {
    cy.get('button').contains('Capture Image')
  })

})
