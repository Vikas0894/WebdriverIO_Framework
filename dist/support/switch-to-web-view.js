"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchToWebView = void 0;
const timeouts_config_1 = require("../configs/timeouts-config");
const browser_wait_until_1 = require("./browser/browser-wait-until");
const switchToWebView = async () => {
    let context;
    await (0, browser_wait_until_1.browserWaitUntil)(async () => {
        const contexts = await driver.getContexts();
        context = contexts.find(c => c.indexOf('springleaf.omf') > -1);
        return !!context;
    }, timeouts_config_1.timeouts.medium, 'There is no webView context');
    await driver.switchContext(context);
};
exports.switchToWebView = switchToWebView;
//# sourceMappingURL=switch-to-web-view.js.map