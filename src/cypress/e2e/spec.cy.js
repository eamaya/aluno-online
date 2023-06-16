describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/requerimentos')
    cy.get(':nth-child(2) > .col-md-2').invoke('text').then((text) => {
      const modifiedText = text.replace('20202', '0202N');
      cy.get(':nth-child(2) > .col-md-2').invoke('text', modifiedText);
    });
    cy.get('.btn-light').removeClass('btn-light').addClass('btn-danger');
  })
})