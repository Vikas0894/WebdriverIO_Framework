import { readFileSync } from 'fs';

const parse = require('csv-parse/lib/sync');

export const readCsvFile = (path: string): Array<any> => parse(readFileSync(path), { columns: true });
