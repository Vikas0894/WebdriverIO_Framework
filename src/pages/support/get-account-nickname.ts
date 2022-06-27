export const getAccountNickname = (): string => {
    return `nick${getRandomString('alphanumeric', 5)}`;
};