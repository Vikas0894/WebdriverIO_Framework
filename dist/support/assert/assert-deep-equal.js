"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDeepEqual = void 0;
const chai_1 = __importDefault(require("chai"));
const chaiExpect = chai_1.default.expect;
const assertDeepEqual = (frist, second, message) => {
    try {
        chaiExpect(frist).to.be.deep.equal(second, message);
    }
    catch (e) {
        throw new Error(`${message}: ${e}`);
    }
};
exports.assertDeepEqual = assertDeepEqual;
//# sourceMappingURL=assert-deep-equal.js.map