const { I } = inject();

class LoginPage {

    form = locate('#login');

    inputs = {
        login: locate(this.form).find('#username'),
        pass: locate(this.form).find('#password')
    };

    buttons = {
        submit: locate(this.form).find('button[type=submit]')
    };

    fillInCorrectCredentials(login, pass) {
        I.fillField(this.inputs.login, login);
        I.fillField(this.inputs.pass, pass);
    }

    submitForm() {
        I.click(this.buttons.submit);
    }

    sendFilledForm(login, pass) {
        this.fillInCorrectCredentials(login, pass);
        this.submitForm();
    }

}

module.exports = new LoginPage();
module.exports.LoginPage = LoginPage;
