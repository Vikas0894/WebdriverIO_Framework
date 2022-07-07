"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginpage = void 0;
const button_control_1 = require("../../base-controls/button-control");
const element_control_1 = require("../../base-controls/element-control");
const input_control_1 = require("../../base-controls/input-control");
const timeouts_config_1 = require("../../configs/timeouts-config");
const get_element_by_id_1 = require("../../support/get-element-by-id");
class LoginPage {
    async getEmailText() {
        return new input_control_1.InputControl(await (0, get_element_by_id_1.getElement)('name="username"'));
    }
    async getPasswordText() {
        return new input_control_1.InputControl(await (0, get_element_by_id_1.getElement)('name="pwd"'));
    }
    async getClickLoginBtn() {
        return new button_control_1.ButtonControl(await (0, get_element_by_id_1.getElementById)('loginButton'));
    }
    async getLogoutLink() {
        return new element_control_1.ElementControl(await (0, get_element_by_id_1.getElementById)('logoutLink'));
    }
    async waitForPage() {
        await (await this.getLogoutLink()).waitForDisplayed(timeouts_config_1.timeouts.small, 'Link is not Displayed');
    }
}
exports.loginpage = new LoginPage();
//# sourceMappingURL=demo-step-definition.js.map