"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCsvFile = void 0;
const fs_1 = require("fs");
const parse = require('csv-parse/lib/sync');
const readCsvFile = (path) => parse((0, fs_1.readFileSync)(path), { columns: true });
exports.readCsvFile = readCsvFile;
//# sourceMappingURL=read-csv-file.js.map