"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetCurrentUser = exports.getCurrentUser = exports.setCurrentUser = void 0;
const users_1 = require("../../configs/users");
const is_component_test_1 = require("./is-component-test");
let currentUser = (0, users_1.getUsersConfig)().getExisting();
const setCurrentUser = (user) => {
    if ((0, is_component_test_1.isComponentTest)()) {
        throw new Error('Test data should be managed via wirem ock for component tests');
    }
    currentUser = user;
};
exports.setCurrentUser = setCurrentUser;
const getCurrentUser = () => {
    return currentUser;
};
exports.getCurrentUser = getCurrentUser;
const resetCurrentUser = () => {
    currentUser = (0, users_1.getUsersConfig)().getExisting();
};
exports.resetCurrentUser = resetCurrentUser;
//# sourceMappingURL=current-user.js.map