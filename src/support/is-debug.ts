export const isDebug = (): boolean => {
    return !!process.env.DEBUG && process.env.DEBUG === 'true';
};