import { v4 as uuidv4 } from 'uuid';

export const getXTraceId =(): string => {
    return uuidv4();
};
