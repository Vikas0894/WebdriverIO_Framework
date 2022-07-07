"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertFalse = void 0;
const chai_1 = __importDefault(require("chai"));
const chaiExpect = chai_1.default.expect;
const assertFalse = (condition, message) => {
    try {
        chaiExpect(condition).to.be.false;
    }
    catch (e) {
        throw new Error(`${message}: ${e}`);
    }
};
exports.assertFalse = assertFalse;
//# sourceMappingURL=assert-false.js.map