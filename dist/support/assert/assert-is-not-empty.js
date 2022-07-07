"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsNotEmpty = void 0;
const is_empty_1 = require("../is-empty");
const assert_false_1 = require("./assert-false");
const assertIsNotEmpty = (value, msg) => {
    (0, assert_false_1.assertFalse)((0, is_empty_1.isEmpty)(value), msg);
};
exports.assertIsNotEmpty = assertIsNotEmpty;
//# sourceMappingURL=assert-is-not-empty.js.map