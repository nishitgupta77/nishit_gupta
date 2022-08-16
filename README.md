# TASK 1 - Exploratory testing and bug reporting

Monefy App

Monefy is a personal finance application that makes money management
easy. The app is designed to streamline expense tracking and help you
save money. Application can be downloaded from the link :
https://monefy.me/

|Charter 1: Testing of income/ expense functionality                                                             |                                                                                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Coverage Area                                                                                                  | Testing of areas involving transactions:                                                                                                                                             |
|                                                                                                                |-Adding income and expense using +/- icon
|                                                                                                                |-Adding expense using the icons on the dashboard
|                                                                                                                |-Changing added values from Balance and checking update  
| Test Environment                                                                                               | Production                                                                                                                                                                            |
| Platform                                                                                                       | Android 11, iOS 15.5                                                                                                                                                                  |
| Tester                                                                                                         | Nishit Gupta                                                                                                                                                                          |
| Time Started                                                                                                   | 14-August-2022, 4:00 PM                                                                                                                                                                 |
| Duration                                                                                                       | 15 minutes                                                                                                                                                                            |
| Priority                                                                                                       | High                                                                                                                                                                                  |
| Test Notes                                                                                                     |1. Add income using the ""+"" icon, add notes and category.                                                                                                                          |
|                                                                                                                |i. Add negative income, unable to add. 
|                                                                                                                |ii. Add maximum income, Can add upto 9 digits (INR).
|                                                                                                                |iii. Add category, click to add new category - should ask for premium account. 
|                                                                                                                |iv. Add income, notes and existing category - able to save, check if balance is updated.
|                                                                                                                |2. Add expense using the ""-"" icon, add notes and category.                                                                                                                         |
|                                                                                                                |i. Add negative expense, unable to add.      
|                                                                                                                |ii. Add maximum expense, Can add upto 9 digits (INR).  
|                                                                                                                |iii. Add category, click to add new category - should ask for premium account.
|                                                                                                                |iv. Add expense, notes and existing category - able to save, check if balance is updated.
|                                                                                                                |3. Add expense using the dashboard icons.                                                                                                                                            |
|                                                                                                                |i. Check balance after updating the expense.
|                                                                                                                |ii. Check expense status - match it with the category selected.  
|                                                                                                                |iii. Add multiple categories and check if the percentage is updated on the dashboard for selected category
|                                                                                                                |4. Update added income and expense added.                                                                                                                                            |
|                                                                                                                |i. Choose an added income, update it - check if the balance is updated. 
|                                                                                                                |ii. Choose an added expense, update it - check if the balance is updated.
|                                                                                                                |iii. Delete an added expense or income - check if balance is updated.
| Bugs                                                                                                           |Found on iOS 15.5 with INR currency set                                                                                                                                              |
|                                                                                                                |Bug Details: Negative sign not appearing when adding expense higher than income in balance.
|                                                                                                                |Reproduction steps:
|                                                                                                                |1. Add income Eg. INR 3,000  
|                                                                                                                |2. Add Expense Eg. INR 5,000   
|                                                                                                                |Expected outcome:
|                                                                                                                |Balance should be updated as -INR 2000 or INR -2000 
|                                                                                                                |Actual outcome:
|                                                                                                                |Balance is updated as INR 2000    
|                                                                                                                |
|                                                                                                                |Notes: Unable to verify on android, currency change requires premium account. Current currency set as dollar. 
| Risk                                                                                                           | 1. Since this application deals with finanacial transaction logs so a thorough testing (Regression testing and volume testing) around these areas is required to mitigate any risks. |
|                                                                                                                |Areas: Income/Expense Addition, Updating , Deletion.
<br>

|Charter 2: Testing of transfer functionality                                                                                                                                    |                                                                                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Coverage Area                                                                                                  | Testing of areas involving transfer:                                                                                                                                            |
|                                                                                                                |-Checking transfer functionality
|                                                                                                                |-Checking account status after transfer
| Test Environment                                                                                               | Production                                                                                                                                                                            |
| Platform                                                                                                       | Android 11, iOS 15.5                                                                                                                                                                  |
| Tester                                                                                                         | Nishit Gupta                                                                                                                                                                          |
| Time Started                                                                                                   | 14-August-2022, 4:30 PM                                                                                                                                                                 |
| Duration                                                                                                       | 15 minutes                                                                                                                                                                            |
| Priority                                                                                                       | High                                                                                                                                                                                  |
| Test Notes                                                                                                     |1. Click on transfer icon on home page.                                                                                                                          |
|                                                                                                                |i. Choose cash to card option, add note and amount - check account status, it should be updated - cash to card must be transferred 
|                                                                                                                |2. Click on transfer icon on home page.                                                                                                                         |
|                                                                                                                |i. Choose card to cash option, add note and amount - check account status, it should be updated - card to cash must be transferred      
|                                                                                                                |3. Click on transfer icon on home page                                                                                                                                            |
|                                                                                                                |i. Choose cash to card option, add amount - check by adding transfer amount greater than the available cash balance - cash would be changed to negative amount and card would be added.
|                                                                                                                |4. Check by transferring from cash to cash account or card to card account - unable to add tranfer amount.                                                                                                                                            |
|                                                                                                                |5. Open accounts, click on transfer and perform above tests 1 - 4. 
| Bugs                                                                                                           |Found on iOS 15.5 with INR currency set                                                                                                                                              |
|                                                                                                                |Bug Details: Negative sign not appearing when adding expense higher than income in balance.
|                                                                                                                |Reproduction steps:
|                                                                                                                |1. Available cash is 1000  
|                                                                                                                |2. Perform cash to card transfer of 2000   
|                                                                                                                |Expected outcome:
|                                                                                                                |Balance should be updated as -INR 1000 or INR -1000 in cash
|                                                                                                                |Actual outcome:
|                                                                                                                |Balance is updated as INR 1000 in cash    
|                                                                                                                |Notes: Unable to verify on android, currency change requires premium account. Current currency set as dollar. 
| Risk                                                                                                           | 1. Since this application deals with finanacial transaction logs so a thorough testing (Regression testing and volume testing) around these areas is required to mitigate any risks. |
|                                                                                                                |Areas:  Transfer amount
<br>

|Charter 3:  Testing of search functionality                                                                                                                                                         |                                                                                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Coverage Area                                                                                                  | Testing of areas involving search:                                                                                                                                             |
|                                                                                                                |-Checking search functionality
| Test Environment                                                                                               | Production                                                                                                                                                                            |
| Platform                                                                                                       | Android 11, iOS 15.5                                                                                                                                                                  |
| Tester                                                                                                         | Nishit Gupta                                                                                                                                                                          |
| Time Started                                                                                                   | 14-August-2022, 5:00 PM                                                                                                                                                                 |
| Duration                                                                                                       | 15 minutes                                                                                                                                                                            |
| Priority                                                                                                       | Low                                                                                                                                                                                  |
| Test Notes                                                                                                     |1. Click on search icon on home page.                                                                                                                         |
|                                                                                                                |i. Check qwerty keyboard is triggered. 
|                                                                                                                |ii. Check recent searches is displayed.
|                                                                                                                |iii. Check that placeholder Search records is displayed. 
|                                                                                                                |iv. Check user can click on recent search.
|                                                                                                                |2. Enter search records on search.                                                                                                                        |
|                                                                                                                |i. Check can search for different Income types.     
|                                                                                                                |ii. Check can search for different expense types.  
|                                                                                                                |iii. Check can search for notes of Income types.
|                                                                                                                |iv. Check can search for notes of Expense types.
|                                                                                                                |v. Check can search for Income amount.
|                                                                                                                |vi. Check can search for Expense amount.
|                                                                                                                |3. Enter non existing search items                                                                                                                                            |
|                                                                                                                |i. Should give message "No records have been found."
|                                                                                                                |4. Search recent items                                                                                                                                            |
|                                                                                                                |i. Check maximum 3 records displayed for recent search. 
|                                                                                                                |ii. Check most recent search is displayed on top.
|                                                                                                                |iii. Check user lands on correct page when clicking on recent search.
|                                                                                                                |iv. Check user gets search suggestion when searching for records.
| Bugs                                                                                                           |No bugs observed.                                                                                                                                             |


# TASK 2 - Software Release

1.  Risk analysis based on new changes should be done to determine
    the areas to be focused on while testing the application.

2.  Create a list that should prioritize on the following:

<!-- -->

 <ul>a.  Testing the functionality that has the largest impact on users -
    sending and receiving messages/media.</ul>

<ul>b.  Testing that part of the application that is critical to the
    business - login/ register.</ul>

<ul>c.  Testing the functionality that has been developed under time
    pressure.</ul>

<ul>d.  Testing that areas of the application that are likely to contain
    show stopping defects based on previous testing experience.</ul>

<!-- -->

3.  Divide the test cases between manual and automation - depending on
    whichever suite is created.

4.  Prioritize by performing smoke testing to ascertain that critical
    functionalities of the application are working as expected.

5.  After running the smoke test cases, perform sanity testing to
    ascertain that the bugs have been fixed and no further issues have
    been introduced due to the changes.

6.  Try to test two platforms parallelly by using a device of one
    platform as sender and another as receiver alternatively. E.g.,
    sending a message from an IOS device, receiving it on android and
    then sending media from android, receiving it on IOS. This would
    reduce the testing time and also test how the app communicates
    across platforms.
    
   <h2> TESTCASES: </h2>
    
    
| Sno.  | **Platform**                   | **Precondition**                                  | **Execution Steps**                                                                       | **Expected Result**                                                              |
|-----------|--------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| 1         | Android, IOS                   | A version of whatsapp exists on device            | Update the version of whatsapp to the version to be tested                                | App should be updated without errors                                             |
| 2         | Android, IOS                   | Whatsapp should not exist on device               | Install the version of whatsapp from playstore/ appstore                                  | App should be installed without errors                                           |
| 3         | Android, IOS                   | Whatsapp should be installed on device            | Go to whatsapp settings > Linked devices (IOS) / Linked devices (Android) > Link a device | Scanner should open                                                              |
| 4         | Web (https://web.whatsapp.com) | Whatsapp should be installed on device            | Scan the web QR code through scanner in mobile application                                | Whatsapp should be logged in successfully                                        |
| 5         | Android, IOS, web              | Whatsapp should be installed/ logged in on device | Send a message containing alphabets, numbers and special characters                       | Message should be received same as sent by the sender                            |
| 6         | Android, IOS, web              | Whatsapp should be installed/ logged in on device | Send a media existing in the device                                                       | Media should be sent and received successfully                                   |
| 7         | Android, IOS                   | Whatsapp should be installed/ logged in on device | Make a whatsapp call on a number                                                          | Call should be sent and received normally                                        |
| 8         | Android, IOS                   | Whatsapp should be installed/ logged in on device | Make a whatsapp video call on a number                                                    | Video call should be sent and received normally                                  |
| 9         | Android, IOS, web              | Whatsapp should be installed/ logged in on device | Open a group chat and send a message                                                      | All names/ numbers must appear uniquely and messages should be sent and received |
| 10        | Web                            | Whatsapp should be logged in on device            | Open menu > Log out                                                                       | Whatsapp should be logged out successfully                                       |


# TASK 3 - Linux

1. ssh -i ~/.ssh/my_key free-now-user@10.23.45.78

2. cd /var/log

3. head -20 dpkg.log


# TASK 4 - Automated testing 

Web automation has been implemented as an automation task to verify the search functionality of the WikiSearch using Cypress, Cucumber and Typescript.
Automation has been implemented using the BDD approach and below are the steps that would be executed using Gherkin language:

Feature: Wikipedia search functionality</br>
As a user </br>
I should be able to search </br>
using Wikipedia search</br>

Scenario: Verify search on Wikipedia page </br>
Given I navigate to Wikipedia page</br>
When I search for Apollo 11 on search bar</br>
And I click on search icon</br> 
Then I should see wiki page for Apollo 11</br>

Scenario: Verify special search on Wikipedia page</br>
Given I navigate to Wikipedia special search page</br>
When I search for Apollo 11 on search page</br>
And I click on search button And I click on Apollo 11 page link </br>
Then I should see wiki page for Apollo 11</br>


Outline of automating proposed scenarios on different levels of testing pyramid.
The testing pyramid is a concept that group software into three categories. This helps QA professionals to ensure quality, reduce the time it takes to find root cause of bug, and build more reliable suite.

From top to bottom, the main layer include:
1.	UI/Exploratory tests
2.	Integration tests
3.	Unit tests


UI/ Exploratory tests generally lie at the top layer of the pyramid which are generally are more complex and have more dependencies than unit and integrations tests. Our automation suite has been implemented based on the top layer of the pyramid. Following are the pros and cons list:
Pros: 
1.	Tests from user perspective.
2.	Verifies end to end workflow of the application.
3.	Reduces number of errors found in production.


Cons:
1.	Slow execution time as it performs end to end test on workflows.
2.	Test flakiness as it requires maintenance and trouble shooting if change in workflows.

Technical Document:

Tech Stack, Libraries and Dependencies used:
1. Cypress
2. TypeScript
3. Cucumber
4. Visual studio code
5. Nodejs
6. CircleCi

**Project Specification:**

Cypress has been used for automation as it is widely used open-source end-to-end framework used to automate web application.

Page Object Model design pattern approach has been used for storing objects and maintaining test in separate folder. It is useful in reducing code duplication and improves test case maintenance.

Behaviour Driven Development (BDD) approach has been used to implement the framework that allows expected software behaviors to be specified in a logical language that all stake holders can understand.

<h3>(BONUS)</h3>
CircleCi has been used to run testcases in the continuous integrated platform.CircleCI is a lightweight cloud-based continuous integration and delivery platform that automates build, test and deployment processes.


**Folder structure:** 

cypress/package.json: it is the heart of any node project and contains all the dependencies required for the initial setup.

cypress/integration/SearchWiki.feature: contains the feature and the steps required to automate the scenario to test search functionality on wiki. This is implemented using Cucumber and the language used is gherkin supporting BDD approach that is easily understandable to stakeholders.

cypress/integration/SearchWiki : contains all the stepDefinition files specific to the feature and scenarios mentioned in the above feature file.

cypress/pageObjects: contains all the page objects (page locators) and methods specific to that page.

cypress.json: have all the configuration that is required for the cypress like baseURl
 
HOW TO USE:

1. git clone the repo https://github.com/nishitgupta77/nishit_gupta.git
2. open the terminal and run command: npm install
3. npm run test
