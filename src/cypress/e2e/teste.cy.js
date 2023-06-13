describe('Testando', () => {
       it('Soma de números', () => {
              cy.visit('http://localhost:3000')
              cy.get('input[id="inputMatricula"]').type('2023100')
              cy.get('input[id="inputSenha"]').type('senha123')
              cy.get('.btn').click()
              cy.get('#navbarToggler1 > ul.navbar-nav.mr-auto.mt-2.mt-lg-0 > li:nth-child(5) > a').click()
              cy.get('.btn').click()
              cy.get('select[id="inputDisciplina"]').select("ADS030 - Manutenção de Software e DevOps")
              cy.get('select[id="inputProva"]').select("A3")
              cy.get('#inputArgumentacao').type('TESTE')
              cy.get('.btn-danger').click()
              cy.url()
              .should('be.equal', 'http://localhost:3000/requerimentos')
       })
})

