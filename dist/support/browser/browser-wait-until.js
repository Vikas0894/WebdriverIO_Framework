"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserWaitUntil = void 0;
const browserWaitUntil = async (condition, timeout, timeoutMsg) => {
    await browser.waitUntil(condition, { timeout, timeoutMsg });
};
exports.browserWaitUntil = browserWaitUntil;
//# sourceMappingURL=browser-wait-until.js.map