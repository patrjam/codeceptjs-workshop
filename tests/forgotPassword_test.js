/*
Your mission:

1. go on "/forgot_password" page
2. fill in input with some email
3. click on "Retrieve password"
4. verify form is send

Don't forget to create also Page Object structure in forgotPasswordPage.js and call/use it in test
*/

Feature('Forgot Password');

Scenario.only('Forgoten password', ({ I , ForgotPasswordPage}) => {
    const appUrl = "/forgot_password"
    const email = "testEmail@dixonscarphone.com"
    I.amOnPage(appUrl)
    ForgotPasswordPage.fillEmail(email)
    I.click(ForgotPasswordPage.buttons.submitButton)
    I.see("Verification email was send.")
});
