"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementControl = void 0;
const timeouts_config_1 = require("../configs/timeouts-config");
const browser_wait_until_1 = require("../support/browser/browser-wait-until");
const assert_equal_1 = require("../support/assert/assert-equal");
class ElementControl {
    el;
    constructor(el) {
        this.el = el;
    }
    async getParentElement() {
        return this.el.$('..');
    }
    async click(clickOptions) {
        await this.scrollIntoView();
        await this.waitForClickable(timeouts_config_1.timeouts.huge, `Element with selector: ${this.el.selector} is not clickable`);
        await this.el.click(clickOptions);
    }
    async doubleClickCustom(clickOptions) {
        await this.scrollIntoView();
        await this.el.click(clickOptions);
        await this.el.click(clickOptions);
    }
    async getText(trim = false) {
        await this.scrollIntoView();
        const text = await this.el.getText();
        return trim ? text.trim() : text;
    }
    async getValue() {
        return this.el.getValue();
    }
    async getAttribute(attributeName) {
        return this.el.getAttribute(attributeName);
    }
    async scrollIntoView() {
        if (!(await this.isDisplayedInViewport())) {
            await this.el.scrollIntoView();
        }
    }
    async scrollIntoViewTop() {
        await this.el.scrollIntoView(true);
    }
    async isDisplayedInViewport() {
        return this.el.isDisplayedInViewport();
    }
    async getLocation() {
        return this.el.getLocation();
    }
    async getCenterLocationRounded() {
        const location = await this.getLocation();
        const size = await this.getSize();
        return {
            x: Math.round(location.x) + Math.round(size.width / 2),
            y: Math.round(location.y) + Math.round(size.width / 2),
        };
    }
    async getSize() {
        return this.el.getSize();
    }
    async dragAndDropMobile(direction, duration = timeouts_config_1.timeouts.smallest) {
        const location = await this.getCenterLocationRounded();
        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'mouse' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: location.x, y: direction.y },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 10 },
                    { type: 'pointerMove', duration: duration, origin: 'pointer', x: location.x, y: direction.y },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
    }
    async clickRelativeCoordinates(coordinates, duration = timeouts_config_1.timeouts.smallest) {
        const location = await this.getCenterLocationRounded();
        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'mouse' },
                actions: [
                    {
                        type: 'pointerMove',
                        duration: 0,
                        x: Math.round(location.x) + coordinates.x,
                        y: Math.round(location.y) + coordinates.y,
                    },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 10 },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
    }
    async isDisplayed() {
        return this.el.isDisplayed();
    }
    async waitForDisplayed(timeout, timeoutMsg) {
        await this.el.waitForDisplayed({ timeout: timeout, timeoutMsg: timeoutMsg });
    }
    async waitForDisplayedInViewPort(timeout, timeoutMsg) {
        await this.el.waitUntil(async () => this.el.isClickable(), { timeout, timeoutMsg });
    }
    async waitForClickable(timeout, timeoutMsg) {
        await (0, browser_wait_until_1.browserWaitUntil)(async () => this.el.isClickable(), timeout, timeoutMsg);
    }
    async waitForNotDisplayed(timeout, timeoutMsg) {
        await this.el.waitForDisplayed({ timeout: timeout, timeoutMsg: timeoutMsg, reverse: true });
    }
    async waitToHaveAnyText(timeout, timeoutMsg) {
        await (0, browser_wait_until_1.browserWaitUntil)(async () => (await this.getText()) !== '', timeout, timeoutMsg);
    }
    async waitToHaveText(text, timeout, timeoutMsg, trim = true) {
        try {
            await (0, browser_wait_until_1.browserWaitUntil)(async () => {
                let currentText = await this.getText();
                if (trim) {
                    currentText = currentText.trim();
                }
                return currentText === text;
            }, timeout, timeoutMsg);
        }
        catch (e) {
            throw new Error(`${e.message}. Expected text: ${text}. Actual text: ${await this.getText()}`);
        }
    }
    async expectToBeDisplayed(errorMsg) {
        await expect(this.el).toBeDisplayed({ message: errorMsg });
    }
    async expectNotToBeDisplayed(errorMsg) {
        await expect(this.el).not.toBeDisplayed({ message: errorMsg });
    }
    async expectNotToBeExist(errorMsg) {
        await expect(this.el).not.toExist({ message: errorMsg });
    }
    async expectToHaveText(text, options) {
        await expect(this.el).toHaveText(text, options);
    }
    async expectToHaveAttribute(attribute, value, options) {
        await expect(this.el).toHaveAttribute(attribute, value, options);
    }
    async expectToHaveClassContaining(className, options) {
        await expect(this.el).toHaveElementClassContaining(className, options);
    }
    async expectedToHaveClassNotContaining(className) {
        (0, assert_equal_1.assertEqual)((await this.getAttribute('class')).indexOf(className), -1, `Class contains ${className}`);
    }
    async expectToBeEnabled(errorMsg) {
        await expect(this.el).toBeEnabled({ message: errorMsg });
    }
    async expectToDisabled(errorMsg) {
        await expect(this.el).toBeDisabled({ message: errorMsg });
    }
    async expectToHaveChildren(numberOptions) {
        await expect(this.el).toHaveChildren(numberOptions);
    }
}
exports.ElementControl = ElementControl;
//# sourceMappingURL=element-control.js.map