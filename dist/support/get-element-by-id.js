"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElement = exports.getElementById = void 0;
const getElementById = async (Id) => {
    return $(`[id="${Id}"]`);
};
exports.getElementById = getElementById;
const getElement = async (locatorValue) => {
    let locator;
    return locator = $(`[${locatorValue}]`);
};
exports.getElement = getElement;
//# sourceMappingURL=get-element-by-id.js.map