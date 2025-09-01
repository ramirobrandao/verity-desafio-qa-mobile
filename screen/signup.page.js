const { swipeUntilElementVisible } = require('../utils/gestures');
import allure from '@wdio/allure-reporter';

export default class SignupPage {
    get loginMenu() { return $('//android.widget.TextView[@text="Login"]') }
    get signUpTab() { return $('//android.widget.TextView[@text="Sign up"]') }
    get emailInput() { return $('~input-email'); }
    get passwordInput() { return $('~input-password'); }
    get repeatPasswordInput() { return $('~input-repeat-password'); }
    get signUpButton() { return $('//android.widget.TextView[@text="SIGN UP"]'); }
    get alertTitle() { return $('android=new UiSelector().resourceId("android:id/alertTitle")'); }
    get alertMessage() { return $('android=new UiSelector().resourceId("android:id/message")'); }
    get alertOkButton() { return $('android=new UiSelector().resourceId("android:id/button1")'); }

    get loginButton() { return $('//android.widget.TextView[@text="LOGIN"]') }


    async signup(email, password) {
        await this.loginMenu.click();
        await this.signUpTab.click();
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.repeatPasswordInput.setValue(password);
        await swipeUntilElementVisible(this.signUpButton);
        await this.signUpButton.click();
    }

    async login(email, password) {
        await this.loginMenu.click();
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async validatTheLogin() {
        allure.addStep('Wait for login message');
        await this.popMessage.waitForDisplayed({ timeout: 5000 });
        const text = await this.popMessage.getText();
        allure.addStep(`Validate login message: ${text}`);
        console.log('Login message:', text);
        await expect(this.popMessage).toHaveText('You are logged in!');
        await takeScreenshotAndAddToReport('Validate login message');
    }
}


