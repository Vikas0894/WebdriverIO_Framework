"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const remove_dir_1 = require("../../support/files/remove-dir");
const custom_reporter_1 = __importDefault(require("../../support/reports/custom-reporter/custom-reporter"));
const custom_reporter_merge_results_1 = require("../../support/reports/custom-reporter/custom-reporter-merge-results");
const cucumber_json_reporter_config_1 = require("../cucumber-json-reporter-config");
const custom_reporter_config_1 = require("../custom-reporter-config");
const htmlReporter = require('cucumber-html-reporter');
const cucumberjson = require('wdio-cucumberjs-json-reporter').CucumberJsonReporter;
let fristScenario = true;
const config = {
    logLevel: 'error',
    coloredLog: true,
    framework: 'cucumber',
    specs: ['./tests/**/*.feature'],
    reporters: [
        'specs',
        ['cucumber-json', { jsonFolder: cucumber_json_reporter_config_1.CUCUMBER_JSON_REPORTER_CONFIG.OUTPUT_DIR },],
        [custom_reporter_1.default, { stdout: true, outputDir: custom_reporter_config_1.CUSTOM_REPORTER_CONFIG.OUTPUT_DIR }]
    ],
    connectionRetryTimeout: 240000,
    connectionRetryCount: 1,
    cucumberOpts: {
        retry: 1,
        requireModule: ['@babel/register'],
        failAmbiguousDefinitions: true,
        require: ['./dist/steps/**/*.js'],
        strict: true,
        timeout: 60000,
    },
    onPrepare: function () {
        (0, remove_dir_1.removeDir)(custom_reporter_config_1.CUSTOM_REPORTER_CONFIG.OUTPUT_DIR);
        (0, remove_dir_1.removeDir)(cucumber_json_reporter_config_1.CUCUMBER_JSON_REPORTER_CONFIG.OUTPUT_DIR);
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
    },
    afterStep: async function (test, senario, { error }) {
        if (error) {
            await cucumberjson.attach(await browser.takeScreenshot(), 'image/png');
        }
    },
    afterScenario: async function () {
    },
    onComplete: async function (exitCode, testConfig, capabilities) {
        (0, custom_reporter_merge_results_1.customReporterMergeResults)(custom_reporter_config_1.CUSTOM_REPORTER_CONFIG.OUTPUT_DIR, custom_reporter_config_1.CUSTOM_REPORTER_CONFIG.RUNNER_RES_PATTERN, capabilities);
        htmlReporter.generate({
            theme: 'hierarchy',
            jsonDir: cucumber_json_reporter_config_1.CUCUMBER_JSON_REPORTER_CONFIG.OUTPUT_DIR,
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
exports.default = config;
//# sourceMappingURL=base-conf.js.map