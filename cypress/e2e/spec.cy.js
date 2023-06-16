describe('template spec', () => {
  beforeEach(() => {
    cy.viewport(1280, 720); // Definindo a resolução da tela para 1280x720 pixels
  });
  it('passes', () => {
    cy.visit('https://hmlprod.sempretecnologia.com.br/seg000_1/')
    cy.get('#user').type("admin")
    cy.get('#pass').type("1234")
    cy.get('#botao_entrar').click()
    cy.get('#id_sc_field_login').type("guilherme")
    cy.get('#id_sc_field_senha').type("Inter2301856")
    cy.get('#sub_form_b').click()
    cy.get('[item-menu="item-menu"][style="display:"] > .dropdown-toggle-custom').click()
    cy.get('#pageSubmenu > :nth-child(2) > .js-btn-nav-theme').click()
    cy.get('#Controle > [href="../fat126_1/"] > span').click()
  })
})