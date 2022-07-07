"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncFind = void 0;
const asyncFind = async (arr, predicate) => {
    const results = await Promise.all(arr.map(predicate));
    const index = results.findIndex(result => result);
    if (index === -1) {
        throw new Error('Async find did not find any element');
    }
    return arr[index];
};
exports.asyncFind = asyncFind;
//# sourceMappingURL=async-find.js.map