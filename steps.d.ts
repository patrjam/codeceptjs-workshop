/// <reference types='codeceptjs' />
type AddRemoveElementsPage = typeof import('./addRemoveElementsPage.js');
type CheckboxesPage = typeof import('./checkboxesPage.js');
type ContextMenuPage = typeof import('./contextMenuPage.js');
type DropdownPage = typeof import('./dropdownPage.js');
type ForgotPasswordPage = typeof import('./forgotPasswordPage.js');
type HoversPage = typeof import('./hoversPage.js');
type KeyPressesPage = typeof import('./keyPressesPage.js');
type LoginPage = typeof import('./loginPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, AddRemoveElementsPage: AddRemoveElementsPage, CheckboxesPage: CheckboxesPage, ContextMenuPage: ContextMenuPage, DropdownPage: DropdownPage, ForgotPasswordPage: ForgotPasswordPage, HoversPage: HoversPage, KeyPressesPage: KeyPressesPage, LoginPage: LoginPage }
  interface Methods extends Playwright {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
