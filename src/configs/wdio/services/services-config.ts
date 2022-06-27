import { WIREMOCK_CONFIG } from "../../wiremock-config";

export const APPIUM_LOCAL_CONFIG = { host: '0.0.0.0' };
export const APPIUM_SERVICE_CONFIG = [
    'appium',
    {
        command: 'appium',
        args: {
            port: 4724,
        },
    },
];

export const SAUCE_CONFIG = { user: process.env.SAUCE_USERNAME, key: process.env.SAUCE_ACCESS_KEY, region: 'us' };
export const SAUCE_SERVICE_CONFIG = ['sauce', { sauceConnect: true, sauceConnectOpts: { noSslBumpDomains: 'all' } }];

export const WIREMOCK_SERVICE_CONFIG = ['wiremock', { port: WIREMOCK_CONFIG.PORT }];

export const CHROMEDRIVER_SERVICE_CONFIG = ['chromedriver', { port: 7676 }];
