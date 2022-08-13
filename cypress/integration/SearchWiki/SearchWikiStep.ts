/// <reference types='cypress' />
import { HomePage } from "../../pageObject/home.page"
import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

const homepage = new HomePage();
let text: string;
let path: string;

before(() => {
    cy.fixture('example').then(function(data) {
         text = data.searchText
         path = data.path
    })
})

Given(/I navigate to Wikipedia page/,() => {
    homepage.navigateToWiki()
    homepage.verifyWikiLogoIsVisible()
})

When(/I search for Apollo 11 on search bar/,() => {
    homepage.inputSearchField(text)
})

And(/I click on search icon/,() => {
    homepage.clickSearchButton();
})

Then(/I should see wiki page for Apollo 11/,() => {
    homepage.verifyCorrectPageOpened(path)
})

