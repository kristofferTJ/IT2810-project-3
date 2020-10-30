import {restaurantsByStars} from '../fixtures/restaurantsByStars';

describe('Sorting', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('appUrl'));
      });

    it('sorts the restaurants correctly', () => {
        cy.fixture('first_20_restaurants').as('defaultRestaurants');
        cy.server();
        cy.route('/api/restaurant/filter/?skip=0&sort=stars', 'defaultRestaurants').as('sortedRestaurants');
        cy.get('.SortingButton').click()
        cy.get('.Sortingbutton').select('stars', {force: true})
        cy.get('option').eq(1).click({force: true})
        cy.wait(200)
        cy.get('.card-title').should('length', 20);
        for(let i = 0; i < 20; i++){
            cy.get('.card-title').eq(i).should('have.text', restaurantsByStars[i]);
        }
   });
})