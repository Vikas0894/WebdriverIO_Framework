"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
const isEmpty = (value) => {
    if (value === null || value === undefined) {
        return true;
    }
    if (Array.isArray(value) || typeof value === 'string') {
        return value.length === 0;
    }
    return Object.keys(value).length === 0;
};
exports.isEmpty = isEmpty;
//# sourceMappingURL=is-empty.js.map