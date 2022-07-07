"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUCUMBER_JSON_REPORTER_CONFIG = exports.getOutputFileName = void 0;
const getOutputFileName = (capability) => {
    const tagArg = process.argv.find((a) => a.indexOf('tagExprssion=') > -1);
    if (tagArg) {
        const match = tagArg.match(/.*=(.*)/);
        if (match && match[1]) {
            let name = match[1].replace(/ and /g, '-').replace(/@/g, '');
            if (tagArg.indexOf('@mobile') > -1) {
                name = `${name}-${capability.platformName.toLowerCase()}`;
            }
            return name;
        }
        else {
            throw new Error('Could not get tag from Script');
        }
    }
    else {
        throw new Error('No tag expression in the Script');
    }
};
exports.getOutputFileName = getOutputFileName;
exports.CUCUMBER_JSON_REPORTER_CONFIG = {
    OUTPUT_DIR: 'reports/json',
};
//# sourceMappingURL=cucumber-json-reporter-config.js.map