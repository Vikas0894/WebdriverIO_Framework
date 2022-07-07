"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountNickname = void 0;
const get_random_string_1 = require("./get-random-string");
const getAccountNickname = () => {
    return `nick${(0, get_random_string_1.getRandomString)('alphanumeric', 5)}`;
};
exports.getAccountNickname = getAccountNickname;
//# sourceMappingURL=get-account-nickname.js.map