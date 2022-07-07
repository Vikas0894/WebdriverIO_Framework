"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wiremockPrepareStubForError = void 0;
const wiremockPrepareStubForError = (request, status = 403) => {
    return {
        request,
        response: {
            status,
            fixedDelayMilliseconds: 1000,
        },
    };
};
exports.wiremockPrepareStubForError = wiremockPrepareStubForError;
//# sourceMappingURL=wiremock-prepare-stub-for-error.js.map