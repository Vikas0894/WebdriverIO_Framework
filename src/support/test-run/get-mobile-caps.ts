import { MOBILE_CAPS as CAPS } from "../../configs/wdio/caps/caps";

const ARGUMENTS = {
    IOS_LOCAL: 'iosLocal',
    IOS_SAUCE_SIMULATOR: 'iosSauceSimulator',
    IOS_SAUCE_REAL: 'iosSauceReal',
    ANDROID_LOCAL: 'androidLocal',
    ANDROID_SAUCE_EMULATOR: 'androidSauceEmulator',
    ANDROID_SAUCE_REAL: 'androidSauceReal',
};

const getCapabilitiesArgument = (): string => {
    let arg: string;

    const capabilitiesArg: string | undefined = process.argv.find((a: string) => a.indexOf('caps=') > -1);

    if (capabilitiesArg) {
        const match = capabilitiesArg.match(/caps=(.*)/);

        if (match && match[1]) {
            arg = match[1];
        } else {
            throw new Error(`"caps" arg value is not provided`);
        }
    } else {
        throw new Error(`"caps" arg is not provided`);
    }

    if (Object.values(ARGUMENTS).indexOf(arg) === -1) {
        throw new Error(`"caps" arg value "${arg}" is not suported`);
    }

    return arg;
};

export const getMobileCaps = (): any => {
    let caps: any;

    switch (getCapabilitiesArgument()) {
        case ARGUMENTS.IOS_LOCAL:
            caps = CAPS.IOS_LOCAL;
            break;
        case ARGUMENTS.IOS_SAUCE_SIMULATOR:
            caps = CAPS.IOS_SAUCE_SIMULATOR;
            break;
        case ARGUMENTS.IOS_SAUCE_REAL:
            caps = CAPS.IOS_SAUCE_REAL;
            break;
        case ARGUMENTS.ANDROID_LOCAL:
            caps = CAPS.ANDROID_LOCAL;
            break;
        case ARGUMENTS.ANDROID_SAUCE_EMULATOR:
            caps = CAPS.ANDROID_SAUCE_EMULATOR;
            break;
        case ARGUMENTS.ANDROID_SAUCE_REAL:
            caps = CAPS.ANDROID_SAUCE_REAL;
            break;
    }

    return caps;
};
