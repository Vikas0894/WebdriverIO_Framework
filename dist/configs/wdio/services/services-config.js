"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHROMEDRIVER_SERVICE_CONFIG = exports.WIREMOCK_SERVICE_CONFIG = exports.SAUCE_SERVICE_CONFIG = exports.SAUCE_CONFIG = exports.APPIUM_SERVICE_CONFIG = exports.APPIUM_LOCAL_CONFIG = void 0;
const wiremock_config_1 = require("../../wiremock-config");
exports.APPIUM_LOCAL_CONFIG = { host: '0.0.0.0' };
exports.APPIUM_SERVICE_CONFIG = [
    'appium',
    {
        command: 'appium',
        args: {
            port: 4724,
        },
    },
];
exports.SAUCE_CONFIG = { user: process.env.SAUCE_USERNAME, key: process.env.SAUCE_ACCESS_KEY, region: 'us' };
exports.SAUCE_SERVICE_CONFIG = ['sauce', { sauceConnect: true, sauceConnectOpts: { noSslBumpDomains: 'all' } }];
exports.WIREMOCK_SERVICE_CONFIG = ['wiremock', { port: wiremock_config_1.WIREMOCK_CONFIG.PORT }];
exports.CHROMEDRIVER_SERVICE_CONFIG = ['chromedriver', { port: 7676 }];
//# sourceMappingURL=services-config.js.map