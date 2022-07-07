"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmail = void 0;
const get_random_string_1 = require("./get-random-string");
const getEmail = (randomSymbolsNumber) => {
    return `uatomf+${(0, get_random_string_1.getRandomString)('alphanumeric', randomSymbolsNumber)}@gmail.com`;
};
exports.getEmail = getEmail;
//# sourceMappingURL=get-email.js.map