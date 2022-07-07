"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearMonthDateString = void 0;
const getYearMonthDateString = (date) => {
    return date.toJSON().slice(0, 10);
};
exports.getYearMonthDateString = getYearMonthDateString;
//# sourceMappingURL=get-year-month-date-string.js.map