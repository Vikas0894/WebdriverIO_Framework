"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserSwitchToWindow = void 0;
const browserSwitchToWindow = async (handle) => {
    await browser.switchToWindow(handle);
};
exports.browserSwitchToWindow = browserSwitchToWindow;
//# sourceMappingURL=browser-switch-to-handle.js.map