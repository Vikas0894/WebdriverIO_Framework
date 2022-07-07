"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomString = void 0;
const CHAR_FOR_RANDOM_STRING = {
    DIGITS: '0123456789',
    NON_DIGITS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()',
    LATTERS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    LATTERS_LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
    ALPHANUMERIC: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
};
function getRandomString(charsType, length) {
    let result = '';
    let characters;
    switch (charsType) {
        case 'digits':
            characters = CHAR_FOR_RANDOM_STRING.DIGITS;
            break;
        case 'non-digits':
            characters = CHAR_FOR_RANDOM_STRING.NON_DIGITS;
            break;
        case 'letters':
            characters = CHAR_FOR_RANDOM_STRING.LETTERS;
            break;
        case 'letters-lowercase':
            characters = CHAR_FOR_RANDOM_STRING.LETTERS_LOWERCASE;
            break;
        case 'alphanumeric':
            characters = CHAR_FOR_RANDOM_STRING.ALPHANUMERIC;
            break;
    }
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.getRandomString = getRandomString;
//# sourceMappingURL=get-random-string.js.map