import { getEnvConfig } from "../enviroments-config";
import config from "./base-conf";
import { WEB_CAPS } from "./caps/caps";
import { CHROMEDRIVER_SERVICE_CONFIG } from "./services/services-config";

exports.config = {
    ...config,
    baseUrl: getEnvConfig().client,
    runner: 'local',
    capabilities: WEB_CAPS.LOCAL,
    services: [CHROMEDRIVER_SERVICE_CONFIG],
};
