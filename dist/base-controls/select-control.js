"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectControl = void 0;
const timeouts_config_1 = require("../configs/timeouts-config");
const browser_pause_1 = require("../support/browser/browser-pause");
const element_control_1 = require("./element-control");
class SelectControl extends element_control_1.ElementControl {
    async getWrapper() {
        return $("//div[contains(@class,'popover-content')]");
    }
    async getItemInTheListEl(value) {
        return new element_control_1.ElementControl(await $(`//ion-item[.//ion-label[normalize-space(.)='${value}']]//ion-radio`));
    }
    async selectItem(value) {
        await this.openList();
        const itemEl = await this.getItemInTheListEl(value);
        const message = `'${value}' item is not in the List`;
        try {
            await itemEl.waitForDisplayed(timeouts_config_1.timeouts.small, message);
        }
        catch (e) {
            console.log("Error", e);
            if (e.message.indexOf(message) > -1) {
                await this.selectItem(value);
            }
            else {
                throw new Error(e.message);
            }
        }
        await itemEl.click();
    }
    async openList() {
        await (0, browser_pause_1.browserPause)(timeouts_config_1.timeouts.smallest);
        await this.click();
        await new element_control_1.ElementControl(await this.getWrapper()).waitForDisplayed(timeouts_config_1.timeouts.small, ' List is not visible');
        await (0, browser_pause_1.browserPause)(timeouts_config_1.timeouts.smallest);
    }
}
exports.SelectControl = SelectControl;
//# sourceMappingURL=select-control.js.map