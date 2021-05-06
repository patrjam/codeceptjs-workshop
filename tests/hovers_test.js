/*
Your mission:

1. go on "/hovers" page
2. move cursor to some image
3. verify text userX is present

Don't forget to create also Page Object structure in hoversPage.js and call/use it in test
*/

Feature('Hovers');

Scenario.only('test something', ({ I , HoversPage}) => {
    I.amOnPage('/hovers');
    I.moveCursorTo(HoversPage.image);
    I.see('name: user1');
});
