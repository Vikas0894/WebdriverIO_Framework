"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDebug = void 0;
const isDebug = () => {
    return !!process.env.DEBUG && process.env.DEBUG === 'true';
};
exports.isDebug = isDebug;
//# sourceMappingURL=is-debug.js.map