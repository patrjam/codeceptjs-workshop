/// <reference types='codeceptjs' />
type AddRemoveElementsPage = typeof import('./pages/addRemoveElementsPage.js');
type CheckboxesPage = typeof import('./pages/checkboxesPage.js');
type ContextMenuPage = typeof import('./pages/contextMenuPage.js');
type DropdownPage = typeof import('./pages/dropdownPage.js');
type DynamicLoadingPage = typeof import('./pages/dynamicLoadingPage.js');
type ForgotPasswordPage = typeof import('./pages/forgotPasswordPage.js');
type HoversPage = typeof import('./pages/hoversPage.js');
type KeyPressesPage = typeof import('./pages/keyPressesPage.js');
type LoginPage = typeof import('./pages/loginPage.js');
type StatusCodesPage = typeof import('.pages/statusCodesPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, AddRemoveElementsPage: AddRemoveElementsPage, CheckboxesPage: CheckboxesPage, ContextMenuPage: ContextMenuPage, DropdownPage: DropdownPage, DynamicLoadingPage: DynamicLoadingPage, ForgotPasswordPage: ForgotPasswordPage, HoversPage: HoversPage, KeyPressesPage: KeyPressesPage, LoginPage: LoginPage, StatusCodesPage: StatusCodesPage }
  interface Methods extends Playwright {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
