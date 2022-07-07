"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allureGenerateReport = void 0;
const allure_config_1 = require("../../configs/allure-config");
const allure = require('allure-commandline');
const allureGenerateReport = () => {
    const generation = allure(['generate', allure_config_1.ALLURE_CONFIG.outputDir, '--clean']);
    const reportError = new Error('Could not generate Allure report');
    return new Promise((resolve, reject) => {
        const generationTimeout = setTimeout(() => reject(reportError), 10000);
        generation.on('exit', (exitCode) => {
            clearTimeout(generationTimeout);
            if (exitCode !== 0) {
                return reject(reportError);
            }
            resolve();
        });
    });
};
exports.allureGenerateReport = allureGenerateReport;
//# sourceMappingURL=allure-generate-report.js.map