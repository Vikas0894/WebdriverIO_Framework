"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectToContain = void 0;
const chai_1 = __importDefault(require("chai"));
const chaiExpect = chai_1.default.expect;
const expectToContain = (targetText, comparedText, message) => {
    try {
        chaiExpect(targetText).to.be.contain(comparedText, message);
    }
    catch (e) {
        throw new Error(`${message}: ${e}`);
    }
};
exports.expectToContain = expectToContain;
//# sourceMappingURL=expect-to-contain.js.map