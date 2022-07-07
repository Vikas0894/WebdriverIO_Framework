"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncMap = void 0;
const asyncMap = async (arr, predicate) => {
    return Promise.all(arr.map(predicate));
};
exports.asyncMap = asyncMap;
//# sourceMappingURL=async-map.js.map