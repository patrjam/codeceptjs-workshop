/*
Your mission:

1. go on "/login" page
2. fill in username with correct username
3. fill in password with correct password
4. click on "Login" button
5. verify successful message

Don't forget to create also Page Object structure in loginPage.js and call/use it in test
*/

Feature('User Login');

Scenario('Login Page Test Scenario', ({ I, LoginPage }) => {


    I.amOnPage('/login');
    LoginPage.fillInCredentialsAndLogin('tomsmith', 'SuperSecretPassword!');
    I.see('Secure Area');

});
