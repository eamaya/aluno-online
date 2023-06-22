describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/requerimentos')
    cy.get('.btn').click()
    cy.get('#inputDisciplina').select('ADS038 - Governança de TI')
    cy.get('#inputProva').select('A1')
    cy.get('#inputArgumentacao').type('teste e2e aluno-online')
    cy.get('.btn-danger').click()
  })
})