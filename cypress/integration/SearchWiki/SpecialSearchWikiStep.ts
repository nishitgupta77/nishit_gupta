/// <reference types='cypress' />
import { SearchPage } from "../../pageObject/search.page"
import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

const searchpage = new SearchPage();
let text: string;
let path: string;

before(() => {
    cy.fixture('example').then(function(data) {
         text = data.searchText
         path = data.path
    })
})

Given(/I navigate to Wikipedia special search page/,() => {
    searchpage.navigateToWikiSpecialSearch()
})

When(/I search for Apollo 11 on search page/,() => {
    searchpage.inputSearchField(text)
})

And(/I click on search button/,() => {
    searchpage.clickSearchButton();
})

And(/I click on Apollo 11 page link/,() => {
    searchpage.clickOnLinkPage();
})

Then(/Then I should see wiki page for Apollo 11/,() => {
    searchpage.verifyCorrectPageOpened(path);
})

