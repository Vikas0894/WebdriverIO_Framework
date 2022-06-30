import { getYearMonthDateString } from "./date/get-year-month-date-string";

export const getDateOfBirth = (): string => {
    const date = new Date();

    date.setFullYear(date.getFullYear() - 22);

    return getYearMonthDateString(date);
};
