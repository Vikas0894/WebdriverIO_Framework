import { getEnvConfig } from "../enviroments-config";
import config from "./base-conf";
import { WEB_CAPS } from "./caps/caps";
import { SAUCE_CONFIG, SAUCE_SERVICE_CONFIG } from "./services/services-config";

exports.config = {
    ...config,
    ...SAUCE_CONFIG,
    baseUrl: getEnvConfig().client,
    capabilities: WEB_CAPS.SAUCE,
    Services: [SAUCE_SERVICE_CONFIG],
};
