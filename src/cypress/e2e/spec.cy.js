describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/requerimentos')

    cy.get('.btn');
    cy.get('#inputDisciplina').select('');
    cy.get('#inputProva').select('A1');
    cy.get('#inputArgumentacao').type('teste');
    cy.get('.btn-danger')
    cy.url().should('include', '/requerimentos');

  })
})