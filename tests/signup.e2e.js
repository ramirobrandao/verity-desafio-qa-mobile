import { expect } from '@wdio/globals'
import SignupPageClass from '../tests/screen/signup.page.js'
const SignupPage = new SignupPage();

describe('Criação de usuário', () => {
    //cenário positivo 
    it('Deve criar usuário com sucesso', async () => {
        await SignupPage.loginMenu.click();
        await SignupPage.signUpTab.click();
        await SignupPage.signup('ramirobrandao@outlook.com', '12345678');
        await expect(SignupPage.alertTitle).toHaveText('Signed Up!');
        await expect(SignupPage.alertMessage).toHaveText('You successfully signed up!');
        await expect(SignupPage.alertOkButton).toBeDisplayed();
    });
    //cenários negativos
    it('Não deve criar usuário com todos os campos em branco', async () => {
        await SignupPage.loginMenu.click();
        await SignupPage.signUpTab.click();
        await SignupPage.signup()
        await expect(SignupPage.alertMessage).toHaveText('Please enter a valid email address');
        await expect(SignupPage.alertMessage).toHaveText('Please enter at least 8 characters');
        await expect(SignupPage.alertMessage).toHaveText('Please enter the same password');
        await expect(SignupPage.signUpButton).toBeDisplayed();
    });

    it('Não deve criar usuário com email inválido', async () => {
        await SignupPage.loginMenu.click();
        await SignupPage.signUpTab.click();
        await SignupPage.signup('emailinvalido', '12345678');
        await expect(SignupPage.alertMessage).toHaveText('Please enter a valid email address');
        await expect(SignupPage.signUpButton).toBeDisplayed();
    });
    it('Não deve criar usuário com senha menor que 8 caracteres', async () => {
        await SignupPage.loginMenu.click();
        await SignupPage.signUpTab.click();
        await SignupPage.signup('ramirobrandao@outlook.com', '1234');
        await expect(SignupPage.alertMessage).toHaveText('Please enter at least 8 characters');
        await expect(SignupPage.signUpButton).toBeDisplayed();
    });

});
