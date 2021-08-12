/*
Your mission:

1. go on "/context_menu" page
2. verify text "Context Menu" is present
3. verify rectangle element is present

Don't forget to create also Page Object structure in contextMenuPage.js and call/use it in test
*/

Feature('Context Menu');

Scenario('test something', ({ I, ContextMenuPage }) => {
    I.amOnPage('/context_menu');
    I.see("Context Menu");
    I.seeElement(ContextMenuPage.rectangle);
});
