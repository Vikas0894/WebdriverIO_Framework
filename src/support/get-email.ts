import { getRandomString } from "./get-random-string";

export const getEmail = (randomSymbolsNumber: number): string => {
    return `uatomf+${getRandomString('alphanumeric', randomSymbolsNumber)}@gmail.com`;
};