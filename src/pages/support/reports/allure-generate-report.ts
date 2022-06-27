import { ALLURE_CONFIG } from "../../../configs/allure-config";


const allure = require('allure-commandline');

export const allureGenerateReport = (): Promise<void> => {
    const generation = allure(['generate', ALLURE_CONFIG.outputDir, '--clean']);
    const reportError = new Error('Could not generate Allure report');

    return new Promise((resolve, reject) => {
        const generationTimeout = setTimeout(() => reject(reportError), 10000);

        generation.on('exit', (exitCode: any) => {
            clearTimeout(generationTimeout);

            if (exitCode !== 0) {
                return reject(reportError);
            }

            resolve();
        });
    });
};