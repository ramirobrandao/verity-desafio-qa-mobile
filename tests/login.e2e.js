import { expect } from '@wdio/globals';
import SignupPage from '../tests/screen/signup.page.js';
const signupPage = new SignupPage();

describe('Login', () => {
    //cenário positivo 
    it.only('Deve efetuar login com sucesso', async () => {
        await LoginPage.loginButton.click();
        await SignupPage.login('ramirobrandao@outlook.com', '12345678');
        await expect(SignupPage.alertTitle).toHaveText('Sucess');
        await expect(SignupPage.alertMessage).toHaveText('You are logged in!');
        await expect(SignupPage.alertOkButton).toBeDisplayed();
    });
    //cenários negativos
    it('Não deve efetuar login com todos os campos em branco', async () => {
        await SignupPage.login()
        await expect(SignupPage.alertMessage).toHaveText('Please enter a valid email address');
        await expect(SignupPage.alertMessage).toHaveText('Please enter at least 8 characters');
        await expect(SignupPage.loginButton).toBeDisplayed();
    });

    it('Não deve efetuar login com campo email em branco', async () => {
        await SignupPage.login('', '12345678');
        await expect(SignupPage.alertMessage).toHaveText('Please enter a valid email address');
        await expect(SignupPage.loginButton).toBeDisplayed();
    });

    it('Não deve efetuar login com campo senha em branco', async () => {
        await SignupPage.login('ramirobrandao@outlook.com', '');
        await expect(SignupPage.alertMessage).toHaveText('Please enter at least 8 characters');
        await expect(SignupPage.loginButton).toBeDisplayed();
    });

    it('Não deve efetuar login com formato inválido de email', async () => {
        await SignupPage.loginButton.click();
        await SignupPage.signup('emailinvalido', '12345678');
        await expect(SignupPage.alertMessage).toHaveText('Please enter a valid email address');
        await expect(SignupPage.loginButton).toBeDisplayed();
    });
    it('Não deve efetuar login com senha menor que 8 caracteres', async () => {
        await SignupPage.loginButton.click();
        await SignupPage.signup('ramirobrandao@outlook.com', '1234');
        await expect(SignupPage.alertMessage).toHaveText('Please enter at least 8 characters');
        await expect(SignupPage.loginButton).toBeDisplayed();
    });

});
