import {cuisineFilters} from '../fixtures/cuisineFilters';

describe('MainPage', () => {
    it('MainPage gets the correct restaurants', () => {
      cy.server();
      cy.route('GET', '/restaurant/filter/?skip=0&sort=name').as('getDefaultRestaurants');
      cy.visit(Cypress.config('appUrl'));
    });

    context('Restaurants on mainPage', () => {
        beforeEach(() => {
            cy.fixture('first_20_restaurants').as('restaurants');
            cy.server();
            cy.route('GET', '/restaurants/filter/?skip=0&sort=name', '@restaurants').as('getRestaurants');
            cy.visit(Cypress.config('appUrl'));
            cy.wait(200);
        });

        it('has the correct filter buttons', () => {
            cy.get('.collapsible-header')
            .should('be.visible')
            .should('have.length', 3)
            cy.get('.collapsible-header').eq(1).click()
            for(let i=0; i<cuisineFilters.length; i++){
                cy.get('span').eq(i+3).should('have.text', cuisineFilters[i])
            }
        });

        it('has pagination button', () => {
            cy.get('.pagination').should('be.visible')
        });

        it('has searchbar', () => {
            cy.get('.input-field').should('be.visible')
        });

        it('has sorting button with correct alternatives', () => {
            cy.get('')
        })
    })


});