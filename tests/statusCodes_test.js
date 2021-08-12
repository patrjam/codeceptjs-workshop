/*
Your mission:

1. go on "/status_codes" page
2. click on status 200
3. verify you are on the right page with status

Don't forget to create also Page Object structure in statusCodePage.js and call/use it in test
*/

Feature('Status Codes');

Scenario('test something', ({ I }) => {
    I.amOnPage('/status_codes');
    I.click('200');
    I.see('This page returned a 200 status code.');
});
