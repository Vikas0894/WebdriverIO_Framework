"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getXTraceId = void 0;
const uuid_1 = require("uuid");
const getXTraceId = () => {
    return (0, uuid_1.v4)();
};
exports.getXTraceId = getXTraceId;
//# sourceMappingURL=get-x-trace-id.js.map