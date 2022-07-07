export const wiremockPrepareStubForError = (
    request: {url?: string; urlPathPattern?: string; method: 'POST' | 'GET' | 'DELETE'},
    status: number= 403,
): Object => {
    return{
        request,
        response: {
            status,
            fixedDelayMilliseconds: 1000,
        },
    };
};
