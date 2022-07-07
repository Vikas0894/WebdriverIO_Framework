"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isComponentTest = void 0;
const isComponentTest = () => {
    return !!process.env.ENV && process.env.ENV === 'wiremock';
};
exports.isComponentTest = isComponentTest;
//# sourceMappingURL=is-component-test.js.map