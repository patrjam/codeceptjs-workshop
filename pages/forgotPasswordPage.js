const { I } = inject();

class ForgotPasswordPage {

inputs = {
    email: '#email'
}

buttons = {
    submitButton: '#form_submit' 
}

fillEmail(email){
    I.fillField(this.inputs.email, email)
}

}

module.exports = new ForgotPasswordPage();
module.exports.ForgotPasswordPage = ForgotPasswordPage;
