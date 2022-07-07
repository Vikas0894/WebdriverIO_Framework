"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMobileCaps = void 0;
const caps_1 = require("../../configs/wdio/caps/caps");
const ARGUMENTS = {
    IOS_LOCAL: 'iosLocal',
    IOS_SAUCE_SIMULATOR: 'iosSauceSimulator',
    IOS_SAUCE_REAL: 'iosSauceReal',
    ANDROID_LOCAL: 'androidLocal',
    ANDROID_SAUCE_EMULATOR: 'androidSauceEmulator',
    ANDROID_SAUCE_REAL: 'androidSauceReal',
};
const getCapabilitiesArgument = () => {
    let arg;
    const capabilitiesArg = process.argv.find((a) => a.indexOf('caps=') > -1);
    if (capabilitiesArg) {
        const match = capabilitiesArg.match(/caps=(.*)/);
        if (match && match[1]) {
            arg = match[1];
        }
        else {
            throw new Error(`"caps" arg value is not provided`);
        }
    }
    else {
        throw new Error(`"caps" arg is not provided`);
    }
    if (Object.values(ARGUMENTS).indexOf(arg) === -1) {
        throw new Error(`"caps" arg value "${arg}" is not suported`);
    }
    return arg;
};
const getMobileCaps = () => {
    let caps;
    switch (getCapabilitiesArgument()) {
        case ARGUMENTS.IOS_LOCAL:
            caps = caps_1.MOBILE_CAPS.IOS_LOCAL;
            break;
        case ARGUMENTS.IOS_SAUCE_SIMULATOR:
            caps = caps_1.MOBILE_CAPS.IOS_SAUCE_SIMULATOR;
            break;
        case ARGUMENTS.IOS_SAUCE_REAL:
            caps = caps_1.MOBILE_CAPS.IOS_SAUCE_REAL;
            break;
        case ARGUMENTS.ANDROID_LOCAL:
            caps = caps_1.MOBILE_CAPS.ANDROID_LOCAL;
            break;
        case ARGUMENTS.ANDROID_SAUCE_EMULATOR:
            caps = caps_1.MOBILE_CAPS.ANDROID_SAUCE_EMULATOR;
            break;
        case ARGUMENTS.ANDROID_SAUCE_REAL:
            caps = caps_1.MOBILE_CAPS.ANDROID_SAUCE_REAL;
            break;
    }
    return caps;
};
exports.getMobileCaps = getMobileCaps;
//# sourceMappingURL=get-mobile-caps.js.map