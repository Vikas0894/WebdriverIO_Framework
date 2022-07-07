"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonControl = void 0;
const timeouts_config_1 = require("../configs/timeouts-config");
const assert_true_1 = require("../support/assert/assert-true");
const browser_wait_until_1 = require("../support/browser/browser-wait-until");
const element_control_1 = require("./element-control");
class ButtonControl extends element_control_1.ElementControl {
    async click(clickOptions) {
        await this.waitForEnabled(timeouts_config_1.timeouts.large, 'Button is not enabled');
        await super.click(clickOptions);
    }
    async isEnabled() {
        return ((!(await this.getAttribute('ng-reflect-disabled')) ||
            (await this.getAttribute('ng-reflect-disabled')) === 'false') &&
            !(await this.getAttribute('disabled')));
    }
    async waitForEnabled(timeout, timeoutMsg) {
        await (0, browser_wait_until_1.browserWaitUntil)(async () => this.isEnabled(), timeout, timeoutMsg);
    }
    async isDisabled() {
        return (await this.getAttribute('ng-reflect-disabled')) == 'true' || !!(await this.getAttribute('disabled'));
    }
    async waitForDisabled(timeout, timeoutMsg) {
        await (0, browser_wait_until_1.browserWaitUntil)(async () => this.isDisabled(), timeout, timeoutMsg);
    }
    async expectedToDisabled(message) {
        (0, assert_true_1.assertTrue)(await this.isDisabled(), message);
    }
}
exports.ButtonControl = ButtonControl;
//# sourceMappingURL=button-control.js.map