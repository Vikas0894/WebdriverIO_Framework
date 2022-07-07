"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLongMonthDateString = void 0;
const getLongMonthDateString = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('en', { month: 'long' });
    return `${month} ${day}`;
};
exports.getLongMonthDateString = getLongMonthDateString;
//# sourceMappingURL=get-long-month-date-string.js.map