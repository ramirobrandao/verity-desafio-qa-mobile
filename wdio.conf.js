import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
    runner: 'local',
    port: 4723,

    specs: [
        './tests/**/*.e2e.js'
    ],
    exclude: [],

    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '16', // versão do meu device emulador no android studio 
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'C:\\QAx\\projects\\verity-desafio-qa-mobile\\android.wdio.native.app.v1.0.8.apk',
        'aum:newCommppiandTimeout': 3600,
        'appium:connectHardwareKeyboard': true
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',

    // ====== Allure Reporter ======
    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,   // mostrar steps no Allure
            disableWebdriverScreenshotsReporting: false, // manter screenshots
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // ===== Hooks =====
    onPrepare: function () {
        const envFile = path.join(__dirname, 'allure-results', 'environment.properties');
        fs.writeFileSync(envFile, `Device=Android Emulator\nPlatform=Android\nAppVersion=1.0.8`);
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await driver.takeScreenshot(); // captura screenshot quando falha
        }
    }
};  
