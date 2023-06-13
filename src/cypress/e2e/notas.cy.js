describe('Teste E2E - Notas', () => {
    beforeEach(() => {
        cy.visit('/notas');
    });

    it('Verificar exibição das notas', () => {
        cy.request('GET', '/notas.json').as('notas');

        cy.get('@notas').then((response) => {
            const notas = response.body.data;

            notas.forEach((nota, index) => {
                cy.get('.row.border-top').eq(index).within(() => {
                    cy.get('.col-md-5').should('contain', nota.disciplina);
                    cy.get('.col-md-1').eq(0).should('contain', nota.a1);
                    cy.get('.col-md-1').eq(1).should('contain', nota.a2);
                    cy.get('.col-md-1').eq(2).should('contain', nota.a3 || '-');
                    cy.get('.col-md-2').eq(0).should('contain', nota.mediaFinal());
                    cy.get('.col-md-2').eq(1).should('contain', nota.mediaCA());
                });
            });
        });
    });
});