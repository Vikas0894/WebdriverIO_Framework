"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCsvFile = void 0;
const fs_1 = require("fs");
const stringify = require('csv-stringify');
const writeCsvFile = (path, data) => {
    stringify(data, {
        header: true,
    }, (err, output) => {
        if (err) {
            throw new Error(`Could not Stringify data. ${err.message}`);
        }
        (0, fs_1.writeFileSync)(path, output);
    });
};
exports.writeCsvFile = writeCsvFile;
//# sourceMappingURL=write-csv-file.js.map