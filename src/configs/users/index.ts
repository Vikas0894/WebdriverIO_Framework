import { getAccountNickname } from "../../pages/support/get-account-nickname";
import { getDateOfBirth } from "../../pages/support/get-date-of-birth";
import { getEmail } from "../../pages/support/get-email";
import { getRandomString } from "../../pages/support/get-random-string";
import { IUSER, IUSERS, IUSERS_DATA } from "../data/interfaces/users-data-interface"
import { getCurrentEnv } from "../enviroments-config";
import { DEV_USERS } from "./dev-users";
import { QA_USERS } from "./qa-users";
import { UAT_USERS } from "./uat-users";

const USERS: IUSERS_DATA = {
    DEV: { ...DEV_USERS },
    QA: { ...QA_USERS },
    UAT: { ...UAT_USERS },
    WIREMOCK: { ...QA_USERS }, // only 'Existing user is used for component tests
};

export const getUsersConfig = (): IUSERS => USERS[getCurrentEnv().toUpperCase()];

export const getNewUser = (): IUSER => {
    return {
        USERNAME: getEmail(7),
        PASSWORD: '1!Password',
        PAN: '', // should be retrieved and assigned on the fly if needed
        FIRST_NAME: 'John',
        MIDDLE_NAME: 'x',
        LAST_NAME: `Doe${getRandomString('letters', 3)}`,
        DATE_OF_BIRTH: getDateOfBirth(),
        SSN: getRandomString('digits', 9),
        APT: `Apt ${getRandomString('digits', 2)}`,
        STREET: '123 No Way',
        HOME_CITY: 'Evansville',
        HOME_STATE: 'IN',
        ZIP: '46201',
        PHONE_NUMBER: `${getRandomString('digits', 3)}-${getRandomString('digits', 3)}-${getRandomString('digits', 4)}`,
        CARD: {
            PRODUCT_CODE: 'BWY',
            SUB_PRODUCT_CODE: 'USA',
            BILLING_CODE: 'BWYSTD65',
            CREDIT_LIMIT: '2500',
        },
        ONBORDING_DATA: {
            ROUTING_NUMBER: '122105278',
            ACCOUNT_NUMBER: '0000000016', // this api requires to pass 10 digit account no
            ACCOUNT_TYPE: 1,
            NICKNAME: getAccountNickname()
        },
        STATEMENTDELIVERYOPTION: 'E'
    };
};
