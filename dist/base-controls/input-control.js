"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputControl = void 0;
const browser_keys_1 = require("../support/browser/browser-keys");
const element_control_1 = require("./element-control");
class InputControl extends element_control_1.ElementControl {
    async setValue(value) {
        await this.scrollIntoView();
        await this.el.setValue(value);
    }
    async clearValue() {
        await this.scrollIntoView();
        while ((await this.getValue()) !== '') {
            await this.el.click();
            for (let i = 0; i <= 10; i++) {
                if (driver.isIOS) {
                    await driver.sendKeys(['\b']);
                }
                else if (driver.isAndroid) {
                    await driver.pressKeyCode(67);
                }
                else {
                    await (0, browser_keys_1.browserKeys)(['Backspace']);
                }
            }
        }
    }
}
exports.InputControl = InputControl;
//# sourceMappingURL=input-control.js.map