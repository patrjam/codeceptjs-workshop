const { I } = inject();

class KeyPressesPage {

    // your code here
    form = {
        field: "//input[@id='target']"
    }

    results = {
        result: "//p[@id='result']"
    }

    enterString(string) {
        I.waitForElement(this.form.field, 5);
        I.fillField(this.form.field, string);
    }
    
    verifyResult() {
        I.waitForElement(this.results.result);
        I.seeElement(this.results.result);
    }

}

module.exports = new KeyPressesPage();
module.exports.KeyPressesPage = KeyPressesPage;
