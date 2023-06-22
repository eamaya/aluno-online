describe('template spec', () => {
  beforeEach(() => {
    cy.viewport(1280, 720); // Definindo a resolução da tela para 1280x720 pixels
  });
  it('passes', () => {
    cy.visit('http://localhost:3000/requerimentos')
    cy.get('.btn').click()
    cy.get('#inputDisciplina').select('ADS038 - Governança de TI')
    cy.get('#inputProva').select('A1')
    cy.get('#inputArgumentacao').type('Teste e2e aluno online')
    cy.get('.btn-danger').click()
  })
})