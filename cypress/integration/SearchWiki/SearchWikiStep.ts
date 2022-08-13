/// <reference types='cypress' />
import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

Given(/I navigate to Wikipedia page/,() => {
    cy.visit('https://www.wikipedia.org/');
})

When(/I search for Apollo 11 on search bar/,() => {
    cy.get('#searchInput').type('Apollo')
})

And(/I click on search icon/,() => {
    cy.get('.pure-button').click();
})

Then(/I should see wiki page for Apollo 11/,() => {
    cy.url().should('be.equal','https://en.wikipedia.org/wiki/Apollo')

})

