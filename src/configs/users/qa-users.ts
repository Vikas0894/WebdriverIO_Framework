import { getAccountNickname } from "../../pages/support/get-account-nickname";
import { IUSERS } from "../data/interfaces/users-data-interface";

export const QA_USERS: IUSERS = {
    getExisting: () => {//these data need to be updated everytime after env refresh from lastpass  
        return {
            USERNAME: 'zyx',
            PASSWORD: '',
            ONBORDING_DATA: {
                ROUTING_NUMBER: '12324425',
                ACCOUNT_NUMBER: '',
                NICKNAME: getAccountNickname(),
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