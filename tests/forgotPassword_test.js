/*
Your mission:

1. go on "/forgot_password" page
2. fill in input with some email
3. click on "Retrieve password"
4. verify form is send

Don't forget to create also Page Object structure in forgotPasswordPage.js and call/use it in test
*/

Feature('Forgot Password');

Scenario('test something', ({ I,ForgotPasswordPage }) => {
    I.amOnPage("/forgot_password");
    I.see(ForgotPasswordPage.text.header);

    ForgotPasswordPage.fill_password();
    ForgotPasswordPage.check_send();

    I.seeInCurrentUrl("/forgot_password");
    I.seeInSource('<h1>Internal Server Error</h1>');

});
