import { IUSER } from "../../configs/data/interfaces/users-data-interface";
import { getUsersConfig } from "../../configs/users";
import { isComponentTest } from "./is-component-test";


let currentUser: IUSER = getUsersConfig().getExisting();

export const setCurrentUser = (user: IUSER): void => {
    if(isComponentTest()) {
        throw new Error ('Test data should be managed via wirem ock for component tests');
    }

    currentUser = user;
};

export const getCurrentUser = (): IUSER => {
    return currentUser;
};

export const resetCurrentUser = (): void => {
    currentUser = getUsersConfig().getExisting();
};
