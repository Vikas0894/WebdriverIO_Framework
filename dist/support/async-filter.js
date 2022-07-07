"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncFilter = void 0;
const asyncFilter = async (arr, predicate) => {
    const results = await Promise.all(arr.map(predicate));
    return arr.filter((_v, index) => results[index]);
};
exports.asyncFilter = asyncFilter;
//# sourceMappingURL=async-filter.js.map