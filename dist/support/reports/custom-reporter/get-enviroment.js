"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnviroment = void 0;
const ENVIROMENT = {
    IOS: 'iOS',
    ANDROID: 'Android',
    WEB: 'Web',
};
const getEnviroment = (Capabilities) => {
    const capObj = Capabilities[0];
    let env;
    if (!!capObj.platformName) {
        const platformName = capObj.platformName.toLowerCase();
        if (platformName !== ENVIROMENT.ANDROID.toLowerCase() && platformName !== ENVIROMENT.IOS.toLowerCase()) {
            env = ENVIROMENT.WEB;
        }
        else {
            if (platformName === ENVIROMENT.ANDROID.toLowerCase()) {
                env = ENVIROMENT.ANDROID;
            }
            else {
                env = ENVIROMENT.IOS;
            }
        }
    }
    else {
        env = ENVIROMENT.WEB;
    }
    return env;
};
exports.getEnviroment = getEnviroment;
//# sourceMappingURL=get-enviroment.js.map