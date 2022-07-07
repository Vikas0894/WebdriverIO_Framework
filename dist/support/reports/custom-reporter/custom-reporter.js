"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter_1 = __importDefault(require("@wdio/reporter"));
const custom_reporter_config_1 = require("../../../configs/custom-reporter-config");
const create_dir_1 = require("../../files/create-dir");
const path_1 = __importDefault(require("path"));
const write_file_1 = require("../../files/write-file");
class CustomReporter extends reporter_1.default {
    res = [];
    testKey = '';
    constructor(options) {
        super(options);
    }
    getTestKey(suiteStats) {
        const match = suiteStats.title.match(/CAR-\d*/);
        if (!match) {
            throw new Error(`Error in scenario: ${suiteStats.title}. Test issue id should be present in scenario title (e.g. [CAR-999] Scenario title)`);
        }
        return match[0];
    }
    getScenarioStatus(suiteStats) {
        return suiteStats.tests.find(test => test.state !== 'passed') ? 'FAILD' : 'PASSED';
    }
    getComment(suiteStats, status) {
        let comment = '';
        if (status === 'PASSED') {
            comment = 'AT - Successful execution';
        }
        else {
            const test = suiteStats.tests.find(t => t.state === 'failed');
            if (test && test.error) {
                comment = `Step: ${test.title}. Error: ${test.error.message}`;
            }
        }
        return comment;
    }
    writeToFile(json, cid) {
        if (!this.options.outputDir) {
            throw new Error(`Cannot write json report: empty or invalid 'outputDir'`);
        }
        try {
            const dir = path_1.default.resolve(this.options.outputDir);
            const filename = custom_reporter_config_1.CUSTOM_REPORTER_CONFIG.RUNNER_RES_PATTERN.replace('*', `${cid}.json`);
            const filepath = path_1.default.join(dir, filename);
            (0, create_dir_1.createDir)(dir);
            (0, write_file_1.writeFile)(filepath, JSON.stringify(json));
        }
        catch (e) {
            throw new Error(`Failed to write json report to[${this.options.outputDir}]. Error: ${e.message}`);
        }
    }
    onSuiteStart(suiteStats) {
        if (suiteStats.type === 'scenario') {
            this.testKey = this.getTestKey(suiteStats);
        }
    }
    onSuiteEnd(suiteStats) {
        if (suiteStats.type === 'scenario') {
            const testKey = this.testKey;
            const status = this.getScenarioStatus(suiteStats);
            const comment = this.getComment(suiteStats, status);
            this.res.push({ testKey, status, comment });
        }
    }
    onRunnerEnd(runnerStats) {
        this.writeToFile(this.res, runnerStats.cid);
    }
}
exports.default = CustomReporter;
//# sourceMappingURL=custom-reporter.js.map