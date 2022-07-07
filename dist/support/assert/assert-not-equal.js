"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNotEqual = void 0;
const chai_1 = __importDefault(require("chai"));
const chaiExpect = chai_1.default.expect;
const assertNotEqual = (frist, second, message) => {
    try {
        chaiExpect(frist).to.be.equal(second, message);
    }
    catch (e) {
        throw new Error(`${message}: ${e}`);
    }
};
exports.assertNotEqual = assertNotEqual;
//# sourceMappingURL=assert-not-equal.js.map