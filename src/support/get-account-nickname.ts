import { getRandomString } from "./get-random-string";

export const getAccountNickname = (): string => {
    return `nick${getRandomString('alphanumeric', 5)}`;
};