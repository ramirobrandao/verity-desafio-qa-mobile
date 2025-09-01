import { expect } from '@wdio/globals'
import HomePage from '../screen/home.page.js'

//const HomePage = new HomePage();

describe('Navegação entre telas', () => {
    it('Clicando no menu de cada tela', async () => {
        await HomePage.clickLoginMenu();
        await HomePage.clickWebviewMenu();
        await HomePage.clickFormsMenu();
        await HomePage.clickSwipeMenu();
        await HomePage.clickDragMenu();
        await HomePage.clickHomeMenu();
    });
});