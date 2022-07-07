"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateOfBirth = void 0;
const get_year_month_date_string_1 = require("./date/get-year-month-date-string");
const getDateOfBirth = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 22);
    return (0, get_year_month_date_string_1.getYearMonthDateString)(date);
};
exports.getDateOfBirth = getDateOfBirth;
//# sourceMappingURL=get-date-of-birth.js.map