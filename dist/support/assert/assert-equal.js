"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEqual = void 0;
const chai_1 = __importDefault(require("chai"));
const chaiExpect = chai_1.default.expect;
const assertEqual = (frist, second, message) => {
    try {
        chaiExpect(frist).to.be.equal(second, message);
    }
    catch (e) {
        throw new Error(`${message}: ${e}`);
    }
};
exports.assertEqual = assertEqual;
//# sourceMappingURL=assert-equal.js.map