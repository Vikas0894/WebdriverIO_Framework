"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvVariable = void 0;
const is_component_test_1 = require("./is-component-test");
const is_local_run_1 = require("./is-local-run");
require('dotenv').config();
const getEnvVariable = (envVariable, requiredForTests = 'e2e') => {
    let envVar;
    try {
        envVar = process.env[envVariable];
    }
    catch (error) {
        console.error(error);
    }
    if (envVar && envVar !== '') {
        return envVar;
    }
    else {
        const msg = `Enviroment varable ${envVariable} is not Set up`;
        if (requiredForTests === 'all') {
            throw new Error(msg);
        }
        else if ((0, is_local_run_1.isLocalRun)() && requiredForTests === 'e2e' && !(0, is_component_test_1.isComponentTest)()) {
            throw new Error(msg);
        }
        else if (requiredForTests === 'component' && (0, is_component_test_1.isComponentTest)()) {
            throw new Error(msg);
        }
    }
};
exports.getEnvVariable = getEnvVariable;
//# sourceMappingURL=get-env-variable.js.map