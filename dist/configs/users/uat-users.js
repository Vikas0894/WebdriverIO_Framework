"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UAT_USERS = void 0;
const get_account_nickname_1 = require("../../support/get-account-nickname");
exports.UAT_USERS = {
    getExisting: () => {
        return {
            USERNAME: 'zyx',
            PASSWORD: '',
            ONBORDING_DATA: {
                ROUTING_NUMBER: '12324425',
                ACCOUNT_NUMBER: '',
                NICKNAME: (0, get_account_nickname_1.getAccountNickname)(),
            },
        };
    },
    getNonExisting: () => {
        return {
            USERNAME: 'invalid.test.user1@gmail.com',
            PASSWORD: 'invalidCode1!',
            PAN: '',
        };
    },
};
//# sourceMappingURL=uat-users.js.map