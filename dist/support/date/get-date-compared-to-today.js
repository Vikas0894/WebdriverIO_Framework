"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateComparedToToday = void 0;
const getDateComparedToToday = (difference) => {
    const date = new Date();
    date.setDate(date.getDate() + difference);
    return date;
};
exports.getDateComparedToToday = getDateComparedToToday;
//# sourceMappingURL=get-date-compared-to-today.js.map