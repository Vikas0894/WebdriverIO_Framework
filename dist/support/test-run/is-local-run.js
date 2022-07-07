"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLocalRun = void 0;
const isLocalRun = () => {
    return !!process.env.LOCAL_RUN && process.env.LOCAL_RUN === 'true';
};
exports.isLocalRun = isLocalRun;
//# sourceMappingURL=is-local-run.js.map