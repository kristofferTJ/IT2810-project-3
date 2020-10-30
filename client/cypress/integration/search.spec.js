describe('Search', () => {
    beforeEach(() => {
      cy.visit(Cypress.config('appUrl'));
    });

    it('accepts the search input', () => {
        const input = 'Credo';
        cy.get('.white')
          .type(input)
          .should('have.value', input);
      });

    it('Gets the correct element', () => {
        const input = "Credo";
        cy.fixture('SearchCredo').as('Credo');
        cy.server();
        cy.route('/restaurant/filter/?skip=0&name=credo', '@Credo').as('search');
        cy.get('.white')
        .type(input)
        .should('have.value', input);
        cy.wait(200);
        cy.get('.white')
        .should('length', 1);
    });
});

