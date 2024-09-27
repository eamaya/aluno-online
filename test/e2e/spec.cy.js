describe('template spec', () => {
    it('passe', () => {
        cy.visit('http://localhost:3000/requerimentos')
        cy.get('btn').click()
        cy.get('#inputDisciplina').select('ADS030 - Manutenção de software e DevOps')
        cy.get('#inputProva').select('A2')
        cy.get('#inputArgumentacao').type('Eu mereço nota 10!')

    })
})