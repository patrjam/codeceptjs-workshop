/*
Your mission:

1. go on "/checkboxes" page
2. check "checkbox 1"
3. verify "checkbox 1" is checked

Don't forget to create also Page Object structure in checkboxesPage.js and call/use it in test
*/

Feature('Checkboxes');

xScenario('click on first checkbox and verify', ({ I, CheckboxesPage}) => {

    I.amOnPage('/checkboxes')

    I.checkOption(CheckboxesPage.checkBoxes.one)
    
    I.seeCheckboxIsChecked(CheckboxesPage.checkBoxes.one)


});
