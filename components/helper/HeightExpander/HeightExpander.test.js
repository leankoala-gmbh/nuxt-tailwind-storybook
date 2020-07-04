describe('Testing HeightExpander', () => {
  it('Open Up', () => {
    cy.visit('http://localhost:6006/iframe.html?id=components-helper-heightexpander--height-expander-test')
    cy.get('div:nth-child(1) > div > div')
      .contains('Expand')
      .click()
    cy.get('div > div:nth-child(2)')
      .contains('Shrink')
      .click()
  })
})
