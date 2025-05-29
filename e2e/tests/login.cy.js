import loginPage from '../page_object/loginPage';

const testUsers = require('../../fixtures/users.json')

describe('Авторизация', () => {

  beforeEach(() => {
    cy.visit('https://farpost-catalog.kubernetes.bazadev.net'); 
  });

  testUsers.forEach((user) => {

    it(`Проверка авторизации с валидными и невалидными данными`, () => { 

      loginPage.inputCredentials(user.username, user.password);
      loginPage.clickLoginButton();

      if (user.expectedResult === 'success') {
        loginPage.shouldBeSuccessful();
      } else {
        loginPage.shouldShowError();
      }
    });
  });
})