"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customReporterMergeResults = void 0;
const write_file_1 = require("../../files/write-file");
const get_enviroment_1 = require("./get-enviroment");
const fs = require('fs');
const path = require('path');
function customReporterMergeResults(dir, filePattern, capabilities) {
    const data = getDataFromFiles(dir, filePattern);
    const results = {
        info: {
            enviroments: [(0, get_enviroment_1.getEnviroment)(capabilities)],
        },
        tests: data,
    };
    (0, write_file_1.writeFile)(path.join(dir, 'merged.json'), JSON.stringify(results));
}
exports.customReporterMergeResults = customReporterMergeResults;
function getDataFromFiles(dir, filePattern) {
    const fileNames = fs.readdirSync(dir).filter((file) => file.match(filePattern));
    let arr = [];
    fileNames.forEach((fileName) => {
        arr = arr.concat(JSON.parse(fs.readFileSync(path.join(dir, fileName))));
    });
    return arr;
}
//# sourceMappingURL=custom-reporter-merge-results.js.map