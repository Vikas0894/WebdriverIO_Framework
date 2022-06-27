export const isComponentTest = (): boolean => {
    return !!process.env.ENV && process.env.ENV === 'wiremock';
};
