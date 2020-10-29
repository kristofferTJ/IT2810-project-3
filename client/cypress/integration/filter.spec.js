import { ItalianRestaurants } from '../fixtures/ItalianRestaurants';
import { ItalianRestaurantsName } from '../fixtures/ItalianRestaurantsName';

describe('Filter', () => {
    beforeEach(() => {
        cy.fixture('first_20_restaurants').as('restaurant');
        cy.server();
        cy.route('GET', '/api/restaurant/filter/?skip=0');
        cy.visit(Cypress.config('appUrl'));
    });

    it('gets restaurants of the correct type', () => {
        cy.fixture('ItalianRestaurants').as('ItalianRestaurants');
        cy.server();
        cy.route('/api/restaurant/filter/?skip=0&cuisine=Italian', '@ItalianRestaurants').as('Italian');
        cy.contains('Cuisine').click();
        cy.contains('Italian').click();
        cy.wait(200)
        cy.get('.card-title').should('length', 19);
        for(let i = 0; i < 19; i++){
            cy.get('.card-title').eq(i).should('have.text', ItalianRestaurantsName[i]);
        }
   });


})
