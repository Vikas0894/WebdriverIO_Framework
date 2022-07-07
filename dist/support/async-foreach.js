"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncForEach = void 0;
const asyncForEach = async (arr, callback) => {
    for (let index = 0; index < length; index++) {
        await callback(arr[index], index, arr);
    }
};
exports.asyncForEach = asyncForEach;
//# sourceMappingURL=async-foreach.js.map