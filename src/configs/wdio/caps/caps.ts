import { join } from "path";
import { getCurrentEnv } from "../../enviroments-config";
import { timeouts } from "../../timeouts-config";

const getSauceAppId = (): string => {
    return process.env.SAUCE_APP_ID as string;
};

let currentEnv = getCurrentEnv();

const getPathOfIOSApp = (): string => {
    let path: string = '';
    switch (currentEnv) {
        case 'dev':
            path = './app/dev/App.app';
            break;
        case 'qa':
            path = './app/qa/App.app'
            break;
    }
    return path;
};

const getPathOfAndroidApp = (): string => {
    let path: string = '';
    switch (currentEnv) {
        case 'dev':
            path = './app/dev/omf-card-test.apk';
            break;
        case 'qa':
            path = './app/qa/omf-card-test.apk'
            break;
    }
    return path;
};

export const MOBILE_CAPS = {
    IOS_LOCAL: [
        {
            maxIntances: 1,
            platformName: 'ios',
            browserName: '',
            'appium:deviceName': 'iPhone 13',
            'appium:plateformVersion': '15.2',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'XCUITest',
            'appium:app': join(process.cwd(), getPathOfIOSApp()),
            'appium:newCommandTimeout': 240,
            'appium:wdaLocalPort': 8101,
            'appium:webviewConnectTimeout': timeouts.large,
            'appium:autoWebview': true,
            'appium:autoAcceptAlert': true,
        },
    ],
    ANDROID_LOCAL: [
        {

            platformName: 'Android',
            maxIntances: 1,
            'appium:deviceName': 'emulator-5554',
            'appium:plateformVersion': '12.0',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(process.cwd(), getPathOfAndroidApp()),
            'appium:newCommandTimeout': 120,
            'appium:chromedriverExecutable': './node_modules/.bin/chromedriver',
            'appium:autoGrantPermission': true,
        },
    ],

    IOS_SAUCE_SIMULATOR: [
        {
            maxIntances: 2,
            browserName: '',
            deviceName: 'iPhone 11 Simulator',
            plateformVersion: '14.3',
            deviceOrientation: 'portrait',
            plateformName: 'iOS',
            app: `storage:${getSauceAppId()}`,
            webviewConnectTimeout: timeouts.large,
            autoWebview: true,
        },
    ],

    IOS_SAUCE_REAL: [
        {
            maxIntances: 1,
            browserName: '',
            deviceName: 'iPhone 11',
            plateformVersion: '11',
            deviceOrientation: 'portrait',
            plateformName: 'iOS',
            app: `storage:${getSauceAppId()}`,
            webviewConnectTimeout: timeouts.large,
            autoWebview: true,
        },
    ],

    ANDROID_SAUCE_EMULATOR: [
        {
            maxIntances: 2,
            browserName: '',
            deviceName: 'Goog;le Pixel 3a XL GoogleAPI Emulator',
            plateformVersion: '11',
            deviceOrientation: 'portrait',
            plateformName: 'Android',
            app: `storage:${getSauceAppId()}`,
        },
    ],

    ANDROID_SAUCE_REAL: [
        {
            maxIntances: 1,
            browserName: '',
            deviceName: 'Samsung_Galaxy_S20_real_us',
            plateformVersion: '11',
            deviceOrientation: 'portrait',
            plateformName: 'Android',
            app: `storage:${getSauceAppId()}`,
        },
    ],
};

export const WEB_CAPS = {
    LOCAL: [
        {
        maxInstances: 1,
        browserName: 'chrome',
        },
    ],
    SAUCE: [
        {
        maxInstances: 2,
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'window 10'
        },
    ],
};
