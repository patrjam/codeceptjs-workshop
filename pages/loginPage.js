const { I } = inject();

class LoginPage {


    buttons = {
        submit: locate(this.form).find('button[type=submit]')
    };

    inputs = {
        login: locate(this.form).find('#username'),
        pass: locate(this.form).find('#password')
    };

    form = locate('#login page');


    fillInCredentials(login, pass) {
        I.fillField(this.inputs.login, login);
        I.fillField(this.inputs.pass, pass);
    }


    fillInCredentialsAndLogin(login, pass) {
        this.fillInCredentials(login, pass);
        I.click(this.buttons.submit);
    }
}

module.exports = new LoginPage();
module.exports.LoginPage = LoginPage;
