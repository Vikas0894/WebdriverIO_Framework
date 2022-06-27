import { version } from "chai";
import { removeDir } from "../../pages/support/files/remove-dir";
import CustomReporter from "../../pages/support/reports/custom-reporter/custom-reporter";
import { customReporterMergeResults } from "../../pages/support/reports/custom-reporter/custom-reporter-merge-results";
import { CUCUMBER_JSON_REPORTER_CONFIG } from "../cucumber-json-reporter-config";
import { CUSTOM_REPORTER_CONFIG } from "../custom-reporter-config";

const htmlReporter = require('cucumber-html-reporter');
const cucumberjson = require('wdio-cucumberjs-json-reporter').CucumberJsonReporter;

let fristScenario = true;

const config = {
    logLevel: 'error',//[choices: "trace","debug","info","warn","error","silent" ]
    coloredLog: true,
    framework: 'cucumber',
    specs: ['./tests/**/*.feature'],
    reporters: [
        'specs',
        ['cucumber-json', { jsonFolder: CUCUMBER_JSON_REPORTER_CONFIG.OUTPUT_DIR },],
        [CustomReporter, { stdout: true, outputDir: CUSTOM_REPORTER_CONFIG.OUTPUT_DIR }]
    ],
    connectionRetryTimeout: 240000,
    connectionRetryCount: 1,
    cucumberOpts: {
        retry: 1,
        requireModule: ['@babel/register'], //module used for processing required features
        failAmbiguousDefinitions: true,
        require: [./dist/steps/**/*.js],
        strict: true, //Fail if there are any undefined or pending steps
        timeout: 60000,//Timeout for step definition
    },

    onPrepare: function () {
        removeDir(CUSTOM_REPORTER_CONFIG.OUTPUT_DIR);
        removeDir(CUCUMBER_JSON_REPORTER_CONFIG.OUTPUT_DIR);
    },

    before() {
        require('expect-webdriverio').setOptions({ wait: 5000 });
    },

    beforeFeature: function () {
        fristScenario = true;
    },

    beforeScenario: async function () {
        if (driver.isMobile && !fristScenario) {
            await driver.reset();
        }

        //for iOS it's set up in capabilities
        // if (driver.isAndroid) {
        //     await switchToWebView();
        // }
    },

    afterStep: async function (test: any, senario: any, { error }: any) {
        if (error) {
            await cucumberjson.attach(await browser.takeScreenshot(), 'image/png');
        }
    },
    afterScenario: async function () {
        // if (isComponetTest()) {
        //     await wiremockApiService.reset();
        // } else {
        //     resetCurrentUser();
        // }

        // fristScenario = false;
    },

    onComplete: async function (exitCode: any, testConfig: any, capabilities: any) {
        customReporterMergeResults(
            CUSTOM_REPORTER_CONFIG.OUTPUT_DIR,
            CUSTOM_REPORTER_CONFIG.RUNNER_RES_PATTERN,
            capabilities,
        );
        htmlReporter.generate({
            theme: 'hierarchy',
            jsonDir: CUCUMBER_JSON_REPORTER_CONFIG.OUTPUT_DIR,
            output: '${CUCUMBER_JSON_REPORTER_CONFIG.OUTPUT_DIR}/${getOutputFileName(capabilities[0])}.html',
            reportSuiteasScenarios: true,
            scenarioTimestamp: true,
            metadata: {
                Browser: capabilities[0].browserName,
                'Browser version': capabilities[0].browserVersion,
                Platform: capabilities[0].platformName,
                'Platform version': capabilities[0].platformName,
            },
        });
    },
};

export default config;
