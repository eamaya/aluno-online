describe('Testes do conceito final', () => {
    it('Deve retornar o conceito "SS - Superior" para uma média entre 9.0 e 10.0', () => {
      cy.visit('/');
      cy.get('#media-input').type('9.5');
      cy.get('#calcular-btn').click();
      cy.get('#conceito').should('contain.text', 'SS - Superior');
    });
  
    it('Deve retornar o conceito "MM - Médio" para uma média entre 5.0 e 6.9', () => {
      cy.visit('/');
      cy.get('#media-input').type('5.5');
      cy.get('#calcular-btn').click();
      cy.get('#conceito').should('contain.text', 'MM - Médio');
    });
  
    // Adicione mais testes conforme necessário para cada faixa de média
  });
  