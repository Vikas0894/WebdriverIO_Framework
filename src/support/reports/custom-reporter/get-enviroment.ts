import { Capabilities } from "@wdio/types";

const ENVIROMENT = {
    IOS: 'iOS',
    ANDROID: 'Android',
    WEB: 'Web',
};

export const getEnviroment = (Capabilities: any): string => {
    const capObj = Capabilities[0];

    let env: string;

    if(!!capObj.platformName) {
        const platformName = capObj.platformName.toLowerCase();

        if(platformName !== ENVIROMENT.ANDROID.toLowerCase() && platformName !== ENVIROMENT.IOS.toLowerCase()) {
            env = ENVIROMENT.WEB;
        }else{
            if(platformName === ENVIROMENT.ANDROID.toLowerCase()) {
              env = ENVIROMENT.ANDROID;
            }else{
                env = ENVIROMENT.IOS;
            }
        }
    }else {
        env = ENVIROMENT.WEB;
    }

    return env;
}