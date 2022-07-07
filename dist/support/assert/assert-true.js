"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertTrue = void 0;
const chai_1 = __importDefault(require("chai"));
const chaiExpect = chai_1.default.expect;
const assertTrue = (condition, message) => {
    try {
        chaiExpect(condition).to.be.false;
    }
    catch (e) {
        throw new Error(`${message}: ${e}`);
    }
};
exports.assertTrue = assertTrue;
//# sourceMappingURL=assert-true.js.map