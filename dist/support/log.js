"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequest = exports.log = void 0;
const is_component_test_1 = require("./test-run/is-component-test");
const is_debug_1 = require("./is-debug");
const chalk = require('chalk');
const getCommonPart = () => {
    return `\t[${new Date().toJSON}]`;
};
const log = (text) => {
    if ((0, is_debug_1.isDebug)()) {
        console.log(getCommonPart(), text);
    }
};
exports.log = log;
const logRequest = (config, status) => {
    if ((0, is_debug_1.isDebug)() && !(0, is_component_test_1.isComponentTest)()) {
        let endOfMessage;
        switch (status) {
            case 'started':
                endOfMessage: chalk.yellow(status);
                break;
            case 'success':
                endOfMessage: chalk.green(status);
                break;
            case 'failed':
                endOfMessage: chalk.red(status);
                break;
        }
        console.log(chalk.grey(getCommonPart(), `Reqest ${config.method?.toUpperCase()} ${config.url}`), endOfMessage);
    }
};
exports.logRequest = logRequest;
//# sourceMappingURL=log.js.map