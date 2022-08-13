Feature: Wikipedia search functionality
As a user 
I should be able to search 
using Wikipedia search

Scenario: Verify search on Wikipedia page
Given I navigate to Wikipedia page
When I search for Apollo 11 on search bar
And I click on search icon
Then I should see wiki page for Apollo 11