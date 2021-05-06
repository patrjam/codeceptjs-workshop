/*
Your mission:

1. go on "/add_remove_elements/" page
2. click on "Add Element" button
3. verify "Delete" button is here now

Don't forget to create also Page Object structure in addRemoveElementsPage.js and call/use it in test
*/

Feature('Add/Remove Elements');

Scenario('add remove elements', async ({ I, AddRemoveElementsPage }) => {
    I.amOnPage('/add_remove_elements/')
    AddRemoveElementsPage.toggleToAdd()
});

