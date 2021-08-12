const { I } = inject();

class ForgotPasswordPage {

    text={
        header: "Forgot Password"
    }

    field={
        email: "#email"
    }
    button = {
        retrieve_password: "#form_submit"
    }

    fill_password(){
        I.seeElement(this.field.email);
        I.click(this.field.email);
        I.fillField(this.field.email, "aaa@bbb.com");

    }
    check_send(){
        I.click(this.button.retrieve_password);
    }

}

module.exports = new ForgotPasswordPage();
module.exports.ForgotPasswordPage = ForgotPasswordPage;
