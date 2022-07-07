"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearComparedToToday = void 0;
const getYearComparedToToday = (difference) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + difference);
    return date;
};
exports.getYearComparedToToday = getYearComparedToToday;
//# sourceMappingURL=get-year-compared-to-today.js.map