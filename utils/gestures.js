// test/utils/gestures.js

/**
 * Faz um swipe de cima para baixo na tela.
 */
async function swipeDown() {
    const { width, height } = await driver.getWindowRect();
    const startX = width / 2;
    const startY = height * 0.3;   // começa mais em cima
    const endY = height * 0.8;     // termina mais embaixo

    await driver.touchPerform([
        { action: 'press', options: { x: startX, y: startY } },
        { action: 'wait', options: { ms: 500 } },
        { action: 'moveTo', options: { x: startX, y: endY } },
        { action: 'release' }
    ]);
}

/**
 * Faz swipe até o elemento ficar visível, de cima para baixo (ou até o limite de tentativas).
 * @param {WebdriverIO.Element} element - elemento alvo
 * @param {number} maxSwipes - número máximo de swipes
 */
async function swipeUntilElementVisibleDown(element, maxSwipes = 5) {
    let isDisplayed = await element.isDisplayed().catch(() => false);
    let swipes = 0;

    while (!isDisplayed && swipes < maxSwipes) {
        await swipeDown();
        isDisplayed = await element.isDisplayed().catch(() => false);
        swipes++;
    }

    if (!isDisplayed) {
        throw new Error(`Elemento ${element.selector} não encontrado após ${maxSwipes} swipes`);
    }
}

module.exports = { swipeDown, swipeUntilElementVisibleDown };