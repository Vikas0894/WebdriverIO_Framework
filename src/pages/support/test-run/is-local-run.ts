export const isLocalRun = (): boolean => {
    return !!process.env.LOCAL_RUN && process.env.LOCAL_RUN === 'true';
};