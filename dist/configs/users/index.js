"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewUser = exports.getUsersConfig = void 0;
const get_account_nickname_1 = require("../../support/get-account-nickname");
const get_date_of_birth_1 = require("../../support/get-date-of-birth");
const get_email_1 = require("../../support/get-email");
const get_random_string_1 = require("../../support/get-random-string");
const enviroments_config_1 = require("../enviroments-config");
const dev_users_1 = require("./dev-users");
const qa_users_1 = require("./qa-users");
const uat_users_1 = require("./uat-users");
const USERS = {
    DEV: { ...dev_users_1.DEV_USERS },
    QA: { ...qa_users_1.QA_USERS },
    UAT: { ...uat_users_1.UAT_USERS },
    WIREMOCK: { ...qa_users_1.QA_USERS },
};
const getUsersConfig = () => USERS[(0, enviroments_config_1.getCurrentEnv)().toUpperCase()];
exports.getUsersConfig = getUsersConfig;
const getNewUser = () => {
    return {
        USERNAME: (0, get_email_1.getEmail)(7),
        PASSWORD: '1!Password',
        PAN: '',
        FIRST_NAME: 'John',
        MIDDLE_NAME: 'x',
        LAST_NAME: `Doe${(0, get_random_string_1.getRandomString)('letters', 3)}`,
        DATE_OF_BIRTH: (0, get_date_of_birth_1.getDateOfBirth)(),
        SSN: (0, get_random_string_1.getRandomString)('digits', 9),
        APT: `Apt ${(0, get_random_string_1.getRandomString)('digits', 2)}`,
        STREET: '123 No Way',
        HOME_CITY: 'Evansville',
        HOME_STATE: 'IN',
        ZIP: '46201',
        PHONE_NUMBER: `${(0, get_random_string_1.getRandomString)('digits', 3)}-${(0, get_random_string_1.getRandomString)('digits', 3)}-${(0, get_random_string_1.getRandomString)('digits', 4)}`,
        CARD: {
            PRODUCT_CODE: 'BWY',
            SUB_PRODUCT_CODE: 'USA',
            BILLING_CODE: 'BWYSTD65',
            CREDIT_LIMIT: '2500',
        },
        ONBORDING_DATA: {
            ROUTING_NUMBER: '122105278',
            ACCOUNT_NUMBER: '0000000016',
            ACCOUNT_TYPE: 1,
            NICKNAME: (0, get_account_nickname_1.getAccountNickname)()
        },
        STATEMENTDELIVERYOPTION: 'E'
    };
};
exports.getNewUser = getNewUser;
//# sourceMappingURL=index.js.map