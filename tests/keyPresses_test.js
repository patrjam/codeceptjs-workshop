/*
Your mission:

1. go on "/key_presses" page
2. fill in input with some key press
3. verify message

Don't forget to create also Page Object structure in keyPressesPage.js and call/use it in test
*/

Feature('Key Presses');

Scenario('test something', ({ I, KeyPressesPage }) => {
    I.amOnPage('/key_presses');
    KeyPressesPage.enterString('blah');
    KeyPressesPage.verifyResult();
    I.wait(5);

});
