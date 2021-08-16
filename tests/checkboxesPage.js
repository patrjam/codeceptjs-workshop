
const { I } = inject();

class CheckboxesPage {

    form = locate('#checkboxes')

    checkBoxes = {
      one: locate(this.form).find("input[type=checkbox]:nth-of-type(1)"),
      two: locate(this.form).find("input[type=checkbox]:nth-of-type(2)"),
    };

}

module.exports = new CheckboxesPage();
module.exports.CheckboxesPage = CheckboxesPage;
